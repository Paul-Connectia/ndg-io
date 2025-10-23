import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/ui/section";
import { Shield, Lock, Eye, Globe, Users, FileCheck, AlertTriangle, CheckCircle } from "lucide-react";
import { ScrollRestoration } from "react-router-dom";

const Security = () => {
  const securityPrinciples = [
    {
      title: "Privacy by Design",
      description: "Data protection built into every system component from the ground up",
      icon: <Shield className="h-6 w-6" />,
      details: [
        "Minimal data collection principle",
        "Purpose limitation enforcement",
        "Data minimization by default",
        "Privacy impact assessments (DPIA)"
      ]
    },
    {
      title: "Zero Trust Architecture",
      description: "Never trust, always verify - comprehensive security verification",
      icon: <Lock className="h-6 w-6" />,
      details: [
        "Multi-factor authentication required",
        "Principle of least privilege",
        "Continuous verification",
        "Network micro-segmentation"
      ]
    },
    {
      title: "Transparent Operations",
      description: "Clear visibility into data handling and AI decision-making processes",
      icon: <Eye className="h-6 w-6" />,
      details: [
        "Audit logging for all operations",
        "Data processing transparency",
        "AI model explainability",
        "Regular security assessments"
      ]
    },
    {
      title: "Regional Compliance",
      description: "Adherence to local data protection and healthcare regulations",
      icon: <Globe className="h-6 w-6" />,
      details: [
        "UK GDPR compliance",
        "India DPDP Act alignment",
        "HIPAA considerations",
        "Regional data residency"
      ]
    }
  ];

  const dataProtection = [
    {
      category: "Encryption",
      measures: [
        "AES-256 encryption at rest",
        "TLS 1.3 for data in transit",
        "End-to-end encryption for sensitive data",
        "Hardware security modules (HSM)"
      ]
    },
    {
      category: "Access Control",
      measures: [
        "Role-based access control (RBAC)",
        "Multi-factor authentication",
        "Regular access reviews",
        "Privileged access management"
      ]
    },
    {
      category: "Data Governance",
      measures: [
        "Data classification framework",
        "Retention policy enforcement",
        "Secure data deletion",
        "Cross-border transfer controls"
      ]
    },
    {
      category: "Monitoring",
      measures: [
        "24/7 security operations center",
        "Intrusion detection systems",
        "Behavioral analytics",
        "Incident response procedures"
      ]
    }
  ];

  const certifications = [
    {
      name: "ISO 27001",
      status: "Certified",
      description: "Information Security Management System",
      badge: <CheckCircle className="h-5 w-5 text-green-600" />
    },
    {
      name: "SOC 2 Type II",
      status: "In Progress",
      description: "Security, Availability, and Confidentiality",
      badge: <AlertTriangle className="h-5 w-5 text-yellow-600" />
    },
    {
      name: "GDPR Compliance",
      status: "Certified",
      description: "European Data Protection Regulation",
      badge: <CheckCircle className="h-5 w-5 text-green-600" />
    },
    {
      name: "DPDP Compliance",
      status: "Certified",
      description: "India Digital Personal Data Protection",
      badge: <CheckCircle className="h-5 w-5 text-green-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <Section variant="gradient" className="text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Security & Compliance
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8">
            Healthcare-grade security for AI-powered medical career services
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our security framework is designed specifically for healthcare applications,
            ensuring the highest standards of data protection and regulatory compliance.
          </p>
        </div>
      </Section>

      {/* Security Principles */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Security Principles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {securityPrinciples.map((principle, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary-muted text-primary">
                      {principle.icon}
                    </div>
                    <CardTitle className="text-xl">{principle.title}</CardTitle>
                  </div>
                  <CardDescription>{principle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {principle.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Data Protection */}
      <Section variant="muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Data Protection Framework</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataProtection.map((category, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.measures.map((measure, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                        {measure}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* AI Ethics & Safety */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">AI Ethics & Safety</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Bias Prevention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    Diverse training datasets across demographics
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    Regular bias auditing and testing
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    Fairness metrics monitoring
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    Human oversight in decision loops
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-primary" />
                  Model Governance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    No training on user content without consent
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    Model versioning and rollback capabilities
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    Explainable AI for critical decisions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    Regular model performance monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Certifications & Compliance */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    {cert.badge}
                  </div>
                  <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${cert.status === "Certified"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                    }`}>
                    {cert.status}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Regional Data Handling */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Regional Data Handling</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card text-center">
              <CardHeader>
                <CardTitle className="text-primary">United Kingdom</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Data Center:</strong> London, UK</p>
                  <p><strong>Compliance:</strong> UK GDPR</p>
                  <p><strong>Retention:</strong> 7 years max</p>
                  <p><strong>Transfer:</strong> Adequacy decisions only</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardHeader>
                <CardTitle className="text-primary">India</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Data Center:</strong> Mumbai, India</p>
                  <p><strong>Compliance:</strong> DPDP Act 2023</p>
                  <p><strong>Retention:</strong> Purpose-limited</p>
                  <p><strong>Transfer:</strong> Restricted cross-border</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardHeader>
                <CardTitle className="text-primary">Global</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Backup:</strong> Encrypted, distributed</p>
                  <p><strong>Processing:</strong> Regional isolation</p>
                  <p><strong>Monitoring:</strong> 24/7 global SOC</p>
                  <p><strong>Incident:</strong> 72-hour notification</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Security Contact */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Security & Privacy Contacts</h2>
          <p className="text-lg text-muted-foreground mb-8">
            For security concerns, privacy questions, or compliance inquiries,
            please reach out to our dedicated teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="mailto:labs@nextdocglobal.io?subject=Security%20Issue">Security Team</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:labs@nextdocglobal.io?subject=Privacy%20Question">Privacy Officer</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:labs@nextdocglobal.io?subject=Compliance%20Inquiry">Compliance Team</a>
            </Button>
          </div>

          <div className="mt-8 p-4 bg-primary-muted rounded-lg">
            <p className="text-sm text-primary">
              <strong>Security Bug Bounty:</strong> Report security vulnerabilities responsibly via
              <a href="mailto:labs@nextdocglobal.io?subject=Security%20Bug%20Report" className="underline ml-1">labs@nextdocglobal.io</a>
            </p>
          </div>
        </div>
      </Section>

      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Security;