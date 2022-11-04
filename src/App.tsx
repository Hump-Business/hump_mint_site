import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainLayout } from "./layouts";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
