import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { farm, munjiti } from '../assets';
import ScrollArrow from './Scroll';

const ProjectCard = ({ project, index, viewportTopY }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ 
        x: 350, 
        opacity: 0
      }}
      animate={{ 
        x: viewportTopY > (window.innerWidth >= 1024 ? 200 : 300 * index) ? 0 : 350, 
        opacity: viewportTopY > (window.innerWidth >= 1024 ? 200 : 200 + 200 * index) ? 1 : 0,
        scale: 1,
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
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-[#070202] rounded-3xl p-6 shadow-card hover:shadow-lg transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-2xl mb-6">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-[#EF6304] text-white px-3 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: project.color, color: project.textcolor }}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="space-y-4">
        <h3 className="text-white font-bold text-[24px] leading-tight">{project.title}</h3>
        <p className="text-secondary text-[16px] leading-relaxed">{project.description}</p>
        
        {/* Technologies Used */}
        <div className="space-y-2 mt-5">
          <h4 className="text-[#EF6304] font-semibold text-[14px]">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx}
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-[12px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-2 mt-5">
          <h4 className="text-[#EF6304] font-semibold text-[14px]">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.map((feature, idx) => (
              <li key={idx} className="text-secondary text-[14px] flex items-center">
                <span className="w-1 h-1 bg-[#EF6304] rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Project Links */}
        <div className="flex gap-3 pt-4">
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#EF6304] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#d55a04] transition-colors flex-1 text-center"
          >
            View Live Site
          </a>
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-colors flex-1 text-center"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const projects = [
    {
      title: "Track Your Farm",
      description: "A comprehensive farm management platform that helps farmers run their operations like CEOs. The system tracks animals, health records, expenses, feeds, and production with AI-powered health diagnosis and financial analytics.",
      category: "Web Application",
      color: "#007A01",
      textcolor: "#FFFFFF",
      image: farm,
      liveUrl: "https://trackyourfarm.com/",
      githubUrl: null,
      technologies: ["React", "Node.js", "MongoDB", "AI/ML", "Payment Integration", "Mobile Responsive"],
      features: [
        "Animal management with health tracking",
        "AI-powered health diagnosis",
        "Financial tracking and analytics",
        "Equipment and feed management",
        "Mobile-optimized interface",
        "Real-time data synchronization"
      ]
    },
    {
      title: "ACK St Marys Munjiti Parish",
      description: "A comprehensive charity website for ACK St Marys Munjiti Parish. A church centered charity dedicated to empowering the community through child education, business support, and youth empowerment programs. The website supports multiple languages and facilitates donations for their charitable initiatives.",
      category: "Charity Website",
      color: "#FFFFFF",
      textcolor: "#000000",
      image: munjiti,
      liveUrl: "https://ackstmarys.munjitiparish.co.ke/",
      githubUrl: null,
      technologies: ["WordPress", "PHP", "MySQL", "Multi-language Support", "Donation System", "Event Management"],
      features: [
        "Multi-language support (English, Spanish, French, German, Kiswahili)",
        "Donation and fundraising system for charitable initiatives",
        "Event calendar for community engagement activities"
      ]
    }
  ];

  // Track top Y pixel in viewport
  const [viewportTopY, setViewportTopY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setViewportTopY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className={`${styles.padding} max-w-7xl mx-auto mt-[280px] relative z-0`} id="works">
        <span className='hash-span' id="works">&nbsp;</span>
        
        {/* Header */}
        <motion.div
          initial={{ 
            x: 0, 
            opacity: 0
          }}
          animate={{ 
            x: 0, 
            opacity: 1,
            scale: viewportTopY > 200 ? 1 : 1
          }}
          transition={{
            type: "tween",
            duration: 0.5,
            bounce: 0,
          }}
          className="text-center mb-16"
        >
          <p className={styles.sectionSubText}>Our Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
          <p className="text-secondary text-[17px] max-w-3xl mx-auto mt-4 leading-[30px]">
            Discover our portfolio of successful projects that showcase our expertise in web development, 
            design, and digital solutions. Each project represents our commitment to delivering 
            innovative, user-friendly, and impactful digital experiences.
          </p>
        </motion.div>

        {/* Scroll Arrow */}
        <ScrollArrow viewportTopY={viewportTopY} />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
              viewportTopY={viewportTopY}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ 
            x: 350, 
            opacity: 0
          }}
          animate={{ 
            x: viewportTopY > 600 ? 0 : 350, 
            opacity: viewportTopY > 600 ? 1 : 0,
            scale: viewportTopY > 600 ? 1 : 1
          }}
          transition={{
            type: "tween",
            duration: 0.5,
            bounce: 0,
          }}
          className="bg-[#070202] rounded-3xl p-8 md:p-12 shadow-card mt-16 text-center"
        >
          <h3 className="text-white font-bold text-[24px] md:text-[32px] mb-4">
            Ready to Start Your Next Project?
          </h3>
          <p className="text-secondary text-[16px] leading-[28px] max-w-2xl mx-auto mb-8">
            Let's work together to bring your vision to life. Whether you need a web application, 
            website, or custom digital solution, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-[#EF6304] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#d55a04] transition-colors"
            >
              Get Started
            </a>
            <a 
              href="/about" 
              className="bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Works;