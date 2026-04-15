import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialCard({ name, text, rating = 5, location, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-8 flex flex-col h-full"
    >
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={20} className="fill-accent text-accent" />
        ))}
      </div>
      <p className="text-slate-300 italic mb-8 leading-relaxed flex-grow">"{text}"</p>
      
      <div className="mt-auto">
        <h4 className="font-bold text-white text-lg">{name}</h4>
        <span className="text-slate-500 text-sm">{location}</span>
      </div>
    </motion.div>
  );
}
