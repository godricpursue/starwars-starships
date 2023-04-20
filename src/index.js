import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StarshipsProvider } from "./components/context/starshipsContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StarshipsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StarshipsProvider>
);
