import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, slideIn, textVariant, staggerContainer } from '../utils/motion';
import { web, app, brand, video, reactjs, ai, security } from '../assets';

const VisionCard = ({ title, description, icon, index, viewportTopY }) => {
  const [scrollDirection, setScrollDirection] = React.useState('down');
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <motion.div 
    initial={{ 
      x: scrollDirection === 'down' ? 350 : -350, 
      opacity: 0
    }}
    animate={{ 
      x: viewportTopY > 200 ? 0 : (scrollDirection === 'down' ? 350 : -350), 
      opacity: viewportTopY > 200 ? 1 : 0,
      scale: viewportTopY > 200 ? 1 : 1
    }}
    onViewportEnter={() => {
      setIsVisible(true);
      setScrollDirection('down');
    }}
    onViewportLeave={() => {
      setIsVisible(false);
      setScrollDirection('down');
    }}
    transition={{
      type: "tween",
      duration: 0.5,
      bounce: 0,
    }}
    className="rounded-3xl mx-0 md:mx-auto mt-10 sm:mt-20 ">
    <div
      className='p-8 rounded-3xl w-full shadow-card'
    >
      <div className='text-left'>
        <div className='w-full h-15 mx-auto rounded-3xl flex lg:mb-6'>
          <h3 className='text-[#EF6304] font-bold text-[24px] lg:text-[40px]'>{title}&nbsp;{icon}</h3>
        </div>
        <p className='text-secondary text-[13px] sm:text-[16px] leading-[28px] whitespace-pre-line'>{description}</p>
      </div>
    </div>
    </motion.div>
  );
};

