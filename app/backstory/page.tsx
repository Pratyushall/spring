import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { BackstoryBackground } from "@/components/backstory-background";

export default function BackstoryPage() {
  return (
    <>
      <BackstoryBackground />
      <div className="min-h-screen pt-24">
        {/* Intro Section */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 text-center font-(family-name:--font-crimson)">
              The story behind SpringMonsoon
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-secondary">
                <Image
                  src="/woman-designer-developer-portrait-artistic.jpg"
                  alt="SpringMonsoon founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground">
                  I'm a designer-developer who loves calm layouts, thoughtful
                  typography, and the kind of storytelling that makes you want
                  to linger on a page.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
                  SpringMonsoon started from a simple observation: the most
                  interesting creative spaces—cafés with personality, studios
                  with soul—often had websites that didn't match their energy.
                  They deserved better.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
                  So I built a practice around that gap. Clean code meets
                  aesthetic design. One person, full attention, no agency
                  overhead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who I Work With */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6 sm:p-8 md:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 font-(family-name:--font-crimson)">
                  Who I work with
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-muted-foreground text-base sm:text-lg">
                  <div className="space-y-3">
                    <p className="flex items-center gap-3">
                      <span className="text-primary">✦</span>
                      <span>Cafés & specialty coffee shops</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-primary">✦</span>
                      <span>Small restaurants & bakeries</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-primary">✦</span>
                      <span>Architecture firms</span>
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="flex items-center gap-3">
                      <span className="text-primary">✦</span>
                      <span>Interior design studios</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-primary">✦</span>
                      <span>Independent filmmakers</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-primary">✦</span>
                      <span>Boutique creative studios</span>
                    </p>
                  </div>
                </div>
                <p className="mt-4 sm:mt-6 text-foreground text-base sm:text-lg">
                  Based in Hyderabad, working across India with clients who
                  value craft and care.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How I Work */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center font-(family-name:--font-crimson)">
              How I work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  step: "01",
                  title: "Enquiry",
                  description:
                    "You reach out. We exchange a few emails or messages about your project, timeline, and budget.",
                },
                {
                  step: "02",
                  title: "Call",
                  description:
                    "A casual video call to discuss your vision, audience, and goals. No pressure, just clarity.",
                },
                {
                  step: "03",
                  title: "Concept & Build",
                  description:
                    "I create mood boards, wireframes, then build everything from scratch. You get regular updates and chances to refine.",
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  description:
                    "We go live together. I stick around for tweaks, training, and any questions that come up.",
                },
              ].map((item) => (
                <Card
                  key={item.step}
                  className="bg-card/50 backdrop-blur-sm border-border"
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4 font-(family-name:--font-crimson)">
                      {item.step}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 font-(family-name:--font-crimson)">
              Core values
            </h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              {[
                "Clarity",
                "Empathy",
                "Aesthetics",
                "Honesty",
                "Craft",
                "Simplicity",
              ].map((value) => (
                <div
                  key={value}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-card/50 backdrop-blur-sm border border-border rounded-full text-base sm:text-lg text-foreground font-medium hover:border-primary transition-colors"
                >
                  {value}
                </div>
              ))}
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground italic">
              "Every project is a conversation. I listen first, then design with
              intention."
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
