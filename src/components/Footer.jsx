import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Hash, Share2, MessageCircle, Moon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0f19] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-r from-accent to-accent-light p-2 rounded-full text-slate-900">
                <Moon size={20} className="fill-slate-900" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Consult <span className="gradient-text">Astro</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Discover your destiny with expert astrology guidance. We offer premium Vedic astrology logic and remedies for your modern life challenges.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-accent transition-colors">
                <Hash size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-accent transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-accent transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Testimonials', path: '/testimonials' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-accent text-sm transition-colors flex items-center gap-2">
                    <span className="text-accent/50 text-xs">▹</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Kundli Analysis',
                'Horoscope Reading',
                'Love & Relationship',
                'Career & Business',
                'Vastu Consultation',
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-slate-400 hover:text-accent text-sm transition-colors flex items-center gap-2">
                    <span className="text-accent/50 text-xs">▹</span> {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-0.5" size={18} />
                <span className="text-slate-400 text-sm">
                  Ground floor, 194, Vyapar Kendra Rd, Block C, Sushant Lok Phase I, Sector 43, Gurugram, Haryana 122009
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={18} />
                <a href="tel:+919812517600" className="text-slate-400 hover:text-accent text-sm transition-colors">
                  +91 9812517600
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={18} />
                <a href="mailto:info@consultastro.com" className="text-slate-400 hover:text-accent text-sm transition-colors">
                  info@consultastro.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Consult Astro. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
