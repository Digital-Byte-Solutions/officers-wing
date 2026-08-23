import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Officers Wing Academy | Best Merchant Navy Coaching in Dehradun",
  description = "Officers Wing Academy is Dehradun's premier Merchant Navy coaching institute. DG Shipping guidance, IMU-CET, GP Rating, DNS, GME & ETO preparation.",
  keywords = "merchant navy coaching Dehradun, best merchant navy institute in Dehradun, IMUCET coaching Dehradun, GP Rating course after 10th Dehradun, DNS B.Sc Nautical Science coaching, merchant navy sponsorship coaching",
  canonicalUrl,
  ogImage = "/images/officers_wing_banner.jpg",
  ogType = "website"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper for canonical link
    const updateCanonicalLink = (url: string) => {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    };

    // Clean canonical URL logic (strips trailing slashes & query parameters for duplicate prevention)
    const getCleanCanonicalUrl = (customUrl?: string) => {
      if (customUrl) return customUrl;
      let path = window.location.pathname;
      if (path.length > 1 && path.endsWith('/')) {
        path = path.slice(0, -1);
      }
      return `https://officerswing.com${path}`;
    };

    const currentUrl = getCleanCanonicalUrl(canonicalUrl);

    // Standard Meta Tags
    updateMetaTag('meta[name="description"]', 'name', 'description', description);
    updateMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);

    // Open Graph Tags
    updateMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Officers Wing Academy');
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    updateMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');

    // Twitter / X Card Tags
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // Canonical URL
    updateCanonicalLink(currentUrl);

  }, [title, description, keywords, canonicalUrl, ogImage, ogType]);

  return null;
};
