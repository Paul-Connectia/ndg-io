import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CTARow from "@/components/CTARow";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Brain, TrendingUp, Target, Shield } from "lucide-react";

const SmartQBank = () => {
  const features = [
    "Focus 50™ daily drills",
    "Rank Predictor & leaderboards", 
    "Personalised analytics",
    "Streak rewards",
    "Subject-wise weak spots with AI advice"
  ];

  const ctaButtons = [
    {
      text: "Buy in the UK",
      href: "https://nextdoc.co.uk/products/smartqbank",
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
      title="SmartQBank™ — 40,000+ Adaptive MCQs | NextDoc Labs"
      description="Master medical MCQs with our adaptive AI engine. Focus 50™ daily drills, real-time rank predictor, and personalized analytics for NEET PG success."
      canonical="/products/smartqbank"
    >
      <Hero 
        title="SmartQBank™ — 40,000+ adaptive MCQs"
        subtitle="Our adaptive engine learns your weak spots and creates personalized daily drills. Track your progress with real-time rank prediction and compete with peers nationwide."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Key Features</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">How Focus50™ Works</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your performance across all subjects and identifies your top 50 weak areas. 
                Every day, you get a personalized drill targeting these specific gaps, ensuring efficient 
                and focused preparation.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <CTARow buttons={ctaButtons} />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Adaptive Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Machine learning algorithms that adapt to your learning style and pace, 
                  ensuring optimal question selection for maximum improvement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle>Rank Predictor</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real-time percentile calculation based on your performance compared to 
                  thousands of other students preparing for the same exams.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-teal mx-auto mb-4" />
                <CardTitle>Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Detailed insights into your strengths and weaknesses across all subjects, 
                  with actionable recommendations for improvement.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-slate-50 border-0">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Privacy & Trust</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                <strong>No training on your private data without opt-in.</strong> We're UK GDPR & India DPDP aligned. 
                Your study patterns and performance data remain private and are used only to improve your 
                personalized learning experience.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default SmartQBank;