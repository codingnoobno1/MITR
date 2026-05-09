export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  divisionId: string;
  features?: string[];
  image?: string;
  status?: 'active' | 'beta' | 'launching';
  details?: {
    longDescription?: string;
    highlights?: string[];
    cta?: {
      text: string;
      href: string;
    };
  };
}

export interface Division {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  icon: string;
  color: string;
  products: Product[];
  metadata?: {
    tagline?: string;
    focusArea?: string;
    established?: number;
  };
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  shortDesc: string;
  tags: string[];
  image: string;
  imageAlt?: string;
  content?: string;
  highlights?: string[];
  technology?: {
    frontend?: string[];
    backend?: string[];
    tools?: string[];
  };
  cta?: {
    text: string;
    href: string;
    external?: boolean;
  };
  featured?: boolean;
  order?: number;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  value: string;
  description?: string;
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  email: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  nav: NavLink[];
}
