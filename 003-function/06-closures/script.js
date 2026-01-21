function createTheme() {
  let theme = "light"; // remembered by closure

  return function () {
    theme = theme === "light" ? "dark" : "light";

    // change body class
    document.body.className = theme;

    // update text
    document.getElementById("themeText").textContent =
      "Current Theme: " + theme;

    console.log("Theme:", theme);
  };
}

// create closure (runs ONCE)
const toggleTheme = createTheme();
