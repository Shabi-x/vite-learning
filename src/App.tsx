import { useState } from "react";
import ViteLogo from "@assets/vite.svg?react";
import avatar from "@assets/avatar2.jpg"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <ViteLogo />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={avatar} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="bg-blue-500 text-white">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="bg-red-500 text-white">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
