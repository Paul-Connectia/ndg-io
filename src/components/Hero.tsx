import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: {
    text: string;
    href: string;
    external?: boolean;
  };
  secondaryCTA?: {
    text: string;
    href: string;
    external?: boolean;
  };
  image?: string;
  variant?: "default" | "gradient";
}

const Hero = ({ 
  title, 
  subtitle, 
  primaryCTA, 
  secondaryCTA, 
  image,
  variant = "default" 
}: HeroProps) => {
  const navigate = useNavigate();
  
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCTA = (cta: { text: string; href: string; external?: boolean }) => {
    if (cta.href.startsWith('#')) {
      if (cta.href === '#products') {
        scrollToProducts();
      }
    } else if (cta.external) {
      window.open(cta.href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(cta.href);
    }
  };

  return (
    <section className={`py-20 lg:py-32 ${variant === 'gradient' ? 'bg-gradient-hero text-white' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCTA && (
                <Button 
                  size="lg" 
                  onClick={() => handleCTA(primaryCTA)}
                  className="group"
                >
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
              {secondaryCTA && (
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => handleCTA(secondaryCTA)}
                  className={variant === 'gradient' ? 'border-white/20 text-white hover:bg-white/10' : ''}
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          </div>
          {image && (
            <div className="relative">
              <img 
                src={image} 
                alt="Hero illustration" 
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;