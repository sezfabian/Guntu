import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState, useEffect } from "react";
import { HeroSkeleton } from "./Loader";
import ScrollArrow from "./Scroll";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [viewportTopY, setViewportTopY] = useState(0);
  
  useEffect(() => {
    // Simulate loading time for 3D model and other resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setViewportTopY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <HeroSkeleton />;
  }

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#EF6304]' />
          <div className='w-1 sm:h-80 h-40 white-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white mt-10`}>
            Bolder, Better | <span className='text-[#EF6304]'>Smarter</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          We craft future-ready solutions,<br className='sm:block hidden' />
          for future-proof results.
          </p>
        </div>
      </div>
      <div className="hidden lg:h-150 xl:h-full sm:hidden lg:block lg:mt-20 lg:ms-140 xl:ms-160">
          <ComputersCanvas/>
      </div>

      <div className='absolute bottom-0 top-90 sm:top-80 md:top-40 md:ms-50 w-full h-full  justify-center items-center'>
        <div className="h-120 sm:h-150 w-full lg:hidden">
          <ComputersCanvas/>
        </div>
      </div>

      {/* Scroll Arrow positioned at bottom center */}
      <div className="absolute bottom-10 lg:bottom-30 left-1/2 transform -translate-x-1/2 z-10">
        <ScrollArrow viewportTopY={viewportTopY} minY={200} scrollDistance={500} />
      </div>
    </section>
  );
};

export default Hero;