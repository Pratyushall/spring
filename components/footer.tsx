"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, X, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FooterProps {
  backgroundImage?: string;
}

export function Footer({ backgroundImage }: FooterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center py-4 bg-white border-t border-[#DA24DB]/20"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-linear-to-r from-[#DA24DB] to-[#E150E2] text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <ChevronUp className="w-4 h-4" />
              <span className="text-sm font-medium">Contact</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative bg-white border-t border-[#DA24DB]/20 py-12 px-6"
            style={
              backgroundImage
                ? {
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {}
            }
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-linear-to-r from-[#DA24DB] to-[#E150E2] text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Close footer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h3 className="font-serif text-4xl md:text-5xl font-bold bg-linear-to-r from-[#DA24DB] to-[#E150E2] bg-clip-text text-transparent mb-8">
                  Let's Connect
                </h3>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <motion.a
                    href="tel:9704402301"
                    className="flex items-center gap-3 text-xl text-gray-800 hover:scale-105 transition-transform duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-linear-to-r from-[#DA24DB] to-[#E150E2] p-3 rounded-full text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <span className="font-medium">9704402301</span>
                  </motion.a>

                  <motion.a
                    href="mailto:pratyushamrutyunjay@gmail.com"
                    className="flex items-center gap-3 text-xl text-gray-800 hover:scale-105 transition-transform duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-linear-to-r from-[#DA24DB] to-[#E150E2] p-3 rounded-full text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="font-medium">
                      pratyushamrutyunjay@gmail.com
                    </span>
                  </motion.a>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-12 text-gray-600 text-sm"
                >
                  <p>
                    © {new Date().getFullYear()} SpringMonsoon. Small, beautiful
                    web experiences.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
