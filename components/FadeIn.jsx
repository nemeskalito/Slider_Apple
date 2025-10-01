"use client";

import { motion } from "framer-motion";

export default function FadeIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 250, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -250 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        width: "100%",
        heigth: "100%",
      }}
    >
      {children}
    </motion.div>
  );
}
