import { useEffect } from 'react';
import './App.css';
import Navbar from './context/Navbar'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function App() {

  //   useEffect(()=>{
  //   AOS.init({
  //     offset: 200,
  //     duration: 600,
  //     easing: 'ease-in-sine',
  //     delay: 500,
  //   })
  // },[])


  return (
    // < div data-aos="fade-up">
      <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
