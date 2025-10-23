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
  | 'article'
  | 'white-paper'
  | 'protocol'
  | 'review'
  | 'policy'
  | 'dataset';

export type Item = {
  id: string;
  type: ContentType;
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
