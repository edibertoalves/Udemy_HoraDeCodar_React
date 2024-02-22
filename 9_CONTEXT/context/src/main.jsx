import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { CounterContextProvider } from "./context/CounterContext";
import { TitleColorContextProvider } from "./context/TitleColorContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 2 - criando o Provider */}
    <CounterContextProvider>
      <TitleColorContextProvider>
      <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>
);
