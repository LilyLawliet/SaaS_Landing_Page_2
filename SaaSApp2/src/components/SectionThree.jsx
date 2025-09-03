import { motion } from "framer-motion";

export default function SectionThree() {
  const roiMetrics = [
    { label: "Avg Revenue Increase", value: "+18%", color: "text-teal-400" },
    { label: "Failed Payments Reduced", value: "35%", color: "text-blue-400" },
    { label: "Transactions Optimized", value: "98.7%", color: "text-teal-400" },
  ];

  const timelineStats = [
    { week: "Week 1", value: 10 },
    { week: "Week 2", value: 18 },
    { week: "Week 3", value: 22 },
    { week: "Week 4", value: 25 },
  ];

  return (
    <section
      id="roi"
      className="min-h-screen flex flex-col justify-center px-6 py-24 bg-gray-950 text-white"
    >
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Proven ROI in Just 2 Weeks
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg sm:text-xl"
        >
          SmartPay has helped businesses recover lost revenue, reduce failed payments, and optimize transaction flows — measurable results in record time.
        </motion.p>
      </div>

      {/* Metrics */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
  {roiMetrics.map((metric, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      className="flex flex-col items-center bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 sm:p-8"
    >
      <span className={`text-3xl sm:text-4xl font-extrabold ${metric.color}`}>
        {metric.value}
      </span>
      <span className="text-gray-300 text-base sm:text-lg mt-1">{metric.label}</span>
    </motion.div>
  ))}
</div>


      {/* Timeline / Revenue Graph */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-between items-end gap-4 h-64"
        >
          {timelineStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${stat.value * 2.5}px` }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="w-12 rounded-t-xl"
                style={{ backgroundColor: idx % 2 === 0 ? "#14B8A6" : "#60A5FA" }}
              />
              <span className="text-gray-400 mt-1 text-sm">{stat.week}</span>
            </div>
          ))}
        </motion.div>
        <p className="text-center text-gray-500 mt-4 text-sm">
          Average revenue increase over 4 weeks after integrating SmartPay.
        </p>
      </div>
    </section>
  );
}
