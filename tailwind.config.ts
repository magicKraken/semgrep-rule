import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '420px',
        'xs': '560px',
      },
      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
        vallejo: ["var(--font-vallejo)", "sans-serif"],
        futura: ["var(--font-futura)", "sans-serif"],
        sans: ["var(--font-raleway)", "sans-serif"],
        serif: ["var(--font-raleway)", "sans-serif"],
        mono: ["var(--font-raleway)", "sans-serif"]
      },

      // TODO NO.3 ADD COLORS HERE
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: "#FF0328"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0"
          },
          to: {
            height: "var(--radix-accordion-content-height)"
          }
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)"
          },
          to: {
            height: "0"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;
