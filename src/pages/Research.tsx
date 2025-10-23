import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { BookOpen, Shield, Users, Award, CheckCircle2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Research = () => {
  const standards = [
    {
      name: "COPE",
      description: "Committee on Publication Ethics guidelines",
      icon: Shield
    },
    {
      name: "ICMJE",
      description: "International Committee of Medical Journal Editors",
      icon: BookOpen
    },
    {
      name: "EQUATOR",
      description: "CONSORT, STROBE, PRISMA, SQUIRE reporting standards",
      icon: CheckCircle2
    }
  ];

  const focusAreas = [
    {
      title: "NHS Workforce Integration",
      description: "Examining policies, practices, and outcomes for international medical graduate integration into the NHS workforce.",
      icon: Users
    },
    {
      title: "Medical Education Innovation",
      description: "Investigating AI, adaptive learning, and evidence-based assessment methodologies in medical training.",
      icon: BookOpen
    },
    {
      title: "Career Pathway Optimization",
      description: "Mapping optimal progression routes and identifying barriers for international healthcare professionals.",
      icon: Award
    },
    {
      title: "Responsible AI Development",
      description: "Ensuring ethical, transparent, and effective AI applications in healthcare and medical education.",
      icon: Shield
    }
  ];

  const methodology = [
    "Rigorous evidence collection and systematic reviews",
    "Quantitative and qualitative research methodologies",
    "Stakeholder engagement (medical professionals, institutions, patients)",
    "Peer review and external validation processes",
    "Transparent reporting following EQUATOR guidelines",
    "Data availability and reproducibility commitments"
  ];

  return (
    <Layout 
      title="Research — NextDoc Labs"
      description="Our research standards, methodology, and focus areas advancing international medical education and NHS integration."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Research & Methodology
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Advancing international medical education through rigorous, evidence-based research
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Standards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Research Standards
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We adhere to internationally recognized standards for research integrity and reporting
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <standard.icon className="h-8 w-8 text-cyan" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {standard.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {standard.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="py-16 md:py-24 bg-gradient-research">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Research Focus Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our work spans multiple domains critical to international medical education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <area.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {area.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Research Methodology
            </h2>
            <p className="text-xl text-muted-foreground">
              Systematic, transparent, and reproducible research practices
            </p>
          </motion.div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-4">
                {methodology.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-cyan flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Access & Transparency */}
      <section className="py-16 md:py-24 bg-gradient-research">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Data Access & Transparency
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    We are committed to research transparency and data sharing within ethical and legal boundaries. Where possible, we provide access to anonymized datasets, code repositories, and supplementary materials.
                  </p>
                  <p>
                    Our plagiarism screening, conflict of interest disclosures, and ethical review processes follow COPE guidelines. All research involving human participants receives appropriate ethical approval.
                  </p>
                  <p className="font-semibold text-foreground">
                    Data availability statements are included in all published papers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Research Team & Collaboration */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Research Team & Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our multidisciplinary team includes medical professionals, data scientists, AI researchers, and health policy experts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-cyan mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Core Research Team
                </h3>
                <p className="text-muted-foreground mb-6">
                  12+ active researchers across medicine, AI, and health policy
                </p>
                <Button variant="outline" asChild>
                  <a href="/contact">
                    Contact Team
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Institutional Partners
                </h3>
                <p className="text-muted-foreground mb-6">
                  Collaborating with NHS Trusts and medical education institutions
                </p>
                <Button variant="outline" asChild>
                  <a href="/collaborate">
                    Partnership Inquiries
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Collaborate with NextDoc Labs
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We welcome research partnerships, data collaborations, and academic discussions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href="mailto:labs@nextdocglobal.io?subject=Research%20Partnerships">
                  Research Partnerships
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline-on-dark" asChild>
                <a href="/publications">
                  View Publications
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
