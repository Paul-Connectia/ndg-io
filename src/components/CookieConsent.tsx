import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Cookie, Settings } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showManager, setShowManager] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      loadAnalytics();
    }
  }, []);

  useEffect(() => {
    const handleManageCookies = () => {
      setShowManager(true);
    };

    window.addEventListener('manage-cookies', handleManageCookies);
    
    return () => {
      window.removeEventListener('manage-cookies', handleManageCookies);
    };
  }, []);

  const loadAnalytics = () => {
    const GA_ID = import.meta.env.VITE_GA_ID;
    const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

    if (!GA_ID || !META_PIXEL_ID) {
      console.warn('Analytics IDs not configured. Please set VITE_GA_ID and VITE_META_PIXEL_ID in .env');
      return;
    }

    // GA4
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    document.head.appendChild(script2);

    // Meta Pixel
    const script3 = document.createElement('script');
    script3.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${META_PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script3);
  };

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    loadAnalytics();
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  const openManager = () => {
    setShowManager(true);
  };

  const ManageCookies = () => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Manage Cookies
          </h3>
          <Button variant="ghost" size="sm" onClick={() => setShowManager(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Essential Cookies</h4>
            <p className="text-sm text-muted-foreground">
              Required for the website to function properly. Cannot be disabled.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Analytics Cookies</h4>
            <p className="text-sm text-muted-foreground">
              Help us understand how visitors interact with our website.
            </p>
          </div>
          <div className="flex gap-2 pt-4">
            <Button onClick={acceptCookies} className="flex-1">
              Accept All
            </Button>
            <Button variant="outline" onClick={declineCookies} className="flex-1">
              Essential Only
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );

  if (showManager) {
    return <ManageCookies />;
  }

  if (!showBanner) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={openManager}
        className="fixed bottom-4 right-4 z-40"
        aria-label="Manage cookies"
      >
        <Cookie className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your experience, analyse site traffic, and for marketing purposes. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" onClick={openManager}>
              Manage
            </Button>
            <Button variant="outline" size="sm" onClick={declineCookies}>
              Decline
            </Button>
            <Button size="sm" onClick={acceptCookies}>
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;