import './App.css'

import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Service from './routes/Service'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

