import { StrictMode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import LabsHome from "./pages/LabsHome";
import Products from "./pages/Products";
import SmartQBank from "./pages/SmartQBank";
import MasteryPacks from "./pages/MasteryPacks";
import TutorAI from "./pages/TutorAI";
import CaseSim from "./pages/CaseSim";
import Research from "./pages/Research";
import Innovations from "./pages/Innovations";
import Publications from "./pages/Publications";
import Collaborate from "./pages/Collaborate";
import Cases from "./pages/Cases";
import Docs from "./pages/Docs";
import Security from "./pages/Security";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ArticlesPage from "./pages/ArticlesPage";
import WhitePapersPage from "./pages/WhitePapersPage";
import ProtocolsPage from "./pages/ProtocolsPage";
import ReviewsPage from "./pages/ReviewsPage";
import PolicyPage from "./pages/PolicyPage";
import DatasetsPage from "./pages/DatasetsPage";
import PoliciesHub from "./pages/PoliciesHub";
import ConferencePapersPage from "./pages/ConferencePapersPage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

// Create QueryClient instance outside component to prevent recreation on re-renders
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const router = createBrowserRouter([
  { path: "/", index: true, element: <LabsHome /> },
  { path: "/products", element: <Products /> },
  { path: "/products/smartqbank", element: <SmartQBank /> },
  { path: "/products/masterypacks", element: <MasteryPacks /> },
  { path: "/products/tutorai", element: <TutorAI /> },
  { path: "/products/casesim", element: <CaseSim /> },
  { path: "/research", element: <Research /> },
  { path: "/innovations", element: <Innovations /> },
  { path: "/publications", element: <Publications /> },
  { path: "/collaborate", element: <Collaborate /> },
  { path: "/cases", element: <Cases /> },
  { path: "/docs", element: <Docs /> },
  { path: "/security", element: <Security /> },
  { path: "/contact", element: <Contact /> },
  { path: "/articles", element: <ArticlesPage /> },
  { path: "/white-papers", element: <WhitePapersPage /> },
  { path: "/protocols", element: <ProtocolsPage /> },
  { path: "/reviews", element: <ReviewsPage /> },
  { path: "/policy", element: <PolicyPage /> },
  { path: "/datasets", element: <DatasetsPage /> },
  { path: "/conference-papers", element: <ConferencePapersPage /> },
  { path: "/policies", element: <PoliciesHub /> },
  { path: "/terms", element: <Terms /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "*", element: <NotFound /> },
]);

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <RouterProvider router={router} />
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
