module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  theme: {
    fontSize: {
      "3-5xl": "2rem",
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
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#0f0f1f",
      secondary: "#12192c",
    }),
    extend: {
      keyframes: {
        expand: {
          "0%, 100%": { letterSpacing: "-0.12rem" },
          "50%": { letterSpacing: "1rem" },
        },
      },
      animation: {
        letter: "expand 1500ms ease",
      },
    },
  },
  variants: {},
  plugins: [],
};
