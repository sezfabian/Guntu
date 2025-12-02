import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fabian, walter, faith, black } from '../assets';
import ScrollArrow from './Scroll';

const TeamMember = ({ name, role, avatar, description, index, viewportTopY }) => (
  <div>
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
    </div>
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
    <section className={`${styles.padding} max-w-10xl mx-auto text-center mt-[150px] relative z-0`} id="about"
    style={{
      backgroundImage: `url(${black})`,
      backgroundSize: '100% 35%',
      backgroundPosition: '0, 0',
      backgroundPositionY: '-30.15%',
      backgroundRepeat: 'repeat-x'
    }}
    >
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
        className="rounded-3xl p-8 md:p-12 mt-[260px] shadow-card mb-20"
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Us.</h2>
        
        <div className="mt-6 space-y-6">
          <p className='text-secondary text-[14px] md:text-[17px] leading-[25px] md:leading-[30px] mb-6'>
          At Guntu IT Solutions, we do more than just build software — we bring ideas to life through technology and storytelling. From web apps and mobile applications to AI chatbots, websites, documentaries, and marketing videos, our work blends innovation with creativity to serve businesses, brands, and communities.
          </p>
          <span className='text-secondary h-5 text-[17px] leading-[30px]'> </span>
          <p 
            className='text-secondary text-[14px] md:text-[17px] leading-[25px] md:leading-[30px]'
          >
            Founded in 2022, we came together as a team of creatives and technologists with one goal: to do something meaningful with our skills. Since then, we've partnered with clients across sectors to deliver smart digital solutions and compelling content that inform, engage, and inspire.
          </p>
        </div>
      </motion.div>
      <ScrollArrow viewportTopY={viewportTopY} minY={200} scrollDistance={500} />

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
        className="bg-[#0] rounded-3xl p-8 md:p-12 shadow-card mt-30 mb-12"
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
        className="bg-[#0] rounded-3xl p-8 md:p-12 shadow-card mb-12"
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
            className="bg-[#0] rounded-2xl p-6 text-center shadow-card hover:shadow-lg transition-all duration-300"
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