import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'thunder',
    slug: 'thunder',
    title: 'Thunder',
    category: 'Developer Tools',
    description: 'Static UI Compiler for Flutter. High-performance widget generation with intelligent optimization.',
    shortDesc: 'Static UI Compiler for Flutter',
    tags: ['Flutter', 'Compiler', 'Dart'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    content: '# Thunder\n\nStatic UI Compiler for Flutter. High-performance widget generation with intelligent optimization.'
  },
  {
    id: 'syncro',
    slug: 'syncro',
    title: 'Syncro',
    category: 'AI Workspace',
    description: 'AI Developer Workstation. An intelligent desktop environment for multi-agent orchestration.',
    shortDesc: 'AI Developer Workstation',
    tags: ['Agentic', 'Desktop', '.NET'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mitr-core',
    slug: 'mitr-core',
    title: 'MITR Core',
    category: 'Architecture',
    description: 'Modular intelligent architecture system for large-scale infrastructure and construction management.',
    shortDesc: 'Modular intelligent architecture',
    tags: ['Modular', 'Scalable', 'Core'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter(p => p.featured !== false).slice(0, 3);
}
