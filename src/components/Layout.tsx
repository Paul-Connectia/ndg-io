import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import SEO from "@/components/SEO";
import { ScrollRestoration } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
}

const Layout = ({ children, title, description, canonical }: LayoutProps) => {
  return (
    <>
      <SEO title={title} description={description} canonical={canonical} />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollRestoration />
        <CookieConsent />
      </div>
    </>
  );
};

export default Layout;