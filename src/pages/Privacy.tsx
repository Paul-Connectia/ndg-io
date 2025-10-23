import Layout from "@/components/Layout";
import Section from "@/components/ui/section";

const Privacy = () => {
  return (
    <Layout 
      title="Privacy Policy — NextDoc Labs"
      description="How NextDoc Labs protects your data and respects your privacy"
      canonical="/privacy"
    >
      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <h2>1. Data Controller</h2>
          <p>NextDoc Global Ltd, 4 Queen's Road, Wimbledon, London SW19 8ND, UK</p>
          
          <h2>2. Data We Collect</h2>
          <ul>
            <li>Account information (email, name, institution)</li>
            <li>Usage analytics (anonymised page views, session duration)</li>
            <li>Research activity (downloads, citations, bookmarks)</li>
          </ul>
          
          <h2>3. Legal Basis</h2>
          <p>We process data under legitimate interest (research platform operation) and consent (analytics cookies).</p>
          
          <h2>4. Data Sharing</h2>
          <p>We do not sell personal data. Analytics providers: Google Analytics, Meta Pixel (with consent).</p>
          
          <h2>5. Your Rights (UK GDPR)</h2>
          <ul>
            <li>Right to access your data</li>
            <li>Right to rectification</li>
            <li>Right to erasure</li>
            <li>Right to withdraw consent</li>
          </ul>
          
          <h2>6. Data Retention</h2>
          <p>Account data retained while account is active. Analytics data retained for 26 months.</p>
          
          <h2>7. Contact</h2>
          <p>Privacy questions: labs@nextdocglobal.io</p>
          
          <p className="text-sm text-muted-foreground mt-8">Last updated: January 2025</p>
        </div>
      </Section>
    </Layout>
  );
};

export default Privacy;
