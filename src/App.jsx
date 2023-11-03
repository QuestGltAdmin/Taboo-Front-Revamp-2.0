import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Homepage from './pages/Homepage';
import IndividuaModel from './pages/IndividuaModel';
import CommonModel from './pages/CommonModel';
import { Test } from './pages/Test';
import SparxModel from './pages/SparxModel';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/Khloe" element={<IndividuaModel />} />
          <Route path="/CJ-Sparx" element={<SparxModel />} />
          <Route path="/models" element={<CommonModel />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
