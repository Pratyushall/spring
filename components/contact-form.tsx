"use client";

import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const projectTypes = [
  "New website from scratch",
  "Website redesign",
  "Logo & branding kit",
  "Social media templates",
  "Not sure yet, let's explore",
];

const budgetRanges = [
  "Under ₹50k",
  "₹50k - ₹1L",
  "₹1L - ₹2L",
  "₹2L+",
  "Let's discuss",
];

export function ContactForm() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>("");
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("[v0] Form submitted:", {
      ...formData,
      projectType: selectedProjectType,
      budget: selectedBudget,
    });
    // Here you would typically send data to an API endpoint
    alert("Thanks for reaching out! I'll get back to you soon.");
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur-md border-border shadow-2xl">
      <CardContent className="p-6 sm:p-8 md:p-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Project Type Selection */}
          <div>
            <label className="text-xl sm:text-2xl font-semibold mb-4 block font-[family-name:var(--font-crimson)]">
              What are you looking for?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedProjectType(type)}
                  className={`p-4 rounded-lg border-2 text-left transition-all text-base sm:text-lg ${
                    selectedProjectType === type
                      ? "border-primary bg-primary/10 text-foreground font-medium"
                      : "border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:bg-card"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label className="text-xl sm:text-2xl font-semibold mb-4 block font-[family-name:var(--font-crimson)]">
              What's your budget range?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {budgetRanges.map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => setSelectedBudget(range)}
                  className={`p-4 rounded-lg border-2 text-center transition-all text-base sm:text-lg ${
                    selectedBudget === range
                      ? "border-primary bg-primary/10 text-foreground font-medium"
                      : "border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:bg-card"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="text-lg sm:text-xl font-medium mb-2 block"
              >
                Your name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="What should I call you?"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="h-12 text-base sm:text-lg bg-background/50 border-border"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-lg sm:text-xl font-medium mb-2 block"
              >
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="where.to@reach.you"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-12 text-base sm:text-lg bg-background/50 border-border"
              />
            </div>

            <div>
              <label
                htmlFor="businessName"
                className="text-lg sm:text-xl font-medium mb-2 block"
              >
                Business/Project name
              </label>
              <Input
                id="businessName"
                name="businessName"
                type="text"
                placeholder="Your café, studio, or brand"
                value={formData.businessName}
                onChange={handleInputChange}
                className="h-12 text-base sm:text-lg bg-background/50 border-border"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-lg sm:text-xl font-medium mb-2 block"
              >
                Tell me about your project
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Share your vision, timeline, any specific inspiration, or questions you have..."
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="text-base sm:text-lg bg-background/50 border-border resize-none"
              />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg sm:text-xl py-6"
          >
            Send your message
          </Button>

          <p className="text-center text-sm sm:text-base text-muted-foreground">
            I'll get back to you within 24-48 hours. Usually much faster.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
