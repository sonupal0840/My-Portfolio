import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("❌ Root element not found! Make sure your HTML has `<div id='root'></div>`");
}
