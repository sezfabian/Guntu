import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Vision, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'

const  App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#070202] overflow-x-hidden">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <div className="bg-[url(./assets/herobg.png)] bg-cover bg-no-repeat bg-center">
                <Navbar/>
                <Hero/>
              </div>
              <div className="mt-[-150px]">
                <Vision/>
                <Tech/>
                <Works/>
                <Feedbacks/>
              </div>
              <div className="relative z-0">
                <StarsCanvas/>
              </div>
            </>
          } />
          
          {/* About Page */}
          <Route path="/about" element={
            <>
              <div className="bg-[url(./assets/herobg.png)] bg-cover bg-no-repeat bg-center">
                <Navbar/>
              </div>
              <div className="mt-[-150px]">
                <About/>
              </div>
              <div className="relative z-0">
                <StarsCanvas/>
              </div>
            </>
          } />
          
          {/* Contact Page */}
          <Route path="/contact" element={
            <>
              <div className="bg-[url(./assets/herobg.png)] bg-cover bg-no-repeat bg-center">
                <Navbar/>
              </div>
              <div className="mt-[-150px]">
                <Contact/>
              </div>
              <div className="relative z-0">
                <StarsCanvas/>
              </div>
            </>
          } />
          
          {/* Work Page */}
          <Route path="/work" element={
            <>
              <div className="bg-[url(./assets/herobg.png)] bg-cover bg-no-repeat bg-center">
                <Navbar/>
              </div>
              <div className="mt-[-150px]">
                <Works/>
              </div>
              <div className="relative z-0">
                <StarsCanvas/>
              </div>
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
