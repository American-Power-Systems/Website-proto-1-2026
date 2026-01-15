import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Option1 from "@/pages/Option1";
import Products from "@/pages/Products";
import Services from "@/pages/Services";
import Locations from "@/pages/Locations";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Option1} />
      <Route path="/products" component={Products} />
      <Route path="/services" component={Services} />
      <Route path="/locations" component={Locations} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}
