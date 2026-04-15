import { motion } from 'framer-motion';
import { Compass, BookOpen, Heart, Briefcase, Home as HomeIcon } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: "kundli",
      title: "Kundli Analysis",
      description: "A comprehensive deep dive into your birth chart (Personal Horoscope). Discover your strengths, weaknesses, doshas, and yogas.",
      benefits: ["Identify life purpose", "Discover hidden talents", "Remedies for malefic planets"],
      icon: <Compass size={48} />
    },
    {
      id: "horoscope",
      title: "Horoscope Reading",
      description: "Get detailed predictions for your upcoming months. Prepare for opportunities and safeguard against challenges based on planetary transits.",
      benefits: ["Month-by-month predictions", "Favorable periods mapping", "Warning against tricky transits"],
      icon: <BookOpen size={48} />
    },
    {
      id: "love",
      title: "Love & Relationship Guidance",
      description: "Understand your compatibility with your partner (Kundli Milan) or timing for marriage. Resolve conflicts using astrological insights.",
      benefits: ["Compatibility scoring (Guna Milan)", "Remedies for marital peace", "Timing for finding a partner"],
      icon: <Heart size={48} />
    },
    {
      id: "career",
      title: "Career & Business Astrology",
      description: "Stuck in your job? Planning a new business? Get astrological timing for career switches, promotions, and wealth accumulation.",
      benefits: ["Favorable business domains", "Timing for job change", "Wealth and finance forecasting"],
      icon: <Briefcase size={48} />
    },
    {
      id: "vastu",
      title: "Vastu Consultation",
      description: "Align your living or workspace with cosmic energies. A well-balanced Vastu brings peace, prosperity, and health.",
      benefits: ["Home layout analysis", "Office space optimization", "Non-destructive Vastu remedies"],
      icon: <HomeIcon size={48} />
    }
  ];

  return (
    <div className="flex flex-col w-full pt-10">
      <section className="py-20 relative overflow-hidden text-center max-w-4xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Astrological <span className="gradient-text">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-400"
        >
          Detailed analysis, accurate predictions, and practical remedies across all areas of your life.
        </motion.p>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-5/12 aspect-square max-h-[400px]">
                <div className="w-full h-full glass-card p-2 rounded-3xl relative flex items-center justify-center overflow-hidden border-white/10 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-50 group-hover:opacity-80 transition-opacity"></div>
                  <div className="text-accent/80 drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-7/12">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <h4 className="font-semibold text-white mb-4 text-lg">Key Benefits:</h4>
                <ul className="space-y-3 mb-10">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="btn-outline">
                  Book This Service
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner 
        title="Not sure which service you need?"
        subtitle="Schedule a general consultation and we'll guide you through your cosmic blueprint."
      />
    </div>
  );
}
