import { Badge } from "@/components/ui/badge";
import { ExternalLink, Lock, Database } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface MetaPillsProps {
  doi?: string;
  openAccess?: boolean;
  openData?: boolean;
  orcids?: string[];
  className?: string;
}

const MetaPills = ({ doi, openAccess, openData, orcids, className }: MetaPillsProps) => {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {doi && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={`https://doi.org/${doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Badge className="bg-nx-cyan text-white hover:bg-nx-cyan/90 transition-colors">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  DOI
                </Badge>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">{doi}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      
      {openAccess && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge variant="outline" className="border-nx-emerald/40 text-nx-emerald bg-nx-emerald/5">
                <Lock className="h-3 w-3 mr-1" />
                Open Access
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Freely available to all</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      
      {openData && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge variant="outline" className="border-nx-teal/40 text-nx-teal bg-nx-teal/5">
                <Database className="h-3 w-3 mr-1" />
                Open Data
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Data & code publicly available</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

export default MetaPills;
