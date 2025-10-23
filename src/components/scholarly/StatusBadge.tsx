import { Badge } from "@/components/ui/badge";
import { PeerStatus } from "@/types/scholarly";
import { CheckCircle2, Clock, FileText } from "lucide-react";

interface StatusBadgeProps {
  status: PeerStatus;
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const variants = {
    'preprint': {
      icon: FileText,
      label: 'Preprint',
      className: 'bg-slate-200 text-slate-900 border-slate-400 font-semibold'
    },
    'under-review': {
      icon: Clock,
      label: 'Under Review',
      className: 'bg-amber-100 text-amber-900 border-amber-400 font-semibold'
    },
    'peer-reviewed': {
      icon: CheckCircle2,
      label: 'Peer Reviewed',
      className: 'bg-emerald-100 text-emerald-900 border-emerald-500 font-semibold'
    }
  };

  const config = variants[status];
  const Icon = config.icon;

  return (
    <Badge variant="outline" className={`${config.className} ${className} flex items-center gap-1`}>
      <Icon className="h-3 w-3" />
      {config.label}
    </Badge>
  );
};

export default StatusBadge;
