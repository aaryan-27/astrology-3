import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceCard({ title, description, icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-8 group flex flex-col h-full relative overflow-hidden"
    >
      {/* Decorative background glow on hover */}
      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500 z-0" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-slate-400 leading-relaxed mb-8 flex-grow">{description}</p>
        
        <Link to="/services" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors mt-auto w-fit">
          Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
