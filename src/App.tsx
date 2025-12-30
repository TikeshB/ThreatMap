import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Compliance from "./pages/Compliance";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThreatMapPage from "./pages/ThreatMap";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";
import GRCService from "./pages/services/GRCService";
import TPRMService from "./pages/services/TPRMService";
import BCMSService from "./pages/services/BCMSService";
import ApplicationSecurityService from "./pages/services/ApplicationSecurityService";
import CloudSecurityService from "./pages/services/CloudSecurityService";
import MobileAppSecurityService from "./pages/services/MobileAppSecurityService";
import TrainingAwarenessService from "./pages/services/TrainingAwarenessService";
import InfrastructureSecurityService from "./pages/services/InfrastructureSecurityService";
import VCISOService from "./pages/services/VCISOService";
import ResourceAsServiceService from "./pages/services/ResourceAsServiceService";
import DPDPService from "./pages/services/DPDPService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/governance-risk-compliance" element={<GRCService />} />
          <Route path="/services/third-party-risk-management" element={<TPRMService />} />
          <Route path="/services/business-continuity-management" element={<BCMSService />} />
          <Route path="/services/application-security" element={<ApplicationSecurityService />} />
          <Route path="/services/cloud-security" element={<CloudSecurityService />} />
          <Route path="/services/mobile-app-security" element={<MobileAppSecurityService />} />
          <Route path="/services/training-awareness" element={<TrainingAwarenessService />} />
          <Route path="/services/infrastructure-security" element={<InfrastructureSecurityService />} />
          <Route path="/services/vciso" element={<VCISOService />} />
          <Route path="/services/resource-as-service" element={<ResourceAsServiceService />} />
          <Route path="/services/dpdp" element={<DPDPService />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<Solutions />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/threat-map" element={<ThreatMapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
