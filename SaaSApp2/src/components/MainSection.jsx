import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Zap } from "lucide-react";

export default function MainSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 sm:pt-37 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* Gradient spotlight background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-gradient-to-tr from-teal-400/20 to-blue-400/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-blue-500/20 to-teal-400/20 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-4xl"
      >
        Unlock <span className="text-teal-500">Predictable Growth</span> <br />
        & Eliminate <span className="text-blue-500">Payment Failures</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-2xl"
      >
        SmartPay empowers fintechs & enterprises with AI-driven optimization. 
        Reduce transaction declines, boost revenue, and gain total visibility into your payment health.
      </motion.p>

      {/* CTA */}
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        href="#cta"
        className="mt-10 inline-block px-10 py-4 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all"
      >
        Book My Demo
      </motion.a>

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl"
      >
        {[
          {
            icon: <ShieldCheck size={32} className="text-teal-500" />,
            title: "Bank-Grade Security",
            desc: "Built with compliance, fraud detection, and enterprise-grade encryption.",
          },
          {
            icon: <TrendingUp size={32} className="text-blue-500" />,
            title: "Revenue Lift",
            desc: "Average 18% increase in recovered revenue across industries.",
          },
          {
            icon: <Zap size={32} className="text-teal-400" />,
            title: "Instant Insights",
            desc: "Real-time dashboards & predictive reporting for proactive decisions.",
          },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-sm mb-4">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 max-w-xs">
              {item.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
