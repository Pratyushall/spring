"use client";

import { motion } from "framer-motion";
import { WorkCard } from "@/components/work-card";

const projects = [
  {
    title: "Balqony Sitraalu — Cinematic Studio",
    domain: "balqonysitralu.in",
    description:
      "A cinematic production studio site from Hyderabad—built to feel like a reel: moody blacks, serif moments, and motion that doesn't scream. Video-first hero, type that breathes, and a 'stories that move' narrative.",
    posterUrl: "/images/bqw.png",
    videoUrl: "/cinematic-video-production-reel.jpg",
  },
  {
    title: "Lusso Interiors — Luxury Modular",
    domain: "lussointeriors.in",
    description:
      "A luxury interiors brand site—polished, editorial, and high-contrast. Modular layouts, tactile hover states, and quick paths for kitchens and wardrobes inquiries.",
    posterUrl: "/images/lussow.png",
    videoUrl: "/luxury-modular-interiors-showcase.jpg",
  },
  {
    title: "Interior Budget Calculator",
    domain: "interiordesigncalculator.com",
    description:
      "A pragmatic cost estimator for homeowners—fast inputs, clear outputs, and WhatsApp OTP for lead capture. Instant estimates and PDF-ready summaries.",
    posterUrl: "/images/intw.png",
    videoUrl: "/cost-calculator-tool-interface.jpg",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute -bottom-64 -right-64 w-full h-full rounded-full overflow-hidden opacity-10"
          style={{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 30% 0%)",
          }}
        >
          <div className="w-full h-full bg-linear-to-tl from-primary/50 to-secondary/50" />
        </motion.div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="font-serif text-7xl md:text-8xl font-bold mb-8 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Work Bench
          </h1>
          <p className="text-2xl text-muted-foreground">
            Selected projects that blend craft and clarity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.domain}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <WorkCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
