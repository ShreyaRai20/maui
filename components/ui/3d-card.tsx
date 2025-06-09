"use client";
import { motion } from "framer-motion";
import React from "react";

export function ThreeDCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ rotateX: -5, rotateY: 5 }}
      className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-xl"
    >
      {children}
    </motion.div>
  );
}
