import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
    >
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Mansi 👋
      </motion.h1>
      <motion.p
        className="mt-4 text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        A passionate AI & ML developer, building projects that merge design, code, and intelligence.
      </motion.p>
      <motion.a
        href="#projects"
        className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}
