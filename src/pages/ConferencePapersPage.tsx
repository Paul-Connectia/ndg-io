import { useState } from "react";
import Layout from "@/components/Layout";
import ItemCard from "@/components/scholarly/ItemCard";
import { ContentType, Item } from "@/types/scholarly";
import sampleItemsData from "@/data/sampleItems.json";

const ConferencePapersPage = () => {
  const [activeType, setActiveType] = useState<ContentType | 'all'>('conference-paper');
  const sampleItems = sampleItemsData as Item[];

  const filteredItems = sampleItems.filter(item => item.type === 'conference-paper');

  return (
    <Layout
      title="Conference Papers — NextDoc Labs"
      description="Conference abstracts, proceedings, and presentations from medical education conferences"
      canonical="/conference-papers"
    >
      <div className="min-h-screen">
        <div className="bg-gradient-to-br from-nhs-blue to-cyan py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Conference Papers
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Conference abstracts, proceedings, and presentations from leading medical education conferences
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => <ItemCard key={item.id} item={item} />)
            ) : (
              <p className="col-span-full text-center text-muted-foreground py-12">
                No conference papers found. Check back soon.
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ConferencePapersPage;
