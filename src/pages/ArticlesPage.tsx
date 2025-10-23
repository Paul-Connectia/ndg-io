import { useState } from "react";
import Layout from "@/components/Layout";
import ItemCard from "@/components/scholarly/ItemCard";
import { ContentType, Item } from "@/types/scholarly";
import sampleItemsData from "@/data/sampleItems.json";

const ArticlesPage = () => {
  const [activeType, setActiveType] = useState<ContentType | 'all'>('research-article');
  const sampleItems = sampleItemsData as Item[];

  const filteredItems = sampleItems.filter(item => item.type === 'research-article');

  return (
    <Layout
      title="Research Articles - NextDoc Labs"
      description="Original research advancing NHS workforce, workforce pathways, and medical education. Peer-reviewed studies following EQUATOR standards."
      canonical="/articles"
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-hero-grad text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-balance">
              Research Articles
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Original research, case studies, and empirical investigations in medical education. All articles follow EQUATOR reporting standards (CONSORT, STROBE, SQUIRE).
            </p>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 bg-wash-research">
        <div className="container mx-auto px-4 max-w-7xl">
          {filteredItems.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {filteredItems.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
              <div className="text-center text-sm text-muted-foreground">
                Showing {filteredItems.length} of {filteredItems.length} articles
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No articles found. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ArticlesPage;
