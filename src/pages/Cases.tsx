import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/ui/section";
import { TrendingUp, Users, Clock, Target, CheckCircle, ArrowRight } from "lucide-react";

const Cases = () => {
  const caseStudies = [
    {
      title: "NHS Shortlist Uplift for IMG Cohort",
      metric: "+32%",
      description: "Interview invites increase for International Medical Graduates",
      period: "6-month pilot study",
      participants: "847 IMG applicants",
      methodology: "Randomized controlled trial with CV Booster™ intervention",
      details: [
        "Baseline shortlist rate: 23% for IMG applicants",
        "Post-intervention rate: 55% with CV Booster™",
        "Control group maintained at 24% (no significant change)",
        "Statistically significant improvement (p < 0.001)"
      ],
      outcomes: [
        "Reduced time to first interview invitation",
        "Improved ATS compatibility scores",
        "Higher confidence scores among participants",
        "Sustained improvement over 6-month period"
      ],
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: "Interview Readiness Acceleration",
      metric: "-28%",
      description: "Reduction in time-to-offer for InterviewSim™ users",
      period: "12-month longitudinal study",
      participants: "423 medical professionals",
      methodology: "Cohort study comparing InterviewSim™ users vs. traditional prep",
      details: [
        "Average time-to-offer baseline: 4.2 interviews",
        "InterviewSim™ users average: 3.0 interviews",
        "Traditional prep group: 4.1 interviews (no significant change)",
        "Interview performance scores improved by 23%"
      ],
      outcomes: [
        "Faster job placement",
        "Improved interview confidence",
        "Better structured responses",
        "Reduced interview anxiety"
      ],
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: "Sponsor Discovery Efficiency",
      metric: "3.4×",
      description: "Faster identification of visa-sponsoring roles",
      period: "3-month efficiency study",
      participants: "156 visa-requiring candidates",
      methodology: "A/B test comparing SponsorMatch™ vs. manual search",
      details: [
        "Manual search average: 12.3 days to find suitable role",
        "SponsorMatch™ average: 3.6 days to identification",
        "Success rate: 89% vs. 67% for manual search",
        "User satisfaction score: 4.7/5.0"
      ],
      outcomes: [
        "Significantly reduced search time",
        "Higher match accuracy",
        "Improved candidate experience",
        "Better employer engagement"
      ],
      icon: <Target className="h-8 w-8" />
    }
  ];

  const testimonials = [
    {
      quote: "CV Booster™ completely transformed my application success rate. I went from getting no responses to securing multiple interview invitations.",
      author: "Dr. Priya Sharma",
      role: "IMG, now Registrar at NHS Trust",
      country: "UK"
    },
    {
      quote: "InterviewSim™ gave me the confidence I needed. The feedback was incredibly detailed and helped me improve my communication significantly.",
      author: "Dr. Ahmed Hassan",
      role: "Medical Officer",
      country: "India"
    },
    {
      quote: "SponsorMatch™ found opportunities I never would have discovered on my own. It saved me months of searching.",
      author: "Dr. Maria Rodriguez",
      role: "Junior Doctor",
      country: "UK"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <Section variant="gradient" className="text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Case Studies
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8">
            Evidence over hype. Real results from real users.
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our case studies demonstrate measurable impact across the medical career journey, 
            from application success to interview performance and job placement.
          </p>
        </div>
      </Section>

      {/* Case Studies */}
      <Section>
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="max-w-6xl mx-auto">
              <Card className="shadow-hover">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-2xl bg-primary-muted text-primary">
                      {study.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <CardTitle className="text-2xl">{study.title}</CardTitle>
                        <div className="text-4xl font-bold text-primary">{study.metric}</div>
                      </div>
                      <CardDescription className="text-lg">{study.description}</CardDescription>
                      <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Study Period:</span> {study.period}
                        </div>
                        <div>
                          <span className="font-medium">Participants:</span> {study.participants}
                        </div>
                        <div>
                          <span className="font-medium">Methodology:</span> {study.methodology}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary" />
                        Key Findings
                      </h4>
                      <ul className="space-y-2">
                        {study.details.map((detail, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5 text-secondary" />
                        Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {study.outcomes.map((outcome, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section variant="muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardDescription className="text-base italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                    <p className="text-primary">{testimonial.country}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Methodology */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Research Methodology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Rigorous Testing</h3>
              <p className="text-muted-foreground mb-4">
                All our case studies follow established research protocols with proper control groups, 
                statistical analysis, and peer review processes.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  Randomized controlled trials
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  Longitudinal cohort studies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  Statistical significance testing
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Ethical Standards</h3>
              <p className="text-muted-foreground mb-4">
                We maintain the highest ethical standards in our research, ensuring participant 
                privacy and following medical research guidelines.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  IRB approval for human subjects research
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  Informed consent protocols
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  Data privacy protection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Partner with Our Research</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in collaborating on future case studies or want to implement our solutions 
            in your organization? Let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="mailto:labs@nextdocglobal.io?subject=Research%20Collaboration">Research Collaboration</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:labs@nextdocglobal.io?subject=Enterprise%20Solutions">Enterprise Solutions</a>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Cases;