import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/ui/section";
import heroImage from "@/assets/hero-medical-ai.jpg";
import { 
  ArrowRight, 
  Brain, 
  Target, 
  BookOpen, 
  Stethoscope, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Award,
  Globe,
  MessageCircle,
  BarChart3,
  Sparkles,
  GraduationCap,
  Building2
} from "lucide-react";

const Index = () => {
  const products = [
    {
      name: "SmartQBank™",
      description: "Adaptive 40,000+ MCQs with Focus 50™, Rank Predictor, leaderboards",
      icon: <Brain className="h-8 w-8" />,
      features: ["40,000+ MCQs", "Focus 50™ Algorithm", "Real-time Rank Predictor"],
      gradient: "bg-gradient-product"
    },
    {
      name: "Adaptive Mastery Packs™",
      description: "Personalised modules: PathoPharma Pro™, Surgery Mastery™, OBG Core™",
      icon: <Target className="h-8 w-8" />,
      features: ["PathoPharma Pro™", "Surgery Mastery™", "OBG Core™"],
      gradient: "bg-gradient-neon"
    },
    {
      name: "NextDoc Tutor AI™",
      description: "Explains, cites references, makes study plans, solves MCQs",
      icon: <BookOpen className="h-8 w-8" />,
      features: ["AI Explanations", "PubMed Citations", "Custom Study Plans"],
      gradient: "bg-gradient-hero"
    },
    {
      name: "NextDoc CaseSim™",
      description: "Conversational OSCE-style clinical reasoning drills",
      icon: <Stethoscope className="h-8 w-8" />,
      features: ["OSCE Simulations", "Clinical Reasoning", "Instant Feedback"],
      gradient: "bg-gradient-product"
    }
  ];

  const differentiators = [
    {
      icon: <Zap className="h-8 w-8 text-neon-cyan" />,
      title: "Focus 50™",
      description: "AI-curated weak spot drills daily"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-neon-purple" />,
      title: "Rank Predictor",
      description: "Real-time percentile vs peers"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-neon-green" />,
      title: "Adaptive Packs™",
      description: "No two packs are identical"
    },
    {
      icon: <Shield className="h-8 w-8 text-neon-pink" />,
      title: "Research Mode",
      description: "PubMed/NMC/RNTCP citations"
    },
    {
      icon: <Globe className="h-8 w-8 text-neon-cyan" />,
      title: "Global Career Bridge",
      description: "NEET → UK/NHS → beyond"
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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <Section variant="gradient" className="text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-pulse-glow">
              AI That Transforms Medical Learning. Built by Doctors. For Doctors.
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Adaptive question banks. AI tutoring. Research-grade simulations.
              <br />
              <span className="text-neon-cyan font-semibold">Your career, accelerated by NextDoc Labs.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="demo" size="lg" className="animate-neon-pulse">
                Try Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Explore Products
              </Button>
            </div>
            <div className="text-sm text-white/70">
              Join 50,000+ medical students accelerating their careers
            </div>
          </div>
          <div className="relative animate-float">
            <img 
              src={heroImage} 
              alt="Futuristic Medical AI Learning Interface" 
              className="rounded-2xl shadow-glow"
            />
            <div className="absolute inset-0 bg-gradient-neon opacity-20 rounded-2xl animate-pulse-glow" />
          </div>
        </div>
      </Section>

      {/* Flagship Products Showcase */}
      <Section>
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
            <Card key={index} className="shadow-card hover:shadow-neon transition-all duration-500 group overflow-hidden relative">
              <div className={`absolute inset-0 ${product.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              <CardHeader className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-neon text-white shadow-neon">
                    {product.icon}
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-neon-cyan" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="group-hover:border-neon-cyan group-hover:text-neon-cyan transition-colors">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why NextDoc Labs is Different */}
      <Section variant="muted">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why NextDoc Labs is Different
          </h2>
          <p className="text-xl text-muted-foreground">
            Revolutionary features that set us apart
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="p-4 rounded-2xl bg-background shadow-card group-hover:shadow-neon transition-all animate-float" 
                     style={{ animationDelay: `${index * 0.5}s` }}>
                  {item.icon}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="demo" size="lg">
            See How Our AI Works <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </Section>

      {/* Innovation Lab Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            NextDoc Labs: Where AI Meets Medicine
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Cutting-edge research powering next-generation medical education
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {innovations.map((innovation, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all text-center group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-neon rounded-2xl flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
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
          <Button variant="cyan" size="lg">
            Explore Our AI Technology
          </Button>
        </div>
      </Section>

      {/* Institutional Solutions */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Campus AI Lab™
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Transform your medical college with our institutional solutions
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">White-label Dashboards</h3>
              <p className="text-sm text-muted-foreground">Custom branding for your institution</p>
            </div>
            <div className="text-center">
              <GraduationCap className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">AI Mentor Access</h3>
              <p className="text-sm text-muted-foreground">24/7 AI tutoring for all students</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-neon-cyan mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Annual Subscription</h3>
              <p className="text-sm text-muted-foreground">₹3-5 lakh comprehensive package</p>
            </div>
          </div>
          <Button variant="medical" size="lg">
            Institution Enquiry
          </Button>
        </div>
      </Section>

      {/* Community & Engagement */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Join the Community
          </h2>
          <p className="text-xl text-muted-foreground">
            Connect, compete, and grow with fellow medical students
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-card hover:shadow-neon transition-all text-center">
            <CardHeader>
              <MessageCircle className="h-12 w-12 text-neon-cyan mx-auto mb-4" />
              <CardTitle>Rank Clubs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Join Telegram/WhatsApp groups to track percentile daily
              </p>
              <Button variant="outline" size="sm">Join Now</Button>
            </CardContent>
          </Card>
          <Card className="shadow-card hover:shadow-neon transition-all text-center">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-neon-purple mx-auto mb-4" />
              <CardTitle>Streak System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Build consistent study habits with our gamified streaks
              </p>
              <Button variant="outline" size="sm">Start Streak</Button>
            </CardContent>
          </Card>
          <Card className="shadow-card hover:shadow-neon transition-all text-center">
            <CardHeader>
              <Award className="h-12 w-12 text-neon-green mx-auto mb-4" />
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
      </Section>

      {/* Call to Action */}
      <Section variant="gradient" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Be Part of the Future of Medical Learning
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of medical students already accelerating their careers with AI-powered learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="demo" size="lg" className="animate-neon-pulse">
              Try Sandbox Demo
            </Button>
            <Button variant="hero" size="lg">
              Get Early Access
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
