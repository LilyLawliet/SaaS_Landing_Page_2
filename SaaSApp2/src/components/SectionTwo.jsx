import { motion } from "framer-motion";
import { Cpu, BarChart2, CheckCircle2 } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function SectionTwo() {
  const steps = [
    {
      icon: <Cpu size={36} className="text-teal-400" />,
      title: "Smart Algorithms",
      description:
        "Our AI identifies failed payment patterns, optimizes routing, and predicts issues before they happen.",
    },
    {
      icon: <BarChart2 size={36} className="text-blue-400" />,
      title: "Real-Time Dashboard",
      description:
        "Visualize all transactions, success rates, and revenue metrics in a clean, intuitive interface.",
    },
    {
      icon: <CheckCircle2 size={36} className="text-teal-400" />,
      title: "Automated Reporting",
      description:
        "Get actionable insights and weekly ROI reports automatically delivered to your inbox.",
    },
  ];

  const metrics = [
    { label: "Revenue Boost", value: "18%", color: "text-teal-400" },
    { label: "Failed Payments Reduced", value: "35%", color: "text-blue-400" },
    {
      label: "Average Transaction Success",
      value: "98.7%",
      color: "text-teal-400",
    },
  ];

  // Fake dashboard data
  const chartData = [
    { name: "Mon", success: 95, failed: 5 },
    { name: "Tue", success: 97, failed: 3 },
    { name: "Wed", success: 96, failed: 4 },
    { name: "Thu", success: 98, failed: 2 },
    { name: "Fri", success: 99, failed: 1 },
    { name: "Sat", success: 97, failed: 3 },
    { name: "Sun", success: 98.5, failed: 1.5 },
  ];

  return (
    <section
      id="how-it-works"
      className="min-h-screen flex flex-col justify-center px-6 py-24 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left side: Steps */}
        <div className="flex-1 space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            How SmartPay Optimizes Payments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-xl"
          >
            From intelligent routing to insightful reporting, SmartPay ensures
            every payment counts, improving revenue and reducing friction.
          </motion.p>

          <div className="mt-10 space-y-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Metrics */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
                className="flex flex-col items-start"
              >
                <span
                  className={`text-3xl font-bold ${metric.color}`}
                >
                  {metric.value}
                </span>
                <span className="text-gray-500 dark:text-gray-400 mt-1">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right side: Real Dashboard Chart */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[24rem] sm:h-[28rem] bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 overflow-hidden md:flex-1 md:max-w-[36rem] lg:max-w-[40rem]"


        >
          <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
            Weekly Payment Performance
          </h3>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.2} />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Bar dataKey="success" fill="#4ade80" radius={[6, 6, 0, 0]} />
              <Bar dataKey="failed" fill="#f87171" radius={[6, 6, 0, 0]} />
              <Line
                type="monotone"
                dataKey="success"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}
