import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
  href: string;
  external?: boolean;
  ctaText?: string;
}

const ProductCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  href, 
  external = false,
  ctaText = "Learn More" 
}: ProductCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  return (
    <Card className="h-full shadow-card hover:shadow-hover transition-all duration-300 group cursor-pointer border-0 bg-gradient-card">
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-xl bg-primary text-primary-foreground shadow-lg group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        {features && (
          <div className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-teal rounded-full" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        )}
        <Button 
          variant="outline" 
          onClick={handleClick}
          className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
        >
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;