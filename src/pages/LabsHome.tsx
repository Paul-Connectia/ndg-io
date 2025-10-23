import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Microscope, Globe2, TrendingUp, Award, FileText, BookOpen, GraduationCap, Users } from 'lucide-react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import TypeTabs from '@/components/scholarly/TypeTabs';
import ItemCard from '@/components/scholarly/ItemCard';
import { ContentType, Item } from '@/types/scholarly';
import sampleItemsData from '@/data/sampleItems.json';

const LabsHome = () => {
  const [activeType, setActiveType] = useState<ContentType | 'all'>('all');
  const sampleItems = sampleItemsData as Item[];

  const filteredItems = activeType === 'all' 
    ? sampleItems 
    : sampleItems.filter(item => item.type === activeType);

  const displayedItems = filteredItems.slice(0, 4);

  const focusAreas = [
    {
      icon: Microscope,
      title: 'Medical Education Technology',
      description: 'Investigating AI and VR applications in medical training and assessment'
    },
    {
      icon: Globe2,
      title: 'Healthcare Integration',
      description: 'Studying best practices for international healthcare professional integration'
    },
    {
      icon: TrendingUp,
      title: 'Assessment Methods',
      description: 'Developing improved evaluation techniques for medical competency'
    },
    {
      icon: Award,
      title: 'Career Pathways',
      description: 'Mapping optimal career progression routes for international medical graduates'
    }
  ];

  return (
    <Layout 
      title="NextDoc Labs - Evidence-Based Medical Research & White Papers"
      description="Evidence-led white papers and practical frameworks on NHS workforce, medical education, and health & social care. The research arm of NextDoc Global."
    >
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-hero text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-balance">
              NextDoc Labs
            </h1>
            <p className="text-xl lg:text-2xl mb-4 leading-relaxed opacity-90">
              Evidence-led white papers and practical frameworks on NHS workforce, medical education, and health & social care.
            </p>
            <p className="text-lg mb-8 opacity-80 italic">
              The research arm of NextDoc Global.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90 min-h-[44px]" asChild>
                <Link to="/articles">
                  Browse Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline-on-dark" className="min-h-[44px]" asChild>
                <Link to="/collaborate">
                  Join Early Access List
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is NextDoc Labs */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-10 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
                  What is NextDoc Labs?
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    NextDoc Labs publishes white papers, working papers, and methods notes focused on NHS workforce integration, IMG pathways, medical education, and responsible AI. We follow COPE/ICMJE guidance and EQUATOR reporting standards, aiming for BMJ-level rigor with service-design practicality.
                  </p>
                  <p className="font-semibold text-foreground">
                    <strong>Coming soon:</strong> author submissions, peer review, and a reviewer registry.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Latest Research */}
      <section className="py-16 lg:py-24 bg-wash-research">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Latest Research
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Evidence-based research advancing NHS workforce, medical education, and responsible AI
            </p>
          </motion.div>

          {/* Type Tabs */}
          <div className="mb-8">
            <TypeTabs activeType={activeType} onTypeChange={setActiveType} />
          </div>

          {/* Item Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {displayedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ItemCard item={item} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/articles">
                View All Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section id="focus" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Our Research Focus Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              We conduct research across multiple domains to advance international medical education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <area.icon className="h-8 w-8 text-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground max-w-4xl mx-auto">
              Our work aligns with NHS guidance, NICE, BNF, ICMJE, COPE, and EQUATOR (CONSORT, STROBE, PRISMA, SQUIRE).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guidelines Preview */}
      <section className="py-16 md:py-24 bg-gradient-research">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Guidelines (Preview)
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Author Guidelines (Preview)
                </h3>
                <p className="text-muted-foreground mb-6">
                  2-page overview: what we accept, reporting standards, licensing, conflicts.
                </p>
                <Button variant="outline" disabled className="w-full">
                  Download Preview (Coming Soon)
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Editorial & Ethics (Preview)
                </h3>
                <p className="text-muted-foreground mb-6">
                  COPE/ICMJE alignment, plagiarism screening, data availability.
                </p>
                <Button variant="outline" disabled className="w-full">
                  Download Preview (Coming Soon)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contribute to Research */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Contribute to Our Research
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our research community and help shape the future of international medical education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="opacity-60">
              <CardContent className="p-8 text-center">
                <GraduationCap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Participate in Research
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contribute to studies and help advance medical education research
                </p>
                <Button variant="outline" disabled className="w-full">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="opacity-60">
              <CardContent className="p-8 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Submit Research Proposal
                </h3>
                <p className="text-muted-foreground mb-6">
                  Share your research ideas and collaborate with our team
                </p>
                <Button variant="outline" disabled className="w-full">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gold">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Join Early Access List
                </h3>
                <p className="text-muted-foreground mb-6">
                  Be the first to access new features and research opportunities
                </p>
                <Button className="w-full bg-cyan hover:bg-cyan/90 text-white" asChild>
                  <Link to="/collaborate">
                    Join Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-balance">
              Ready to Explore Our Research?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Browse our collection of white papers and join the research community shaping the future of international medical education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90 min-h-[44px]" asChild>
                <Link to="/publications">
                  Browse White Papers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline-on-dark" className="min-h-[44px]" asChild>
                <Link to="/research">
                  View All Research
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default LabsHome;
