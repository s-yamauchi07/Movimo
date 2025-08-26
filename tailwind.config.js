/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "#ffffff",
        // foreground: "#252525",
        // card: "#ffffff",
        // "card-foreground": "#252525",
        // popover: "#ffffff",
        // "popover-foreground": "#252525",
        // primary: "#343434",
        // "primary-foreground": "#fafafa",
        // secondary: "#f8f8f8",
        // "secondary-foreground": "#343434",
        // muted: "#f8f8f8",
        // "muted-foreground": "#8e8e8e",
        // accent: "#f8f8f8",
        // "accent-foreground": "#343434",
        // destructive: "#933a3a",
        // "destructive-foreground": "#933a3a",
        // border: "#ebebeb",
        // input: "#ebebeb",
        // ring: "#b5b5b5",
        primary: "#0a2342",
        secondary: "#253546",
        accent: "#ff8533",
        dark: "#121721",
        blue: "#304d69",
        navy: "#21364a",
      },
      borderRadius: {
        sm: "calc(0.625rem - 4px)",
        md: "calc(0.625rem - 2px)",
        lg: "0.625rem",
        xl: "calc(0.625rem + 4px)",
      },
    },
  },
  plugins: [],
}