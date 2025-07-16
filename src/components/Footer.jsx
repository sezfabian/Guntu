import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import emailjs from '@emailjs/browser';

const Footer = () => {
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
    <footer className="bg-gray-900 text-white py-16">
      <div className={`${styles.padding} max-w-7xl mx-auto`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-[#EF6304] font-bold text-[32px] mb-4">Contact Us</h3>
              <p className="text-gray-300 text-[16px] leading-[24px]">
                Ready to start your next project? Get in touch with us and let's bring your ideas to life.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-gray-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-gray-700 focus:border-[#EF6304] w-full"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="bg-gray-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-gray-700 focus:border-[#EF6304] w-full"
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="bg-gray-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-gray-700 focus:border-[#EF6304] w-full resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#EF6304] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#d55a04] transition-colors"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Important Links - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[#EF6304] font-bold text-[32px] mb-6">Quick Links</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Services */}
              <div className="space-y-4">
                <h4 className="text-white font-bold text-[20px]">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#vision" className="text-gray-300 hover:text-[#EF6304] transition-colors">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#vision" className="text-gray-300 hover:text-[#EF6304] transition-colors">
                      Mobile Apps
                    </a>
                  </li>
                  <li>
                    <a href="#vision" className="text-gray-300 hover:text-[#EF6304] transition-colors">
                      AI & Automation
                    </a>
                  </li>
                  <li>
                    <a href="#vision" className="text-gray-300 hover:text-[#EF6304] transition-colors">
                      Design & Branding
                    </a>
                  </li>
                  <li>
                    <a href="#vision" className="text-gray-300 hover:text-[#EF6304] transition-colors">
                      Videography
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h4 className="text-white font-bold text-[20px]">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/about" className="text-gray-300 hover:text-[#EF6304] transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/work" className="text-gray-300 hover:text-[#EF6304] transition-colors">
                      Our Work
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-300 hover:text-[#EF6304] transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#vision" className="text-gray-300 hover:text-[#EF6304] transition-colors">
                      Vision
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 pt-6 border-t border-gray-700">
              <h4 className="text-white font-bold text-[20px]">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-gray-300 flex items-center">
                  <span className="mr-2">📧</span>
                  contact@guntu.com
                </p>
                <p className="text-gray-300 flex items-center">
                  <span className="mr-2">📱</span>
                  +234 XXX XXX XXXX
                </p>
                <p className="text-gray-300 flex items-center">
                  <span className="mr-2">📍</span>
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-[20px]">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#EF6304] transition-colors text-2xl">
                  📘
                </a>
                <a href="#" className="text-gray-300 hover:text-[#EF6304] transition-colors text-2xl">
                  🐦
                </a>
                <a href="#" className="text-gray-300 hover:text-[#EF6304] transition-colors text-2xl">
                  💼
                </a>
                <a href="#" className="text-gray-300 hover:text-[#EF6304] transition-colors text-2xl">
                  📷
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Guntu IT Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 