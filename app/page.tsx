"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-32 -right-32 w-full h-full rounded-full overflow-hidden opacity-20"
          style={{
            clipPath: "circle(50% at 100% 0%)",
          }}
        >
          <div className="w-full h-full bg-linear-to-br from-primary/30 to-secondary/30" />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-linear-to-br from-white via-primary/5 to-secondary/10 animate-gradient" />

      <motion.div
        className="absolute top-20 left-20 w-32 h-32 rounded-full bg-linear-to-br from-primary/20 to-secondary/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-linear-to-br from-secondary/20 to-primary/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-8xl md:text-9xl font-bold mb-6 bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient"
          style={{ lineHeight: 1.1 }}
        >
          SpringMonsoon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-3xl text-muted-foreground mb-12 font-light"
        >
          Small, beautiful web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Button
            disabled
            size="lg"
            className="text-lg px-8 py-6 bg-linear-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            Spring
          </Button>

          <Link href="/about">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 group bg-transparent"
            >
              Backstory
            </Button>
          </Link>

          <Link href="/work">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2 border-secondary/30 hover:border-secondary hover:bg-secondary/5 transition-all duration-300 hover:scale-105 group bg-transparent"
            >
              Work Bench
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
