module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      screens: {},
      fontFamily: {
        "sans-serif": ["Poppins"],
        "hiragino": ["Hiragino Kaku Gothic ProN", "Hiragino Sans"]
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        brown: "#3E2723",
        "white": "#FFFFFF",
        "gray": {
          300: "#E8E8E8",
          500: "#A7A7A7",
          700: "#696969",
          900: "#282828"
        },
        "yellow": {
          50: "#FEF9E5",
          900: "#FB7C1F"
        },
        "blue": {
          50: "#E5F5FC"
        },
        "purple": {
          50: "#F5F1FF"
        },
      },
      spacing: {
        28: "7rem",
      },
      minHeight: {
        screen: "90vh",
        section: "70vh",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      animation: {
        slideIn: "slideIn 1s ease-in forwards",
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(60px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
