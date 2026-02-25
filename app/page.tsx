'use client';

import { motion } from 'motion/react';
import { ArrowRight, Database, Shield, Zap, Search, Layers, Cpu, Globe, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
    <div className="glass flex items-center gap-8 px-6 py-3 rounded-full shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
        </div>
        <span className="font-bold text-lg tracking-tighter">RAG STUDIO</span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
        <a href="#features" className="hover:text-black transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-black transition-colors">How it works</a>
        <a href="#architecture" className="hover:text-black transition-colors">Architecture</a>
        <a href="#use-cases" className="hover:text-black transition-colors">Use Cases</a>
      </div>
      <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all">
        Request Demo
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-20 px-6 overflow-hidden">
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-gray-100 rounded-full text-gray-500">
          Enterprise RAG Platform
        </span>
        <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-[0.9] tracking-tight">
          Build Production-Ready AI <br />
          <span className="italic text-gray-400">on Your Private Data</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ingest, retrieve, and generate accurate answers using a scalable RAG pipeline powered by vector search and enterprise-grade security.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2">
            Get Started <ArrowRight size={20} />
          </button>
          <button className="w-full sm:w-auto border border-gray-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors">
            View Architecture
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-20 relative"
      >
        <div className="relative rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
          <div className="h-10 border-b border-gray-100 bg-gray-50 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="ml-4 h-5 w-64 bg-white rounded border border-gray-100" />
          </div>
          <div className="p-8 aspect-video bg-gray-50 flex items-center justify-center">
            <div className="w-full h-full rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center bg-white/50 relative overflow-hidden">
               <div className="absolute inset-0 dot-grid opacity-50" />
               <div className="z-10 flex flex-col items-center gap-4">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center animate-bounce">
                      <Database className="text-blue-500" />
                    </div>
                    <div className="w-16 h-16 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center animate-bounce [animation-delay:0.2s]">
                      <Cpu className="text-emerald-500" />
                    </div>
                    <div className="w-16 h-16 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center animate-bounce [animation-delay:0.4s]">
                      <Search className="text-orange-500" />
                    </div>
                  </div>
                  <p className="text-sm font-mono text-gray-400">RAG_PIPELINE_ACTIVE: 200 OK</p>
               </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10" />
      </motion.div>
    </div>
  </section>
);

