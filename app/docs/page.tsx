'use client';

import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  Terminal, 
  Copy, 
  Check, 
  Shield, 
  FileText, 
  MessageSquare, 
  Settings,
  Zap,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const CodeBlock = ({ code, language = 'bash' }: { code: string, language?: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden bg-black border border-white/10 my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">{language}</span>
        <button 
          onClick={copyToClipboard}
          className="text-gray-500 hover:text-white transition-colors"
        >
          {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 text-sm font-mono text-gray-300 overflow-x-auto whitespace-pre">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default function DocsPage() {
  const sections = [
    { id: 'authentication', title: '1. Authentication', icon: <Shield size={16} /> },
    { id: 'collections', title: '2. Collections', icon: <Settings size={16} /> },
    { id: 'documents', title: '3. Documents', icon: <FileText size={16} /> },
    { id: 'queries', title: '4. AI Queries', icon: <MessageSquare size={16} /> },
    { id: 'tasks', title: '5. Task Status', icon: <Terminal size={16} /> }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 selection:bg-black selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold tracking-tighter text-xl text-black">Rag-Studio</span>
            </Link>
            <span className="text-gray-400 font-medium ml-4 border-l pl-4 border-gray-200">API Docs</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 pt-32 pb-24">
          {/* Sticky Sidebar Index */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">On this page</h4>
                <div className="flex flex-col gap-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-black hover:bg-gray-100 transition-all group"
                    >
                      <span className="text-gray-300 group-hover:text-black transition-colors">
                        {section.icon}
                      </span>
                      {section.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-12">
                <span className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-4 block">Developer Documentation</span>
                <h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight">External API (v1)</h1>
                <p className="text-xl text-gray-500 max-w-2xl">
                  Integrate Rag-Studio&apos;s powerful retrieval and generation capabilities directly into your custom software stack.
                </p>
              </div>

              <div className="space-y-24">
            {/* Authentication */}
            <section id="authentication">
              <div className="flex items-center gap-3 mb-6 font-bold text-2xl">
                <Shield className="text-blue-500" size={28} />
                <h2>1. Authentication</h2>
              </div>
              <p className="text-gray-600 mb-6">
                All requests to the External API must include an <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-600 font-bold">Authorization</code> header with a valid API Key. 
                API Keys can be generated through your Rag-Studio dashboard.
              </p>
              <CodeBlock 
                language="http"
                code={`Authorization: Bearer <YOUR_API_KEY>`}
              />
            </section>

            {/* Collection Management */}
            <section id="collections">
              <div className="flex items-center gap-3 mb-6 font-bold text-2xl">
                <Settings className="text-emerald-500" size={28} />
                <h2>2. Collection Management</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Collections allow you to group related documents. Rag-Studio uses an &quot;active collection&quot; pattern to determine the context for your queries.
              </p>

              <div className="space-y-12">
                <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    Create a Collection
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded uppercase">POST</span>
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 font-mono">/api/v1/collections/create</p>
                  <CodeBlock 
                    code={`curl -X POST https://api.rag-studio.com/api/v1/collections/create \\
     -H "Authorization: Bearer <YOUR_API_KEY>" \\
     -H "Content-Type: application/json" \\
     -d '{
       "user_id": "3dc3198b-393e-4c3d-9697-0c4f8f2fc3dc",
       "name": "Research_Project",
       "description": "Documents for AI research"
     }'`}
                  />
                </div>

                <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    List All Collections
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded uppercase">POST</span>
                  </h3>
                  <CodeBlock 
                    code={`curl -X POST https://api.rag-studio.com/api/v1/collections/list \\
     -H "Authorization: Bearer <YOUR_API_KEY>" \\
     -d '{"user_id": "3dc3198b-393e-4c3d-9697-0c4f8f2fc3dc"}'`}
                  />
                </div>
              </div>
            </section>

            {/* Document Management */}
            <section id="documents">
              <div className="flex items-center gap-3 mb-6 font-bold text-2xl">
                <FileText className="text-purple-500" size={28} />
                <h2>3. Document Management</h2>
              </div>
              
              <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  Upload Documents
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded uppercase">POST</span>
                </h3>
                <p className="text-gray-600 mb-4">Upload files using <code className="text-sm font-mono text-blue-600 font-bold">multipart/form-data</code>. Supports PDF, DOCX, and TXT up to 80MB.</p>
                <CodeBlock 
                  code={`curl -X POST https://api.rag-studio.com/api/v1/documents/upload \\
     -H "Authorization: Bearer <YOUR_API_KEY>" \\
     -F "user_id=3dc3198b-393e-4c3d-9697-0c4f8f2fc3dc" \\
     -F "overwrite=false" \\
     -F "files=@/path/to/your/document.pdf"`}
                />
              </div>
            </section>

            {/* AI Queries */}
            <section id="queries">
              <div className="flex items-center gap-3 mb-6 font-bold text-2xl">
                <MessageSquare className="text-orange-500" size={28} />
                <h2>4. RAG Chat & Queries</h2>
              </div>
              <p className="text-gray-600 mb-8">
                This is the core endpoint. It performs semantic search across your documents and uses an LLM to generate a grounded response.
              </p>

              <div className="p-8 bg-black text-white rounded-3xl border border-white/10 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -z-10" />
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  Perform a RAG Query
                  <span className="px-2 py-0.5 bg-blue-500 text-white text-[10px] font-bold rounded uppercase">POST</span>
                </h3>
                <CodeBlock 
                  language="bash"
                  code={`curl -X POST https://api.rag-studio.com/api/v1/chat/query \\
     -H "Authorization: Bearer <YOUR_API_KEY>" \\
     -H "Content-Type: application/json" \\
     -d '{
       "user_id": "3dc3198b-393e-4c3d-9697-0c4f8f2fc3dc",
       "message": "Summarize the uploaded documents",
       "session_id": "session_123",
       "collection_name": "Research_Project"
     }'`}
                />
                <div className="mt-8 grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Zap size={14} className="text-blue-400" />
                    Streaming support via WebSockets
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-blue-400" />
                    Hybrid Search enabled
                  </div>
                </div>
              </div>
            </section>

            {/* Task Management */}
            <section id="tasks" className="p-8 bg-gray-100 rounded-3xl border border-gray-200">
              <div className="flex items-center gap-3 mb-6 font-bold text-2xl">
                <Terminal className="text-gray-700" size={28} />
                <h2>5. Task Status</h2>
              </div>
              <p className="text-gray-600 mb-4 font-mono text-sm">GET /api/v1/tasks/{"<TASK_ID>"}/status</p>
              <CodeBlock 
                code={`curl -X GET https://api.rag-studio.com/api/v1/tasks/<TASK_ID>/status \\
     -H "Authorization: Bearer <YOUR_API_KEY>"`}
              />
            </section>
          </div>

          <div className="mt-32 p-12 glass rounded-[3rem] text-center border-2 border-black/5 bg-white">
            <h2 className="text-4xl font-serif mb-6 tracking-tight">Need more scale?</h2>
            <p className="text-gray-500 mb-10">We offer custom rate limits and dedicated infrastructure for enterprise partners.</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/" className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform flex items-center gap-2">
                Contact Enterprise <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  </div>

      <footer className="py-20 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2026 AllCognix Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
