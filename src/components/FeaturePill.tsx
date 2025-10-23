import { ReactNode } from "react";

interface FeaturePillProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeaturePill = ({ icon, title, description }: FeaturePillProps) => {
  return (
    <div className="text-center group">
      <div className="mb-4 flex justify-center">
        <div className="p-4 rounded-2xl bg-gradient-teal shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
          {icon}
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm">
        {description}
      </p>
    </div>
  );
};

export default FeaturePill;