const Vision = () => {
  // Remove visionMissionData and replace with challenge data
  const challenge = {
    title: "The Challenge",
    description: "Africa's digital market is experiencing explosive growth. Yet, we face a critical gap: businesses often rely on expensive imported solutions that do not fit our unique context, or rely on outdated systems that limit their potential. Meanwhile, a young, motivated pool of digital talent is seeking opportunities with foreign companies because the local tech landscape doesn't match their-(our) ambitions.\n\n This is where Guntu IT Solutions comes in, crafting modern, future-proof solutions with our expertise, and connecting with exceptional local + global talent to deliver world-class tech and digital-media solutions to serve Africa and beyond while keeping our brightest minds home.",
    icon: " 🧩"
  };

  const solutions = [
    {
      title: "Full Stack Web & Mobile App Development",
      description: "Custom web and mobile applications built with modern technologies, from front-end to back-end, with cross-platform support.",
      icon: app,
      links: ["Portfolio", "Case Studies", "Get Quote"],
      sampleProjects: ["E-commerce Platform", "Delivery App", "Social Network"],
      pricing: "From $2,500"
    },
    {
      title: "Agentic AI & Automation, API Integration, Payment Gateways and more",
      description: "Intelligent automation using AI-powered solutions, including: chatbots and workflow automation. We also offer a range of other services including: API integration for payment gateways, SMS, and email services.",
      icon: ai,
      links: ["Demo", "Case Studies", "Get Quote"],
      sampleProjects: ["AI Chatbots", "Workflow Automation", "Smart Analytics"],
      pricing: "From $1,500"
    },
    {
      title: "Professional Videography & Photography",
      description: "Digital content creation for marketing and branding",
      icon: video,
      links: ["Portfolio", "Case Studies", "Get Quote"],
      sampleProjects: ["Product Videos", "Corporate Events", "Brand Photography"],
      pricing: "From $300"
    },
    {
      title: "Design & Branding",
      description: "Complete design solutions including logos, branding, landing pages, and marketing materials that convert visitors to customers.",
      icon: brand,
      links: ["Portfolio", "Case Studies", "Get Quote"],
      sampleProjects: ["Logo Design", "Corporate Website", "Brand Identity"],
      pricing: "From $800"
    },
    {
      title: "Security & Surveillance Systems",
      description: "Complete security solutions including CCTV systems, access control, alarm systems, and integrated web-based management platforms for real-time monitoring and control.",
      icon: security,
      links: ["Security Demo", "Integration Gallery", "Get Assessment"],
      sampleProjects: ["Logo Design", "Corporate Website", "Brand Identity"],
      pricing: "From $800"
    },

  ];

  const [scrollDirection, setScrollDirection] = React.useState('down');
  // Track top Y pixel in viewport
  const [viewportTopY, setViewportTopY] = React.useState(0);

  React.useEffect(() => {
     const handleScroll = () => {
       setViewportTopY(window.scrollY);
     };
 
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={`${styles.padding} max-w-7xl mx-[-30px] md:mx-auto relative z-0`} 
      id="vision"
    >
      <div>
        {/* Single Challenge Card */}
        <VisionCard {...challenge} index={0} viewportTopY={viewportTopY}/>
      </div>

      {/* Solutions Section */}
      <motion.div
        initial={{ 
          x: scrollDirection === 'down' ? -350 : 350, 
          opacity: 0
        }}
        animate={{ 
          x: viewportTopY > 800 ? 0 : (scrollDirection === 'down' ? 350 : -350), 
          opacity: viewportTopY > 800 ? 1 : 0,
          scale: viewportTopY > 800 ? 1 : 1
        }}
        transition={{
          type: "tween",
          duration: 0.5,
          bounce: 0,
        }}
        className='mt-20 lg:mt-30'
      >
        <h3 className='text-[#EF6304] font-bold text-[24px] lg:text-[40px] mb-8 text-center md:text-left'>
          Our Solutions&nbsp; 🛠️</h3>
          <motion.div 
            variants={staggerContainer()}
            className="bg-[url(/src/assets/black.jpg)] bg-cover bg-no-repeat bg-center p-4 rounded-3xl shadow-card"
          >
            
            <div className='grid grid-cols-1 md:grid-cols-10 gap-6'>
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ 
                    x: scrollDirection === 'down' ? -350 : 350, 
                    opacity: 0
                  }}
                  animate={{ 
                    x: viewportTopY > (window.innerWidth >= 1024 ? 800 : 800 + 200 * index) ? 0 : (scrollDirection === 'down' ? 350 : -350), 
                    opacity: viewportTopY > (window.innerWidth >= 1024 ? 800 : 800 + 200 * index) ? 1 : 0,
                    scale: viewportTopY > (window.innerWidth >= 1024 ? 800 : 800 + 200 * index) ? 1 : 1
                  }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    bounce: 0,
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className={`bg-neutral-900 .animated-border-gradient rounded-2xl p-6 shadow-sm flex flex-col h-55 md:h-50 ${
                    index === 0? 'md:col-span-4' : index === 1? 'md:col-span-6' : index === 2? 'md:col-span-3' : index === 3? 'md:col-span-3' : index === 4? 'md:col-span-4' : 'md:col-span-3'
                  }`}
                >
                  <div className='flex items-center flex-shrink-0'>
                    {/* Icon */}
                    <div className='w-20 h-20 flex items-center justify-center flex-shrink-0'>
                      <img 
                        src={solution.icon} 
                        alt={solution.title}
                        className='w-20 h-20 object-contain'
                      />
                    </div>

                    {/* Content */}
                    <div className='flex-1 ml-4'>
                      <h5 className='text-gray-200 font-bold text-[18px] mb-3'>{solution.title}</h5>
                    </div>
                  </div>
                  <div className='flex-1 flex items-end'>
                    <p className='text-gray-300 text-[14px] leading-[20px]'>{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </motion.div>
      </motion.div>

      <motion.div 
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='mt-16 text-center'
      >
        <motion.h3 
          variants={textVariant(0.1)}
          className='text-white font-bold text-[28px] mb-8'
        >
          Why Choose Guntu IT Solutions?
        </motion.h3>
        
        <motion.div 
          variants={staggerContainer()}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
        >
          <motion.div variants={fadeIn("up", "spring", 0.1, 0.75)} className='text-center'>
            <h4 className='text-[#EF6304] font-bold text-[32px]'>5+</h4>
            <p className='text-secondary text-[16px]'>Years Experience</p>
          </motion.div>
          <motion.div variants={fadeIn("up", "spring", 0.2, 0.75)} className='text-center'>
            <h4 className='text-[#EF6304] font-bold text-[32px]'>3+</h4>
            <p className='text-secondary text-[16px]'>Projects Delivered</p>
          </motion.div>
          <motion.div variants={fadeIn("up", "spring", 0.3, 0.75)} className='text-center'>
            <h4 className='text-[#EF6304] font-bold text-[32px]'>98%</h4>
            <p className='text-secondary text-[16px]'>Client Satisfaction</p>
          </motion.div>
          <motion.div variants={fadeIn("up", "spring", 0.4, 0.75)} className='text-center'>
            <h4 className='text-[#EF6304] font-bold text-[32px]'>24/7</h4>
            <p className='text-secondary text-[16px]'>Support Available</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Vision;