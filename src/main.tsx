import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HeroUIProvider>
      <main className="light text-foreground bg-background">
        <ToastProvider />
        <App />
      </main>
    </HeroUIProvider>
  </React.StrictMode>,
);
