import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, BookOpen, Microscope, Users, Play, ArrowRight, Globe, ExternalLink } from 'lucide-react';
import Layout from '@/components/Layout';
import DemoModal from '@/components/DemoModal';

const Innovations = () => {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const globalInnovations = [
    {
      id: 'smartqbank',
      icon: Brain,
      title: 'SmartQBank™',
      description: 'Adaptive AI-powered question bank with 40,000+ MCQs',
      fullDescription: 'SmartQBank™ leverages machine learning to create personalized question sequences based on individual performance patterns. Our Focus 50™ algorithm identifies knowledge gaps and generates targeted practice sessions.',
      whyItMatters: [
        'Reduces study time by 40% through targeted learning',
        'Real-time performance analytics vs peer benchmarks',
        'Evidence-based question selection from medical literature'
      ],
      demoSteps: [
        'AI analyzes your performance patterns across 40,000+ questions',
        'Focus 50™ algorithm identifies your weakest topics daily',
        'Rank Predictor shows real-time percentile vs peers',
        'Adaptive difficulty adjusts based on competency mapping',
        'Detailed analytics show improvement trajectories'
      ]
    },
    {
      id: 'tutorai',
      icon: BookOpen,
      title: 'Tutor AI™',
      description: 'Conversational AI tutor with verified medical citations',
      fullDescription: 'Tutor AI™ combines natural language processing with medical knowledge graphs to provide contextual explanations. Every response includes verifiable citations from PubMed, NMC guidelines, and peer-reviewed literature.',
      whyItMatters: [
        'Instant access to evidence-based medical explanations',
        'Verifiable citations ensure academic integrity',
        'Adaptive questioning based on learning objectives'
      ],
      demoSteps: [
        'Natural language query processing for medical concepts',
        'Real-time PubMed citation integration and verification',
        'Context-aware explanations with evidence levels',
        'Interactive follow-up questions and clarifications',
        'Learning pathway suggestions based on queries'
      ]
    },
    {
      id: 'casesim',
      icon: Microscope,
      title: 'CaseSim™',
      description: 'Clinical simulation engine for OSCE preparation',
      fullDescription: 'CaseSim™ creates realistic patient encounters using advanced dialogue systems and clinical reasoning frameworks. Each simulation is validated against medical education standards and provides detailed performance feedback.',
      whyItMatters: [
        'Safe environment for clinical decision-making practice',
        'Standardized scoring based on medical competencies',
        'Unlimited practice scenarios across specialties'
      ],
      demoSteps: [
        'Simulated patient encounters with realistic responses',
        'Clinical reasoning pathway analysis and scoring',
        'Real-time feedback on diagnostic accuracy',
        'Competency mapping against clinical guidelines',
        'Performance tracking across multiple scenarios'
      ]
    },
    {
      id: 'adaptive',
      icon: Users,
      title: 'Adaptive Packs™',
      description: 'Personalized learning modules for specialty training',
      fullDescription: 'Adaptive Packs™ use cognitive modeling to create individualized learning experiences. Pre-assessment determines baseline knowledge, and AI algorithms construct optimal learning pathways for each specialty.',
      whyItMatters: [
        'Personalized learning paths increase retention by 65%',
        'Specialty-specific content aligned with board requirements',
        'Dynamic content adjustment based on learning progress'
      ],
      demoSteps: [
        'Pre-assessment determines individual knowledge gaps',
        'AI constructs personalized learning pathways',
        'Dynamic content adjustment based on progress analytics',
        'Specialty-specific modules with evidence-based content',
        'Competency validation through integrated assessments'
      ]
    }
  ];

  const ukProducts = [
    {
      id: 'cvbooster',
      icon: BookOpen,
      title: 'CV Booster™ (UK)',
      description: 'NHS-ready CVs with ATS mapping and mentor tips',
      fullDescription: 'CV Booster™ analyzes CVs against NHS Trust ATS systems and provides mentor-grade suggestions for maximum impact. Built specifically for UK medical professionals navigating Trust applications.',
      whyItMatters: [
        'ATS-optimized sections increase application success by 75%',
        'Mentor-quality phrasing improves professional presentation',
        'NHS-specific templates aligned with Trust requirements'
      ],
      demoSteps: [
        'Upload existing CV or start from NHS template',
        'AI analyzes against ATS requirements',
        'Mentor-grade phrasing suggestions appear',
        'One-click formatting for Trust applications',
        'Export in multiple formats for different roles'
      ]
    },
    {
      id: 'interviewsim',
      icon: Users,
      title: 'InterviewSim™ (UK)',
      description: 'AI panels with NHS rubrics and structured feedback',
      fullDescription: 'InterviewSim™ provides realistic interview practice with AI panels trained on NHS competency frameworks. Each session includes structured feedback aligned with official NHS rubrics.',
      whyItMatters: [
        'Practice with NHS-specific competency frameworks',
        'Structured feedback improves interview performance',
        'Unlimited practice across specialty and grade levels'
      ],
      demoSteps: [
        'Choose specialty & band (F1–ST)',
        'Get a station prompt + timing',
        'Answer; receive rubric-aligned feedback',
        'See improvement tips (NHS rubric)',
        'Track performance across interview types'
      ]
    },
    {
      id: 'sponsormatch',
      icon: Globe,
      title: 'SponsorMatch™ (UK)',
      description: 'Find visa-sponsoring roles & Trusts',
      fullDescription: 'SponsorMatch™ connects international medical graduates with visa-sponsoring opportunities across NHS Trusts. Real-time alerts and comprehensive Trust profiles included.',
      whyItMatters: [
        'Direct access to sponsoring Trust opportunities',
        'Real-time alerts for new visa sponsor roles',
        'Success rate data and application guidance'
      ],
      demoSteps: [
        'Set visa requirements and specialty preferences',
        'Browse sponsoring Trusts with live vacancies',
        'Get alerts for new sponsor opportunities',
        'Track application deadlines and requirements',
        'Access sponsor success rates and tips'
      ]
    },
    {
      id: 'gapmap',
      icon: Brain,
      title: 'GapMap™ (UK)',
      description: 'Make progress visible across competencies',
      fullDescription: 'GapMap™ visualizes training progress against NHS competency requirements. Shareable progress reports help maintain clear communication with supervisors and mentors.',
      whyItMatters: [
        'Visual competency tracking improves training efficiency',
        'Sharable reports enhance supervisor communication',
        'Personalized development plans accelerate progression'
      ],
      demoSteps: [
        'Map current competencies against specialty requirements',
        'Visualize gaps in knowledge and experience',
        'Set milestones for training progression',
        'Share progress reports with supervisors',
        'Get personalized development suggestions'
      ]
    }
  ];

  return (
    <Layout 
      title="Innovations — NextDoc Labs"
      description="Explore our research-driven AI innovations: SmartQBank™, Tutor AI™, CaseSim™, and Adaptive Packs™. Interactive demos and technical insights."
    >
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              AI Innovations in Medical Learning
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our research-driven innovations that are transforming how medical professionals learn and advance their careers.
            </p>
          </motion.div>

          <div className="bg-accent/10 rounded-lg p-4 mb-16 text-center">
            <p className="text-sm text-foreground">
              <strong>NextDoc Labs .io is an informative showcase.</strong> For UK product access visit <span className="font-medium">nextdoc.co.uk</span>
            </p>
          </div>

          <Tabs defaultValue="global" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="global">Global R&D</TabsTrigger>
              <TabsTrigger value="uk">UK Clinical Pathway Suite</TabsTrigger>
            </TabsList>

            <TabsContent value="global">
              <Tabs defaultValue="smartqbank" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                  {globalInnovations.map((innovation) => (
                    <TabsTrigger key={innovation.id} value={innovation.id} className="flex items-center gap-2">
                      <innovation.icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{innovation.title}</span>
                      <span className="sm:hidden">{innovation.title.split('™')[0]}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {globalInnovations.map((innovation) => (
              <TabsContent key={innovation.id} value={innovation.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-12 items-start"
                >
                  {/* Innovation Details */}
                  <div className="space-y-8">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <innovation.icon className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-3xl">{innovation.title}</CardTitle>
                            <CardDescription className="text-lg">{innovation.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-6">
                          {innovation.fullDescription}
                        </p>
                        <Button 
                          onClick={() => setSelectedDemo(innovation.id)}
                          size="lg"
                          className="w-full"
                        >
                          <Play className="mr-2 h-5 w-5" />
                          View Demo
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Why it matters */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Why it matters</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {innovation.whyItMatters.map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <ArrowRight className="h-3 w-3 text-accent" />
                              </div>
                              <span className="text-muted-foreground">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Demo Preview */}
                  <div className="space-y-6">
                    <Card className="bg-gradient-research border-0">
                      <CardContent className="p-8">
                        <div className="aspect-video bg-card rounded-xl border flex items-center justify-center mb-6">
                          <div className="text-center">
                            <Play className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">Interactive Demo Preview</p>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-4">
                          Research Implementation
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          This demonstration showcases our research methodologies and AI capabilities. 
                          Full implementations are available through institutional partnerships.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Technical Approach</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">Machine Learning Models</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-sm text-muted-foreground">Evidence-Based Content</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">Clinical Validation</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">Privacy-First Architecture</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
                </TabsContent>
                ))}
              </Tabs>
            </TabsContent>

            <TabsContent value="uk">
              <Tabs defaultValue="cvbooster" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                  {ukProducts.map((product) => (
                    <TabsTrigger key={product.id} value={product.id} className="flex items-center gap-2">
                      <product.icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{product.title.replace(' (UK)', '')}</span>
                      <span className="sm:hidden">{product.title.split('™')[0]}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {ukProducts.map((product) => (
                  <TabsContent key={product.id} value={product.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="grid lg:grid-cols-2 gap-12 items-start"
                    >
                      {/* Product Details */}
                      <div className="space-y-8">
                        <Card className="relative">
                          <div className="absolute top-4 right-4 text-xs" aria-hidden="true">🇬🇧</div>
                          <CardHeader>
                            <div className="flex items-center gap-4 mb-4">
                              <div className="w-16 h-16 bg-[#003087]/10 rounded-full flex items-center justify-center">
                                <product.icon className="h-8 w-8 text-[#003087]" />
                              </div>
                              <div>
                                <CardTitle className="text-3xl">{product.title}</CardTitle>
                                <CardDescription className="text-lg">{product.description}</CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-6">
                              {product.fullDescription}
                            </p>
                            <div className="flex flex-col gap-3">
                              <Button 
                                onClick={() => setSelectedDemo(product.id)}
                                size="lg"
                                className="w-full"
                              >
                                <Play className="mr-2 h-5 w-5" />
                                View Demo
                              </Button>
                              <Button 
                                variant="outline"
                                onClick={() => window.open('https://nextdoc.co.uk', '_blank', 'noopener,noreferrer')}
                                className="w-full"
                                aria-label={`Open on nextdoc.co.uk – ${product.title}`}
                              >
                                Open on nextdoc.co.uk
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Why it matters */}
                        <Card>
                          <CardHeader>
                            <CardTitle>Why it matters</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3">
                              {product.whyItMatters.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <ArrowRight className="h-3 w-3 text-accent" />
                                  </div>
                                  <span className="text-muted-foreground">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Demo Preview */}
                      <div className="space-y-6">
                        <Card className="bg-gradient-research border-0">
                          <CardContent className="p-8">
                            <div className="aspect-video bg-card rounded-xl border flex items-center justify-center mb-6">
                              <div className="text-center">
                                <Play className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                                <p className="text-sm text-muted-foreground">Interactive Demo Preview</p>
                              </div>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">
                              UK Clinical Implementation
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              This demonstration showcases our UK-specific clinical pathway tools. 
                              Full access available on nextdoc.co.uk.
                            </p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Technical Approach</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#003087] rounded-full"></div>
                                <span className="text-sm text-muted-foreground">NHS Framework Integration</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span className="text-sm text-muted-foreground">UK Medical Standards</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                <span className="text-sm text-muted-foreground">Clinical Pathway Optimization</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#003087] rounded-full"></div>
                                <span className="text-sm text-muted-foreground">Trust-Specific Customization</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>
                  </TabsContent>
                ))}
              </Tabs>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Demo Modals */}
      {selectedDemo && (
        <DemoModal
          isOpen={!!selectedDemo}
          onClose={() => setSelectedDemo(null)}
          title={[...globalInnovations, ...ukProducts].find(i => i.id === selectedDemo)?.title || ''}
          description={[...globalInnovations, ...ukProducts].find(i => i.id === selectedDemo)?.fullDescription || ''}
          demoSteps={[...globalInnovations, ...ukProducts].find(i => i.id === selectedDemo)?.demoSteps || []}
        />
      )}
    </Layout>
  );
};

export default Innovations;