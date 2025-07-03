import { BrowserRouter } from "react-router-dom";
import { About, Contact, Vision, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'

const  App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#070202] overflow-x-hidden">
        <div className="bg-[url(./assets/herobg.png)] bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <div className="mt-[-150px]">
          <Vision/>
          <About/>
          <Tech/>
          <Works/>
          <Feedbacks/>
        </div>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
