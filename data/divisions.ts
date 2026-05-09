import { Division } from './types';

export const divisions: Division[] = [
  {
    id: 'karya',
    slug: 'karya',
    name: 'KARYA',
    subtitle: 'Construction & Industrial Intelligence',
    description:
      'Digitizing and organizing the fragmented construction and real estate ecosystem using intelligent automation and infrastructure systems.',
    longDescription: `KARYA represents our comprehensive vision for modernizing the construction and real estate industry. 
      We tackle fragmentation through intelligent B2B networking, unified procurement systems, and infrastructure marketplaces 
      that connect contractors, architects, and suppliers in a seamless ecosystem.`,
    icon: 'building2',
    color: '#FF6B35',
    metadata: {
      tagline: 'Building the Future of Construction',
      focusArea: 'Real Estate & Infrastructure Digitization',
      established: 2024
    },
    stats: [
      { label: 'Active Products', value: '2' },
      { label: 'Market Focus', value: 'Construction' },
      { label: 'Launch Status', value: 'Production' }
    ],
    products: [
      {
        id: 'vendor-connect',
        slug: 'vendor-connect',
        name: 'Vendor Connect',
        description: 'Intelligent B2B supplier network and procurement.',
        divisionId: 'karya',
        status: 'active',
        features: [
          'AI-powered supplier matching',
          'Real-time procurement workflows',
          'Contract management system',
          'Quality assurance tracking',
          'Instant pricing comparisons'
        ],
        details: {
          longDescription:
            'Vendor Connect revolutionizes procurement by creating an intelligent marketplace where construction firms discover, verify, and collaborate with suppliers. Built on agentic AI systems, it automates vendor matching based on project requirements, history, and quality metrics.',
          highlights: [
            'Reduces procurement time by 70%',
            'Ensures quality through AI verification',
            'Real-time supplier availability'
          ],
          cta: {
            text: 'Explore Vendor Connect',
            href: '#'
          }
        }
      },
      {
        id: 'buildlink',
        slug: 'buildlink',
        name: 'BuildLink',
        description: 'Unified infrastructure marketplace for contractors and architects.',
        divisionId: 'karya',
        status: 'active',
        features: [
          'Project discovery and bidding',
          'Resource allocation optimization',
          'Team collaboration tools',
          'Material inventory tracking',
          'Timeline & milestone management'
        ],
        details: {
          longDescription:
            'BuildLink connects the construction ecosystem by providing contractors, architects, and project managers with a unified platform to discover projects, bid collaboratively, and manage resources in real time.',
          highlights: [
            'Connect with 10,000+ construction firms',
            'Unified project management',
            'Transparent bid management'
          ],
          cta: {
            text: 'Explore BuildLink',
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
    subtitle: 'Innovation & Intelligent SaaS',
    description:
      'The technological backbone for traditional computing modernization, agentic AI systems, and student-driven open-source collaboration.',
    longDescription: `SANKALAP Community is our innovation hub focused on modernizing legacy systems through intelligent automation. 
      We develop agentic AI agents, smart workplace orchestration tools, and collaborative platforms that bridge traditional 
      computing with next-generation intelligence. The name reflects our commitment to collective thinking and innovation.`,
    icon: 'zap',
    color: '#4A90E2',
    metadata: {
      tagline: 'Modernizing Computing Through Intelligence',
      focusArea: 'AI, Automation & Student Innovation',
      established: 2024
    },
    stats: [
      { label: 'Active Products', value: '3' },
      { label: 'Community Focus', value: 'Open Source' },
      { label: 'Stage', value: 'Beta & Launching' }
    ],
    products: [
      {
        id: 'syncro',
        slug: 'syncro-desktop-agent',
        name: 'SYNCRO Desktop Agent',
        description: 'AI-powered workstation orchestration.',
        divisionId: 'sankalap',
        status: 'active',
        features: [
          'Intelligent task orchestration',
          'Multi-agent collaboration',
          'Workflow automation',
          'System optimization',
          'Real-time monitoring dashboard'
        ],
        details: {
          longDescription:
            'SYNCRO transforms your desktop into an intelligent workspace where agentic AI agents handle complex workflows. It orchestrates multi-agent systems, automates routine tasks, and optimizes system performance in real time.',
          highlights: [
            '60% productivity increase for knowledge workers',
            'Multi-agent coordination engine',
            'Natural language workflow programming'
          ],
          cta: {
            text: 'Get SYNCRO',
            href: '#'
          }
        }
      },
      {
        id: 'pg-connect',
        slug: 'pg-connect',
        name: 'PG CONNECT',
        description: 'Smart accommodation and student-living ecosystem.',
        divisionId: 'sankalap',
        status: 'beta',
        features: [
          'Room discovery and booking',
          'Tenant verification system',
          'Maintenance request management',
          'Community engagement tools',
          'Payment & lease automation'
        ],
        details: {
          longDescription:
            'PG CONNECT reimagines student living by connecting students with quality accommodations and creating vibrant communities. AI-powered tenant matching, smart facilities management, and integrated community features make it the modern student housing platform.',
          highlights: [
            'Serving 50,000+ students',
            'Zero hassle housing search',
            'Smart community building'
          ],
          cta: {
            text: 'Join PG CONNECT (Beta)',
            href: '#'
          }
        }
      },
      {
        id: 'house-helpers',
        slug: 'house-helpers',
        name: 'House Helpers',
        description: 'Intelligent home workforce management platform.',
        divisionId: 'sankalap',
        status: 'launching',
        features: [
          'Service provider marketplace',
          'Background verification system',
          'Scheduling and dispatch',
          'Quality ratings & reviews',
          'Secure payment processing'
        ],
        details: {
          longDescription:
            'House Helpers connects families with vetted home service professionals—cleaners, cooks, gardeners, and more. Our intelligent matching algorithm, comprehensive background checks, and quality assurance system ensure peace of mind.',
          highlights: [
            'Background-verified professionals',
            'AI-powered matching',
            'Guaranteed service quality'
          ],
          cta: {
            text: 'Join Waitlist (Launching Soon)',
            href: '#'
          }
        }
      }
    ]
  }
];

/**
 * Helper functions for division data access
 */

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
