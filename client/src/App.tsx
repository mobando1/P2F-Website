import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import SpanishSite from "@/pages/spanish-site";
import EnglishSite from "@/pages/english-site";
import Pricing from "@/pages/pricing";
import Children from "@/pages/children";
import Business from "@/pages/business";
import Adults from "@/pages/adults";
import Team from "@/pages/team";
import Blog from "@/pages/blog";
import BlogMain from "@/pages/blog-main";
import BlogPost from "@/pages/blog-post";

function Router() {
  return (
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
      <Route path="/es/blog" component={() => <Blog language="en" />} />
      
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
