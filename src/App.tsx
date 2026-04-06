import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Search, 
  Globe, 
  Users, 
  Cloud, 
  MessageSquare, 
  CheckCircle2, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Activity
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <Coverage />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 180 50" className="h-8 text-slate-900" xmlns="http://www.w3.org/2000/svg">
              <text 
                x="0" 
                y="38" 
                fontFamily="'Courier New', Courier, serif" 
                fontSize="42" 
                fontWeight="normal" 
                fill="currentColor"
                letterSpacing="-1.5"
              >
                Mistral
              </text>
            </svg>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#coverage" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Coverage</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center">
            <button className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-brand-600 to-brand-500 rounded-full hover:shadow-lg hover:shadow-brand-500/25 transition-all duration-200">
              Free Leak Scan
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#coverage" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg">Coverage</a>
              <a href="#testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg">Testimonials</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg">Pricing</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg">FAQ</a>
              <div className="pt-4 px-3">
                <button className="w-full px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-600 to-brand-500 rounded-xl shadow-md">
                  Free Leak Scan
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/30 to-transparent blur-3xl rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
              <span className="text-xs font-semibold text-brand-700 uppercase tracking-wider">Trusted by 2,000+ creators</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Protect Your Content.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                Own Your Brand.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              Mistral scans the web for unauthorized content, removes it, and protects your income with continuous DMCA enforcement.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 rounded-full hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-200 flex items-center gap-2 group">
                Start Free Leak Scan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="text-sm text-slate-500 px-2">
                <span className="font-medium text-slate-700">$199/month</span> • Cancel anytime
              </div>
            </div>
          </motion.div>

          {/* Right Content - Mock UI */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-blue-500 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
              {/* Mock Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-brand-500" />
                  <span className="text-sm font-semibold text-slate-700">Live Scan Dashboard</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                </div>
              </div>
              
              {/* Mock Body */}
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Status</p>
                    <div className="flex items-center gap-2">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
                      </div>
                      <span className="text-sm font-medium text-brand-600">Scanning for leaks...</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">URLs Scanned</p>
                    <p className="text-lg font-bold text-slate-900">142,850</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { site: 'search-engine-results.com', status: 'Removed', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { site: 'anon-forum-board.net', status: 'Pending', color: 'text-amber-600', bg: 'bg-amber-50' },
                    { site: 'cloud-file-share.io', status: 'Removed', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.2) }}
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-white"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                          <Globe className="w-4 h-4 text-slate-400" />
                        </div>
                        <span className="text-sm font-medium text-slate-700 truncate w-32 sm:w-48">{item.site}</span>
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.bg} ${item.color}`}>
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Coverage() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-brand-500" />,
      title: "Tube & Leak Sites",
      desc: "Removal from major content aggregation platforms"
    },
    {
      icon: <Search className="w-6 h-6 text-brand-500" />,
      title: "Search Results",
      desc: "Delisting from Google and search engines"
    },
    {
      icon: <Users className="w-6 h-6 text-brand-500" />,
      title: "Social Media",
      desc: "Takedowns from X, Reddit, Instagram, TikTok"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-brand-500" />,
      title: "Impersonators",
      desc: "Removal of fake profiles pretending to be you"
    },
    {
      icon: <Cloud className="w-6 h-6 text-brand-500" />,
      title: "File Hosting",
      desc: "Deindexing from cloud storage and file-sharing sites"
    },
    {
      icon: <Globe className="w-6 h-6 text-brand-500" />,
      title: "Forums & Boards",
      desc: "Scrubbing private content from discussion forums"
    }
  ];

  return (
    <section id="coverage" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">We Scrub the Entire Web</h2>
          <p className="text-lg text-slate-600">
            Our technology scans thousands of platforms to find where your content is being shared without permission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Creators Trust Mistral</h2>
          <p className="text-lg text-slate-600">
            Join thousands of creators who reclaimed their content and revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Profile */}
          <div className="hidden lg:block bg-slate-50 p-6 rounded-2xl border border-slate-100 opacity-60 scale-95">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-slate-200"></div>
              <div>
                <div className="h-4 w-24 bg-slate-200 rounded mb-2"></div>
                <div className="h-3 w-16 bg-slate-200 rounded"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 w-full bg-slate-200 rounded"></div>
              <div className="h-3 w-5/6 bg-slate-200 rounded"></div>
              <div className="h-3 w-4/6 bg-slate-200 rounded"></div>
            </div>
          </div>

          {/* Center Main Testimonial */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl relative z-10">
            <div className="absolute -top-5 -right-5 text-8xl text-brand-100 font-serif leading-none select-none">"</div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl md:text-2xl font-medium text-slate-900 leading-relaxed mb-8">
                "Mistral handles everything automatically. Since protecting my content, my earnings increased because fans pay for my content, not unauthorized reposts."
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-600"></div>
                  <div>
                    <p className="font-semibold text-slate-900">Sarah J.</p>
                    <p className="text-sm text-slate-500">Digital Creator</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
                  <Activity className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-700">+40% Revenue</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Profile */}
          <div className="hidden lg:block bg-slate-50 p-6 rounded-2xl border border-slate-100 opacity-60 scale-95">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-slate-200"></div>
              <div>
                <div className="h-4 w-24 bg-slate-200 rounded mb-2"></div>
                <div className="h-3 w-16 bg-slate-200 rounded"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 w-full bg-slate-200 rounded"></div>
              <div className="h-3 w-5/6 bg-slate-200 rounded"></div>
              <div className="h-3 w-4/6 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500 to-transparent blur-3xl rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-slate-400">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Card - Highlighted */}
          <div className="bg-white text-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-gradient-to-r from-brand-600 to-brand-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                Most Popular
              </span>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Pro Protection</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-extrabold tracking-tight">$199</span>
              <span className="text-slate-500 font-medium">/ month</span>
            </div>
            
            <button className="w-full py-4 px-6 text-base font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 rounded-xl hover:shadow-lg hover:shadow-brand-500/25 transition-all duration-200 mb-8">
              Start Free Leak Scan
            </button>

            <div className="space-y-4">
              {[
                "DMCA Takedowns",
                "Google Delisting",
                "Social Media Removals",
                "Hourly Scans",
                "Unlimited Submissions",
                "AI Detection",
                "Worldwide Coverage"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-10 flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-white">One-Time Removals</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-white">Custom pricing</span>
            </div>
            
            <p className="text-slate-400 mb-8 leading-relaxed">
              For creators who want everything removed without a monthly plan. Perfect for cleaning up past content.
            </p>

            <div className="mt-auto">
              <button className="w-full py-4 px-6 text-base font-semibold text-white bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "How does the free scan work?",
      a: "Our system uses advanced image and text recognition to scan thousands of websites, forums, and social media platforms for your content. We provide a detailed report of where your content is hosted without permission."
    },
    {
      q: "How long do removals take?",
      a: "Most removals occur within 24-48 hours of submission. Search engine delisting (like Google) typically takes 3-5 days. We continuously monitor these links to ensure they stay down."
    },
    {
      q: "Do I need to submit links manually?",
      a: "No. While you can submit specific links if you find them, our AI automatically scans the web 24/7 to find and process unauthorized content on your behalf."
    },
    {
      q: "What platforms do you support?",
      a: "We support takedowns across all major platforms including Google, X (Twitter), Reddit, Instagram, TikTok, major tube sites, file hosting services, and private forums."
    },
    {
      q: "Is this legal?",
      a: "Yes. We operate strictly within the bounds of the Digital Millennium Copyright Act (DMCA) and international copyright laws to enforce your rights as a content creator."
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. There are no long-term contracts. You can cancel your monthly subscription at any time directly from your dashboard."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string, key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-5 text-slate-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/50 via-slate-900 to-slate-900"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Stop Leaks Before They Cost You More
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Every minute your content is online without permission, you lose potential revenue. Take control today.
        </p>
        <button className="px-8 py-4 text-lg font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-50 hover:scale-105 transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
          Start Free Leak Scan
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 180 50" className="h-6 text-slate-900" xmlns="http://www.w3.org/2000/svg">
            <text 
              x="0" 
              y="38" 
              fontFamily="'Courier New', Courier, serif" 
              fontSize="42" 
              fontWeight="normal" 
              fill="currentColor"
              letterSpacing="-1.5"
            >
              Mistral
            </text>
          </svg>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Terms of Service</a>
          <a href="mailto:legal@mistraldmca.com" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">legal@mistraldmca.com</a>
        </div>
        
        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} Mistral. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
