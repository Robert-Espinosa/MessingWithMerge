const list = document.getElementById("preview");
let title ="javaScript-title- conflict A";

const elements = {
  darkStats: document.getElementById("darkStats"),
  fontStats: document.getElementById("fontStats"),
  highlightStats: document.getElementById("highlightStats"),
  detailStats: document.getElementById("detailStats")
};

const state = {
  darkMode: false,
  highlight: false,
  detailsVisible: true,
  fontSize: 16
};

// Event listeners
document.getElementById("decrease").addEventListener("click", () => changeFont(-2));
document.getElementById("increase").addEventListener("click", () => changeFont(2));
document.getElementById("highlight").addEventListener("click", toggleHighlight);
document.getElementById("darkModeBtn").addEventListener("click", toggleDarkMode);
document.getElementById("toggle").addEventListener("click", toggleDetails);
document.getElementById("reset").addEventListener("click", reset);

// ---------- Core Logic ----------

function updateStatus() {
  elements.darkStats.textContent = `Dark mode: ${state.darkMode ? "on" : "off"}`;
  elements.fontStats.textContent = `Font size: ${state.fontSize}px`;
  elements.highlightStats.textContent = `Highlight: ${state.highlight ? "enabled" : "disabled"}`;
  elements.detailStats.textContent = `Details: ${state.detailsVisible ? "shown" : "hidden"}`;
}

function changeFont(amount) {
  const newSize = state.fontSize + amount;

  // Prevent text from becoming unreadable
  if (newSize < 10 || newSize > 50) return;

  state.fontSize = newSize;
  list.style.fontSize = `${state.fontSize}px`;
  updateStatus();
}

function toggleDetails() {
  state.detailsVisible = !state.detailsVisible;
  list.hidden = !state.detailsVisible;
  updateStatus();
}

function toggleDarkMode() {
  state.darkMode = !state.darkMode;
  document.body.classList.toggle("dark", state.darkMode);
  updateStatus();
}

function toggleHighlight() {
  state.highlight = !state.highlight;
  list.classList.toggle("highlight", state.highlight);
  updateStatus();
}

function reset() {
  state.darkMode = false;
  state.highlight = false;
  state.detailsVisible = true;
  state.fontSize = 16;

  document.body.classList.remove("dark");
  list.classList.remove("highlight");
  list.hidden = false;
  list.style.fontSize = "16px";

  updateStatus();
}

// Initialize status display
updateStatus();