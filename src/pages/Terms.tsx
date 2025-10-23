import Layout from "@/components/Layout";
import Section from "@/components/ui/section";

const Terms = () => {
  return (
    <Layout 
      title="Terms & Conditions — NextDoc Labs"
      description="Terms and conditions for using NextDoc Labs research platform"
      canonical="/terms"
    >
      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <h2>1. Platform Access</h2>
          <p>NextDoc Labs is a research platform operated by NextDoc Global Ltd (UK Company). Access is provided for research and educational purposes.</p>
          
          <h2>2. User Responsibilities</h2>
          <p>Users must comply with research ethics standards, maintain confidentiality, and respect intellectual property rights.</p>
          
          <h2>3. Content Licensing</h2>
          <p>Research content is subject to individual licensing terms. Open Access content is clearly marked.</p>
          
          <h2>4. Limitation of Liability</h2>
          <p>NextDoc Global Ltd provides the platform "as is" without warranties for clinical decision-making.</p>
          
          <h2>5. Governing Law</h2>
          <p>These terms are governed by the laws of England and Wales.</p>
          
          <p className="text-sm text-muted-foreground mt-8">Last updated: January 2025</p>
        </div>
      </Section>
    </Layout>
  );
};

export default Terms;
