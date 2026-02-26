'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Database, 
  Shield, 
  Zap, 
  Search, 
  Layers, 
  Cpu, 
  Globe, 
  CheckCircle2, 
  X, 
  Menu,
  Server, 
  Lock, 
  Activity, 
  Terminal 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Features', id: '#features' },
    { name: 'How it works', id: '#how-it-works' },
    { name: 'Architecture', id: '#architecture' },
    { name: 'Use Cases', id: '#use-cases' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass flex items-center justify-between md:justify-center gap-4 md:gap-8 px-6 py-2 md:py-3 rounded-full shadow-sm w-full md:w-auto"
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
            </div>
            <span className="font-bold text-lg tracking-tighter">Rag-Studio</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.id}
                onClick={(e) => scrollToSection(e, link.id)}
                whileHover={{ scale: 1.05, color: '#000' }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-black transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <Link href="/docs">
              <motion.span
                whileHover={{ scale: 1.05, color: '#000' }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-black transition-colors cursor-pointer"
              >
                Docs
              </motion.span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all"
            >
              Request Demo
            </motion.button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-black transition-colors focus:outline-none"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 w-full glass rounded-[2rem] p-6 shadow-xl flex flex-col gap-4 text-center border border-black/5"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.id}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-lg font-medium text-gray-600 hover:text-black transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Link href="/docs" onClick={() => setIsOpen(false)}>
                <span className="text-lg font-medium text-gray-600 hover:text-black transition-colors block">Docs</span>
              </Link>
              <hr className="border-black/5" />
              <button className="bg-black text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all w-full">
                Request Demo
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const Hero = ({ 
  onOpenArchitecture
}: { 
  onOpenArchitecture: () => void;
}) => (
  <section className="relative pt-40 pb-20 px-6 overflow-hidden">
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-gray-100 rounded-full text-gray-500">
          Enterprise Rag-Studio Platform
        </span>
        <h1 className="text-6xl md:text-8xl font-sans mb-8 leading-[0.9] tracking-tight">
          Build Production-Ready AI <br />
          <span className="italic text-gray-400">on Your Private Data</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          The headless Rag-Studio backend for enterprise. Ingest, retrieve, and generate accurate answers using a distributed pipeline powered by Celery, Vault, and multi-framework flexibility.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="w-full sm:w-auto">
            <button 
              className="w-full bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </button>
          </Link>
          <button 
            onClick={onOpenArchitecture}
            className="w-full sm:w-auto border border-gray-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors"
          >
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
            <div className="w-full h-full rounded-xl border border-gray-200 relative overflow-hidden">
              <Image 
                src="/hero.png" 
                alt="Rag-Studio Dashboard Illustration" 
                fill 
                className="object-cover"
                priority
              />
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
        <h2 className="text-4xl font-sans mb-4">The Enterprise Knowledge Gap</h2>
        <p className="text-gray-500 max-w-xl mx-auto">Generic LLMs fail when they don&apos;t have access to your specific context. Rag-Studio bridges that gap.</p>
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
        <h2 className="text-4xl font-sans mb-4">How Rag-Studio Works</h2>
        <p className="text-gray-500">A seamless pipeline from raw data to intelligent answers.</p>
      </div>
      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 -z-10" />
        <div className="grid md:grid-cols-6 gap-8">
          {[
            { step: "01", label: "Upload", icon: <Layers />, sub: "Async via Celery" },
            { step: "02", label: "Chunk", icon: <Cpu />, sub: "Smart splitting" },
            { step: "03", label: "Embed", icon: <Zap />, sub: "Multi-model" },
            { step: "04", label: "Store", icon: <Database />, sub: "Vector storage" },
            { step: "05", label: "Retrieve", icon: <Search />, sub: "Hybrid search" },
            { step: "06", label: "Generate", icon: <Globe />, sub: "Streaming output" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-4 shadow-sm relative z-10">
                <div className="text-gray-400">{item.icon}</div>
              </div>
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">{item.step}</span>
              <span className="font-medium">{item.label}</span>
              <span className="text-[10px] text-gray-400 mt-1">{item.sub}</span>
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
          <h2 className="text-4xl font-sans mb-8">Core Capabilities</h2>
          <div className="space-y-8">
            {[
              { title: "Cost Observability", desc: "Real-time dashboards for token consumption, model costs, and user-level quotas." },
              { title: "Headless Mode", desc: "Full API access via x-api-key for seamless integration into your existing software stack." },
              { title: "Hybrid Search", desc: "Combines semantic vector search with traditional keyword matching for precision." },
              { title: "Enterprise SSO", desc: "Native support for Google Workspace, Keycloak, and OIDC/SAML providers." }
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
          <h2 className="text-4xl font-sans mb-8">Advanced Infrastructure</h2>
          <div className="space-y-8">
            {[
              { title: "Streaming Responses", desc: "Real-time, low-latency answers via WebSockets for a fluid user experience." },
              { title: "Framework Agnostic", desc: "Switch between Haystack or Weaviate Verba pipelines based on complexity." },
              { title: "Audit Logs", desc: "Complete traceability of who accessed what data and when for compliance." },
              { title: "Zero-Trust Secrets", desc: "Hardware-level security using HashiCorp Vault for all API keys and credentials." }
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
        <h2 className="text-4xl font-sans mb-4">Technical Architecture</h2>
        <p className="text-gray-400">Designed for reliability, security, and performance.</p>
      </div>
      
      <div className="relative p-12 rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full dot-grid opacity-5" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">Infrastructure</h4>
              <p className="text-lg font-medium">RabbitMQ & Redis</p>
              <p className="text-sm text-gray-400 mt-2">Distributed task orchestration and ultra-fast session caching.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">Secrets</h4>
              <p className="text-lg font-medium">HashiCorp Vault</p>
              <p className="text-sm text-gray-400 mt-2">Enterprise-grade encryption for all sensitive credentials.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="p-8 rounded-2xl border-2 border-emerald-500/50 bg-emerald-500/10 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-[10px] font-bold rounded-full">CORE API</div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-4">Backend</h4>
              <p className="text-2xl font-bold">FastAPI + Celery</p>
              <p className="text-sm text-gray-400 mt-2">Async document processing & LLM orchestration.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">Storage</h4>
              <p className="text-lg font-medium">Weaviate + Postgres</p>
              <p className="text-sm text-gray-400 mt-2">Hybrid vector storage and robust metadata management.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">LLM Layer</h4>
              <p className="text-lg font-medium">Haystack / Verba</p>
              <p className="text-sm text-gray-400 mt-2">Flexible retrieval pipelines with multi-framework support.</p>
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
        <h2 className="text-4xl font-sans mb-4">Real-World Applications</h2>
        <p className="text-gray-500">How organizations are using Rag-Studio today.</p>
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
            <span className="font-bold tracking-tighter">Rag-Studio</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            The enterprise-grade platform for building, deploying, and scaling Rag-Studio AI applications.
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
        <p className="text-xs text-gray-400">© 2026 AllCognix Inc. All rights reserved.</p>
        <div className="flex gap-6">
           {/* Social icons could go here */}
        </div>
      </div>
    </div>
  </footer>
);

const DeveloperSection = () => (
  <section className="py-24 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-4 block">Built for Developers</span>
          <h2 className="text-5xl font-sans mb-6">A Headless Rag-Studio Backend for Your Custom Apps</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Rag-Studio provides a robust External API with x-api-key authentication. Manage keys, set usage limits, and integrate powerful retrieval capabilities into your own software stack with simple HTTP requests.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <span className="font-medium">Clean API Documentation & SDKs</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <span className="font-medium">Multi-tenant SaaS Ready Infrastructure</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <span className="font-medium">Real-time Usage Monitoring</span>
            </div>
          </div>
        </div>
        <div className="bg-black rounded-2xl p-6 shadow-2xl overflow-hidden font-mono text-sm text-gray-300">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="space-y-2">
            <p className="text-emerald-400"># Query your private knowledge base</p>
            <p>curl -X POST https://api.ragstudio.io/v1/query \</p>
            <p className="pl-4">-H <span className="text-orange-300">&quot;x-api-key: rs_live_8f2...&quot;</span> \</p>
            <p className="pl-4">-d <span className="text-orange-300">&apos;&#123; &quot;query&quot;: &quot;What is our Q3 policy?&quot; &#125;&apos;</span></p>
            <p className="mt-4 text-gray-500">{"// Response"}</p>
            <p className="text-blue-300">&#123;</p>
            <p className="pl-4">&quot;answer&quot;: &quot;Q3 policy requires...&quot;,</p>
            <p className="pl-4">&quot;sources&quot;: [&quot;policy_v2.pdf&quot;],</p>
            <p className="pl-4">&quot;tokens&quot;: 142</p>
            <p className="text-blue-300">&#125;</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ArchitectureModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto no-scrollbar rounded-[2.5rem] shadow-2xl p-8 md:p-12 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            <div className="mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-2 block">System Blueprint</span>
              <h2 className="text-4xl font-sans">Enterprise-Grade Rag-Studio Stack</h2>
              <p className="text-gray-500 mt-2">A deep dive into the Rag-Studio production infrastructure.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500">
                    <Server size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Distributed Processing</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      FastAPI handles high-concurrency requests while Celery workers manage long-running document ingestion tasks via RabbitMQ.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <Lock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Zero-Trust Security</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      All API keys, DB credentials, and sensitive tokens are dynamically injected from HashiCorp Vault at runtime.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Observability & Analytics</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Real-time token tracking and cost management integrated directly into the core pipeline for granular spend control.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Multi-Framework Core</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Switch between Haystack for complex workflows or Weaviate Verba for rapid deployment without changing your frontend.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
                <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-8 text-center">Data Flow Visualization</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-center font-medium text-sm">
                    Client Request (Web / API)
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-gray-200" />
                  </div>
                  <div className="p-4 bg-blue-500 text-white rounded-xl shadow-md text-center font-bold text-sm">
                    FastAPI Gateway
                  </div>
                  <div className="flex justify-center gap-8">
                    <div className="w-0.5 h-6 bg-gray-200" />
                    <div className="w-0.5 h-6 bg-gray-200" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white rounded-xl border border-gray-200 text-center text-xs">
                      RabbitMQ + Celery
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-200 text-center text-xs">
                      Redis Cache
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-gray-200" />
                  </div>
                  <div className="p-4 bg-emerald-500 text-white rounded-xl shadow-md text-center font-bold text-sm">
                    Weaviate Vector DB
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-gray-200" />
                  </div>
                  <div className="p-4 bg-black text-white rounded-xl shadow-md text-center font-bold text-sm">
                    LLM Provider (OpenAI/Anthropic)
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
              <div className="flex gap-4">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-500">v2.4.0-stable</span>
                <span className="px-3 py-1 bg-emerald-50 rounded-full text-[10px] font-bold text-emerald-600">SOC2 Compliant</span>
              </div>
              <button 
                onClick={onClose}
                className="text-sm font-bold hover:underline"
              >
                Back to Overview
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function LandingPage() {
  const [isArchitectureModalOpen, setIsArchitectureModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <div className="noise" />
      <Navbar />
      <Hero 
        onOpenArchitecture={() => setIsArchitectureModalOpen(true)} 
      />
      <Problem />
      <HowItWorks />
      <Features />
      <Architecture />
      <DeveloperSection />
      <UseCases />
      
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] text-center border-2 border-black/5">
          <h2 className="text-5xl font-sans mb-6">Ready to build?</h2>
          <p className="text-xl text-gray-500 mb-10">Join 500+ enterprises building the future of knowledge.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform">
              Book a Demo
            </button>
            <Link href="/docs" className="w-full sm:w-auto">
              <button 
                className="w-full border border-gray-200 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Explore API
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ArchitectureModal 
        isOpen={isArchitectureModalOpen} 
        onClose={() => setIsArchitectureModalOpen(false)} 
      />
    </main>
  );
}
