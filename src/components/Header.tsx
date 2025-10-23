import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Articles", href: "/articles" },
    { name: "Reviews", href: "/reviews" },
    { name: "Policy Papers", href: "/white-papers" },
    { name: "Protocols", href: "/protocols" },
    { name: "Conference", href: "/conference-papers" },
    { name: "Data+Code", href: "/datasets" },
  ];

  return (
    <header className="border-b border-border border-t-4 border-t-gold bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg">
            <div className="text-2xl font-bold text-primary">NextDoc Labs</div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1 ${
                  location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:flex items-center">
              <Button 
                variant="outline" 
                size="sm" 
                disabled 
                className="cursor-not-allowed opacity-50"
                title="Coming Q2 2025"
              >
                Submit Manuscript
              </Button>
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                SOON
              </span>
            </div>
            <Button size="sm" className="bg-nx-cyan hover:bg-nx-cyan/90 text-white min-h-[44px]" asChild>
              <Link to="/collaborate">Join Early Access</Link>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden min-w-[44px] min-h-[44px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background/95 backdrop-blur">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-3 px-4 text-sm font-semibold transition-colors duration-200 hover:text-primary hover:bg-muted rounded-lg min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                      ? "text-primary bg-muted"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;