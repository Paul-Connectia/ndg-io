import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CTARow from "@/components/CTARow";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, MessageSquare, ClipboardCheck, Award, Users } from "lucide-react";

const CaseSim = () => {
  const features = [
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "OSCE-style Cases",
      description: "Realistic patient scenarios that mirror actual OSCE examinations."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Differential Diagnosis",
      description: "Interactive case discussions that guide you through diagnostic reasoning."
    },
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      title: "Management Reasoning", 
      description: "Learn to develop comprehensive treatment plans with clinical justification."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Viva Prep",
      description: "Practice verbal explanations and defend your clinical decisions."
    }
  ];

  const ctaButtons = [
    {
      text: "UK Store",
      href: "https://nextdoc.co.uk/products/casesim",
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
      title="NextDoc CaseSim™ — OSCE Clinical Simulations | NextDoc Labs"
      description="Master clinical reasoning with conversational OSCE-style cases. Practice differential diagnosis, management, and viva preparation."
      canonical="/products/casesim"
    >
      <Hero 
        title="NextDoc CaseSim™ — Conversational clinical simulations" 
        subtitle="Practice OSCE-style cases through natural conversation. Develop clinical reasoning skills with realistic patient scenarios and immediate feedback."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">What You'll Practice</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every case is designed to challenge your clinical thinking and prepare you for real-world patient encounters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-secondary text-white shadow-lg group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
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
              <h3 className="text-2xl font-bold text-foreground mb-6">How It Works</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Present Patient</h4>
                    <p className="text-muted-foreground">You're given a patient scenario with chief complaint and basic vitals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Gather History</h4>
                    <p className="text-muted-foreground">Ask questions to elicit relevant history and examination findings.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Diagnose & Manage</h4>
                    <p className="text-muted-foreground">Develop differential diagnosis and create a management plan.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-violet text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Get Feedback</h4>
                    <p className="text-muted-foreground">Receive detailed feedback on your clinical reasoning and decision-making.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-gradient-hero text-white border-0">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8" />
                  <CardTitle className="text-2xl">Real OSCE Preparation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/90 text-base">
                  Our cases are based on real OSCE scenarios from medical schools across India and the UK. 
                  Practice the exact format and timing you'll encounter in your exams.
                </CardDescription>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Timed scenarios</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Standardized patient interactions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Examiner-style feedback</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseSim;