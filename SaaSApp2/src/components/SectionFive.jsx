import { motion } from "framer-motion";
import { BarChart2 } from "lucide-react";

export default function SectionFive() {
  const tiers = [
    {
      name: "Starter",
      price: "$99/mo",
      payback: "ROI in 3 weeks",
      features: ["Payment Flow Optimization", "1 Dashboard", "Email Support"],
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Pro",
      price: "$249/mo",
      payback: "ROI in 2 weeks",
      features: [
        "Advanced Payment Algorithms",
        "5 Dashboards",
        "Priority Support",
        "Full Reporting",
      ],
      color: "from-teal-600 to-teal-700",
    },
    {
      name: "Enterprise",
      price: "Custom",
      payback: "ROI in 1 week",
      features: [
        "Unlimited Dashboards",
        "Dedicated Analyst",
        "SLA Support",
        "Real-Time Insights",
      ],
      color: "from-gray-700 to-gray-800",
    },
  ];

  return (
    <section
      id="pricing"
      className="min-h-screen py-24 px-6 bg-gray-950 text-white flex flex-col items-center"
    >
      {/* Header */}
      <div className="text-center max-w-4xl mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Pricing Built Around Your ROI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg sm:text-xl"
        >
          Every plan is designed to pay for itself quickly. See measurable revenue growth and reduced payment failures from day one.
        </motion.p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tiers.map((tier, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className={`relative rounded-3xl shadow-2xl p-8 flex flex-col justify-between hover:scale-105 transition-transform bg-gradient-to-br ${tier.color} text-white/90`}
          >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black/25 rounded-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <BarChart2 size={28} className="text-white/70" />
              </div>
              <p className="text-green-400 font-semibold mb-4">{tier.payback}</p>
              <p className="text-3xl font-extrabold mb-6">{tier.price}</p>

              <ul className="mb-6 space-y-2 text-sm sm:text-base">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> {feat}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(0,255,200,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="mt-auto px-6 py-3 bg-black/40 backdrop-blur-lg rounded-full font-semibold text-white shadow-lg hover:bg-black/60 transition-all"
              >
                {tier.name === "Enterprise" ? "Contact Sales" : "Book Demo"}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Microcopy */}
      <p className="text-center text-gray-400 mt-12 max-w-xl mx-auto text-sm sm:text-base">
        SmartPay customers report <span className="font-semibold text-white">average ROI within 2 weeks</span> and <span className="font-semibold text-white">20-30% revenue boost</span> after full integration.
      </p>
    </section>
  );
}
