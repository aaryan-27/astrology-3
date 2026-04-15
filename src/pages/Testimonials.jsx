import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import CTABanner from '../components/CTABanner';

export default function Testimonials() {
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
    },
    {
      name: "Anjali Desai",
      location: "Ahmedabad, India",
      text: "I was struggling with marriage prospects. The Kundli Milan analysis and subsequent remedies helped us finalize things smoothly. We are very grateful.",
      rating: 5
    },
    {
      name: "Karthik N.",
      location: "Bangalore, India",
      text: "The Vastu tips for my new office were simple yet highly effective. My business revenue has seen a steady 30% growth since the changes.",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad, India",
      text: "Very polite, patient, and knowledgeable. They listened to my problems and gave a detailed astrological reasoning behind the current phase. It gave me immense peace.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      location: "Gurugram, India",
      text: "Precise career forecasting. I was warned about a difficult period with my superiors and it happened exactly as told. The remedies kept the damage to a minimum.",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col w-full pt-10">
      <section className="py-20 text-center max-w-4xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Client <span className="gradient-text">Experiences</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-400"
        >
          Read genuine reviews from individuals whose lives have been positively transformed.
        </motion.p>
      </section>

      <section className="py-12 bg-[#0b0f19]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <TestimonialCard 
                key={index}
                {...test}
                delay={(index % 3) * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title="Ready to Write Your Own Success Story?"
        subtitle="Join our community of satisfied clients who found their direction."
      />
    </div>
  );
}
