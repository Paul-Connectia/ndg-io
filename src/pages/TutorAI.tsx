import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CTARow from "@/components/CTARow";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, FileText, Calendar, MessageCircle } from "lucide-react";

const TutorAI = () => {
  const modes = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Topic Explainer",
      description: "Clear, comprehensive explanations of complex medical concepts with visual aids."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "MCQ Solver + Rationales", 
      description: "Step-by-step solutions with detailed reasoning for every answer choice."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Research Mode",
      description: "PubMed/NMC/RNTCP citations with evidence-based explanations."
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Planner Mode",
      description: "Personalized study schedules based on your exam dates and current progress."
    }
  ];

  const ctaButtons = [
    {
      text: "UK Store",
      href: "https://nextdoc.co.uk/products/tutor-ai",
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
      title="NextDoc Tutor AI™ — AI Medical Tutor | NextDoc Labs"
      description="Your personal AI tutor: explains topics, solves MCQs with rationales, cites research, and creates study plans. Available 24/7."
      canonical="/products/tutorai"
    >
      <Hero 
        title="NextDoc Tutor AI™ — Explainer, Solver, Planner, Research"
        subtitle="Your personal AI tutor available 24/7. Get instant explanations, detailed MCQ solutions, research citations, and personalized study plans."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Four Powerful Modes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Switch between different AI modes depending on what you need: explanations, practice, research, or planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {modes.map((mode, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary text-white shadow-lg group-hover:scale-110 transition-transform">
                      {mode.icon}
                    </div>
                    <CardTitle className="text-xl">{mode.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {mode.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <CTARow buttons={ctaButtons} />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Research Mode: Trusted Citations</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Unlike generic AI, our Tutor AI provides verifiable citations from PubMed, NMC guidelines, 
                and RNTCP protocols. Every explanation is backed by authoritative medical sources.
              </p>
              <Card className="bg-gradient-section border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium mb-2">Example Query:</p>
                      <p className="text-sm text-muted-foreground italic">
                        "Explain the pathophysiology of diabetic nephropathy with recent research evidence."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Available 24/7</h3>
              <p className="text-muted-foreground mb-6">
                No waiting for office hours or scheduled sessions. Get instant help whenever you're studying, 
                whether it's 2 AM or during a quick break between classes.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Instant responses</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Multi-language support</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Adaptive learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TutorAI;