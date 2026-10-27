"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

/* ------------------------------------------------------------------ */
/*  Edit your details here                                             */
/* ------------------------------------------------------------------ */

const PROFILE = {
  name: "Ilhan Rafidya Khalid",
  initials: "IK",
  bio: "Electrical Engineering Student at University of Indonesia",
};

const LINKS: {
  label: string;
  handle: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    label: "Instagram",
    handle: "@ilhanrafidya",
    href: "https://www.instagram.com/ilhanrafidya",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    handle: "@m4ndal0riann",
    href: "https://www.tiktok.com/@m4ndal0riann",
    icon: TikTokIcon,
  },
  {
    label: "LinkedIn",
    handle: "Connect professionally",
    href: "https://www.linkedin.com/in/ilhanrafidya",
    icon: LinkedInIcon,
  },
  {
    label: "Email",
    handle: "ilhanrafidyakhalid@gmail.com",
    href: "mailto:ilhanrafidyakhalid@gmail.com",
    icon: Mail,
  },
];

/* ------------------------------------------------------------------ */
/*  Animation                                                          */
/* ------------------------------------------------------------------ */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <main
      className={`relative min-h-dvh bg-[#fbfbfd] text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white`}
    >
      {/* Soft ambient glow for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.045),transparent_70%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col items-center px-6 pt-24 pb-12 sm:max-w-lg sm:pt-32"
      >
        {/* Avatar */}
        <motion.div
          variants={item}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-b from-neutral-800 to-neutral-950 text-2xl font-medium tracking-tight text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-4 ring-white sm:h-28 sm:w-28 sm:text-3xl"
        >
          {PROFILE.initials}
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="mt-8 text-center text-3xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-4xl"
        >
          {PROFILE.name}
        </motion.h1>

        {/* Bio */}
        <motion.p
          variants={item}
          className="mt-3 max-w-xs text-center text-[15px] leading-relaxed text-neutral-500 sm:max-w-sm sm:text-base"
        >
          {PROFILE.bio}
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={item}
          className="my-12 h-px w-10 bg-neutral-200 sm:my-14"
        />

        {/* Links */}
        <nav aria-label="Social links" className="w-full">
          <ul className="flex flex-col gap-3">
            {LINKS.map(({ label, handle, href, icon: Icon }) => {
              const isExternal = href.startsWith("http");
              return (
                <motion.li key={label} variants={item}>
                  <motion.a
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="group flex w-full items-center gap-4 rounded-full border border-neutral-200/80 bg-white/80 py-3 pr-5 pl-3 shadow-[0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-sm transition-[border-color,box-shadow,background-color] duration-300 hover:border-neutral-300 hover:bg-white hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)] focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfbfd] focus-visible:outline-none"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors duration-300 group-hover:bg-neutral-900 group-hover:text-white">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>

                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="text-[15px] font-medium tracking-tight text-neutral-900">
                        {label}
                      </span>
                      <span className="truncate text-[13px] text-neutral-400">
                        {handle}
                      </span>
                    </span>

                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-neutral-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-900"
                      aria-hidden
                    />
                  </motion.a>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <motion.footer
          variants={item}
          className="mt-auto pt-20 text-center text-xs tracking-wide text-neutral-400"
        >
          © {new Date().getFullYear()} {PROFILE.name}
        </motion.footer>
      </motion.div>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*  Brand icons (inline SVG, Lucide-style strokes)                     */
/*  Lucide no longer ships brand logos, so these are drawn inline.     */
/* ------------------------------------------------------------------ */

type IconProps = SVGProps<SVGSVGElement>;

const strokeProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function LinkedInIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M21 7.917v4.034a9.948 9.948 0 0 1-5-1.951v4.5a6.5 6.5 0 1 1-8-6.326v4.326a2.5 2.5 0 1 0 4 2V3h4.083A6.005 6.005 0 0 0 21 7.917z" />
    </svg>
  );
}
