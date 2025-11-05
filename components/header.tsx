"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Spring" },
    { href: "/about", label: "Backstory" },
    { href: "/work", label: "Work Bench" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10"
    >
      <nav className="container mx-auto px-6 py-6">
        <ul className="flex items-center justify-center gap-12">
          {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`text-lg font-medium transition-all duration-300 relative group ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/60 hover:text-primary"
                  }`}
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-primary to-secondary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
}
