import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import FeaturePill from "@/components/FeaturePill";
import CTARow from "@/components/CTARow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Target, 
  BookOpen, 
  Stethoscope,
  Zap,
  TrendingUp,
  Sparkles,
  Shield,
  Globe,
  BarChart3,
  Building2,
  GraduationCap,
  Award,
  FileText,
  Users,
  MessageCircle,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import heroImage from "@/assets/hero-medical-ai.jpg";

const NewIndex = () => {
  const products = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "SmartQBank™",
      description: "Adaptive 40,000+ MCQs with Focus 50™, Rank Predictor, leaderboards.",
      features: ["40,000+ MCQs", "Focus 50™ Algorithm", "Real-time Rank Predictor"],
      href: "/products/smartqbank"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Adaptive Mastery Packs™", 
      description: "Personalised modules: PathoPharma Pro™, Surgery Mastery™, OBG Core™, etc.",
      features: ["PathoPharma Pro™", "Surgery Mastery™", "OBG Core™"],
      href: "/products/masterypacks"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "NextDoc Tutor AI™",
      description: "Explains topics, solves MCQs with rationales, builds study plans, cites references.",
      features: ["AI Explanations", "PubMed Citations", "Custom Study Plans"],
      href: "/products/tutorai"
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "NextDoc CaseSim™",
      description: "Conversational OSCE-style clinical reasoning drills.",
      features: ["OSCE Simulations", "Clinical Reasoning", "Instant Feedback"],
      href: "/products/casesim"
    }
  ];

  const ukProducts = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "CV Booster™ (UK)",
      description: "NHS-ready CVs with ATS mapping",
      href: "/uk/products/cv-booster"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "InterviewSim™ (UK)", 
      description: "AI mock panels with NHS rubrics",
      href: "/uk/products/interviewsim"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "SponsorMatch™ (UK)",
      description: "Find visa-sponsoring roles & Trusts",
      href: "/uk/products/sponsormatch"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "GapMap™ (UK)",
      description: "Make your progress visible",
      href: "/uk/products/gapmap"
    }
  ];

  const differentiators = [
    {
      icon: <Zap className="h-8 w-8 text-teal" />,
      title: "Focus 50™",
      description: "Daily AI-curated weak-topic drills"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-violet" />,
      title: "Rank Predictor",
      description: "Real-time percentile vs peers"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Adaptive Packs™", 
      description: "No two study paths are identical"
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Research Mode",
      description: "PubMed/NMC/RNTCP citations you can verify"
    },
    {
      icon: <Globe className="h-8 w-8 text-teal" />,
      title: "Global Bridge",
      description: "NEET → PLAB/NHS → global careers"
    }
  ];

  const innovations = [
    {
      title: "AI Citation Engine",
      description: "Built-in PubMed integration for research-grade explanations"
    },
    {
      title: "Adaptive Dashboards", 
      description: "Real-time learning analytics and performance insights"
    },
    {
      title: "Neural Networks",
      description: "Advanced ML models for personalized learning paths"
    }
  ];

  return (
    <Layout 
      title="NextDoc Labs — Medical Research & Innovation"
      description="We build practical AI for doctors: SmartQBank™, Adaptive Mastery Packs™, Tutor AI™, CaseSim™. Research-driven, privacy-first, human-in-the-loop."
      canonical="/"
    >
      {/* Hero Section */}
      <Hero 
        title="AI That Transforms Medical Learning. Built by Doctors. For Doctors."
        subtitle="Adaptive question banks. AI tutoring. Research-grade simulations. Your career, accelerated by NextDoc Labs."
        primaryCTA={{ text: "Try Demo", href: "/demo" }}
        secondaryCTA={{ text: "Explore Products", href: "#products" }}
        image={heroImage}
        variant="gradient"
      />

      {/* Flagship Products Showcase */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Flagship Products Showcase
            </h2>
            <p className="text-xl text-muted-foreground">
              Interactive AI-powered learning experiences
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

      {/* For UK Doctors */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              For UK Doctors
            </h2>
            <p className="text-xl text-muted-foreground">
              Tools designed for PLAB/NHS pathways—built by doctors, trusted by mentors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ukProducts.map((product, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all group">
                <CardHeader className="text-center">
                  <div className="p-3 rounded-xl bg-teal text-white shadow-lg group-hover:scale-110 transition-transform mx-auto w-fit mb-4">
                    {product.icon}
                  </div>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    {product.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={product.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-right">
            <Button variant="outline" asChild>
              <Link to="/uk/products">
                See all UK products <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why NextDoc Labs is Different */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why NextDoc Labs is Different
            </h2>
            <p className="text-xl text-muted-foreground">
              Revolutionary features that set us apart
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {differentiators.map((item, index) => (
              <FeaturePill 
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/features">
                See Features in Action <Sparkles className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* NextDoc Labs: Where AI Meets Medicine */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              NextDoc Labs: Where AI Meets Medicine
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We integrate medical guidelines and high-quality sources with opinionated ML and human-in-the-loop review. Privacy by design.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {innovations.map((innovation, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all text-center group">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-teal rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{innovation.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{innovation.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/demo/research">
                Try Research Mode <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Campus AI Lab & MedSchool Partner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Campus AI Lab™ & MedSchool Partner™
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Transform your medical college with our institutional solutions
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">White-label Dashboards</h3>
                <p className="text-sm text-muted-foreground">Student AI mentors</p>
              </div>
              <div className="text-center">
                <GraduationCap className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">College Leaderboards</h3>
                <p className="text-sm text-muted-foreground">Annual subscription</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-teal mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Annual Subscription</h3>
                <p className="text-sm text-muted-foreground">Complete institutional package</p>
              </div>
            </div>
            <Button size="lg" asChild>
              <Link to="/institutions">
                Institution Enquiry
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community & Engagement */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Daily Streaks. Rank Clubs. Real Momentum.
            </h2>
            <p className="text-xl text-muted-foreground">
              Telegram/WhatsApp rank clubs, streak rewards, badges, leaderboard snapshots
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-card hover:shadow-hover transition-all text-center">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-teal mx-auto mb-4" />
                <CardTitle>Rank Clubs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Join Telegram/WhatsApp groups to track percentile daily
                </p>
                <Button variant="outline" size="sm">Join Now</Button>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-hover transition-all text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-violet mx-auto mb-4" />
                <CardTitle>Streak System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Build consistent study habits with our gamified streaks
                </p>
                <Button variant="outline" size="sm">Start Streak</Button>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-hover transition-all text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Achievement Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Unlock badges and compete with peers across the nation
                </p>
                <Button variant="outline" size="sm">View Badges</Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/community">
                Join the Community
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Be Part of the Future of Medical Learning.
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of medical students already accelerating their careers with AI-powered learning
            </p>
            <CTARow 
              buttons={[
                { text: "Try Sandbox Demo", href: "/demo" },
                { text: "Get Early Access", href: "/signup", variant: "outline" }
              ]}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewIndex;