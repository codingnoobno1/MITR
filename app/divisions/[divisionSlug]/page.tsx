import { divisions } from '@/data/divisions';
import { notFound } from 'next/navigation';
import { DivisionHero } from '@/components/sections/DivisionHero';
import { ProductGrid } from '@/components/sections/ProductGrid';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from 'next';

export async function generateStaticParams() {
  return divisions.map(division => ({
    divisionSlug: division.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ divisionSlug: string }>;
}): Promise<Metadata> {
  const { divisionSlug } = await params;
  const division = divisions.find(d => d.slug === divisionSlug);

  if (!division) {
    return {};
  }

  return {
    title: `${division.name} | MITR`,
    description: division.description,
    openGraph: {
      title: division.name,
      description: division.description,
      url: `/divisions/${division.slug}`
    }
  };
}

export default async function DivisionPage({
  params
}: {
  params: Promise<{ divisionSlug: string }>;
}) {
  const { divisionSlug } = await params;
  const division = divisions.find(d => d.slug === divisionSlug);

  if (!division) {
    notFound();
  }

  return (
    <main className="w-full bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <DivisionHero division={division} />

      {/* Division Stats */}
      {division.stats && division.stats.length > 0 && (
        <section className="py-12 px-4 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {division.stats.map(stat => (
                <div key={stat.label} className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100">
                  <div
                    className="text-4xl md:text-5xl font-heading font-black mb-2"
                    style={{ color: division.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs font-black uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 text-slate-900 uppercase tracking-tighter">
              PRODUCTS & <span style={{ color: division.color }}>SOLUTIONS</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              Explore the modular intelligent tools developed within the {division.name} division.
            </p>
          </div>
          <ProductGrid products={division.products} division={division} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-heading font-black mb-6 tracking-tighter text-slate-900">
            INTERESTED IN {division.name.toUpperCase()}?
          </h3>
          <p className="text-slate-500 mb-10 text-xl font-medium leading-relaxed">
            Get in touch with our team to learn more about how we can help your
            organization transition to an intelligent, modular ecosystem.
          </p>
          <a
            href="/#contact"
            className="inline-block px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl hover:scale-105 active:scale-95"
            style={{
              backgroundColor: division.color,
              color: 'white',
              boxShadow: `0 20px 40px -10px ${division.color}40`
            }}
          >
            Contact Our Team
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
