"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ContactDialog } from "@/components/contact-dialog";

export default function AboutPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = contentRef.current?.querySelectorAll(".scroll-fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden bg-linear-to-br from-white via-primary/5 to-secondary/10">
      <div className="absolute top-20 left-0 w-[600px] h-[600px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 -left-64 w-full h-full rounded-full overflow-hidden opacity-20 blur-3xl"
          style={{
            clipPath: "ellipse(50% 60% at 0% 50%)",
          }}
        >
          <div className="w-full h-full bg-linear-to-br from-primary via-secondary to-primary animate-gradient-shift" />
        </motion.div>
      </div>

      <div className="absolute bottom-40 right-0 w-[400px] h-[400px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute -right-32 w-full h-full rounded-full overflow-hidden opacity-15 blur-3xl"
        >
          <div className="w-full h-full bg-linear-to-tl from-secondary via-primary to-secondary animate-gradient-shift" />
        </motion.div>
      </div>
      {/* </CHANGE> */}

      <div
        className="container mx-auto max-w-5xl relative z-10"
        ref={contentRef}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 relative"
        >
          <h1 className="font-serif text-8xl md:text-9xl font-bold mb-4 bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-shift leading-tight">
            About Me
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-linear-to-r from-primary to-secondary rounded-full"
          />
        </motion.div>
        {/* </CHANGE> */}

        <div className="space-y-16">
          {/* Section 1 - Left aligned with gradient background */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="scroll-fade-in py-10 px-8 rounded-2xl bg-linear-to-br from-primary/10 via-secondary/5 to-primary/10 border-2 border-primary/20 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group"
          >
            <p className="text-2xl md:text-3xl leading-relaxed text-foreground/90 hover:text-foreground transition-colors duration-300">
              <span className="text-4xl md:text-5xl font-serif font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent block mb-4 group-hover:scale-105 transition-transform">
                Spring & Monsoon
              </span>
              is a boutique web development studio based in{" "}
              <span className="font-semibold text-primary group-hover:text-secondary transition-colors">
                Hyderabad
              </span>
              , specializing in building fast, elegant{" "}
              <span className="font-semibold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                Next.js applications
              </span>{" "}
              for ambitious founders and brands worldwide.
            </p>
          </motion.div>

          {/* Section 2 - Right aligned with border accent */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="scroll-fade-in py-10 px-8 rounded-2xl bg-linear-to-bl from-secondary/10 via-primary/5 to-secondary/10 border-2 border-secondary/20 hover:border-secondary/50 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 ml-auto max-w-4xl"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 hover:text-foreground transition-colors duration-300">
              As a{" "}
              <span className="font-bold text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text">
                full-stack developer
              </span>
              , I transform initial concepts and sketches into production-ready
              MVPs, sophisticated dashboards, and polished{" "}
              <span className="font-semibold text-primary">React</span> and{" "}
              <span className="font-semibold text-secondary">Node.js</span>{" "}
              products.
            </p>
          </motion.div>

          {/* Section 3 - Left aligned with gradient background */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="scroll-fade-in py-10 px-8 rounded-2xl bg-linear-to-br from-primary/10 via-secondary/5 to-primary/10 border-2 border-primary/20 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 max-w-4xl"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 hover:text-foreground transition-colors duration-300">
              Every project is crafted with meticulous attention to clean user
              experience, high{" "}
              <span className="font-semibold text-primary">
                Lighthouse performance scores
              </span>
              , and sensible data architecture using{" "}
              <span className="font-semibold text-secondary">PostgreSQL</span>{" "}
              and <span className="font-semibold text-primary">MongoDB</span>.
            </p>
          </motion.div>

          {/* Section 4 - Technical Expertise - Centered with full styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="scroll-fade-in py-12 px-10 rounded-2xl bg-linear-to-br from-primary/15 via-secondary/10 to-primary/15 border-2 border-primary/30 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 group"
          >
            <p className="font-serif text-3xl md:text-4xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent mb-8 group-hover:scale-105 transition-transform text-center">
              Technical Expertise
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                "Next.js 14/15",
                "TypeScript",
                "React",
                "Tailwind CSS",
                "shadcn/ui",
                "Framer Motion",
                "Node.js",
                "Prisma",
                "PostgreSQL",
                "MongoDB",
                "CI/CD",
              ].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  className="px-5 py-3 bg-white rounded-full text-base font-medium text-primary border-2 border-primary/30 hover:bg-linear-to-r hover:from-primary hover:to-secondary hover:text-white hover:scale-110 transition-all duration-300 cursor-default shadow-md hover:shadow-xl"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Section 5 - Right aligned with gradient background */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="scroll-fade-in py-10 px-8 rounded-2xl bg-linear-to-bl from-secondary/10 via-primary/5 to-secondary/10 border-2 border-secondary/20 hover:border-secondary/50 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 ml-auto max-w-4xl"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 hover:text-foreground transition-colors duration-300">
              I'm hands-on with the latest web technologies and best practices,
              delivering honest project scoping, clear communication throughout
              development, and steady, reliable releases. Whether you need a{" "}
              <span className="font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                remote freelance developer
              </span>{" "}
              to ship a reliable web application or a technical partner to bring
              your vision to life, I focus on building robust solutions—not just
              pretty websites.
            </p>
          </motion.div>

          {/* Section 6 - Quote - Centered with special styling */}
        </div>
        {/* </CHANGE> */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 flex flex-wrap gap-6 justify-center"
        >
          <Button
            size="lg"
            onClick={() => setIsContactOpen(true)}
            className="text-xl px-10 py-7 bg-linear-to-r from-primary via-secondary to-primary hover:from-primary/90 hover:via-secondary/90 hover:to-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/50 hover:scale-110 group animate-gradient-shift"
          >
            Get in Touch
          </Button>

          <a
            href="https://www.linkedin.com/in/pratyusha-mrutyunjay-91603b32a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="text-xl px-10 py-7 border-2 border-primary/40 hover:border-primary hover:bg-linear-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/30 group bg-transparent"
            >
              <Linkedin className="mr-3 w-6 h-6 group-hover:scale-125 transition-transform" />
            </Button>
          </a>
        </motion.div>
        {/* </CHANGE> */}
      </div>

      <ContactDialog
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
