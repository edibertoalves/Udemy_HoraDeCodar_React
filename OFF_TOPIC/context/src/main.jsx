import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// importa o contexto
import { UserContextProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* renderiza o componente App e passa o contexto como propriedade */}
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
