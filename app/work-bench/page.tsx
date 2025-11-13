"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Shiva Pranov",
    clientType: "Actor's Portfolio",
    tags: ["Web Design", "Development", "Portfolio"],
    url: "shivapranov.vercel.app",
    image: "/modern-portfolio-website-design-minimal.jpg",
    description:
      "A professional portfolio website for an actor, showcasing their work, headshots, and career highlights with a clean and engaging design.",
    deliverables: [
      "Custom portfolio website with photo galleries",
      "Responsive design optimized for casting directors",
      "Clean interface highlighting showreel and acting credentials",
    ],
    screenshots: [
      "/portfolio-homepage-hero-section.jpg",
      "/portfolio-projects-grid.jpg",
      "/portfolio-about-page.png",
    ],
  },
  {
    id: 2,
    title: "Balqony Sitralu",
    clientType: "Film Production Company",
    tags: ["Web Design", "Branding", "Video Production"],
    url: "balqonysitralu.in",
    image: "/elegant-restaurant-website.png",
    description:
      "A film production company offering comprehensive services including cinematography, event coverage, music video production, and creative content creation.",
    deliverables: [
      "Full production company website with service showcase",
      "Portfolio gallery featuring cinematography and music videos",
      "Mobile-responsive design with video integration",
    ],
    screenshots: [
      "/restaurant-homepage-with-ambiance.jpg",
      "/restaurant-menu-page-design.jpg",
      "/restaurant-contact-page.jpg",
    ],
  },
  {
    id: 3,
    title: "Lusso Interiors",
    clientType: "Premium Interior Design Brand",
    tags: ["Web Design", "Branding", "Development"],
    url: "lussointeriors.in",
    image: "/luxury-interior-design-website.png",
    description:
      "A premium interior design brand based in Hyderabad, specializing in luxury residential and commercial spaces with sophisticated design solutions.",
    deliverables: [
      "Premium website with portfolio gallery",
      "Brand identity and visual guidelines",
      "SEO optimization and performance tuning",
    ],
    screenshots: [
      "/interior-design-homepage-luxury.jpg",
      "/interior-design-portfolio-showcase.jpg",
      "/interior-design-project-details.jpg",
    ],
  },
  {
    id: 4,
    title: "Interior Design Calculator",
    clientType: "Web App Tool",
    tags: ["Web Design", "Development", "Calculator"],
    url: "interiordesigncalculator.com",
    image: "/calculator-web-app-interface-modern.jpg",
    description:
      "A practical calculator tool designed to help anyone easily calculate and estimate their interior design budget, making planning accessible and straightforward.",
    deliverables: [
      "Custom calculator with multiple cost categories",
      "User-friendly interface with instant calculations",
      "Mobile-responsive design with budget breakdowns",
    ],
    screenshots: [
      "/calculator-app-homepage.jpg",
      "/calculator-interface-with-inputs.jpg",
      "/calculator-results-page.jpg",
    ],
  },
];

export default function WorkBenchPage() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <div className="min-h-screen pt-24">
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-center font-(family-name:--font-crimson)">
            Work Bench
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-center mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
            Selected projects from cafés, studios, and creative spaces that
            needed a digital home.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:border-primary/50 transition-all duration-300 overflow-hidden bg-card/50 backdrop-blur-sm cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video relative overflow-hidden bg-secondary">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors font-(family-name:--font-crimson)">
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground mb-3">
                    {project.clientType}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card w-[95vw] sm:w-full">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl sm:text-4xl font-bold font-(family-name:--font-crimson)">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base sm:text-lg">
                  {selectedProject.clientType}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 sm:space-y-6 mt-4">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground text-base sm:text-lg">
                    The Challenge
                  </h4>
                  <p className="text-muted-foreground text-base sm:text-lg">
                    {selectedProject.description}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground text-base sm:text-lg">
                    What Was Done
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.deliverables.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground text-base sm:text-lg"
                      >
                        <span className="text-primary mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-foreground text-base sm:text-lg">
                    Project Highlights
                  </h4>
                  <div className="space-y-4">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className="aspect-video relative rounded-lg overflow-hidden bg-secondary"
                      >
                        <Image
                          src={screenshot || "/placeholder.svg"}
                          alt={`${selectedProject.title} screenshot ${
                            index + 1
                          }`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap pt-4">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-foreground text-base sm:text-lg">
                    Visit Website
                  </h4>
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {selectedProject.url}
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
