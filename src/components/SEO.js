import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component - Dynamic meta tags for each page
 * Usage: <SEO title="Page Title" description="Page description" keywords="keyword1, keyword2" />
 */
const SEO = ({ 
  title = "Vidyathiral - Professional Academic & Research Publishing Services",
  description = "Expert academic publishing services for researchers. Professional editing, journal selection, peer review support & DOI assignment. Trusted by researchers worldwide.",
  keywords = "academic publishing, research publishing, journal submission, research paper editing, manuscript editing",
  author = "Vidyathiral",
  image = "/og-image.png",
  url = "",
  type = "website",
  canonical = ""
}) => {
  const location = useLocation();
  const currentUrl = url || `https://vidyathiral.me${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'Vidyathiral', true);

    // Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:card', 'summary_large_image');

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

  }, [title, description, keywords, author, image, currentUrl, type, canonicalUrl]);

  return null;
};

export default SEO;
