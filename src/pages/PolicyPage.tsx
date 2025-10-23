import { useState } from "react";
import Layout from "@/components/Layout";
import TypeTabs from "@/components/scholarly/TypeTabs";
import ItemCard from "@/components/scholarly/ItemCard";
import { ContentType, Item } from "@/types/scholarly";
import sampleItemsData from "@/data/sampleItems.json";

const PolicyPage = () => {
  const [activeType, setActiveType] = useState<ContentType | 'all'>('policy');
  const sampleItems = sampleItemsData as Item[];

  const filteredItems = sampleItems.filter(item => item.type === 'policy');

  return (
    <Layout
      title="Policy & Governance Briefs - NextDoc Labs"
      description="Evidence-based policy recommendations for NHS workforce leaders, medical educators, and healthcare governance teams."
      canonical="/policy"
    >
      {/* Hero Section */}
      <section className="py-16 bg-hero-grad text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Policy & Governance Briefs
            </h1>
            <p className="text-xl opacity-90">
              Evidence-based policy recommendations and service-design briefs for NHS workforce leaders, medical directors, and education governance teams. Practical guidance you can implement tomorrow.
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
                Showing {filteredItems.length} of {filteredItems.length} policy briefs
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No policy briefs found. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default PolicyPage;
