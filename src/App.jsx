import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import Particles from "react-tsparticles"
// import { loadFull } from "tsparticles"
import './App.scss';
import Resume from './components/containers/resume';
import Skills from './components/containers/skills';
import Portfolio from './components/containers/portfolio';
import Contact from './components/containers/contact';
import Home from './components/containers/home';
import About from './components/containers/about';
import Navbar from './components/navbar';
import ParticlesComponent from './utlist/para';
import { useLocation } from 'react-router-dom';
// import Router from 'react-router-dom';

function App() {
  // var handleinit = async (main) => {
  //   await loadFull(main)
  // }
  // var Location = useLocation();
  // console.log(Location.pathname)
  //   var homelocation = Location.pathname === '/'

  return (
    <>
   
      <div className='App'>
        {/* <Particles id="Particles" init={handleinit} options={p.options} /> */}
        {/* {
          Location.pathname === '/' &&( */}
       
         <ParticlesComponent id='particles' />
 
       {/* } */}
      
        {/* {/* {
    homelocation &&( <ParticlesComponent id='particles' />    )
        } */}
        
        
      
<div className='App_main-page-content'>
        <BrowserRouter>
        <Navbar />
          <Routes>

            <Route path='/' element={<Home />}  />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          </BrowserRouter>
      </div>
      </div>
    </>
  )
}

export default App;
