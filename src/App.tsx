import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Hello World</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
