import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  const phoneNumber = '919812517600';
  const defaultMessage = 'Hello, I would like to book a consultation.';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-green-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
    >
      <MessageCircle size={32} className="group-hover:scale-110 transition-transform duration-300" />
      <span className="absolute -top-12 right-0 bg-white text-slate-800 text-sm font-semibold px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
        {/* Triangle pointer */}
        <span className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 transform"></span>
      </span>
    </motion.a>
  );
}
