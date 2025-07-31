import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { Dither } from './canvas';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("HXIyfXQPu-xo_gFv-"); // Replace with your actual public key
  }, []);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_rwmlqp8', // Replace with your EmailJS service ID
        'template_h9o39zu', // Replace with your EmailJS template ID
        {
          from_name: form.name,
          to_name: 'Guntu IT Solutions',
          from_email: form.email,
          to_email: 'info@guntuit.co.ke',
          message: form.message,
        },
        'HXIyfXQPu-xo_gFv-' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className={`${styles.padding} md:max-w-7xl w-full md:mx-auto relative mt-[150px] grid grid-cols-1 gap-12`}>

     {/* Contact Form - Left Side */}
     <div
     className="rounded-3xl justify-center items-center"
   >
     <div className='md:col-span-1 rounded-3xl mt-[200px] max-w-2xl mx-auto'>
     <div className=' z-10  relative'>
       <h3 className="text-[#EF6304] font-bold text-[32px] mb-4">Contact Us</h3>
       <p className="text-gray-300 text-[16px] leading-[24px]">
         Ready to start your next project? 
       </p>
       <p className="text-gray-300 text-[16px] leading-[24px]">
         Get in touch with us and let's bring your ideas to life.
       </p>
     </div>

     <form
       ref={formRef}
       onSubmit={handleSubmit}
       className="space-y-4 "
     >
       <div>
         <input
           type="text"
           name="name"
           value={form.name}
           onChange={handleChange}
           placeholder="Your Name"
           className="bg-gray-800 py-2 px-6 my-5 placeholder:text-secondary text-white rounded-lg outline-none border border-gray-700 focus:border-[#EF6304] w-full z-30"
         />
       </div>
       <div>
         <input
           type="email"
           name="email"
           value={form.email}
           onChange={handleChange}
           placeholder="Your Email"
           className="bg-gray-800 py-2 mb-5 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-gray-700 focus:border-[#EF6304] w-full"
         />
       </div>
       <div>
         <textarea
           rows="4"
           name="message"
           value={form.message}
           onChange={handleChange}
           placeholder="Your Message"
           className="bg-gray-800 py-2 mb-5 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-gray-700 focus:border-[#EF6304] w-full resize-none"
         />
       </div>
       <button
         type="submit"
         className="bg-[#EF6304] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#d55a04] transition-colors z-30"
       >
         {loading ? 'Sending...' : 'Send Message'}
       </button>
     </form>
     </div>
   </div>
   <motion.div
   className="space-y-6 rounded-3xl"
   >
    <div style={{height: '100%', width: '100%', position: 'absolute'}} className='rounded-3xl mt-[-680px] z-[-1]'>
       <Dither
         particleColors={['#EF6304', '#EF6304']}
         particleCount={300}
         particleSpread={10}
         speed={0.21}
         particleBaseSize={200}
         moveParticlesOnHover={true}
         alphaParticles={false}
         disableRotation={false}
       />
     </div>
   </motion.div>
   </div>
  )
}

export default Contact