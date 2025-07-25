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
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
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
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: form.name,
          to_name: 'Guntu IT Solutions',
          from_email: form.email,
          to_email: 'contact@guntu.com',
          message: form.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
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
     <motion.div
     initial={{ opacity: 0, x: +350 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.8 }}
     className="rounded-3xl justify-center items-center"
   >
     <div className='md:col-span-1 rounded-3xl mt-[200px] p-10 max-w-3xl mx-auto'>
     <div className=' z-10 px-5 relative'>
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
       className="space-y-4 md:px-5 ms-5"
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
   </motion.div>
   <motion.div
   className="space-y-6 rounded-3xl"
   >
    <div style={{height: '580px', width: '92%', position: 'absolute', zIndex: '-1'}} className='rounded-3xl mt-[-630px]'>
       <Dither
         waveColor={[0.8, 0.5, 0.4]}
         disableAnimation={false}
         enableMouseInteraction={true}
         mouseRadius={0.3}
         colorNum={7}
         waveAmplitude={0.3}
         waveFrequency={3}
         waveSpeed={0.05}
       />
     </div>
   </motion.div>
   </div>
  )
}

export default Contact