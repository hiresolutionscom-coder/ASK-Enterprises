
import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { HIGHLIGHTS, SERVICES, LEADERSHIP, CLIENTS, WHY_CHOOSE_US } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-32 md:pt-0 md:pb-0 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000" 
            alt="Workforce background" 
            className="w-full h-full object-cover opacity-40 md:opacity-30 object-center md:object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900 md:bg-gradient-to-r md:from-slate-900 md:via-slate-900/80 md:to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center py-1 px-3 rounded-full bg-blue-600/20 text-blue-400 text-xs md:text-sm font-semibold mb-6 border border-blue-500/30 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Trusted Since 1996
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 md:mb-8 tracking-tight">
              Driving Excellence <br className="hidden md:block" />
              Through <span className="text-blue-500">Disciplined <br className="md:hidden" /> Workforce</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 md:mb-10 leading-relaxed max-w-2xl">
              ASK Enterprises is a premier manpower and facility support partner, providing scalable and compliant workforce management to India's leading automotive and manufacturing sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center shadow-xl shadow-blue-600/30 text-center">
                Partner With Us <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#overview" className="px-8 py-4 bg-white/5 text-white backdrop-blur-md border border-white/10 rounded-xl font-bold hover:bg-white/20 transition-all text-center">
                View Company Overview
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="relative z-20 -mt-16 md:-mt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-blue-50 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  {React.cloneElement(stat.icon as React.ReactElement<any>, { className: "w-7 h-7 md:w-8 md:h-8 text-blue-600 group-hover:text-white" })}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-blue-600 font-semibold mb-2">{stat.label}</p>
                <p className="text-slate-500 text-sm leading-snug">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">Company Overview</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                A Legacy Built on <span className="gradient-text">Trust and Reliability</span>
              </h3>
              <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
                <p>
                  ASK Enterprises' journey began in 1996, when our founder entered the industry as a Manpower Contract Supervisor. This foundational experience provided deep, on-the-ground expertise in workforce management and operational discipline.
                </p>
                <p>
                  In 2014, ASK Enterprises was officially established as a professional organization. Today, we stand as a leader in the manpower solutions sector, recognized for our commitment to quality deployment and strong process-driven execution.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Quality Workforce Deployment', 'Operational Discipline', 'Process-Driven Execution', 'Long-term Partnerships'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-slate-800 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <CheckCircle2 className="text-blue-600 w-5 h-5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl -rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Operations" 
                className="relative z-10 rounded-3xl shadow-2xl object-cover h-[350px] md:h-[500px] w-full"
              />
              <div className="absolute -bottom-8 -left-8 z-20 bg-white p-6 md:p-8 rounded-2xl shadow-xl hidden sm:block border border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <ShieldCheck className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">100%</p>
                    <p className="text-slate-500 font-medium">Compliance Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Comprehensive Manpower & Support Solutions</h3>
            <p className="text-slate-600 text-lg">
              Tailored workforce services designed to meet the rigorous demands of manufacturing, logistics, and corporate environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all group">
                <div className="bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-6 h-6 text-blue-600 group-hover:text-white" })}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
            {/* Special Callout */}
            <div className="bg-blue-600 p-8 md:p-10 rounded-2xl shadow-lg flex flex-col justify-center text-white">
              <h4 className="text-2xl font-bold mb-4">Need a Custom Workforce Solution?</h4>
              <p className="text-blue-100 mb-8">We provide customized staffing plans that align with your specific production cycles and operational needs.</p>
              <a href="#contact" className="inline-flex items-center text-white font-bold hover:underline">
                Consult with our experts <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">Trusted Partners</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Our Top Client Portfolio</h3>
            <p className="max-w-2xl mx-auto text-slate-600 text-lg">
              Long-term associations with industry leaders reflect our service reliability, workforce quality, and unwavering focus on safety and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CLIENTS.map((client, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-xl flex items-center justify-center text-center border border-slate-100 hover:bg-white hover:shadow-md transition-all h-24">
                <span className="text-slate-800 font-bold text-sm tracking-tight leading-tight px-2">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">Our Leadership</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Driven by Experience and Governance</h3>
              <p className="text-slate-600 text-lg">
                Our core management team combines decades of field knowledge with modern strategic planning to deliver superior manpower outcomes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP.map((leader, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <UserCheck className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">{leader.name}</h4>
                <p className="text-blue-600 font-semibold mb-6">{leader.title}</p>
                <div className="space-y-3">
                  {leader.values.map((value, i) => (
                    <div key={i} className="flex items-start text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 shrink-0"></div>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800/20 skew-x-[-20deg] translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-8 leading-tight">Why Choose <br className="hidden md:block"/><span className="text-blue-400">ASK Enterprises?</span></h3>
              <div className="space-y-6">
                {WHY_CHOOSE_US.map((reason, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="bg-blue-600/50 p-1.5 rounded-full mr-4 mt-1 shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue-200" />
                    </div>
                    <p className="text-base md:text-lg text-blue-50 leading-relaxed font-medium">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/20">
              <h4 className="text-2xl font-bold mb-6">Our Core Strengths</h4>
              <p className="text-blue-100 mb-8 leading-relaxed">
                We bridge the gap between human potential and industrial productivity. Our operations are anchored in transparency and absolute compliance with labor laws.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="text-blue-400 text-xs font-bold uppercase mb-1">Safety</p>
                  <p className="text-white text-base md:text-lg font-semibold">Zero Incidents</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="text-blue-400 text-xs font-bold uppercase mb-1">Response</p>
                  <p className="text-white text-base md:text-lg font-semibold">24/7 Support</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="text-blue-400 text-xs font-bold uppercase mb-1">Process</p>
                  <p className="text-white text-base md:text-lg font-semibold">Standardized</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="text-blue-400 text-xs font-bold uppercase mb-1">Scale</p>
                  <p className="text-white text-base md:text-lg font-semibold">Rapid Deploy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl shadow-blue-600/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Optimize Your Workforce?</h3>
              <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Get in touch with our operations team today to discuss how ASK Enterprises can support your business goals with reliable manpower.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                <a href="tel:+917871037553" className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg">
                  Call: +91 7871037553
                </a>
                <a href="mailto:askentp1@gmail.com" className="bg-blue-500 text-white border border-blue-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-400 transition-all shadow-lg">
                  Email Operations
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
