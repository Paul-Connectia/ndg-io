import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const EditorialBoard = () => {
  const boardMembers = [
    {
      name: "Dr Sarah Johnson",
      role: "Editor-in-Chief",
      affiliation: "NHS England",
      orcid: "0000-0002-1825-0097",
      expertise: ["Workforce Integration", "IMG Pathways", "Healthcare Policy"]
    },
    {
      name: "Prof Michael Thompson",
      role: "Associate Editor",
      affiliation: "University College London",
      orcid: "0000-0003-2947-5821",
      expertise: ["Medical Education", "Assessment Methods", "Quantitative Research"]
    },
    {
      name: "Dr Roshan Khanderi",
      role: "Managing Editor",
      affiliation: "NextDoc Global",
      orcid: "0000-0001-9876-5432",
      expertise: ["Responsible AI", "PLAB Preparation", "EdTech"]
    },
    {
      name: "Dr Priya Sharma",
      role: "Section Editor - Protocols",
      affiliation: "King's College London",
      orcid: "0000-0004-3322-1198",
      expertise: ["Mentorship Models", "Career Development", "Qualitative Methods"]
    }
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Layout
      title="Editorial Board - NextDoc Labs"
      description="Meet the editorial team driving rigorous, applied research on NHS workforce, medical education, and responsible AI."
      canonical="/board"
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-hero-grad text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-balance">
              Editorial Board
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Our editorial team brings expertise across NHS workforce integration, medical education, 
              and evidence-based practice. All editors hold ORCID identifiers and follow COPE ethical guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Board Members Grid */}
      <section className="py-16 lg:py-24 bg-wash-research">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {boardMembers.map((member) => (
              <Card key={member.orcid} className="hover:shadow-xl transition-all duration-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-16 w-16 bg-nx-cyan text-white text-xl">
                      <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-nx-cyan font-medium mb-1">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {member.affiliation}
                      </p>
                    </div>
                  </div>

                  {/* ORCID Badge */}
                  <a
                    href={`https://orcid.org/${member.orcid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-nx-cyan hover:underline mb-4"
                  >
                    <ExternalLink className="h-3 w-3" />
                    ORCID: {member.orcid}
                  </a>

                  {/* Expertise Tags */}
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16">
            <Card className="max-w-4xl mx-auto bg-muted/30">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Reviewer Registry (Coming Soon)
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  We're building a public reviewer registry with ORCID integration, CPD certification, 
                  and DOI-credited reviews. Interested in joining as a peer reviewer? 
                  Contact us at <a href="mailto:labs@nextdocglobal.io" className="text-nx-cyan hover:underline">labs@nextdocglobal.io</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EditorialBoard;
