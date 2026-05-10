import { Division } from './types';

export const divisions: Division[] = [
  {
    id: 'karya',
    slug: 'karya',
    name: 'KARYA',
    subtitle: 'Industrial Infrastructure Solutions',
    description:
      'Providing end-to-end digital solutions for the construction and real estate industries through automated procurement and project management systems.',
    longDescription: `KARYA focuses on modernizing the construction and real estate supply chain. 
      We resolve industry fragmentation by implementing centralized B2B networking, standardized procurement protocols, 
      and digital marketplaces that unify contractors, architects, and suppliers into a single efficient network.`,
    icon: 'building2',
    color: '#FF6B35',
    metadata: {
      tagline: 'Modernizing Industrial Operations',
      focusArea: 'Construction & Real Estate Technology',
      established: 2024
    },
    stats: [
      { label: 'Active Solutions', value: '2' },
      { label: 'Core Market', value: 'Industrial' },
      { label: 'Operational Status', value: 'Live' }
    ],
    products: [
      {
        id: 'vendor-connect',
        slug: 'vendor-connect',
        name: 'Vendor Connect',
        description: 'B2B supplier network and procurement platform.',
        divisionId: 'karya',
        status: 'active',
        features: [
          'Automated supplier matching',
          'Standardized procurement workflows',
          'Digital contract management',
          'Quality compliance tracking',
          'Real-time pricing analysis'
        ],
        details: {
          longDescription:
            'Vendor Connect streamlines procurement by providing a verified marketplace for industrial firms. The platform automates the discovery and verification of suppliers, allowing for faster decision-making and reduced overhead.',
          highlights: [
            'Significant reduction in procurement cycles',
            'Verified supplier database',
            'Direct procurement pipeline'
          ],
          cta: {
            text: 'View Solution',
            href: '#'
          }
        }
      },
      {
        id: 'buildlink',
        slug: 'buildlink',
        name: 'BuildLink',
        description: 'Project management and resource marketplace for contractors.',
        divisionId: 'karya',
        status: 'active',
        features: [
          'Project bidding and discovery',
          'Resource allocation tools',
          'Collaborative workflow management',
          'Inventory and supply tracking',
          'Milestone and timeline monitoring'
        ],
        details: {
          longDescription:
            'BuildLink provides contractors and architects with a unified platform to manage projects, allocate resources, and coordinate with stakeholders. It serves as the primary operational dashboard for industrial projects.',
          highlights: [
            'Unified project monitoring',
            'Standardized bidding process',
            'Real-time resource tracking'
          ],
          cta: {
            text: 'View Solution',
            href: '#'
          }
        }
      }
    ]
  },
  {
    id: 'sankalap',
    slug: 'sankalap-community',
    name: 'SANKALAP COMMUNITY',
    subtitle: 'Software & Operational Systems',
    description:
      'Developing foundational software systems, AI-powered productivity tools, and community-driven technology solutions for the modern workforce.',
    longDescription: `SANKALAP Community is our research and development hub focused on operational efficiency. 
      We build productivity software, smart facility management systems, and collaborative ecosystems that integrate 
      traditional business processes with modern automation technology.`,
    icon: 'zap',
    color: '#4A90E2',
    metadata: {
      tagline: 'Driving Operational Efficiency',
      focusArea: 'SaaS & Enterprise Automation',
      established: 2024
    },
    stats: [
      { label: 'Active Products', value: '3' },
      { label: 'Focus Area', value: 'Productivity' },
      { label: 'Deployment', value: 'Cloud & Desktop' }
    ],
    products: [
      {
        id: 'syncro',
        slug: 'syncro-desktop-agent',
        name: 'SYNCRO Desktop Agent',
        description: 'Automated workstation management and productivity software.',
        divisionId: 'sankalap',
        status: 'active',
        features: [
          'Workflow automation engine',
          'Desktop productivity tools',
          'Process optimization',
          'Usage monitoring',
          'Integrated management dashboard'
        ],
        details: {
          longDescription:
            'SYNCRO optimizes workstation productivity by automating routine background tasks and providing users with an integrated dashboard for managing complex workflows.',
          highlights: [
            'Measurable productivity gains',
            'Reduced manual task load',
            'Centralized workstation control'
          ],
          cta: {
            text: 'Get Syncro',
            href: '#'
          }
        }
      },
      {
        id: 'pg-connect',
        slug: 'pg-connect',
        name: 'PG CONNECT',
        description: 'Facility management and community living platform.',
        divisionId: 'sankalap',
        status: 'beta',
        features: [
          'Facility discovery and booking',
          'Digital verification system',
          'Maintenance and ticket management',
          'Resident engagement tools',
          'Automated billing and payments'
        ],
        details: {
          longDescription:
            'PG CONNECT provides a comprehensive management platform for modern living spaces. It streamlines the entire resident lifecycle—from discovery and verification to billing and maintenance.',
          highlights: [
            'Digital end-to-end management',
            'Automated payment collection',
            'Streamlined facility operations'
          ],
          cta: {
            text: 'Join Beta',
            href: '#'
          }
        }
      },
      {
        id: 'house-helpers',
        slug: 'house-helpers',
        name: 'House Helpers',
        description: 'Professional service management and workforce platform.',
        divisionId: 'sankalap',
        status: 'launching',
        features: [
          'Professional service marketplace',
          'Identity verification system',
          'Scheduling and dispatch tools',
          'Service quality monitoring',
          'Secure transaction processing'
        ],
        details: {
          longDescription:
            'House Helpers connects professional service providers with households through a secure, managed marketplace. The platform handles verification, scheduling, and payment processing to ensure service reliability.',
          highlights: [
            'Verified professional network',
            'Standardized service quality',
            'Secure managed transactions'
          ],
          cta: {
            text: 'Join Waitlist',
            href: '#'
          }
        }
      }
    ]
  }
];

export function getDivisionBySlug(slug: string): Division | undefined {
  return divisions.find(d => d.slug === slug);
}

export function getProductBySlug(divisionSlug: string, productSlug: string) {
  const division = getDivisionBySlug(divisionSlug);
  return division?.products.find(p => p.slug === productSlug);
}

export function getAllProducts() {
  return divisions.flatMap(d => d.products);
}
