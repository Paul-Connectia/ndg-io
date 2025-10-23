import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CTAButton {
  text: string;
  href: string;
  variant?: "default" | "outline" | "secondary" | "hero" | "medical" | "demo" | "cyan";
  external?: boolean;
}

interface CTARowProps {
  buttons: CTAButton[];
}

const CTARow = ({ buttons }: CTARowProps) => {
  const navigate = useNavigate();
  
  const handleClick = (button: CTAButton) => {
    if (button.external) {
      window.open(button.href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(button.href);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant={button.variant || "default"}
          size="lg"
          onClick={() => handleClick(button)}
        >
          {button.text}
        </Button>
      ))}
    </div>
  );
};

export default CTARow;