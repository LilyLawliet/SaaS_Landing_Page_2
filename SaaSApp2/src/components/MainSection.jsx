import { motion } from "framer-motion";

export default function MainSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* Subtle background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-3xl"
      >
        Increase Revenue & Reduce Payment Failures in <span className="text-teal-400">3 Steps</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-2xl"
      >
        SmartPay automatically optimizes your payment flows, reduces failed transactions, and maximizes every dollar your business earns.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        href="#Contact"
        className="mt-8 inline-block px-10 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
      >
        Book My Demo
      </motion.a>
    </section>
  );
}
