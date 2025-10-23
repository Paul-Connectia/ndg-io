import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Brain, Target, BookOpen, Stethoscope } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "SmartQBank™",
      description: "Adaptive 40,000+ MCQs with Focus 50™, Rank Predictor, leaderboards.",
      features: ["40,000+ MCQs", "Focus 50™ Algorithm", "Real-time Rank Predictor", "Streak rewards", "Subject-wise weak spots with AI advice"],
      href: "/products/smartqbank"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Adaptive Mastery Packs™", 
      description: "Personalised modules: PathoPharma Pro™, Surgery Mastery™, OBG Core™, etc.",
      features: ["PathoPharma Pro™", "Surgery Mastery™", "Medicine Mastery™", "SPM Essentials™", "OBG Core™", "No two packs are identical"],
      href: "/products/masterypacks"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "NextDoc Tutor AI™",
      description: "Explains topics, solves MCQs with rationales, builds study plans, cites references.",
      features: ["Topic Explainer", "MCQ Solver + Rationales", "Research Mode (PubMed/NMC/RNTCP citations)", "Planner Mode"],
      href: "/products/tutorai"
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "NextDoc CaseSim™",
      description: "Conversational OSCE-style clinical reasoning drills.",
      features: ["OSCE-style cases", "Differential diagnosis", "Management reasoning", "Viva prep"],
      href: "/products/casesim"
    }
  ];

  return (
    <Layout 
      title="Products — NextDoc Labs | AI-Powered Medical Learning"
      description="Explore the NextDoc AI Suite: SmartQBank™, Adaptive Mastery Packs™, NextDoc Tutor AI™, and CaseSim™. Learn how each product works under the hood."
      canonical="/products"
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Explore the NextDoc AI Suite
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn how each product works under the hood. Research-driven, privacy-first, 
              human-in-the-loop AI that transforms medical education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <ProductCard 
                key={index}
                icon={product.icon}
                title={product.title}
                description={product.description}
                features={product.features}
                href={product.href}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;