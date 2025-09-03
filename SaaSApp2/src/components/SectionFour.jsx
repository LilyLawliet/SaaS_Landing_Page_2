import { motion } from "framer-motion";
import { SiStripe, SiPaypal, SiSquare, SiApple } from "react-icons/si";
import { CheckCircle } from "lucide-react";

export default function SectionFour() {
  const integrations = [
    { name: "Stripe", icon: <SiStripe size={36} className="text-white" />, color: "from-blue-500 to-indigo-600", metric: "+12% Revenue" },
    { name: "PayPal", icon: <SiPaypal size={36} className="text-white" />, color: "from-teal-400 to-cyan-600", metric: "+8% Transactions" },
    { name: "Square", icon: <SiSquare size={36} className="text-white" />, color: "from-gray-500 to-gray-700", metric: "+10% Flow Efficiency" },
    { name: "Apple Pay", icon: <SiApple size={36} className="text-white" />, color: "from-gray-300 to-gray-500", metric: "+7% Conversion" },
  ];

  return (
    <section
      id="integrations"
      className="min-h-screen flex flex-col justify-center px-6 py-24 bg-gray-950 text-white"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Integrate With Top Payment Platforms
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg sm:text-xl"
        >
          SmartPay connects seamlessly with your payment stack, reducing failed transactions and boosting revenue in real-time.
        </motion.p>
      </div>

      {/* Integration Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {integrations.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br p-6"
          >
            <div className={`w-full h-28 flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} mb-4`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-green-400 font-bold flex items-center gap-2">
              <CheckCircle size={18} /> {item.metric}
            </p>
            <p className="text-gray-300 mt-2 text-sm">
              Monitor your integration performance and track key revenue metrics in real-time dashboards.
            </p>
          </motion.div>
        ))}
      </div>

      {/* Microcopy */}
      <p className="text-center text-gray-500 mt-12 max-w-xl mx-auto text-sm sm:text-base">
        Businesses using SmartPay integrations see an average of <span className="font-semibold text-white">10-15%</span> revenue lift and a <span className="font-semibold text-white">30% reduction</span> in payment failures within 2 weeks.
      </p>
    </section>
  );
}

