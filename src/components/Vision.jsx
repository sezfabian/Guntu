import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, slideIn, textVariant, staggerContainer } from '../utils/motion';
import { web, app, brand, video, reactjs, ai } from '../assets';

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
        x: viewportTopY > 300 ? 0 : (scrollDirection === 'down' ? 350 : -350), 
        opacity: viewportTopY > 300 ? 1 : 0,
        scale: viewportTopY > 300 ? 1 : 1
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
      className='bg-tertiary rounded-3xl w-full mx-auto mt-50 sm:mt-20 shadow-card'
    >
      <div className='text-left'>
        <div className='w-full h-15 mx-auto rounded-3xl flex lg:mb-6'>
          <h3 className='text-[#EF6304] font-bold text-[24px] lg:text-[40px]'>{title}&nbsp;{icon}</h3>
        </div>
        <p className='text-secondary text-[13px] sm:text-[16px] leading-[28px] whitespace-pre-line'>{description}</p>
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
      title: "Agentic AI & Automation, API Integration and Payment Gateways",
      description: "Intelligent automation using AI-powered solutions, including: chatbots, workflow automation, with API integration including payment gateways, SMS, and email services.",
      icon: ai,
      links: ["Demo", "Case Studies", "Get Quote"],
      sampleProjects: ["AI Chatbots", "Workflow Automation", "Smart Analytics"],
      pricing: "From $1,500"
    },
    {
      title: "Design, Branding & Website Development",
      description: "Complete design solutions including logos, branding, websites, landing pages, and marketing materials that convert visitors to customers.",
      icon: brand,
      links: ["Portfolio", "Case Studies", "Get Quote"],
      sampleProjects: ["Logo Design", "Corporate Website", "Brand Identity"],
      pricing: "From $800"
    },
    {
      title: "Professional Videography & Photography",
      description: "Digital content creation for marketing and branding",
      icon: video,
      links: ["Portfolio", "Case Studies", "Get Quote"],
      sampleProjects: ["Product Videos", "Corporate Events", "Brand Photography"],
      pricing: "From $300"
    }
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
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`} 
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
        className='mt-20 lg:mt-50'
      >
        <h3 className='text-[#EF6304] font-bold text-[24px] lg:text-[40px]'>
          Our Solutions&nbsp; 🛠️</h3>
        
        <motion.div 
          variants={staggerContainer()}
          className='grid grid-cols-1 md:grid-cols-2 gap-6'
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ 
                x: scrollDirection === 'down' ? -350 : 350, 
                opacity: 0
              }}
              animate={{ 
                x: viewportTopY > (window.innerWidth >= 1024 ? 800 : 800 + 400 * index) ? 0 : (scrollDirection === 'down' ? 350 : -350), 
                opacity: viewportTopY > (window.innerWidth >= 1024 ? 800 : 800 + 400 * index) ? 1 : 0,
                scale: viewportTopY > (window.innerWidth >= 1024 ? 800 : 800 + 400 * index) ? 1 : 1
              }}
              transition={{
                type: "tween",
                duration: 0.5,
                bounce: 0,
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className='bg-tertiary rounded-2xl shadow-card group  cursor-pointer justify-items-center'
            >
              <div className='lg:flex items-center justify-center gap-6'>
                {/* Image */}
                  <div className='w-50 h-60 flex items-center mx-auto flex-shrink-0'>
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{
                        type: "tween",
                        duration: 0.5,
                        bounce: 0,
                      }}
                    >
                        <img 
                          src={solution.icon} 
                          alt={solution.title}
                          className='w-full h-full object-contain'
                        />
                    </motion.div>
                  </div>

                {/* Text Content */}
                <div className='flex-1'>
                  <h4 className='text-white font-bold text-[20px] mb-2'>{solution.title}</h4>
                  <p className='text-secondary text-[14px] leading-[20px]'>{solution.description}</p>
                </div>
              </div>

              {/* Hover Content */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileHover={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className='overflow-hidden'
              >
                <div className='border-t border-gray-600 pt-4 mt-4'>
                  {/* Links */}
                  <div className='mb-4'>
                    <h5 className='text-[#EF6304] font-semibold text-[14px] mb-2'>Quick Links</h5>
                    <div className='flex flex-wrap gap-2'>
                      {solution.links.map((link, idx) => (
                        <button key={idx} className='bg-[#EF6304] text-white px-3 py-1 rounded-full text-[12px] hover:bg-[#d55a04] transition-colors'>
                          {link}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sample Projects */}
                  <div className='mb-4'>
                    <h5 className='text-[#EF6304] font-semibold text-[14px] mb-2'>Sample Projects</h5>
                    <ul className='text-secondary text-[12px] space-y-1'>
                      {solution.sampleProjects.map((project, idx) => (
                        <li key={idx} className='flex items-center'>
                          <span className='w-1 h-1 bg-[#EF6304] rounded-full mr-2'></span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div>
                    <h5 className='text-[#EF6304] font-semibold text-[14px] mb-2'>Starting Price</h5>
                    <p className='text-white font-bold text-[16px]'>{solution.pricing}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
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
            <h4 className='text-[#EF6304] font-bold text-[32px]'>150+</h4>
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