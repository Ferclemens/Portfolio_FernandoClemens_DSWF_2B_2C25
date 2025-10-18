import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // puedes dejarlo vacío o usarlo para estilos globales opcionales

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
