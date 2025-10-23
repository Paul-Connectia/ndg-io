import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CTARow from "@/components/CTARow";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, BookOpen, Award, IndianRupee } from "lucide-react";

const MasteryPacks = () => {
  const packs = [
    "PathoPharma Pro™",
    "Surgery Mastery™", 
    "Medicine Mastery™",
    "SPM Essentials™",
    "OBG Core™"
  ];

  const ctaButtons = [
    {
      text: "UK Store",
      href: "https://nextdoc.co.uk/products/mastery-packs",
      external: true
    },
    {
      text: "Try Demo",
      href: "/demo",
      variant: "secondary" as const
    }
  ];

  return (
    <Layout 
      title="Adaptive Mastery Packs™ — Personalized Medical Modules | NextDoc Labs"
      description="AI pre-test builds tailored study packs. PathoPharma Pro™, Surgery Mastery™, Medicine Mastery™. No two packs are identical."
      canonical="/products/masterypacks"
    >
      <Hero 
        title="Adaptive Mastery Packs™ — Personalised modules that fit you"
        subtitle="AI pre-test builds a tailored pack based on your knowledge gaps. Each pack is uniquely crafted for your learning needs."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Available Mastery Packs</h2>
              <div className="grid gap-4">
                {packs.map((pack, index) => (
                  <Card key={index} className="shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <Target className="h-6 w-6 text-primary" />
                        <span className="text-lg font-semibold">{pack}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-teal text-white border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/90 text-base">
                    Take our AI-powered pre-assessment. Based on your performance, we create a 
                    completely personalized study pack with the exact topics, difficulty levels, 
                    and learning materials you need.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-primary text-white border-0">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <IndianRupee className="h-8 w-8" />
                    <CardTitle className="text-xl">India Pricing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/90">
                    <strong>₹999–₹1,499 per pack</strong> (shown on India store)
                    <br />Complete modules with adaptive learning paths.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <CTARow buttons={ctaButtons} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>AI Pre-Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Quick diagnostic test identifies your current knowledge level and learning preferences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle>Personalized Content</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every pack is uniquely assembled based on your specific knowledge gaps and learning goals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-teal mx-auto mb-4" />
                <CardTitle>Mastery Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Progress tracking with mastery indicators to ensure you've truly learned each concept.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MasteryPacks;