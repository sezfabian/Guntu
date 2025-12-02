import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Vision, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer, SEO} from './components'

const  App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#070202] overflow-x-hidden">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <SEO
                title="Home"
                description="Leading Kenya IT company specializing in web development, mobile apps, AI chatbots, branding, and digital marketing. Expert software developers delivering innovative tech solutions across Kenya and East Africa."
                keywords="web developer Kenya, Kenya IT, Kenya software developers, software devs Kenya, branding Kenya, AI Kenya, AI company Kenya, web development Kenya, mobile app development, AI chatbots, digital marketing Kenya, IT solutions Kenya, tech company Kenya, Nairobi web developers, East Africa software development"
                canonical="https://guntu.co.ke/"
              />
              <div className="bg-[url(./assets/herobg.png)] bg-cover bg-no-repeat bg-center">
                <Navbar/>
                <Hero/>
              </div>
              <div className="mt-[-50px] sm:mt-[-200px]">
                <Vision/>
              </div>
              <Footer/>
            </>
          } />
          
          {/* About Page */}
          <Route path="/about" element={
            <>
              <SEO
                title="About Us - Expert Kenya Software Developers & IT Team"
                description="Meet Guntu IT Solutions team of expert Kenya software developers, designers, and content creators. Founded in 2022, we deliver innovative web development, AI solutions, and branding services across Kenya."
                keywords="Kenya software developers, software development team Kenya, web developers Kenya, IT experts Kenya, tech team Kenya, software engineers Kenya, AI developers Kenya, web development team"
                canonical="https://guntu.co.ke/about"
              />
              <div className="bg-[url(./assets/herobg.png)] bg-cover bg-no-repeat bg-center">
                <Navbar/>
              </div>
              <div className="mt-[-150px]">
                <About/>
              </div>
              <Footer/>
            </>
          } />
          
          {/* Contact Page */}
          <Route path="/contact" element={
            <>
              <SEO
                title="Contact Us - Kenya IT Solutions & Web Development Services"
                description="Get in touch with Guntu IT Solutions for web development, mobile apps, AI chatbots, branding, and digital marketing services in Kenya. Contact our expert software developers today."
                keywords="contact Kenya IT company, hire web developer Kenya, Kenya software development services, IT solutions Kenya contact, web development services Kenya, AI company Kenya contact"
                canonical="https://guntu.co.ke/contact"
              />
              <div className="bg-[url(./assets/herobg.png)] bg-cover bg-no-repeat bg-center">
                <Navbar/>
              </div>
              <div className="mt-[-150px]">
                <Contact/>
              </div>
              <Footer/>
              <div className="relative z-0">
                <StarsCanvas/>
              </div>
            </>
          } />
          
          {/* Work Page */}
          <Route path="/work" element={
            <>
              <SEO
                title="Our Work - Kenya Web Development & Branding Portfolio"
                description="Explore Guntu IT Solutions portfolio of web development, mobile apps, AI solutions, and branding projects in Kenya. See how our software developers deliver innovative IT solutions for businesses across East Africa."
                keywords="Kenya web development portfolio, software development projects Kenya, branding portfolio Kenya, IT solutions examples Kenya, web developer work Kenya, AI projects Kenya, mobile app portfolio Kenya"
                canonical="https://guntu.co.ke/work"
              />
              <div className="bg-[url(./assets/herobg.png)] bg-cover bg-no-repeat bg-center">
                <Navbar/>
              </div>
              <div className="mt-[-150px]">
                <Works/>
              </div>
              <Footer/>
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
