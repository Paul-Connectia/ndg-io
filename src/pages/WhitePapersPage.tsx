import { useState } from "react";
import Layout from "@/components/Layout";
import TypeTabs from "@/components/scholarly/TypeTabs";
import ItemCard from "@/components/scholarly/ItemCard";
import { ContentType, Item } from "@/types/scholarly";
import sampleItemsData from "@/data/sampleItems.json";

const WhitePapersPage = () => {
  const [activeType, setActiveType] = useState<ContentType | 'all'>('white-paper');
  const sampleItems = sampleItemsData as Item[];

  const filteredItems = sampleItems.filter(item => item.type === 'white-paper');

  return (
    <Layout
      title="White Papers - NextDoc Labs"
      description="Applied frameworks and practical guidance on NHS workforce integration, medical education, and responsible AI implementation."
      canonical="/white-papers"
    >
      {/* Hero Section */}
      <section className="py-16 bg-hero-grad text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              White Papers
            </h1>
            <p className="text-xl opacity-90">
              Applied frameworks and implementation playbooks for NHS workforce leaders, medical educators, and policy teams. Practical guidance aligned with NICE, ICMJE, and SQUIRE standards.
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
                Showing {filteredItems.length} of {filteredItems.length} white papers
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No white papers found. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default WhitePapersPage;
