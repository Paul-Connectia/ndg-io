import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentType } from "@/types/scholarly";

interface TypeTabsProps {
  activeType: ContentType | 'all';
  onTypeChange: (type: ContentType | 'all') => void;
}

const TypeTabs = ({ activeType, onTypeChange }: TypeTabsProps) => {
  const tabs = [
    { value: 'all', label: 'All' },
    { value: 'article', label: 'Articles' },
    { value: 'white-paper', label: 'White Papers' },
    { value: 'protocol', label: 'Protocols' },
    { value: 'review', label: 'Reviews' },
    { value: 'policy', label: 'Policy' },
    { value: 'dataset', label: 'Data+Code' }
  ] as const;

  return (
    <Tabs value={activeType} onValueChange={(value) => onTypeChange(value as ContentType | 'all')} className="w-full">
      <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 gap-2 bg-muted/50 p-2 h-auto">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="data-[state=active]:bg-nx-cyan data-[state=active]:text-white text-sm font-semibold px-4 py-3 min-h-[44px] transition-all duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default TypeTabs;
