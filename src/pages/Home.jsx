import { motion } from 'framer-motion';
import { Star, Shield, Clock, Compass, BookOpen, Heart } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      title: "Kundli Analysis",
      description: "Get deep insights into your personality, career, and future with a comprehensive birth chart reading.",
      icon: <Compass size={32} />
    },
    {
      title: "Love & Relationship",
      description: "Find clarity in your romantic life. Understand compatibility and overcome relationship blocks.",
      icon: <Heart size={32} />
    },
    {
      title: "Career Astrology",
      description: "Discover your true professional calling and overcome obstacles in your career path.",
      icon: <BookOpen size={32} />
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi, India",
      text: "The consultation gave me exact clarity on my career switch. Everything predicted came true within 6 months. Highly recommended!",
      rating: 5
    },
    {
      name: "Rahul Verma",
      location: "Mumbai, India",
      text: "Accurate readings and very practical remedies. I felt a positive shift in my life almost immediately after following the guidance.",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <Star size={16} className="text-accent" />
            <span className="text-sm font-medium tracking-wide text-slate-300">PREMIUM ASTROLOGY CONSULTATION</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl"
          >
            Discover Your Destiny with <br className="hidden md:block"/>
            <span className="gradient-text">Expert Astrology Guidance</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
          >
            Unlock the secrets of your life path, overcome obstacles, and find clarity in love, career, and personal growth with precise Vedic astrology reading.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="/contact" className="btn-primary py-4 px-8 text-lg w-full sm:w-auto">
              Book Consultation Now
            </Link>
            <Link to="/services" className="btn-outline py-4 px-8 text-lg w-full sm:w-auto bg-black/20 backdrop-blur-sm">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[#0b0f19] relative">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Cosmic Expertise</h2>
            <p className="text-lg text-slate-400">Comprehensive astrological services tailored to guide you through life's most important decisions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.2}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="text-accent hover:text-accent-light font-semibold text-lg inline-flex items-center gap-2 group">
              View All Services
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl font-bold mb-6">Why Consult Astro?</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                With years of experience interpreting celestial alignments, we provide accurate predictions and practical remedies to help you navigate life's complexities.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: 'Accurate Predictions', desc: 'Precision-based Vedic astrology techniques for reliable insights.', icon: <Star className="text-accent" /> },
                  { title: 'Privacy Guaranteed', desc: '100% confidential and secure consultation sessions.', icon: <Shield className="text-accent" /> },
                  { title: 'Timely Guidance', desc: 'Available for urgent queries and immediate astrological remedies.', icon: <Clock className="text-accent" /> }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent rounded-3xl blur-2xl"></div>
              <div className="glass-card p-2 relative rounded-3xl overflow-hidden aspect-square flex items-center justify-center border-white/20">
                {/* Zodiac wheel or abstract astrology graphic placeholder */}
                <div className="absolute inset-0 border-[40px] border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-8 border-[2px] border-dashed border-accent/30 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                <Star size={80} className="text-accent animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-[#0b0f19]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-slate-400">Trusted by hundreds of individuals seeking celestial guidance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((test, index) => (
              <TestimonialCard 
                key={index}
                {...test}
                delay={index * 0.2}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn-outline">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner 
        title="Ready to Uncover Your True Path?"
        subtitle="Schedule a deep-dive consultation today and receive actionable insights into your future."
      />
    </div>
  );
}
