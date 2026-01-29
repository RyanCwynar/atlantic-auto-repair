"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 bg-amber-500 text-white text-center py-2 px-4 text-sm font-medium z-[1001]">
        ✨ This is a free redesign mockup created by Byldr — <a href="https://ryancwynar.github.io" className="underline">Learn More</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-9 left-0 right-0 bg-white shadow-md z-[1000] px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-lg md:text-xl font-bold text-gray-900">Atlantic Auto</span>
          </div>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</a>
          </div>

          {/* CTA Button */}
          <a href="tel:9545303441" className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm whitespace-nowrap">
            (954) 530-3441
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden ml-2 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <a href="#services" className="block py-2 text-gray-700 font-medium">Services</a>
            <a href="#about" className="block py-2 text-gray-700 font-medium">About</a>
            <a href="#contact" className="block py-2 text-gray-700 font-medium">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">ASE Certified Technicians</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Oakland Park&apos;s Trusted <span className="text-red-500">Auto Repair</span> Shop
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Family owned and operated since 2008. Full-service auto repair with honest, affordable rates and a 1-year guarantee on all work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:9545303441" className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 text-center">
                  Call Now: (954) 530-3441
                </a>
                <a href="#services" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all text-center">
                  View Services
                </a>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="aspect-square bg-gradient-to-br from-red-600/20 to-red-900/40 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl mb-4">🔧</div>
                  <p className="text-2xl font-bold text-white">All Makes &amp; Models</p>
                  <p className="text-gray-300 mt-2">Expert repairs you can trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600">15+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600">1 Year</div>
              <div className="text-gray-600 text-sm">Work Guarantee</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600">ASE</div>
              <div className="text-gray-600 text-sm">Certified Mechanics</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600">Family</div>
              <div className="text-gray-600 text-sm">Owned &amp; Operated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From routine maintenance to complex repairs — there&apos;s no auto repair job we can&apos;t handle
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: "❄️", title: "A/C & Heating", desc: "Full HVAC repair and service to keep you comfortable year-round" },
              { icon: "🛞", title: "Brake Service", desc: "Pads, rotors, calipers and complete brake system repairs" },
              { icon: "⚡", title: "Electrical Diagnostics", desc: "Complex computer diagnostics and electrical system repairs" },
              { icon: "🚗", title: "Engine Repair", desc: "Engine replacement, rebuilds, and performance work" },
              { icon: "🔩", title: "Suspension", desc: "Shocks, struts, springs and complete suspension overhauls" },
              { icon: "💨", title: "Custom Exhaust", desc: "Performance exhaust, catalytic converters and emissions" },
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Plus: Differentials, Oil Changes, Tire Service &amp; More</p>
            <a href="tel:9545303441" className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700">
              Call for a free estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Atlantic Auto Repair?</h2>
              <p className="text-gray-300 text-lg mb-8">
                We&apos;re a family-owned business that treats every customer like family. Our ASE-certified mechanics provide honest assessments and affordable solutions — no upselling, no surprises.
              </p>
              <ul className="space-y-4">
                {[
                  "All work guaranteed for 1 year",
                  "Manufacturer warranty on all parts",
                  "Honest, affordable pricing",
                  "Serving all makes and models",
                  "Same-day service available"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-600/20 to-red-900/30 rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">ASE Certified</h3>
                <p className="text-gray-300 mb-6">
                  Our technicians are ASE Master Certified, ensuring top-quality repairs every time.
                </p>
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm">5-Star Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-lg">Stop in today or give us a call for a free estimate</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="tel:9545303441" className="bg-red-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-red-100">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-red-600 font-semibold text-lg">(954) 530-3441</p>
            </a>

            <a href="mailto:atlanticauto4208@gmail.com" className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✉️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">atlanticauto4208@gmail.com</p>
            </a>

            <a href="https://maps.google.com/?q=4208+NE+5th+Ave+Oakland+Park+FL+33334" target="_blank" rel="noopener noreferrer" className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">4208 NE 5th Ave<br/>Oakland Park, FL 33334</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Get Your Car Fixed?</h2>
          <p className="text-red-100 text-lg mb-8">
            Call now for a free estimate. Same-day service available!
          </p>
          <a href="tel:9545303441" className="inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Call (954) 530-3441
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-bold text-white">Atlantic Auto Repair</span>
              </div>
              <p className="text-gray-500">
                Family owned and operated auto repair shop serving Oakland Park and South Florida since 2008.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-500">
                <li>A/C &amp; Heating Repair</li>
                <li>Brake Service</li>
                <li>Engine Repair</li>
                <li>Electrical Diagnostics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-500">
                <li>(954) 530-3441</li>
                <li>atlanticauto4208@gmail.com</li>
                <li>4208 NE 5th Ave</li>
                <li>Oakland Park, FL 33334</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2026 Atlantic Auto Repair. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Tracking Pixel */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var params = new URLSearchParams(window.location.search);
            var ref = params.get('ref');
            if (ref) {
              var img = new Image();
              img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
            }
          })();
        `
      }} />
    </div>
  );
}
