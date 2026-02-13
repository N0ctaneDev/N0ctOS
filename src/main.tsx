import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './App.css'

// Import pages
import Home from './pages/Home'
import Features from './pages/Features'
import Download from './pages/Download'
import Team from './pages/Team'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/N0ctOS" element={<Home />} />
        <Route path="/N0ctOS/features" element={<Features />} />
        <Route path="/N0ctOS/download" element={<Download />} />
        <Route path="/N0ctOS/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
