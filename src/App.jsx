import React, { useState, useEffect } from 'react';
import CTA from "./components/CTASection";
import {
  Package,
  Zap,
  Smartphone,
  BarChart3,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Menu,
  X,
  Box,
  Clock,
  Users,
  ShieldCheck,
  Building2,
  Send,
  Lightbulb,
  Heart,
  Globe,
  ArrowUp,
  Laptop,
  Printer,
  Scan,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  FileText,
  PieChart
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle Scroll Spy and Back to Top visibility
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'how-it-works', 'comparison', 'pricing', 'about', 'faq', 'contact'];

      // Determine active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Show back to top button
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`text-sm font-semibold transition-all duration-300 ${activeSection === id
        ? 'text-blue-800 bg-blue-50 px-3 py-1 rounded-full'
        : 'text-slate-600 hover:text-blue-800'
        }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => scrollToTop()}
            >
              <img src="/images/qylex-logo.png" alt="Qylex Logo" id="logo" className='h-10' />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <NavLink id="features" label="Features" />
              <NavLink id="how-it-works" label="How It Works" />
              <NavLink id="comparison" label="Comparison" />
              <NavLink id="pricing" label="Pricing" />
              <NavLink id="about" label="About Us" />
              <button onClick={() => scrollToSection('contact')} className="bg-blue-800 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/10 transform hover:-translate-y-0.5">
                Partner With Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-blue-800">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 shadow-xl absolute w-full">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('features')} className="text-left text-slate-600 font-medium px-2 py-2 hover:bg-slate-50 rounded-lg">Features</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-left text-slate-600 font-medium px-2 py-2 hover:bg-slate-50 rounded-lg">How It Works</button>
              <button onClick={() => scrollToSection('comparison')} className="text-left text-slate-600 font-medium px-2 py-2 hover:bg-slate-50 rounded-lg">Comparison</button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-slate-600 font-medium px-2 py-2 hover:bg-slate-50 rounded-lg">Pricing</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-slate-600 font-medium px-2 py-2 hover:bg-slate-50 rounded-lg">About Us</button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-800 text-white px-5 py-3 rounded-lg font-medium text-center shadow-md">Partner With Us</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-50/50 skew-x-12 transform origin-top translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="mb-10 lg:mb-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-sm font-bold mb-6 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                Live at UiTM Shah Alam, Arau & UPSI
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                Easier Drop-offs. <br />
                <span className="text-blue-800">Smarter Tracking.</span> <br />
                Faster Service.
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                The complete web-based automation solution for university parcel centers. Cut processing time from 40 seconds to <span className="font-bold text-slate-900">3 seconds</span> per parcel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contact')} className="flex items-center justify-center gap-2 bg-blue-800 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/10 transform hover:-translate-y-1">
                  Transform Your Center
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button onClick={() => scrollToSection('how-it-works')} className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-sm">
                  See How It Works
                </button>
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-2 border border-slate-200 relative z-10 transform rotate-0 hover:rotate-2 transition-all duration-500 group">

                <img src="images/dashboard.png" alt="Qylex Logo" id="logo" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-4 rounded-xl shadow-xl z-20 max-w-xs transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-2 mb-1">
                  <Send className="h-4 w-4 text-blue-400" />
                  <span className="font-bold text-sm">Telegram Bot</span>
                </div>
                <p className="text-xs text-slate-300">"Your parcel arrived at Rack A-12. Scan QR to collect."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div>
              <div className="text-3xl font-extrabold text-blue-800">4,000+</div>
              <div className="text-sm text-slate-600 font-medium mt-1">Daily Parcels Processed</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-800">1-3 sec</div>
              <div className="text-sm text-slate-600 font-medium mt-1">Registration Time</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-800">0</div>
              <div className="text-sm text-slate-600 font-medium mt-1">Excel Sheets Used</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-800">100%</div>
              <div className="text-sm text-slate-600 font-medium mt-1">Automated Tracking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-20 bg-slate-50" id="problem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Logistics Centers Are Switching</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Manual systems and Excel sheets can't handle the e-commerce boom. Qylex Solution eliminates the bottleneck.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* The Old Way */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-50 text-red-600 px-4 py-1 rounded-bl-xl text-sm font-bold border-l border-b border-red-100">The Hard Way</div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <XCircle className="text-red-500" /> Manual Operations
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="text-red-500 mt-1">✕</span>
                  <span><strong>Slow Registration:</strong> 30-40 seconds per parcel typing data.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="text-red-500 mt-1">✕</span>
                  <span><strong>Excel Nightmares:</strong> Data leaks, corrupted files, and human error.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="text-red-500 mt-1">✕</span>
                  <span><strong>Long Queues:</strong> Students wait hours because staff can't find items.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="text-red-500 mt-1">✕</span>
                  <span><strong>Login Walls:</strong> Students forced to download apps and register accounts.</span>
                </li>
              </ul>
            </div>

            {/* The Qylex Solution Way */}
            <div className="bg-blue-900 p-8 rounded-2xl shadow-xl border border-blue-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-xl text-sm font-bold shadow-lg">The Qylex Solution Way</div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-blue-300" /> Automated Efficiency
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-blue-100">
                  <CheckCircle2 className="h-5 w-5 text-blue-300 mt-1 shrink-0" />
                  <span><strong>Instant Scan:</strong> 1-3 seconds per parcel. Scan barcode, auto-label print.</span>
                </li>
                <li className="flex items-start gap-3 text-blue-100">
                  <CheckCircle2 className="h-5 w-5 text-blue-300 mt-1 shrink-0" />
                  <span><strong>Smart Racking:</strong> System tells you exactly which shelf to use.</span>
                </li>
                <li className="flex items-start gap-3 text-blue-100">
                  <CheckCircle2 className="h-5 w-5 text-blue-300 mt-1 shrink-0" />
                  <span><strong>No-Login Required:</strong> Students check status via Telegram Bot instantly.</span>
                </li>
                <li className="flex items-start gap-3 text-blue-100">
                  <CheckCircle2 className="h-5 w-5 text-blue-300 mt-1 shrink-0" />
                  <span><strong>Revenue Booster:</strong> Integrated delivery-to-room module.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Total Campus Logistics Control</h2>
            <p className="mt-4 text-slate-600">Designed specifically for High-Volume University Centers.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-blue-600" />}
              title="Lightning Fast Intake"
              desc="Forget typing. Our barcode scanner integration detects duplicates, registers the item, and prints a label in under 3 seconds."
            />
            <FeatureCard
              icon={<Smartphone className="h-8 w-8 text-blue-600" />}
              title="Telegram Integration"
              desc="The only system that doesn't force students to download an app. Notifications and status checks happen in the chat app they already use."
            />
            <FeatureCard
              icon={<Box className="h-8 w-8 text-blue-600" />}
              title="Smart Rack Audit"
              desc="Prevent lost parcels. Our system tracks exact shelf locations and includes an audit log to see which staff handled which item."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-blue-600" />}
              title="Optional Delivery"
              desc="Unlock new revenue. Students can request room delivery via the bot. The system batches deliveries for efficiency."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-8 w-8 text-blue-600" />}
              title="Data Security"
              desc="Move away from vulnerable Excel sheets. Secure, cloud-based database ensures records are safe and accessible."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-blue-600" />}
              title="Live Analytics"
              desc="View daily volume, staff performance, and revenue reports in real-time. Make decisions based on data, not guesses."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-4 text-slate-600">3 Simple Steps to Automation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center shadow-lg mb-6 group-hover:border-blue-100 transition-colors">
                <Scan className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1. Scan & Label</h3>
              <p className="text-slate-600 text-sm max-w-xs">
                Staff scans the parcel barcode. The system instantly verifies it, checks for duplicates, and prints a label with rack location.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center shadow-lg mb-6 group-hover:border-blue-100 transition-colors">
                <Send className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">2. Auto-Notify</h3>
              <p className="text-slate-600 text-sm max-w-xs">
                The student immediately receives a notification via Telegram Bot. No need for them to check a website or call.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center shadow-lg mb-6 group-hover:border-blue-100 transition-colors">
                <CheckCircle2 className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">3. Quick Pickup</h3>
              <p className="text-slate-600 text-sm max-w-xs">
                Student shows their QR code or phone number. Staff retrieves the item from the assigned smart rack. Done in seconds.
              </p>
            </div>
          </div>

          {/* Hardware Requirements Mini-Section */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
            <h4 className="font-bold text-lg mb-4 text-slate-900">Hardware & Equipment Support</h4>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-slate-600 mb-6">
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Scan className="text-blue-500" /> Barcode Scanner
              </div>
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Printer className="text-blue-500" /> Thermal Printer
              </div>
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Laptop className="text-blue-500" /> PC / Laptop (Optional)
              </div>
            </div>
            <p className="text-sm text-blue-700 font-medium bg-blue-50 inline-block px-4 py-2 rounded-full border border-blue-100">
              *We can provide hardware packages subject to partnership terms & volume.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white" id="comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="p-8 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 text-center">Market Comparison</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-6 text-sm font-semibold text-slate-600 uppercase tracking-wider">Feature</th>
                    <th className="p-6 text-sm font-bold text-blue-800 uppercase tracking-wider bg-blue-50">Qylex Solution System</th>
                    <th className="p-6 text-sm font-semibold text-slate-500 uppercase tracking-wider">Traditional System</th>
                    <th className="p-6 text-sm font-semibold text-slate-500 uppercase tracking-wider">Excel / Manual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-6 font-medium text-slate-900">Processing Speed</td>
                    <td className="p-6 font-bold text-blue-700 bg-blue-50/50">1-3 Seconds</td>
                    <td className="p-6 text-slate-600">30-35 Seconds</td>
                    <td className="p-6 text-slate-600">45+ Seconds</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-slate-900">Student Access</td>
                    <td className="p-6 font-bold text-blue-700 bg-blue-50/50">No Login / Telegram</td>
                    <td className="p-6 text-slate-600">Registration Mandatory</td>
                    <td className="p-6 text-slate-600">Walk-in Inquiry Only</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-slate-900">Labeling</td>
                    <td className="p-6 font-bold text-blue-700 bg-blue-50/50">Auto-Print</td>
                    <td className="p-6 text-slate-600">Handwritten Marker</td>
                    <td className="p-6 text-slate-600">Handwritten Logbook</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-slate-900">Scalability</td>
                    <td className="p-6 font-bold text-blue-700 bg-blue-50/50">High (4000+/day)</td>
                    <td className="p-6 text-slate-600">Low (Data Leaks)</td>
                    <td className="p-6 text-slate-600">Impossible</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* UPDATED Pricing / Commission Model */}
      <section className="py-20 bg-slate-900 text-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Transparent Commission Model</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We don't charge hidden fees. Our commission is a percentage of the <strong>Parcel Handling Charge</strong> you set for your students. The higher your charge, the lower our percentage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PricingCard
              price="RM 1.00"
              rate="20%"
              fee="RM 0.20"
              retention="RM 0.80"
            />
            <PricingCard
              price="RM 2.00"
              rate="17%"
              fee="RM 0.34"
              retention="RM 1.66"
            />
            <PricingCard
              price="RM 3.00"
              rate="15%"
              fee="RM 0.45"
              retention="RM 2.55"
            />
            <PricingCard
              price="RM 4.00"
              rate="12%"
              fee="RM 0.48"
              retention="RM 3.52"
            />
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <div>
              <h4 className="flex items-center gap-2 font-bold text-white mb-3">
                <FileText className="w-5 h-5 text-blue-400" /> Payment Terms
              </h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Invoices issued monthly based on system reports.</li>
                <li>• Payment due within <strong>7 days</strong> of invoice date.</li>
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-bold text-white mb-3">
                <ShieldCheck className="w-5 h-5 text-blue-400" /> Fair-Use Protection
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                For operational sustainability and partner confidence, a monthly commission ceiling may be applied for high-volume periods, subject to mutual agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Trust */}
      <section className="py-20 bg-white border-b border-slate-200" id="about">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-full bg-blue-50 border border-blue-100 mb-4 shadow-sm">
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">About Qylex Solution</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Founder Profile Card */}
            <div className="lg:col-span-4">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 text-center sticky top-28 transition-all">
                <div className="relative w-40 h-40 mx-auto mb-6 group">
                  <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity blur-xl"></div>
                  {/* PLACEHOLDER IMAGE: Replace 'src' below with your actual image URL */}
                  <img
                    src="/images/founder.png"
                    alt="Muhammad Zalhaqimi Bin Zuhairi"
                    className="w-full h-full object-cover rounded-full border-4 border-slate-100 shadow-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-blue-600 text-white p-1.5 rounded-full border-2 border-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Muhammad Zalhaqimi</h3>
                <h4 className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wide">Founder & CEO</h4>
                <div className="text-left bg-slate-50 p-4 rounded-xl text-sm text-slate-600 space-y-2 border border-slate-200">
                  <p><strong>Education:</strong> Intelligent Systems Engineering, UiTM Shah Alam</p>
                  <p><strong>Expertise:</strong> AI & Automation</p>
                </div>
              </div>
            </div>

            {/* Content Blocks */}
            <div className="lg:col-span-8 space-y-12">
              {/* 1. Background */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-200 transition-colors">
                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono shadow-md">01</span>
                  Our Background
                </h3>
                <div className="prose prose-slate text-slate-600 leading-relaxed">
                  <p className="mb-4">
                    <strong>Qylex Solution (SSM: 202503226171)</strong> is a pioneering logistics technology firm specializing in campus automation. Founded by Intelligent Systems Engineers, we bridge the gap between academic innovation and industrial operational needs.
                  </p>
                  <p>
                    Recognizing the critical bottleneck in university logistics, where manual dependencies caused operational paralysis, QParcel was engineered as a high-performance SaaS solution. We transformed a legacy problem into a streamlined, automated ecosystem capable of scaling with the e-commerce boom
                  </p>
                </div>
              </div>

              {/* 2. Availability */}
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono shadow-md">02</span>
                  Our Availability
                </h3>
                <p className="text-slate-700 mb-4">
                  We are currently live and operational, processing <strong>4,000-5,000 parcels daily</strong>. Our system is field-tested and trusted by vendors at major institutions:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center font-medium text-slate-700 border border-slate-200 hover:border-blue-300 transition-colors">UiTM Shah Alam <br /><span className="text-xs text-slate-500">(Miku Parcel)</span></div>
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center font-medium text-slate-700 border border-slate-200 hover:border-blue-300 transition-colors">UiTM Arau <br /><span className="text-xs text-slate-500">(UniStorage Arau)</span></div>
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center font-medium text-slate-700 border border-slate-200 hover:border-blue-300 transition-colors">UPSI <br /><span className="text-xs text-slate-500">(1StopCentre & Martkz)</span></div>
                </div>
                <p className="text-sm text-slate-600">
                  Qylex Solution is a web-based platform, meaning there is <strong>no downtime for installation</strong>. It is available 24/7 via any web browser for vendors, while students can access tracking instantly via our Telegram Bot without needing to download apps or register accounts.
                </p>
              </div>

              {/* Grid for Innovation & Values */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* 3. Innovation */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-200 transition-colors h-full">
                  <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono shadow-md">03</span>
                    Innovation
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm">We don't just digitize; we automate. While competitors (like UniStorage or Cellarium) still rely on Excel or manual data entry, Qylex Solution introduces:</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm text-slate-700">
                      <Zap className="w-5 h-5 text-blue-600 shrink-0" />
                      <span><strong>1-Click Intake:</strong> Reduced processing time from 40s to 1-3s per parcel using automated barcode scanning.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-slate-700">
                      <Globe className="w-5 h-5 text-blue-600 shrink-0" />
                      <span><strong>"No-Login" Architecture:</strong> Tracking via phone number or ID without creating an account.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-slate-700">
                      <Box className="w-5 h-5 text-blue-600 shrink-0" />
                      <span><strong>Smart Racking:</strong> Auto-shelf assignment and staff interaction logs.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-slate-700">
                      <Send className="w-5 h-5 text-blue-600 shrink-0" />
                      <span><strong>Telegram Bot:</strong> Real-time push notifications sent directly to students.</span>
                    </li>
                  </ul>
                </div>

                {/* 4. Shared Values */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-200 transition-colors h-full">
                  <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono shadow-md">04</span>
                    Shared Values
                  </h3>
                  <div className="bg-slate-900 text-white p-4 rounded-xl mb-4 text-center italic font-medium text-sm border border-slate-800">
                    "Accelerate Operations, Reduce Burden."
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm text-slate-600">
                      <Lightbulb className="w-5 h-5 text-yellow-500 shrink-0" />
                      <span><strong>Efficiency:</strong> We believe university staff shouldn't spend hours on data entry. We automate the boring stuff so they can focus on service.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-slate-600">
                      <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
                      <span><strong>Transparency:</strong> We value data integrity. Our system prevents "Excel leaks" and data loss.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-slate-600">
                      <Heart className="w-5 h-5 text-red-500 shrink-0" />
                      <span><strong>Student-Centric:</strong> We believe collecting a parcel should take seconds, not hours.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: FAQ */}
      <section className="py-20 bg-slate-50" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-slate-600">Common questions from University Partners and Vendors.</p>
          </div>

          <div className="space-y-4">
            <FaqItem
              question="Do I need to buy my own hardware?"
              answer="Not necessarily. We can provide the essential hardware (Barcode Scanner, Thermal Printer) as part of our partnership deal. For centers meeting specific volume criteria, we can even provide a dedicated PC/Laptop to ensure smooth operations."
            />
            <FaqItem
              question="Do students need to download an app?"
              answer="No! This is our biggest advantage. Students receive notifications via our Telegram Bot, an app they likely already have. They can also check status on our website using just their phone number."
            />
            <FaqItem
              question="Can I deliver parcels to student rooms?"
              answer="Yes. Qylex Solution includes an 'On-Demand Batch Delivery' module. Students can request delivery via the bot, and the system organizes requests into batches (e.g., 4PM, 6PM) so your runners can deliver efficiently."
            />
            <FaqItem
              question="Is the system secure?"
              answer="Absolutely. Unlike Excel sheets which are prone to corruption and leaks, our data is stored in a secure cloud database with daily backups. We also log every staff interaction for accountability."
            />
            <FaqItem
              question="How does the payment/commission work?"
              answer="We charge a commission based on your handling charges per parcel. Invoices are generated monthly based on system reports, and payment is due within 7 days."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
      {/* <section className="py-20 bg-blue-800 relative overflow-hidden" id="contact">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-blue-900/50 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate Your Center?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Join the vendors at UiTM and UPSI who have already transformed their operations. Schedule a demo today.
          </p>
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl shadow-blue-900/20">
            <form className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">University / Organization Name</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none text-slate-900" placeholder="e.g. UiTM Segamat" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Contact Number</label>
                <input type="tel" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none text-slate-900" placeholder="+60 12-345 6789" />
              </div>
              <button type="button" className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
                Request Demo & Proposal
              </button>
            </form>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2 text-white font-bold text-xl mb-2">
                <Package className="h-6 w-6" /> Qylex Solution
              </div>
              <p className="text-sm">Easier Drop-offs. Smarter Tracking. Faster Service.</p>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-slate-600">
            &copy; 2025 Qylex Solution (202503226171). All rights reserved.
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-800 text-white p-3 rounded-full shadow-lg shadow-blue-800/30 hover:bg-blue-700 transition-all duration-300 z-50 border border-blue-700/20 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
};

// Sub-component for Feature Cards
const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group">
    <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors">{title}</h3>
    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
      {desc}
    </p>
  </div>
);

// Updated Pricing Card Component for Visual Clarity
const PricingCard = ({ price, rate, fee, retention }) => (
  <div className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Package className="w-24 h-24 text-blue-800 transform rotate-12" />
    </div>

    <div className="relative z-10">
      <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Parcel Price</div>
      <h3 className="text-3xl font-extrabold text-slate-900 mb-4">{price}</h3>

      <div className="flex items-end gap-2 mb-6">
        <div className="text-5xl font-bold text-blue-800">{rate}</div>
        <div className="text-sm font-medium text-slate-500 mb-2">Commission</div>
      </div>

      {/* Visual Bar */}
      <div className="w-full bg-slate-100 rounded-full h-4 mb-2 overflow-hidden flex">
        <div className="bg-green-500 h-full" style={{ width: `${100 - parseFloat(rate)}%` }}></div>
        <div className="bg-blue-800 h-full" style={{ width: `${parseFloat(rate)}%` }}></div>
      </div>
      <div className="flex justify-between text-xs font-medium text-slate-500 mb-6">
        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div> Your Share</span>
        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-800"></div> Qylex Solution</span>
      </div>

      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-slate-600">Our Fee:</span>
          <span className="font-bold text-slate-900">{fee}</span>
        </div>
        <div className="flex justify-between items-center text-green-600">
          <span className="text-sm font-bold">You Keep:</span>
          <span className="font-bold">{retention}</span>
        </div>
      </div>
    </div>
  </div>
);

// Sub-component for FAQ Items
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left font-medium text-slate-900 hover:bg-slate-50 transition-colors"
      >
        {question}
        {isOpen ? <ChevronUp className="h-5 w-5 text-blue-800" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
      </button>
      <div
        className={`px-4 text-slate-600 text-sm overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {answer}
      </div>
    </div>
  );
};

export default App;