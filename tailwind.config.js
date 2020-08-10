module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        cream: "#f7f7f7",
        creamT: "rgba(247, 247, 247, .75)",
        teal: "#cceabb",
        tealT: "rgba(204, 234, 187, .75)",
        dark: "#3f3f44",
        darkT: "rgba(63, 63, 68, .75)",
        skin: "#fdcb9e",
        skinT: "rgba(253, 203, 158, .75)",
        red: "red",
        blackT: "rgba(0, 0, 0, 0.35)",
      },
      inset: {
        "-20": "-7.5rem",
        "1/12": "4.166666%",
      },
      spacing: {
        "1/3": "33.33%",
        "2/3": "66.66%",
        "84": "21rem",
        "100": "25rem",
        "1/2": "50%",
        "5/12": "41.666667%",
        "7/12": "58.33333%",
      },
      maxWidth: {
        screen: "100vw",
      },
      maxHeight: {
        screen: "100vh",
      },
      lineHeight: {
        "2": "0.5rem",
        "1": "0.25rem",
        vtight: "0.125rem",
      },
      borderRadius: {
        xl: "16px",
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    borderColor: {
      cream: "#f7f7f7",
      creamT: "rgba(247, 247, 247, .75)",
      teal: "#cceabb",
      tealT: "rgba(204, 234, 187, .75)",
      dark: "#3f3f44",
      darkT: "rgba(63, 63, 68, .75)",
      skin: "#fdcb9e",
      skinT: "rgba(253, 203, 158, .75)",
    },
    spinner: (theme) => ({
      default: {
        color: "#3f3f44",
        size: "1em",
        border: "2px",
        speed: "500ms",
      },
      md: {
        size: "2em",
      },
    }),
  },
  variants: { spinner: ["responsive"] },
  plugins: [
    require("tailwindcss-spinner")({
      className: "spinner",
      themeKey: "spinner",
    }),
  ],
};
