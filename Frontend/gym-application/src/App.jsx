import React from 'react'
  import { ToastContainer, toast } from 'react-toastify';
  import {BrowserRouter as Router} from "react-router-dom"
  import "./App.css"
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import WorkoutSession from './component/WorkoutSession';
import Gallery from './component/Gallery';
import Pricing from './component/Pricing';
import Contact from './component/Contact';
import BMICalaclutor from './component/BMICalaclutor';
import Fotter from './component/Fotter';

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Hero></Hero>
        <WorkoutSession></WorkoutSession>
        <Gallery></Gallery>
        <Pricing></Pricing>
        <Contact></Contact>
        <BMICalaclutor></BMICalaclutor>
        <Fotter></Fotter>
        <ToastContainer theme='dark' position='top-center'></ToastContainer>
      </Router>
    </div>
  )
}

export default App
