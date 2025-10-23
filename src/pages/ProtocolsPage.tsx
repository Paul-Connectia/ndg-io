import { useState } from "react";
import Layout from "@/components/Layout";
import TypeTabs from "@/components/scholarly/TypeTabs";
import ItemCard from "@/components/scholarly/ItemCard";
import { ContentType, Item } from "@/types/scholarly";
import sampleItemsData from "@/data/sampleItems.json";

const ProtocolsPage = () => {
  const [activeType, setActiveType] = useState<ContentType | 'all'>('protocol');
  const sampleItems = sampleItemsData as Item[];

  const filteredItems = sampleItems.filter(item => item.type === 'protocol');

  return (
    <Layout
      title="Research Protocols & Registered Reports - NextDoc Labs"
      description="Study protocols, audit templates, and registered reports. Pre-registered methods approved before data collection to reduce publication bias."
      canonical="/protocols"
    >
      {/* Hero Section */}
      <section className="py-16 bg-hero-grad text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Research Protocols & Registered Reports
            </h1>
            <p className="text-xl opacity-90">
              Pre-registered study protocols and reusable methodologies. Peer-reviewed methods approved before data collection, following CONSORT and SPIRIT guidelines to reduce publication bias.
            </p>
          </div>
        </div>
      </section>

      {/* Type Tabs */}
      <section className="border-b bg-background sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <TypeTabs activeType={activeType} onTypeChange={setActiveType} />
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12 bg-wash-research">
        <div className="container mx-auto px-4 max-w-7xl">
          {filteredItems.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {filteredItems.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
              <div className="text-center text-sm text-muted-foreground">
                Showing {filteredItems.length} of {filteredItems.length} protocols
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No protocols found. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProtocolsPage;
