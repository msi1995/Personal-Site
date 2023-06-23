import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { ResumePage } from "./components/ResumePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/resume" element={<ResumePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
