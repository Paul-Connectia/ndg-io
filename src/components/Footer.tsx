import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-border border-b-8 border-b-gold">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Research */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Research</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link to="/" className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Home</Link>
              <Link to="/articles" className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Articles</Link>
              <Link to="/reviews" className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Reviews</Link>
              <Link to="/white-papers" className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Policy Papers</Link>
              <Link to="/protocols" className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Protocols</Link>
              <Link to="/conference-papers" className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Conference</Link>
              <Link to="/datasets" className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Data+Code</Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <span className="block text-muted-foreground/60">Author Guidelines (Coming Soon)</span>
              <span className="block text-muted-foreground/60">Editorial Ethics (Coming Soon)</span>
              <span className="block text-muted-foreground/60">Reviewer Registry (Coming Soon)</span>
              <Link to="/security" className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Data Security</Link>
            </div>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Policies</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link to="/policies#authorship" className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Authorship</Link>
              <Link to="/policies#data" className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Data Sharing</Link>
              <Link to="/policies#corrections" className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Corrections</Link>
              <Link to="/policies#preprints" className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Preprints</Link>
              <Link to="/policies#ethics" className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Research Ethics</Link>
              <Link to="/policies#ai" className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">AI Disclosure</Link>
            </div>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">About</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="https://nextdocglobal.com"
                className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                NextDoc Global
              </a>
              <Link to="/collaborate" className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Partners</Link>
              <Link to="/contact" className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Contact</Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="https://researchgate.net"
                className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                ResearchGate
              </a>
              <a
                href="https://linkedin.com"
                className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="mailto:labs@nextdocglobal.io"
                className="block hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                labs@nextdocglobal.io
              </a>
            </div>
          </div>
        </div>

        {/* Cross-brand links */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <a
                href="https://nextdocglobal.com"
                className="hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                NextDoc Global
              </a>
              <a
                href="https://www.nextdocuk.com/"
                className="hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                NextDoc UK
              </a>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link to="/terms" className="hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Terms</Link>
              <Link to="/privacy" className="hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Privacy</Link>
              <button
                onClick={() => {
                  const event = new CustomEvent('manage-cookies');
                  window.dispatchEvent(event);
                }}
                className="hover:text-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
              >
                Manage cookies
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 mt-6">
          <p className="text-sm text-muted-foreground text-center mb-2">
            © 2025 NextDoc Global Ltd. All rights reserved. Registered office: 4 Queen's Road, Wimbledon, London- SW19 8ND.
          </p>
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            All research follows COPE/ICMJE/EQUATOR standards. DOIs via Crossref. Datasets via Zenodo.
            ORCID required for authors. Open Access encouraged.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;