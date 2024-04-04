import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./Context/AuthContext";
import MissionContextProvider from "./Context/MissionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MissionContextProvider>
        <App />
      </MissionContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