const Problem = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif mb-4">The Enterprise Knowledge Gap</h2>
        <p className="text-gray-500 max-w-xl mx-auto">Generic LLMs fail when they don&apos;t have access to your specific context. RAG Studio bridges that gap.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Data Fragmentation",
            desc: "Knowledge is trapped in silos—PDFs, Notion, Slack, and legacy databases.",
            icon: <Globe className="text-gray-400" />
          },
          {
            title: "Hallucinations",
            desc: "Generic models confidently provide wrong answers without grounded facts.",
            icon: <Zap className="text-gray-400" />
          },
          {
            title: "Security & Privacy",
            desc: "Sending sensitive enterprise data to public models is a non-starter.",
            icon: <Shield className="text-gray-400" />
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all"
          >
            <div className="mb-6">{item.icon}</div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 px-6 border-y border-gray-100">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-serif mb-4">How RAG Studio Works</h2>
        <p className="text-gray-500">A seamless pipeline from raw data to intelligent answers.</p>
      </div>
      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 -z-10" />
        <div className="grid md:grid-cols-6 gap-8">
          {[
            { step: "01", label: "Upload", icon: <Layers /> },
            { step: "02", label: "Chunk", icon: <Cpu /> },
            { step: "03", label: "Embed", icon: <Zap /> },
            { step: "04", label: "Store", icon: <Database /> },
            { step: "05", label: "Retrieve", icon: <Search /> },
            { step: "06", label: "Generate", icon: <Globe /> },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-4 shadow-sm relative z-10">
                <div className="text-gray-400">{item.icon}</div>
              </div>
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">{item.step}</span>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-24 px-6 bg-[#FCFCFC]">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl font-serif mb-8">Core Capabilities</h2>
          <div className="space-y-8">
            {[
              { title: "Document Ingestion", desc: "Native support for PDF, DOCX, Markdown, and API-based connectors." },
              { title: "Hybrid Search", desc: "Combines semantic vector search with traditional keyword matching for precision." },
              { title: "Metadata Filtering", desc: "Apply granular filters based on source, date, or custom tags." },
              { title: "Secure Auth", desc: "Enterprise SSO and Keycloak integration for fine-grained access control." }
            ].map((f, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-serif mb-8">Advanced Features</h2>
          <div className="space-y-8">
            {[
              { title: "Multi-tenant Support", desc: "Isolate data and models across different departments or clients." },
              { title: "Model-Agnostic Routing", desc: "Switch between OpenAI, Anthropic, or local models like Llama 3." },
              { title: "Custom Prompt Engineering", desc: "Visual editor for crafting and testing system instructions." },
              { title: "Scalable Architecture", desc: "Built on FastAPI and Weaviate for high-throughput production loads." }
            ].map((f, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="text-blue-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Architecture = () => (
  <section id="architecture" className="py-24 px-6 bg-black text-white overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-serif mb-4">Technical Architecture</h2>
        <p className="text-gray-400">Designed for reliability, security, and performance.</p>
      </div>
      
      <div className="relative p-12 rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full dot-grid opacity-5" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">Frontend</h4>
              <p className="text-lg font-medium">Next.js Dashboard</p>
              <p className="text-sm text-gray-400 mt-2">React-based UI for management and chat interfaces.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">Auth</h4>
              <p className="text-lg font-medium">Keycloak / SSO</p>
              <p className="text-sm text-gray-400 mt-2">Identity management and RBAC.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="p-8 rounded-2xl border-2 border-emerald-500/50 bg-emerald-500/10 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-[10px] font-bold rounded-full">CORE API</div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-4">Backend</h4>
              <p className="text-2xl font-bold">FastAPI</p>
              <p className="text-sm text-gray-400 mt-2">Async processing & LLM orchestration.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">Vector DB</h4>
              <p className="text-lg font-medium">Weaviate</p>
              <p className="text-sm text-gray-400 mt-2">High-performance semantic storage.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">LLM Layer</h4>
              <p className="text-lg font-medium">Model Gateway</p>
              <p className="text-sm text-gray-400 mt-2">OpenAI, Anthropic, or Local Llama.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const UseCases = () => (
  <section id="use-cases" className="py-24 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif mb-4">Real-World Applications</h2>
        <p className="text-gray-500">How organizations are using RAG Studio today.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Insurance", desc: "Automated policy analysis and claims knowledge base." },
          { title: "Education", desc: "Personalized tutoring assistants grounded in curriculum." },
          { title: "Enterprise", desc: "Internal search across Slack, Jira, and Confluence." },
          { title: "Compliance", desc: "Real-time regulatory checking and audit assistance." }
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-gray-300 transition-colors">
            <h3 className="font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-gray-100">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
              <div className="w-3 h-3 border border-white rounded-sm rotate-45" />
            </div>
            <span className="font-bold tracking-tighter">RAG STUDIO</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            The enterprise-grade platform for building, deploying, and scaling RAG-based AI applications.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black">Features</a></li>
              <li><a href="#" className="hover:text-black">Architecture</a></li>
              <li><a href="#" className="hover:text-black">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Blog</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black">Privacy</a></li>
              <li><a href="#" className="hover:text-black">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">© 2026 RAG Studio Inc. All rights reserved.</p>
        <div className="flex gap-6">
           {/* Social icons could go here */}
        </div>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <div className="noise" />
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Architecture />
      <UseCases />
      
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] text-center border-2 border-black/5">
          <h2 className="text-5xl font-serif mb-6">Ready to build?</h2>
          <p className="text-xl text-gray-500 mb-10">Join 500+ enterprises building the future of knowledge.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform">
              Book a Demo
            </button>
            <button className="w-full sm:w-auto border border-gray-200 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
