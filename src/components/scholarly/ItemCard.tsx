import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Item } from "@/types/scholarly";
import { Download, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";
import MetaPills from "./MetaPills";
import MetricsRow from "./MetricsRow";
import CiteDialog from "./CiteDialog";

interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const typeLabels: Record<string, string> = {
    'research-article': 'Research Article',
    'systematic-review': 'Systematic Review',
    'white-paper': 'White Paper',
    'protocol': 'Protocol',
    'conference-paper': 'Conference Paper',
    'dataset': 'Dataset'
  };

  const getItemUrl = () => {
    switch (item.type) {
      case 'research-article':
        return `/articles/${item.slug}`;
      case 'systematic-review':
        return `/reviews/${item.slug}`;
      case 'white-paper':
        return `/white-papers/${item.slug}`;
      case 'protocol':
        return `/protocols/${item.slug}`;
      case 'conference-paper':
        return `/conference-papers/${item.slug}`;
      case 'dataset':
        return `/datasets/${item.slug}`;
      default:
        return `/${item.slug}`;
    }
  };

  return (
    <Card className="h-full hover:shadow-xl transition-all duration-200">
      <CardContent className="p-8">
        {/* Top row: Type chip + Status badge + Downloads */}
        <div className="flex items-start justify-between mb-4 gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className="bg-nx-teal text-white font-semibold">
              {typeLabels[item.type]}
            </Badge>
            <StatusBadge status={item.peerStatus} />
          </div>
        </div>

        {/* Title */}
        <Link to={getItemUrl()}>
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 leading-tight hover:text-cyan transition-colors duration-200 line-clamp-2">
            {item.title}
          </h3>
        </Link>

        {/* Authors */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Users className="h-4 w-4 flex-shrink-0" />
          <span className="line-clamp-1">
            {item.authors.slice(0, 2).map(a => a.name).join(', ')}
            {item.authors.length > 2 && ` +${item.authors.length - 2} more`}
          </span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4" />
          <span>{new Date(item.publishedAt).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>

        {/* Meta pills (DOI, Open Access, Open Data) */}
        <MetaPills
          doi={item.doi}
          openAccess={item.openAccess}
          openData={item.openData}
          className="mb-4"
        />

        {/* Abstract */}
        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 text-sm">
          {item.abstract}
        </p>

        {/* Metrics */}
        <MetricsRow metrics={item.metrics} className="mb-4 pb-4 border-b" />

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="default" className="flex-1 min-h-[44px]" size="sm" asChild>
            <Link to={getItemUrl()}>
              <Download className="mr-2 h-4 w-4" />
              View
            </Link>
          </Button>
          <CiteDialog citation={item.citation} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
