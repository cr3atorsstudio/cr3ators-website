module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      screens: {},
      fontFamily: {
        workSans: ["Work Sans"],
        roboto: [
          "Roboto",
          "Noto Sans JP",
          "游ゴシック体",
          "游ゴシック",
          "Yu Gothic",
          "メイリオ",
        ],
        oswald: ["Oswald"],
        openSans: ["Open Sans"],
        italic: ["Libre Baskerville"],
        "sans-serif": ["Poppins"],
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        "mint-purple": "#F5F1FF",
        "mint-subtitle": "#0C396C",
        "text-gray-900": "#282828",
        "black-purple": "#150A6A",
        "mint-button": "#282828",
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
      dropShadow: {
        card: "0px 4px 30px rgba(40, 40, 40, 0.1)",
        collection: "0px 4px 4px rgba(0, 0, 0, 0.25)",
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
