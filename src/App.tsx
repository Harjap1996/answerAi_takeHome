import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-yellow-200 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Tailwind is working!</h1>
    </div>
  );
}

export default App;
