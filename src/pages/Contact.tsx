import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/ui/section";
import { Mail, MapPin, Phone, Globe, Users, Briefcase } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      title: "AI & Product Inquiries",
      email: "labs@nextdocglobal.io?subject=AI%20Product%20Inquiry",
      description: "Questions about our AI products, technical implementation, or product demos",
      icon: <Mail className="h-6 w-6" />
    },
    {
      title: "Partnership Opportunities",
      email: "labs@nextdocglobal.io?subject=Partnership%20Opportunity",
      description: "Collaboration with hospitals, universities, regulators, and accreditation bodies",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Enterprise Solutions",
      email: "labs@nextdocglobal.io?subject=Enterprise%20Solutions",
      description: "Custom AI solutions for healthcare organizations and medical institutions",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Research Collaboration",
      email: "labs@nextdocglobal.io?subject=Research%20Collaboration",
      description: "Joint research projects, publications, and academic partnerships",
      icon: <Globe className="h-6 w-6" />
    }
  ];

  const offices = [
    {
      location: "London, UK",
      address: "Healthcare AI Research Center\nLondon, United Kingdom",
      focus: "European operations and NHS integration",
      icon: <MapPin className="h-5 w-5" />
    },
    {
      location: "Bangalore, India",
      address: "Medical AI Development Hub\nBangalore, Karnataka, India",
      focus: "India operations and regional compliance",
      icon: <MapPin className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <Section variant="gradient" className="text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact NextDoc Labs
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8">
            Let's discuss how AI can transform medical careers
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Whether you're interested in our products, research collaboration, or enterprise solutions,
            we'd love to hear from you.
          </p>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary-muted text-primary">
                      {method.icon}
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                  </div>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`mailto:${method.email}`}>
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section variant="muted">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Send Us a Message</h2>
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div>
                  <Label htmlFor="organization">Organization</Label>
                  <Input id="organization" placeholder="Your hospital, university, or company" />
                </div>

                <div>
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-products">AI Products & Solutions</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                      <SelectItem value="research">Research Collaboration</SelectItem>
                      <SelectItem value="press">Press & Media</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs, questions, or how we can help..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Email
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Offices */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Offices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {office.icon}
                    {office.location}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">
                        {office.address}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">{office.focus}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Quick Links */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">UK Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Access our UK-focused medical career products
                </p>
                <Button variant="outline" asChild>
                  <a href="https://nextdoc.co.uk" target="_blank" rel="noopener noreferrer">
                    Visit nextdoc.co.uk
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Corporate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about our parent company
                </p>
                <Button variant="outline" asChild>
                  <a href="https://nextdocglobal.com" target="_blank" rel="noopener noreferrer">
                    Visit nextdocglobal.com
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Response Time */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Response Times</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-primary-muted">
              <h3 className="font-semibold text-primary mb-2">General Inquiries</h3>
              <p className="text-2xl font-bold text-primary">24 hours</p>
            </div>
            <div className="p-6 rounded-lg bg-secondary-muted">
              <h3 className="font-semibold text-secondary mb-2">Enterprise/Partnerships</h3>
              <p className="text-2xl font-bold text-secondary">12 hours</p>
            </div>
            <div className="p-6 rounded-lg bg-accent">
              <h3 className="font-semibold text-accent-foreground mb-2">Technical Support</h3>
              <p className="text-2xl font-bold text-accent-foreground">4 hours</p>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Contact;