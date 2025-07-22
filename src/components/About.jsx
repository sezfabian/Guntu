import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import { fabian, walter, faith } from '../assets';

const TeamMember = ({ name, role, avatar, description, index, viewportTopY }) => (
  <motion.div
    initial={{ 
      x: 350, 
      opacity: 0
    }}
    animate={{ 
      x: viewportTopY > (window.innerWidth >= 1024 ? 400 : 400 + 200 * index) ? 0 : 350, 
      opacity: viewportTopY > (window.innerWidth >= 1024 ? 400 : 400 + 200 * index) ? 1 : 0,
      scale: viewportTopY > (window.innerWidth >= 1024 ? 400 : 400 + 200 * index) ? 1 : 1
    }}
    transition={{
      type: "tween",
      duration: 0.5,
      bounce: 0,
    }}
    className='bg-[#070202] p-6 rounded-3xl w-full max-w-sm mx-auto shadow-card hover:shadow-lg transition-all duration-300'
  >
    <div className='relative w-32 h-32 mx-auto mb-4'>
      <img
        src={avatar}
        alt={name}
        className='w-full h-full object-cover rounded-full border-4 border-[#EF6304]'
      />
    </div>
    <div className='text-center'>
      <h3 className='text-white font-bold text-[18px] mb-2'>{name}</h3>
      <p className='text-[#EF6304] text-[14px] font-medium mb-3'>{role}</p>
      <p className='text-secondary text-[12px] leading-relaxed'>{description}</p>
    </div>
  </motion.div>
);

const About = () => {
  const teamMembers = [
    {
      index: 1,
      name: "Fabian Cheruiyot",
      role: "Builds the Tech",
      avatar: fabian,
      description: "Full Stack Developer with 5+ years of experience in building scalable and efficient web applications."
    },
    {
      index: 2,
      name: "Walter Serem",
      role: "Creates the Content",
      avatar: walter,
      description: "Designer and Video/Audio Producer with 7+ years of experience in creating audio & visual masterpieces."
    },
    {
      index: 3,
      name: "Faith Shikanga",
      role: "Tells the Story",
      avatar: faith,
      description: "Communication and marketing specialist, with 3+ years of experience in creating engaging and informative content."
    }
  ];

  const stats = [
    {
      number: "5+",
      label: "Projects Completed",
      description: "Successfully delivered across various industries"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently exceeding client expectations"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical support and maintenance"
    },
    {
      number: "3+",
      label: "Years Experience",
      description: "Deep expertise in modern technologies"
    }
  ];

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
    <section className={`${styles.padding} max-w-7xl mx-auto mt-[150px] relative z-0`} id="about">
      <span className='hash-span' id="about">&nbsp;</span>
      
      {/* Header Card */}
      <motion.div
        initial={{ 
          x: 350, 
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
        className="bg-[#070202] rounded-3xl p-8 md:p-12 shadow-card mb-12"
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Us.</h2>
        
        <div className="mt-6 space-y-6">
          <p className='text-secondary text-[17px] leading-[30px]'>
            At Guntu IT Solutions, we're not just building software – we're crafting the future. 
            Our team of passionate innovators combines cutting-edge technology with creative problem-solving 
            to deliver solutions that don't just meet expectations, they exceed them. From startups to 
            enterprise giants, we've helped hundreds of clients transform their digital presence and 
            achieve unprecedented growth.
          </p>

          <motion.p 
            variants={fadeIn("up", "tween", 0.2, 1)}
            className='text-secondary text-[17px] leading-[30px]'
          >
            Founded in 2018, we've grown from a small team of dreamers to a powerhouse of digital 
            transformation. Our expertise spans web development, mobile applications, cloud solutions, 
            and emerging technologies like AI and blockchain. We believe in building lasting partnerships 
            with our clients, understanding their unique challenges, and delivering solutions that drive 
            real business value.
          </motion.p>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ 
          x: 350, 
          opacity: 0
        }}
        animate={{ 
          x: viewportTopY > 200 ? 0 : 350, 
          opacity: viewportTopY > 200 ? 1 : 0,
          scale: viewportTopY > 200 ? 1 : 1
        }}
        transition={{
          type: "tween",
          duration: 0.5,
          bounce: 0,
        }}
        className="bg-[#070202] rounded-3xl p-8 md:p-12 shadow-card mb-12"
      >
        <div className="text-center mb-8">
          <p className={styles.sectionSubText}>Meet the team</p>
          <h2 className={styles.sectionHeadText}>Our Experts.</h2>
        </div>

        <p className='text-secondary text-[17px] leading-[30px] text-center max-w-3xl mx-auto mb-12'>
          Behind every great solution is an exceptional team. Our diverse group of experts brings 
          together decades of combined experience, innovative thinking, and an unwavering commitment 
          to excellence. Get to know the people who make the magic happen.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {teamMembers.map((member, index) => (
            <TeamMember key={member.name} {...member} viewportTopY={viewportTopY} />
          ))}
        </div>
      </motion.div>

      {/* Mission Card */}
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
        className="bg-[#070202] rounded-3xl p-8 md:p-12 shadow-card mb-12"
      >
        <h3 className='text-white font-bold text-[24px] md:text-[32px] mb-6 text-center'>Our Mission</h3>
        <p className='text-secondary text-[16px] leading-[28px] text-center max-w-4xl mx-auto'>
          To empower businesses with innovative technology solutions that drive growth, enhance 
          efficiency, and create meaningful connections with their customers. We're committed to 
          staying at the forefront of technological advancement while maintaining the human touch 
          that makes every project personal and every solution unique.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ 
          x: 350, 
          opacity: 0
        }}
        animate={{ 
          x: viewportTopY > 800 ? 0 : 350, 
          opacity: viewportTopY > 800 ? 1 : 0,
          scale: viewportTopY > 800 ? 1 : 1
        }}
        transition={{
          type: "tween",
          duration: 0.5,
          bounce: 0,
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ 
              x: 350, 
              opacity: 0
            }}
            animate={{ 
              x: viewportTopY > (window.innerWidth >= 1024 ? 800 : 800 + 200 * index) ? 0 : 350, 
              opacity: viewportTopY > (window.innerWidth >= 1024 ? 800 : 800 + 200 * index) ? 1 : 0,
              scale: viewportTopY > (window.innerWidth >= 1024 ? 800 : 800 + 200 * index) ? 1 : 1
            }}
            transition={{
              type: "tween",
              duration: 0.5,
              bounce: 0,
            }}
            className="bg-[#070202] rounded-2xl p-6 text-center shadow-card hover:shadow-lg transition-all duration-300"
          >
            <h4 className='text-[#EF6304] font-bold text-[32px] md:text-[40px] mb-2'>{stat.number}</h4>
            <p className='text-white font-semibold text-[16px] mb-2'>{stat.label}</p>
            <p className='text-secondary text-[14px]'>{stat.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;