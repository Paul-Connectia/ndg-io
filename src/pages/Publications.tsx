import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Calendar, Users, Filter } from 'lucide-react';
import Layout from '@/components/Layout';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Publication {
  id: string;
  title: string;
  category: 'Healthcare Policy' | 'Medical Education' | 'Career Development' | 'Cultural Integration' | 'All';
  authors: string[];
  date: string;
  downloads: number;
  abstract: string;
  pdfUrl?: string;
}

const Publications = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const publications: Publication[] = [
    {
      id: 'workforce-integration-nhs',
      title: 'International Healthcare Professional Integration in NHS: A 5-Year Analysis',
      category: 'Healthcare Policy',
      authors: ['Dr. Sarah Johnson', 'Prof. Michael Thompson', 'Dr. Raj Patel'],
      date: 'March 2024',
      downloads: 2847,
      abstract: 'This comprehensive study examines the integration patterns of international healthcare professionals into the NHS workforce over five years, identifying key success factors, barriers, and policy recommendations for improving retention and satisfaction rates.'
    },
    {
      id: 'ai-medical-education',
      title: 'AI-Enhanced Medical Education: Transforming PLAB Preparation',
      category: 'Medical Education',
      authors: ['Dr. Emily Chen', 'Dr. Alexander Wright'],
      date: 'January 2024',
      downloads: 1923,
      abstract: 'An evidence-based analysis of AI integration in medical examination preparation, demonstrating improved learning outcomes through adaptive algorithms, personalized feedback mechanisms, and competency-based assessments.'
    },
    {
      id: 'mentorship-models',
      title: 'Mentorship Models in International Medical Career Development',
      category: 'Career Development',
      authors: ['Dr. Priya Sharma', 'Prof. James Mitchell'],
      date: 'November 2023',
      downloads: 1456,
      abstract: 'This paper explores effective mentorship frameworks for international medical professionals, analyzing peer mentoring, hierarchical models, and technology-enabled guidance systems across multiple NHS Trusts.'
    },
    {
      id: 'cultural-competency',
      title: 'Cultural Competency Training for International Healthcare Professionals',
      category: 'Cultural Integration',
      authors: ['Dr. Aisha Rahman', 'Dr. Thomas Hughes'],
      date: 'September 2023',
      downloads: 987,
      abstract: 'A systematic review of cultural competency training programs in UK healthcare settings, examining efficacy, implementation challenges, and patient outcome improvements across diverse clinical environments.'
    },
    {
      id: 'assessment-validity',
      title: 'Validity and Reliability in AI-Based Medical Assessments',
      category: 'Medical Education',
      authors: ['Prof. David Williams', 'Dr. Maria Garcia'],
      date: 'August 2023',
      downloads: 1234,
      abstract: 'A rigorous examination of psychometric properties of AI-based medical assessments, comparing traditional and adaptive testing methodologies across multiple medical specialties.'
    },
    {
      id: 'policy-framework',
      title: 'Policy Framework for International Healthcare Professional Integration',
      category: 'Healthcare Policy',
      authors: ['Dr. James Patterson', 'Dr. Sophia Lee'],
      date: 'June 2023',
      downloads: 876,
      abstract: 'Proposing a comprehensive policy framework for streamlining international healthcare professional integration, addressing regulatory barriers, credentialing processes, and support mechanisms.'
    }
  ];

  const categories = ['All', 'Healthcare Policy', 'Medical Education', 'Career Development', 'Cultural Integration'];

  const filteredPublications = selectedCategory === 'All' 
    ? publications 
    : publications.filter(pub => pub.category === selectedCategory);

  const totalDownloads = publications.reduce((sum, pub) => sum + pub.downloads, 0);
  const totalPapers = publications.length;

  return (
    <Layout 
      title="Research Publications - NextDoc Labs"
      description="Our latest publications advancing international medical education and NHS integration."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Research Publications
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Our latest publications advancing international medical education and NHS integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-research">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">{totalPapers}</div>
              <div className="text-muted-foreground">Published Papers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">{totalDownloads.toLocaleString()}</div>
              <div className="text-muted-foreground">Total Downloads</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">12+</div>
              <div className="text-muted-foreground">Active Researchers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="h-5 w-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-6">
            {filteredPublications.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Left side - Category & Downloads */}
                      <div className="flex lg:flex-col items-start gap-4 lg:gap-2 lg:min-w-[200px]">
                        <span className="px-3 py-1 bg-cyan/20 text-cyan dark:text-cyan-muted text-xs font-semibold rounded-full whitespace-nowrap">
                          {paper.category}
                        </span>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Download className="h-4 w-4 text-gold" />
                          <span>{paper.downloads.toLocaleString()} downloads</span>
                        </div>
                      </div>

                      {/* Middle - Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                          {paper.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {paper.abstract}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span>{paper.authors.join(', ')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{paper.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right side - Actions */}
                      <div className="flex lg:flex-col gap-3 lg:min-w-[140px]">
                        <Button variant="outline" className="flex-1 lg:flex-none">
                          Preview
                        </Button>
                        <Button className="flex-1 lg:flex-none bg-primary hover:bg-primary/90">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-research">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated with Our Latest Research
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our early access list to be notified about new publications, research opportunities, and collaboration initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cyan" asChild>
                <Link to="/collaborate">Join Early Access List</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Research Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Publications;
