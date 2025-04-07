import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Button, Input } from "@heroui/react";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen p-4 bg-gray-100 text-gray-800">
      <h1>Welcome to Tauri + React</h1>

      <div className="row">
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>


      <div className="card">
        <Input
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <Button type="submit" onPress={greet}>Greet</Button>
        <p>{greetMsg}</p>
      </div>
    </div>
  );
}

export default App;
