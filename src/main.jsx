import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./context/AuthProvider";
import AuthProperty from "./context/PropertyProvider";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AuthProperty>
      <App />
    </AuthProperty>
  </AuthProvider>
);
