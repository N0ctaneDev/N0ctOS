import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {  Routes, Route , Navigate, BrowserRouter} from "react-router-dom";
import "./index.css";
import "./App.css";

// Import pages
import Home from "./pages/Home";
import Features from "./pages/Features";
import Download from "./pages/Download";
import Team from "./pages/Team";

// import { Pageunderbuild } from "./pageunderbuild";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename="/N0ctOS">
            <Routes>
                {/*bring the 2nd line to top, to make the page live*/}
                {/*<Route path="/" element={<Pageunderbuild />} /> // show under dev page*/}
                <Route path="/" element={<Navigate to="/home" replace />} /> // take it top when page is ready
                
                <Route path="/home" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/download" element={<Download />} />
                <Route path="/team" element={<Team />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
