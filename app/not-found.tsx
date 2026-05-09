import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-64 pb-32 px-6 text-center">
        <h1 className="text-9xl font-heading font-black text-slate-100 absolute -z-10 select-none">404</h1>
        <h2 className="text-4xl font-heading font-black text-slate-900 mb-4 uppercase tracking-tighter">System Error: Page Not Found</h2>
        <p className="text-slate-500 max-w-md mb-12 font-medium">
          The resources you are looking for have been moved or are currently being reconfigured by the MITR intelligent core.
        </p>
        <Link href="/">
          <Button size="lg" className="rounded-xl px-10 py-8 text-xl font-black bg-slate-900 text-white flex items-center gap-2 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Base
          </Button>
        </Link>
      </div>
      <Footer />
    </main>
  );
}
