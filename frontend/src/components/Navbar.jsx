import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="flex justify-between items-center p-5 shadow-lg bg-white fixed w-full z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold text-indigo-600">Mansi</h1>
      <div className="flex gap-6 text-gray-600 font-medium">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  );
}
