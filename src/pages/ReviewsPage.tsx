import { useState } from "react";
import Layout from "@/components/Layout";
import ItemCard from "@/components/scholarly/ItemCard";
import { ContentType, Item } from "@/types/scholarly";
import sampleItemsData from "@/data/sampleItems.json";

const ReviewsPage = () => {
  const [activeType, setActiveType] = useState<ContentType | 'all'>('systematic-review');
  const sampleItems = sampleItemsData as Item[];

  const filteredItems = sampleItems.filter(item => item.type === 'systematic-review');

  return (
    <Layout
      title="Systematic Reviews & Meta-Analyses - NextDoc Labs"
      description="PRISMA-compliant systematic reviews synthesizing evidence on NHS workforce, medical education, and international healthcare integration."
      canonical="/reviews"
    >
      {/* Hero Section */}
      <section className="py-16 bg-hero-grad text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Systematic Reviews & Meta-Analyses
            </h1>
            <p className="text-xl opacity-90">
              Evidence synthesis following PRISMA standards, including systematic reviews and meta-analyses. Includes full search strategies and risk-of-bias assessments.
            </p>
          </div>
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
                Showing {filteredItems.length} of {filteredItems.length} reviews
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No reviews found. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ReviewsPage;
