export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border mt-20 sm:mt-24 md:mt-32">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-(family-name:--font-crimson)">
              SpringMonsoon
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Aesthetic web design & branding for cafés, architects, interior
              designers, and boutique studios.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-3 sm:gap-4">
            <a
              href="mailto:hello@springmonsoon.work"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              hello@springmonsoon.work
            </a>
            <div className="flex gap-4 sm:gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Behance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
