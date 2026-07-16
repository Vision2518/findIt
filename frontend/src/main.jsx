import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById("root")).render(

    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  
); 