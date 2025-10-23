import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
}

const SEO = ({ 
  title = "NextDoc Labs — Medical Research & Evidence",
  description = "We build practical AI for doctors: SmartQBank™, Adaptive Mastery Packs™, Tutor AI™, CaseSim™. Research-driven, privacy-first, human-in-the-loop.",
  canonical,
  image = "/hero-placeholder.jpg",
  type = "website",
  noindex = false
}: SEOProps) => {
  const siteUrl = "https://nextdocglobal.io";
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={fullUrl} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="NextDoc Labs" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NextDoc Labs",
          "url": "https://nextdocglobal.io",
          "logo": `${siteUrl}/logo.png`,
          "sameAs": [
            "https://nextdocglobal.com",
            "https://nextdoc.co.uk"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "labs@nextdocglobal.io",
            "contactType": "customer support"
          },
          "description": description
        })}
      </script>
    </Helmet>
  );
};

export default SEO;