import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Option1 from "@/pages/Option1";
import Option2 from "@/pages/Option2";
import Option3 from "@/pages/Option3";
import Option4 from "@/pages/Option4";
import Option5 from "@/pages/Option5";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Services from "@/pages/Services";
import Locations from "@/pages/Locations";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/option-1" component={Option1} />
      <Route path="/option-2" component={Option2} />
      <Route path="/option-3" component={Option3} />
      <Route path="/option-4" component={Option4} />
      <Route path="/option-5" component={Option5} />
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
