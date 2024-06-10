import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./animate/animate.min.css"


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Tatca,
  K_SOLUTION,
  K_TECHNICAL,
  K_HEALTHTECH,
  Slide,
  News,
  Partn,
  History,
  Corevalues,
  MutiProduct,

} from "./components";
ReactDOM.createRoot(document.getElementById('root')).render(
     <Router>
  <Navigation />
  <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/Lichsu" element={<History />} />
     <Route path="/GiaTri" element={<Corevalues />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/DoiTac" element={<Partn/>} />
    <Route path="/News" element={<News/>} />
    <Route path="/SanPham/solution" element={<K_SOLUTION />}/>
    <Route path="/SanPham/healthtech" element={<K_HEALTHTECH />} />
    <Route path="/SanPham/technical" element={<K_TECHNICAL />}/>
    {/* <Route path="/Admin" element={<Admin />} /> */}
  </Routes>
  <Footer claName="footer"/>
</Router> 
)

