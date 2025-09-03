import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export default function SectionSeven() {
  return (
    <section
      id="cta"
      className="relative py-24 px-6 bg-gray-950 text-white"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Talk to Our Payments Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Whether you’re a fast-growing startup or an enterprise, our experts
          will help you optimize revenue and reduce failed payments.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col justify-between"
        >
          <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-indigo-400" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-400">contact@smartpay.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-indigo-400" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-400">+1 (800) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-indigo-400" />
              <div>
                <p className="font-medium">Headquarters</p>
                <p className="text-gray-400">
                  500 Market Street, Suite 1200 <br /> San Francisco, CA
                </p>
              </div>
            </div>
          </div>

          {/* Compliance / Trust */}
          <div className="mt-10 border-t border-gray-800 pt-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ShieldCheck size={18} className="text-green-500" />
              PCI-DSS Compliant • SOC2 Certified
            </div>
          </div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8 grid grid-cols-1 gap-6"
        >
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:border-indigo-400 outline-none transition-all"
          />
          <input
            type="email"
            placeholder="Your Business Email"
            className="p-4 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:border-indigo-400 outline-none transition-all"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="p-4 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:border-indigo-400 outline-none transition-all"
          />
          <textarea
            placeholder="How can we help?"
            className="p-4 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:border-indigo-400 outline-none transition-all h-32 resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold shadow-md transition-all"
          >
            Request a Demo
          </motion.button>
        </motion.form>
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SmartPay Inc. All rights reserved.
      </div>
    </section>
  );
}
