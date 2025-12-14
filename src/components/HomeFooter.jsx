import React from 'react'
import { Instagram, Twitter, Facebook } from 'lucide-react'
import logoImage from '../assets/logo.png'
export default function HomeFooter() {
  return (
    <footer className="bg-[#07142a] text-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.7fr_repeat(3,minmax(0,1fr))]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImage} alt="Diksuchi logo" className="h-12 w-12 rounded-xl object-contain shadow-lg shadow-blue-900/30" />
              <span className="text-2xl font-semibold text-white">Diksuchi</span>
            </div>
            <p className="text-slate-300/90 max-w-sm leading-relaxed">
              A modern platform for learners and instructors to grow together through free and paid skill-based education.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="https://instagram.com/diksuchi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Diksuchi on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-slate-100 transition hover:bg-white/20"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/diksuchi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Diksuchi on Twitter"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-slate-100 transition hover:bg-white/20"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/diksuchi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Diksuchi on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-slate-100 transition hover:bg-white/20"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Explore</h3>
            <ul className="space-y-4 text-slate-300">
              <li><a href="#courses" className="transition hover:text-white">Courses</a></li>
              <li><a href="#get-started" className="transition hover:text-white">Get Started</a></li>
              <li><a href="/login" className="transition hover:text-white">Login</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-4 text-slate-300">
              <li><a href="#about" className="transition hover:text-white">About Us</a></li>
              <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
              <li><a href="#faqs" className="transition hover:text-white">FAQs</a></li>
              <li><a href="#help" className="transition hover:text-white">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Legal</h3>
            <ul className="space-y-4 text-slate-300">
              <li><a href="#privacy" className="transition hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" className="transition hover:text-white">Terms &amp; Conditions</a></li>
              <li><a href="#refund" className="transition hover:text-white">Refund Policy</a></li>
              <li><a href="#cookies" className="transition hover:text-white">Cookies Policy</a></li>
              <li><a href="#copyright" className="transition hover:text-white">Copyright Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          &copy; 2025 Diksuchi. All rights reserved.
        </div>
      </div>
    </footer>
  )
}