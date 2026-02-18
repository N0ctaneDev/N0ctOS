import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

// Import pages
import Home from "./pages/Home";
import Features from "./pages/Features";
import Download from "./pages/Download";
import Team from "./pages/Team";
import Docs from "./pages/Docs";

import { NotFound } from "./pages/not-found";

// routing...
export const App = () => {
  return (
    <div className="w-dvw min-h-dvh">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/download" element={<Download />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/team" element={<Team />} />
        
        <Route path="*" element={<Navigate to="/notfound" replace/>} />
        <Route path="/notfound" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};
