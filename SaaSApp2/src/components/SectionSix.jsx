import { motion } from "framer-motion";

export default function SectionSix() {
  const testimonials = [
    {
      name: "Olivia Thompson",
      role: "CEO, Fintech Co.",
      quote:
        "SmartPay increased our payment success rate and boosted our revenue in just 2 weeks. We can finally focus on growth instead of failed transactions.",
      metrics: [
        { label: "Revenue Boost", value: "+$12K" },
        { label: "Failed Payments ↓", value: "35%" },
      ],
      pfp: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Mark Reynolds",
      role: "CTO, Marketing Hub",
      quote:
        "Integrating SmartPay was seamless. Our dashboard now shows everything in real-time, and our conversions are higher than ever.",
      metrics: [
        { label: "Revenue Boost", value: "+$9K" },
        { label: "Failed Payments ↓", value: "28%" },
      ],
      pfp: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      name: "Sophia Lee",
      role: "COO, E-Commerce Inc.",
      quote:
        "Every transaction is optimized. Our finance team saves hours every week, and our revenue metrics speak for themselves.",
      metrics: [
        { label: "Revenue Boost", value: "+$15K" },
        { label: "Failed Payments ↓", value: "40%" },
      ],
      pfp: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="min-h-screen py-24 px-6 bg-gray-950 text-white"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Founders Love the ROI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg sm:text-xl"
        >
          Real businesses, real results. SmartPay delivers measurable growth and reliability.
        </motion.p>
      </div>

      {/* Testimonial Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="bg-gray-800/70 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all"
          >
            {/* PFP */}
            <img
              src={t.pfp}
              alt={t.name}
              className="w-16 h-16 rounded-full border-2 border-indigo-500 mb-4 object-cover"
            />

            <p className="text-gray-300 italic mb-6 leading-relaxed">
              “{t.quote}”
            </p>
            <h4 className="font-bold text-white text-lg mb-1">{t.name}</h4>
            <span className="text-gray-400 text-sm mb-4">{t.role}</span>

            {/* Metrics */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              {t.metrics.map((m, i) => (
                <div
                  key={i}
                  className="bg-gray-900/50 rounded-xl px-4 py-2 flex flex-col items-center"
                >
                  <span className="text-indigo-400 font-bold text-lg">{m.value}</span>
                  <span className="text-gray-400 text-sm">{m.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Microcopy */}
      <p className="text-center text-gray-500 mt-12 max-w-2xl mx-auto text-sm sm:text-base">
        Verified ROI metrics from early adopters. Businesses see{" "}
        <span className="font-semibold text-white">up to 40% reduction in failed payments</span> within the first 2 weeks.
      </p>
    </section>
  );
}
