import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
    <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
      <img
        src={icon}
        alt='web-development'
        className='w-16 h-16 object-contain'
      />
      <h3 className='text-white text-[20px] font-bold text-center'>
        {title}
      </h3>
    </div>
  </div>
);

const TeamMember = ({ name, role, avatar, description, index }) => (
  <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                scale: { type: "spring", visualDuration: 0.1 * (index), bounce: 0.5 },
            }}
    className='bg-[#070202] p-6 rounded-3xl w-full max-w-sm mx-auto'
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
      name: "Sarah Johnson",
      role: "CEO & Founder",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Visionary leader with 15+ years in tech innovation and strategic business development."
    },
    {
      index: 2,
      name: "Michael Chen",
      role: "CTO",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Full-stack architect specializing in scalable cloud solutions and emerging technologies."
    },
    {
      index: 3,
      name: "Emily Rodriguez",
      role: "Lead Designer",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Creative director crafting intuitive user experiences and stunning visual interfaces."
    },
    {
      index: 4,
      name: "David Kim",
      role: "Senior Developer",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expert in React, Node.js, and modern web technologies with a passion for clean code."
    },
    {
      index: 5,
      name: "Lisa Thompson",
      role: "Project Manager",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Agile methodology expert ensuring seamless project delivery and client satisfaction."
    },
    {
      index: 6,
      name: "Alex Martinez",
      role: "DevOps Engineer",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Infrastructure specialist optimizing deployment pipelines and system reliability."
    }
  ];

  return (
    <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`} id="about">
      <span className='hash-span' id="about">&nbsp;</span>
      
      <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1.8,
                scale: { type: "tween", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Us.</h2>
      </motion.div>

      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        At Guntu IT Solutions, we're not just building software – we're crafting the future. 
        Our team of passionate innovators combines cutting-edge technology with creative problem-solving 
        to deliver solutions that don't just meet expectations, they exceed them. From startups to 
        enterprise giants, we've helped hundreds of clients transform their digital presence and 
        achieve unprecedented growth.
      </p>

      <motion.p 
        variants={fadeIn("up", "tween", 0.2, 1)}
        className='mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Founded in 2018, we've grown from a small team of dreamers to a powerhouse of digital 
        transformation. Our expertise spans web development, mobile applications, cloud solutions, 
        and emerging technologies like AI and blockchain. We believe in building lasting partnerships 
        with our clients, understanding their unique challenges, and delivering solutions that drive 
        real business value.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className='mt-20'>
        <p className={styles.sectionSubText}>Meet the team</p>
        <h2 className={styles.sectionHeadText}>Our Experts.</h2>
      </div>

      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Behind every great solution is an exceptional team. Our diverse group of experts brings 
        together decades of combined experience, innovative thinking, and an unwavering commitment 
        to excellence. Get to know the people who make the magic happen.
      </p>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {teamMembers.map((member, index) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>

      <div className='mt-20 bg-[#070202] rounded-2xl p-8'>
        <h3 className='text-white font-bold text-[24px] mb-6 text-center'>Our Mission</h3>
        <p className='text-secondary text-[16px] leading-[28px] text-center max-w-4xl mx-auto'>
          To empower businesses with innovative technology solutions that drive growth, enhance 
          efficiency, and create meaningful connections with their customers. We're committed to 
          staying at the forefront of technological advancement while maintaining the human touch 
          that makes every project personal and every solution unique.
        </p>
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='text-center'>
          <h4 className='text-[#EF6304] font-bold text-[32px]'>150+</h4>
          <p className='text-secondary text-[16px]'>Projects Completed</p>
        </div>
        <div className='text-center'>
          <h4 className='text-[#EF6304] font-bold text-[32px]'>98%</h4>
          <p className='text-secondary text-[16px]'>Client Satisfaction</p>
        </div>
        <div className='text-center'>
          <h4 className='text-[#EF6304] font-bold text-[32px]'>24/7</h4>
          <p className='text-secondary text-[16px]'>Support Available</p>
        </div>
      </div>
    </section>
  );
};

export default About;