"use client";

console.log("[v0] HomePage component rendering");

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceCard } from "@/components/service-card";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import Link from "next/link";

export default function HomePage() {
  console.log("[v0] HomePage function executed");

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-balance font-[family-name:var(--font-crimson)] leading-tight">
            Aesthetic websites & branding for cafés, architects and studios
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 text-pretty max-w-2xl mx-auto leading-relaxed">
            A studio mixing clean code and visual storytelling. Creating calm,
            beautiful digital spaces for creative brands in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("contact-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Tell me about your project
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto bg-transparent"
            >
              <Link href="/work-bench">See the Work Bench</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center font-[family-name:var(--font-crimson)]">
          What SpringMonsoon does
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <ServiceCard
            tag="Web Design"
            title="Websites that feel like your space"
            description="Building small, calm websites for cafés, architects, interior designers and other creatives. Each site is custom-coded with care for typography, rhythm, and atmosphere."
          />
          <ServiceCard
            tag="Branding"
            title="Logos & mini brand kits"
            description="Clean, memorable logos paired with color palettes, font systems, and simple brand rules. Everything you need to start showing up consistently."
          />
          <ServiceCard
            tag="Social"
            title="Social media starter kits"
            description="Canva-friendly templates for Instagram posts, stories, and highlight covers. Ready-to-use layouts that keep your feed looking cohesive without the daily design work."
          />
          <ServiceCard
            tag="Redesign"
            title="Website glow-ups"
            description="Taking an existing site and giving it better layout, colors, typography and UX. Keeping what works, refreshing what doesn't."
          />
        </div>
      </section>

      {/* Selected Work Preview */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-crimson)]">
            Selected work
          </h2>
          <Button
            variant="link"
            asChild
            className="text-primary p-0 h-auto text-base sm:text-lg"
          >
            <Link href="/work-bench">View all projects →</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <ProjectCard
            title="Lusso Interiors"
            clientType="Premium Interior Design Brand - Hyderabad"
            tags={["Web", "Branding", "Development"]}
            image="/luxury-interior-design-website.png"
          />
          <ProjectCard
            title="Balqony Sitralu"
            clientType="Film Production Company"
            tags={["Web", "Branding", "Video"]}
            image="/elegant-restaurant-website.png"
          />
        </div>
      </section>

      {/* Why SpringMonsoon */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-border">
          <CardContent className="p-6 sm:p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 font-[family-name:var(--font-crimson)]">
              Why SpringMonsoon
            </h2>
            <div className="space-y-4 sm:space-y-5 text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg">
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">→</span>
                <span>
                  <strong className="text-foreground">Niche focus:</strong>{" "}
                  Works exclusively with cafés, restaurants, architects,
                  interior designers, and boutique creative studios
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">→</span>
                <span>
                  <strong className="text-foreground">
                    Design + Development:
                  </strong>{" "}
                  A rare mix of aesthetic sensibility and technical skill—no
                  handoffs, no miscommunication
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">→</span>
                <span>
                  <strong className="text-foreground">
                    1:1 Collaboration:
                  </strong>{" "}
                  Direct communication with the person actually building your
                  site or brand
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">→</span>
                <span>
                  <strong className="text-foreground">Aesthetic first:</strong>{" "}
                  Every pixel, color choice, and animation serves the feeling
                  you want to create
                </span>
              </p>
            </div>
            <p className="text-base sm:text-lg md:text-xl italic text-foreground border-l-2 border-primary pl-3 sm:pl-4">
              "Good design is about clarity, not complexity. Every element
              should earn its place."
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section with Contact Form */}
      <section
        id="contact-section"
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-balance font-[family-name:var(--font-crimson)]">
            Have a café, studio or brand that needs a calmer, prettier internet
            home?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4">
            Let's talk about your project and see if we're a good fit.
          </p>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
