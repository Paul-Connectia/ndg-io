import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Database, AlertCircle, BookOpen, Shield, Sparkles } from "lucide-react";

const PoliciesHub = () => {
  const policies = [
    {
      id: "authorship",
      icon: FileText,
      title: "Authorship Guidelines",
      summary: "ICMJE criteria for authorship, CRediT taxonomy, and corresponding author responsibilities. ORCID required for all corresponding authors."
    },
    {
      id: "data",
      icon: Database,
      title: "Data Sharing Policy",
      summary: "Open data requirements, Zenodo integration, anonymization protocols, and CC BY/CC0 licensing guidance."
    },
    {
      id: "corrections",
      icon: AlertCircle,
      title: "Corrections & Retractions",
      summary: "COPE-aligned procedures for post-publication amendments, errata, and article withdrawal criteria."
    },
    {
      id: "preprints",
      icon: BookOpen,
      title: "Preprint Policy",
      summary: "Preprint posting guidelines, versioning standards, and dual-submission rules aligned with ICMJE."
    },
    {
      id: "ethics",
      icon: Shield,
      title: "Research Ethics",
      summary: "REC/IRB approval requirements, informed consent, data protection (UK GDPR), and animal research standards."
    },
    {
      id: "ai",
      icon: Sparkles,
      title: "AI-Assisted Writing Disclosure",
      summary: "Transparency requirements for AI tool usage in manuscript preparation, analysis, and figure generation."
    }
  ];

  return (
    <Layout
      title="Editorial Policies - NextDoc Labs"
      description="Our editorial standards, research ethics, and governance policies aligned with COPE, ICMJE, and EQUATOR frameworks."
      canonical="/policies"
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-hero-grad text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-balance">
              Editorial Policies
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              NextDoc Labs follows COPE, ICMJE, and EQUATOR guidance (CONSORT, STROBE, PRISMA, SQUIRE). 
              ORCID required for corresponding authors. DOIs issued via Crossref; datasets via Zenodo.
            </p>
          </div>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-16 lg:py-24 bg-wash-research">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy) => {
              const Icon = policy.icon;
              return (
                <Card key={policy.id} className="hover:shadow-xl transition-all duration-200" id={policy.id}>
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-nx-cyan/10 rounded-full flex items-center justify-center mb-4 shadow-sm">
                      <Icon className="h-7 w-7 text-nx-cyan" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {policy.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {policy.summary}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Standards Statement */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Our Standards
                </h2>
                <div className="text-muted-foreground space-y-3 leading-relaxed">
                  <p>
                    All research published by NextDoc Labs adheres to internationally recognized standards for research integrity, 
                    transparency, and reproducibility.
                  </p>
                  <p>
                    We follow <strong>COPE</strong> (Committee on Publication Ethics) guidelines for editorial conduct, 
                    <strong> ICMJE</strong> (International Committee of Medical Journal Editors) recommendations for authorship and disclosure, 
                    and <strong>EQUATOR</strong> reporting guidelines including CONSORT (trials), STROBE (observational studies), 
                    PRISMA (systematic reviews), and SQUIRE (quality improvement).
                  </p>
                  <p>
                    <strong>ORCID identifiers</strong> are required for all corresponding authors to ensure proper attribution. 
                    All articles receive persistent <strong>DOIs via Crossref</strong>, and datasets are archived with 
                    <strong> Zenodo DOIs</strong> under open licenses (CC BY 4.0 or CC0) where possible.
                  </p>
                  <p className="text-sm pt-2 border-t">
                    Questions about our policies? Contact us at <a href="mailto:labs@nextdocglobal.io" className="text-nx-cyan hover:underline">labs@nextdocglobal.io</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PoliciesHub;
