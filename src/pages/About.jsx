import { motion } from 'framer-motion';
import { Star, Shield, Award, Users } from 'lucide-react';
import CTABanner from '../components/CTABanner';

export default function About() {
  return (
    <div className="flex flex-col w-full pt-10">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            About <span className="gradient-text">Consult Astro</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed"
          >
            We bridge ancient cosmic wisdom with modern life challenges to help you find your true path.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2">
                <div className="w-full h-full bg-gradient-to-br from-[#1e1b4b] to-[#312e81] rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                   {/* Abstract celestial visualization */}
                   <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
                   <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/40 rounded-full blur-2xl"></div>
                   <Star size={64} className="text-accent/50 mb-4" />
                   <h3 className="text-2xl font-bold text-white/50 text-center px-4 tracking-widest uppercase">Ancient Wisdom</h3>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  At Consult Astro, we believe that the universe has a specific design for everyone. Astrology is not just about predicting the future; it is a profound tool for self-awareness and empowerment.
                </p>
                <p>
                  Founded by expert astrologers with deep roots in Vedic traditions, we have dedicated ourselves to decoding planetary movements to provide practical, life-changing guidance.
                </p>
                <p>
                  Whether you are facing career crossroads, relationship uncertainties, or seeking overall well-being, our customized readings offer clarity without fearmongering. We focus on positive affirmations, practical remedies, and actionable advice.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="py-20 bg-[#0b0f19]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">Why People Trust Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Award size={40} className="text-accent" />, title: "Certified Experts", desc: "Our astrologers have decades of combined experience in Vedic astrology." },
              { icon: <Shield size={40} className="text-accent" />, title: "100% Confidential", desc: "Your personal details and readings are kept strictly secured and private." },
              { icon: <Users size={40} className="text-accent" />, title: "10,000+ Consultations", desc: "We've guided thousands of individuals globally towards better decisions." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card p-8 flex flex-col items-center text-center"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title="Start Your Journey of Self-Discovery"
        subtitle="Talk to an expert astrologer today and get the answers you've been seeking."
        buttonText="Book A Session"
      />
    </div>
  );
}
