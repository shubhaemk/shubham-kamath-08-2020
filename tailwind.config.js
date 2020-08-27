module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        title: "Major Mono Display, monospace",
      },
      screens: {
        "4k": "2000px",
      },
      height: {
        "1/2": "50%",
      },
      fontSize: {
        "3-5xl": "2rem",
        "4-5xl": "2.5rem",
        "5-5xl": "3.2rem",
      },
      minWidth: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        almost: "85%",
        almostFull: "90%",
        full: "100%",
      },
      minHeight: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        almost: "85%",
        almostFull: "90%",
        full: "100%",
        "50": "50rem",
      },
      maxWidth: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        almost: "85%",
        almostFull: "90%",
        full: "100%",
      },
      maxHeight: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        almost: "85%",
        almostFull: "95%",
        full: "100%",
      },
      backgroundColor: {
        dark: "#252a34",
        "accent-1": "#fa2e63",
        "accent-2": "#0f4c75",
        "accent-3": "#848ccf",
        "accent-4": "#08d9d6",
        "accent-5": "#efe78f",
      },
      letterSpacing: {
        tightest: "-0.35rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
