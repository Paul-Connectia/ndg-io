import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/ui/section";
import { Code, Database, Shield, Zap, GitBranch, Cloud } from "lucide-react";

const Docs = () => {
  const architectureComponents = [
    {
      title: "Data Pipeline",
      description: "RAG-based information retrieval with structured competency extraction",
      icon: <Database className="h-6 w-6" />,
      details: [
        "Document parsing and chunking",
        "Vector embeddings for semantic search",
        "Real-time data synchronization",
        "Structured output generation"
      ]
    },
    {
      title: "ML Models",
      description: "Classification, scoring, and recommendation algorithms",
      icon: <Zap className="h-6 w-6" />,
      details: [
        "BERT-based text understanding",
        "Custom scoring algorithms",
        "Multi-modal data processing",
        "Continuous learning pipelines"
      ]
    },
    {
      title: "Security Layer",
      description: "Privacy-first design with healthcare-grade security",
      icon: <Shield className="h-6 w-6" />,
      details: [
        "End-to-end encryption",
        "GDPR compliance framework",
        "Audit logging system",
        "Zero-trust architecture"
      ]
    },
    {
      title: "API Gateway",
      description: "RESTful APIs with rate limiting and authentication",
      icon: <Code className="h-6 w-6" />,
      details: [
        "OAuth 2.0 authentication",
        "Rate limiting and throttling",
        "Request/response validation",
        "Comprehensive error handling"
      ]
    }
  ];

  const technicalSpecs = [
    {
      category: "Infrastructure",
      items: [
        "Multi-region deployment (EU, US, India)",
        "Auto-scaling Kubernetes clusters",
        "CDN with edge caching",
        "99.9% uptime SLA"
      ]
    },
    {
      category: "Data Processing",
      items: [
        "Apache Kafka for streaming",
        "Redis for caching",
        "PostgreSQL for structured data",
        "Vector databases for embeddings"
      ]
    },
    {
      category: "Machine Learning",
      items: [
        "PyTorch/HuggingFace models",
        "MLflow for experiment tracking",
        "Kubernetes for model serving",
        "A/B testing framework"
      ]
    },
    {
      category: "Monitoring",
      items: [
        "Prometheus metrics",
        "Grafana dashboards",
        "ELK stack for logging",
        "Synthetic monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <Section variant="gradient" className="text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Architecture & Documentation
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8">
            Technical deep-dive into NextDoc Labs AI infrastructure
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our architecture prioritizes scalability, security, and maintainability while 
            delivering high-performance AI services for medical professionals worldwide.
          </p>
        </div>
      </Section>

      {/* Architecture Overview */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">System Architecture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {architectureComponents.map((component, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary-muted text-primary">
                      {component.icon}
                    </div>
                    <CardTitle className="text-xl">{component.title}</CardTitle>
                  </div>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {component.details.map((detail, idx) => (
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

      {/* Technical Specifications */}
      <Section variant="muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{spec.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {spec.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Data Flow */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Data Flow & Processing</h2>
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-primary" />
                  CV Processing Pipeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                    <p><strong>Input Validation:</strong> Document format verification and sanitization</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                    <p><strong>Text Extraction:</strong> OCR and structured text parsing</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                    <p><strong>Entity Recognition:</strong> Medical specialties, qualifications, experience extraction</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">4</div>
                    <p><strong>Competency Mapping:</strong> Skills to NHS framework alignment</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">5</div>
                    <p><strong>Output Generation:</strong> ATS-optimized CV structure</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-primary" />
                  Interview Simulation Engine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">1</div>
                    <p><strong>Scenario Generation:</strong> Context-aware interview questions</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">2</div>
                    <p><strong>Response Analysis:</strong> Natural language processing of answers</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">3</div>
                    <p><strong>Scoring Engine:</strong> Multi-dimensional performance evaluation</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">4</div>
                    <p><strong>Feedback Loop:</strong> Personalized improvement recommendations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* API Documentation */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">API Documentation</h2>
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>RESTful API Endpoints</CardTitle>
              <CardDescription>
                Our APIs follow REST conventions with JSON payloads and standard HTTP status codes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Authentication</h4>
                  <code className="bg-muted p-2 rounded text-sm block">
                    Authorization: Bearer &lt;jwt_token&gt;
                  </code>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">CV Analysis</h4>
                  <code className="bg-muted p-2 rounded text-sm block mb-2">
                    POST /api/v1/cv/analyze
                  </code>
                  <p className="text-sm text-muted-foreground">
                    Upload and analyze CV documents for ATS optimization
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Interview Simulation</h4>
                  <code className="bg-muted p-2 rounded text-sm block mb-2">
                    POST /api/v1/interview/simulate
                  </code>
                  <p className="text-sm text-muted-foreground">
                    Generate interview scenarios and evaluate responses
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Sponsor Matching</h4>
                  <code className="bg-muted p-2 rounded text-sm block mb-2">
                    GET /api/v1/sponsors/match?specialty=cardiology&location=london
                  </code>
                  <p className="text-sm text-muted-foreground">
                    Find visa-sponsoring opportunities based on criteria
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Performance & Monitoring */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Performance & Monitoring</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>API Response Time</span>
                    <span className="font-medium">&lt; 200ms (p95)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CV Processing Time</span>
                    <span className="font-medium">&lt; 30 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span>System Uptime</span>
                    <span className="font-medium">99.9% SLA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data Processing</span>
                    <span className="font-medium">Real-time</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Monitoring & Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Error Rate Monitoring</span>
                    <span className="font-medium text-green-600">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Performance Tracking</span>
                    <span className="font-medium text-green-600">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Monitoring</span>
                    <span className="font-medium text-green-600">Enabled</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Automated Scaling</span>
                    <span className="font-medium text-green-600">Active</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Technical Resources */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Technical Resources</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Access detailed technical documentation, API references, and integration guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              API Reference
            </Button>
            <Button variant="outline" size="lg">
              Integration Guide
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:labs@nextdocglobal.io?subject=Technical%20Support">Technical Support</a>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Docs;