// Server-to-server bridge that forwards captured leads from the marketing website
// into the P2F Portal CRM (https://portal.passport2fluency.com). Kept on the server
// so the shared secret is never exposed to the browser and CORS is avoided.

const PORTAL_API_URL = process.env.PORTAL_API_URL;
const PORTAL_API_KEY = process.env.PORTAL_API_KEY;

function portalBase(): string | null {
  if (!PORTAL_API_URL || !PORTAL_API_KEY) return null;
  return PORTAL_API_URL.replace(/\/$/, "");
}

export interface PortalProxyResult {
  ok: boolean;
  status: number;
  body: any;
}

/** Proxies a GET to the Portal's public API (server-to-server, keeps the secret off the browser). */
export async function portalGet(path: string, query: Record<string, any>): Promise<PortalProxyResult> {
  const base = portalBase();
  if (!base) return { ok: false, status: 503, body: { success: false, message: "Portal not configured" } };
  const url = new URL(`${base}${path}`);
  for (const [k, v] of Object.entries(query)) {
    if (v !== undefined && v !== null && v !== "") url.searchParams.set(k, String(v));
  }
  try {
    const res = await fetch(url, { headers: { "x-api-key": PORTAL_API_KEY! } });
    const body = await res.json().catch(() => null);
    return { ok: res.ok, status: res.status, body };
  } catch (err) {
    console.error(`[portal] GET ${path} error:`, err);
    return { ok: false, status: 502, body: { success: false, message: "Portal unreachable" } };
  }
}

/** Proxies a POST to the Portal's public API. */
export async function portalPost(path: string, payload: any): Promise<PortalProxyResult> {
  const base = portalBase();
  if (!base) return { ok: false, status: 503, body: { success: false, message: "Portal not configured" } };
  try {
    const res = await fetch(`${base}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": PORTAL_API_KEY! },
      body: JSON.stringify(payload),
    });
    const body = await res.json().catch(() => null);
    return { ok: res.ok, status: res.status, body };
  } catch (err) {
    console.error(`[portal] POST ${path} error:`, err);
    return { ok: false, status: 502, body: { success: false, message: "Portal unreachable" } };
  }
}

export interface LeadPayload {
  name?: string;
  email: string;
  phone?: string;
  language?: "english" | "spanish";
  studentType?: "adult" | "child";
  classType?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  /** Qualification answers from the booking form. Shape owned by content/intake.ts. */
  intake?: Record<string, unknown>;
  source: string;
}

/**
 * Forwards a lead to the Portal CRM. Returns true on success.
 * Never throws — callers should treat a false return as "stored locally only".
 */
export async function forwardLeadToPortal(lead: LeadPayload): Promise<boolean> {
  if (!PORTAL_API_URL || !PORTAL_API_KEY) {
    console.warn(
      "[portal] PORTAL_API_URL/PORTAL_API_KEY not configured — lead NOT forwarded to CRM",
      { email: lead.email, source: lead.source }
    );
    return false;
  }

  try {
    const res = await fetch(`${PORTAL_API_URL.replace(/\/$/, "")}/api/public/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": PORTAL_API_KEY,
      },
      body: JSON.stringify(lead),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(`[portal] Lead forward failed (${res.status}): ${text}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[portal] Lead forward error:", err);
    return false;
  }
}
