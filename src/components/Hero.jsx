import heroImg from '../assets/hero/bg.jpg'
import {animate, motion} from 'framer-motion'


export const SlideUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 200
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'string',
        stiffness: 100,
        duration: 0.9,
        ease: 'easeInOut'
      }
    }
  }
}

const Hero = () => {
  return (
    <section className='hero h-[640px] bg-center bg-no-repeat bg-fixed relative z-20 mt-7 lg:rounded-bl-[290px]' 
        style={{ backgroundImage: `url(${heroImg})` }} id='home'>
        <div className="container mx-auto h-full flex items-center justify-center">
            <div className="hero__text">
                <motion.h1 
                  variants={SlideUp(0.6)} 
                  initial='initial' 
                  animate='animate' className='text-[2.3rem] md:text-[3.5rem] sm:text-[2.3rem] font-semibold mb-8 text-center'>Let Your Home Be Unique</motion.h1>

                <motion.p variants={SlideUp(0.9)} initial='initial' animate='animate' className='mb-8 text-[1.1rem] text-center'>
                  There are many variations of the passages of lorem Ipsum from available, variations of the passages.
                </motion.p>
                
                <button className='btn btn-primary mx-auto lg:mx-0'>
                    Get free estimation
                </button>
            </div>
        </div>    
    </section>
  )
}

export default Hero
