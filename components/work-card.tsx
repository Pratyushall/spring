"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  domain: string;
  description: string;
  posterUrl: string;
  videoUrl: string;
}

interface WorkCardProps {
  project: Project;
}

export function WorkCard({ project }: WorkCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Card
          className="overflow-hidden cursor-pointer border-2 border-primary/10 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 group"
          onClick={() => setIsOpen(true)}
        >
          <div className="relative aspect-4/3 overflow-hidden bg-linear-to-br from-primary/5 to-secondary/5">
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={project.posterUrl || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/40 to-transparent flex items-end justify-center pb-8"
            >
              <span className="text-white font-medium text-lg">
                View Project
              </span>
            </motion.div>
          </div>

          <div className="p-6">
            <h3 className="font-serif text-2xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
              {project.domain}
            </p>
          </div>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-4xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg border-2 border-primary/20">
              <Image
                src={project.posterUrl || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-lg leading-relaxed text-foreground/80">
              {project.description}
            </p>

            <a
              href={`https://${project.domain}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full text-lg py-6 bg-linear-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg hover:shadow-2xl group"
              >
                Visit site → {project.domain}
                <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
