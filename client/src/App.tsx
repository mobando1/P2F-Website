import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

const Landing = lazy(() => import("@/pages/landing"));
const SpanishSite = lazy(() => import("@/pages/spanish-site"));
const EnglishSite = lazy(() => import("@/pages/english-site"));
const Pricing = lazy(() => import("@/pages/pricing"));
const Children = lazy(() => import("@/pages/children"));
const Business = lazy(() => import("@/pages/business"));
const Adults = lazy(() => import("@/pages/adults"));
const Team = lazy(() => import("@/pages/team"));
const BlogMain = lazy(() => import("@/pages/blog-main"));
const BlogPost = lazy(() => import("@/pages/blog-post"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-passport-blue" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/es" component={SpanishSite} />
        <Route path="/en" component={EnglishSite} />

        {/* Spanish site pages (English speakers learning Spanish) */}
        <Route path="/es/pricing" component={() => <Pricing language="en" />} />
        <Route path="/es/children" component={() => <Children language="en" />} />
        <Route path="/es/adults" component={() => <Adults language="en" />} />
        <Route path="/es/business" component={() => <Business language="en" />} />
        <Route path="/es/team" component={() => <Team language="en" />} />
        <Route path="/es/blog" component={BlogMain} />
        <Route path="/es/blog/:id" component={BlogPost} />

        {/* English site pages (Spanish speakers learning English) */}
        <Route path="/en/pricing" component={() => <Pricing language="es" />} />
        <Route path="/en/children" component={() => <Children language="es" />} />
        <Route path="/en/adults" component={() => <Adults language="es" />} />
        <Route path="/en/business" component={() => <Business language="es" />} />
        <Route path="/en/team" component={() => <Team language="es" />} />
        <Route path="/en/blog" component={BlogMain} />
        <Route path="/en/blog/:id" component={BlogPost} />

        {/* Keep general blog routes for direct access */}
        <Route path="/blog" component={BlogMain} />
        <Route path="/blog/:id" component={BlogPost} />

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
