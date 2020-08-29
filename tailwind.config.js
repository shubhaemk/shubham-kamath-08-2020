module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        title: "Major Mono Display, monospace",
        regular: "Roboto Mono, monospace",
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
        dark: "#12191F",
        home: "#08d9d6",
        contact: "#efe78f",
        blog: "#848ccf",
        about: "#0f4c75",
        project: "#fa2e63",
      },
      textColor: {
        home: "#08d9d6",
        contact: "#efe78f",
        blog: "#848ccf",
        about: "#0f4c75",
        project: "#fa2e63",
      },
      letterSpacing: {
        tightest: "-0.35rem",
      },
      zIndex: {
        "negative-10": "-10",
      },
    },
  },
  variants: {},
  plugins: [],
};
