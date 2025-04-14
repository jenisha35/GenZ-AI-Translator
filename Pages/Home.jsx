import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate()
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-pink-400 via-red-400 to-yellow-300 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-10 overflow-hidden relative">

      {/* Background Blur Layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/20 backdrop-blur-2xl rounded-xl z-0"></div>


      {/* Image Section */}
      <motion.picture 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="flex mb-8 md:mb-0 z-10 relative lg:mr-7 md:mr-5 sm:mr-3"
      >
        <motion.img
          src="/genz-removebg-preview.png"
          alt="Gen Z Character"
          className="h-[40vh] sm:h-[50vh] animate-pulse md:h-[60vh] lg:h-[70vh] object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500 "
          whileHover={{ rotate: 5 }}
        />
      </motion.picture>

      {/* Text Section */}
      <section className="w-full md:w-[60%] flex flex-col  items-center md:items-start text-center md:text-left space-y-8 z-10 bg-white/15  p-10 md:p-16 rounded-3xl shadow-2xl  shadow-[gray] hover:scale-105 transition-transform duration-500 ">
        
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 animate-pulse  leading-tight drop-shadow-lg"
        >
          Talk to Me Zaddy 💅
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold leading-relaxed tracking-wide"
        >
          Turning your cringe into <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text font-bold">straight-up slay</span> since 2025 🚀✨<br />
         <span className='block text-center font-thin text-l'> (Certified Gen Z Approved™)</span>
        </motion.p>

        <motion.button
onClick={() => navigate("bot-page")}
whileHover={{ scale: 1.15, rotate: 2 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 md:ml-50 bg-gradient-to-r from-pink-500 to-purple-600 animate-pulse text-white font-extrabold py-4 px-10 rounded-full shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:-translate-y-1"
        >
          Slide in ➡️
        </motion.button>

      </section>

    </section>
  );
};

export default Home;
