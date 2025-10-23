import { Eye, Download, Quote } from "lucide-react";
import { Metrics } from "@/types/scholarly";

interface MetricsRowProps {
  metrics: Metrics;
  className?: string;
}

const MetricsRow = ({ metrics, className }: MetricsRowProps) => {
  return (
    <div className={`flex items-center gap-4 text-sm text-muted-foreground ${className}`}>
      <div className="flex items-center gap-1.5">
        <Eye className="h-4 w-4" />
        <span>{metrics.views.toLocaleString()} views</span>
      </div>
      
      <div className="flex items-center gap-1.5">
        <Download className="h-4 w-4 text-gold" />
        <span>{metrics.downloads.toLocaleString()} downloads</span>
      </div>
      
      {metrics.citations !== undefined && metrics.citations > 0 && (
        <div className="flex items-center gap-1.5">
          <Quote className="h-4 w-4" />
          <span>{metrics.citations} citations</span>
        </div>
      )}
    </div>
  );
};

export default MetricsRow;
