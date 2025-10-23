import { StrictMode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LabsHome />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/smartqbank" element={<SmartQBank />} />
              <Route path="/products/masterypacks" element={<MasteryPacks />} />
              <Route path="/products/tutorai" element={<TutorAI />} />
              <Route path="/products/casesim" element={<CaseSim />} />
              <Route path="/research" element={<Research />} />
              <Route path="/innovations" element={<Innovations />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/collaborate" element={<Collaborate />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/security" element={<Security />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/white-papers" element={<WhitePapersPage />} />
              <Route path="/protocols" element={<ProtocolsPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/policy" element={<PolicyPage />} />
              <Route path="/datasets" element={<DatasetsPage />} />
              <Route path="/conference-papers" element={<ConferencePapersPage />} />
              <Route path="/policies" element={<PoliciesHub />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
