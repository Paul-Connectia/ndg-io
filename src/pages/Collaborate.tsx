import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import FormCollaborate from '@/components/FormCollaborate';
import { Card, CardContent } from '@/components/ui/card';
import { Building, TrendingUp, Users, Globe, Brain, Shield } from 'lucide-react';

const Collaborate = () => {
  const collaborationTypes = [
    {
      icon: Building,
      title: 'Institutional Partnerships',
      description: 'Medical schools, universities, and healthcare institutions seeking AI-powered learning solutions.',
      benefits: [
        'White-label implementation of NextDoc Labs technology',
        'Custom analytics dashboards for institutional insights',
        'Integration with existing learning management systems',
        'Faculty training and ongoing technical support'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Investment Opportunities',
      description: 'Strategic investors and venture capital firms interested in healthcare AI innovation.',
      benefits: [
        'Market-leading position in medical education AI',
        'Proven traction with medical institutions globally',
        'Scalable technology platform with high barriers to entry',
        'Strong regulatory compliance and data protection practices'
      ]
    },
    {
      icon: Users,
      title: 'Research Collaboration',
      description: 'Academic researchers, medical educators, and AI specialists joining our research initiatives.',
      benefits: [
        'Access to large-scale medical education datasets',
        'Collaboration opportunities with leading medical institutions',
        'Publication opportunities in high-impact journals',
        'Funding support for joint research projects'
      ]
    }
  ];

  const researchAreas = [
    {
      icon: Brain,
      title: 'AI in Medical Assessment',
      description: 'Developing next-generation assessment tools using machine learning and natural language processing.'
    },
    {
      icon: Globe,
      title: 'Global Medical Education',
      description: 'Creating inclusive AI solutions that bridge educational gaps across different healthcare systems.'
    },
    {
      icon: Shield,
      title: 'Privacy-Preserving AI',
      description: 'Advancing federated learning and differential privacy techniques for healthcare applications.'
    }
  ];

  return (
    <Layout 
      title="Collaborate — NextDoc Labs"
      description="Partner with NextDoc Labs in advancing AI-powered medical education. Opportunities for institutions, investors, and researchers."
    >
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Collaborate with NextDoc Labs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us in transforming medical education through AI research and innovation. 
              We welcome partnerships with institutions, investors, and fellow researchers.
            </p>
          </motion.div>

          {/* Collaboration Types */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Partnership Opportunities
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {collaborationTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <type.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground text-center mb-4">
                        {type.title}
                      </h3>
                      <p className="text-muted-foreground text-center mb-6">
                        {type.description}
                      </p>
                      <ul className="space-y-3">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research Areas */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Active Research Areas
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <area.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="mb-20">
            <FormCollaborate />
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-research border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Why Partner with NextDoc Labs?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Leading AI research in medical education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Proven track record with medical institutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Strong regulatory compliance and ethics framework</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Global reach with local adaptation capabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Next Steps
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Initial Discussion</h4>
                      <p className="text-sm text-muted-foreground">We'll schedule a call to understand your objectives and explore alignment.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Pilot Program</h4>
                      <p className="text-sm text-muted-foreground">We'll design a pilot program tailored to your specific needs and requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Full Partnership</h4>
                      <p className="text-sm text-muted-foreground">Establish a comprehensive partnership with ongoing support and development.</p>
                    </div>
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

export default Collaborate;