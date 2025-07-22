import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-white">
      <div className={`${styles.padding} mx-`}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Logo - Left Side */}
          <div className="space-y-4 items-center justify-center flex lg:col-span-2 grid grid-cols-1 lg:grid-cols-2">
            <div className='space-y-4 items-center justify-center flex lg:col-span-1'>
              <img src={logo} alt="Guntu Logo" className="w-40 h-25" />
            </div>
            {/* Social Links */}
            <div className="space-y-4  py-6 lg:col-span-1 me-5">
              <h4 className="text-white font-bold text-[20px] mb-4 hidden md:block">Follow Us</h4>
              <div className="flex space-x-4 items-center justify-between ">
                <a href="#" className="text-gray-300 hover:text-[#EF6304] transition-colors text-2xl">
                <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#EF6304] transition-colors text-2xl">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#EF6304] transition-colors text-2xl">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#EF6304] transition-colors text-2xl">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
          {/* Important Links - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:col-span-2"
          >
            <div>
              <h5 className="text-[#EF6304] font-bold text-[32px] border-b border-gray-700">Quick Links</h5>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Company */}
              <div className="">
                <h6 className="text-white font-bold text-[20px]">Company</h6>
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
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
              {/* Contact Info */}
            <div className="space-y-4">
              <h5 className="text-white font-bold text-[20px]">Get In Touch</h5>
              <div className="space-y-2">
                <p className="text-gray-300 flex items-center">
                  <span className="mr-2"> <FontAwesomeIcon icon={faEnvelope} /></span>
                  info@guntuit.co.ke
                </p>
                <p className="text-gray-300 flex items-center">
                  <span className="mr-2"> <FontAwesomeIcon icon={faPhone} /></span>
                  +2547 1846 3900
                </p>
                <p className="text-gray-300 flex items-center">
                  <span className="mr-2"> <FontAwesomeIcon icon={faLocationDot} /></span>
                  Nairobi, Kenya
                </p>
              </div>
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