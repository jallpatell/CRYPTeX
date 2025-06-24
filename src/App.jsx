import { Link, HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import CryptexLanding from './pages/Home'
import Portfolio from './pages/Portfolio'
import Wallet from './pages/Wallet'

export default function App() {
  return (
    <div >
    <HashRouter> 
        <Routes>
          <Route path="/" element={<CryptexLanding />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </HashRouter>
    </div>
  )
}

