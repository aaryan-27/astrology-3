import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CTABanner({ title, subtitle, buttonText = "Book Consultation", buttonLink = "/contact" }) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#3b0764]/80 to-[#0f172a]/95 z-0" />
      {/* Decorative stars/shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-4 mt-8 relative z-10 text-center max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          {title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-300 mb-8"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link to={buttonLink} className="btn-primary text-lg px-8 py-4">
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
