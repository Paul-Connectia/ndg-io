export type Author = {
  name: string;
  orcid?: string;
  affiliation?: string;
  role?: string; // CRediT taxonomy
};

export type Metrics = {
  views: number;
  downloads: number;
  citations?: number;
};

export type PeerStatus = 'preprint' | 'under-review' | 'peer-reviewed';

export type ContentType = 
  | 'research-article'      // Original research, case studies
  | 'systematic-review'     // Includes meta-analyses
  | 'white-paper'           // Frameworks, policy briefs, position papers
  | 'protocol'              // Study protocols, registered reports
  | 'conference-paper'      // Conference abstracts, proceedings
  | 'dataset';              // Data + code repositories

export type ContentSubtype = 
  | 'original-research'
  | 'case-study'
  | 'meta-analysis'
  | 'systematic-review'
  | 'narrative-review'
  | 'scoping-review'
  | 'policy-brief'
  | 'framework'
  | 'position-paper'
  | 'conference-abstract'
  | 'conference-full-paper'
  | 'study-protocol'
  | 'registered-report';

export type Item = {
  id: string;
  type: ContentType;
  subtype?: ContentSubtype;  // NEW - allows granular classification
  title: string;
  abstract: string;
  slug: string;
  doi?: string;
  version: string;
  publishedAt: string;
  updatedAt?: string;
  authors: Author[];
  affiliations?: string[];
  domains: string[];
  specialties: string[];
  geography: string[];
  method?: string;
  peerStatus: PeerStatus;
  openAccess: boolean;
  openData: boolean;
  dataStatement?: string;
  pdfUrl?: string;
  htmlUrl?: string;
  datasetUrl?: string;
  ethics?: string;
  funding?: string;
  conflicts?: string;
  citation?: {
    harvard: string;
    vancouver: string;
    bibtex?: string;
  };
  metrics: Metrics;
  keywords?: string[];
  references?: string[];
  changeLog?: Array<{
    version: string;
    date: string;
    notes: string;
  }>;
};
