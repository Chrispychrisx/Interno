import { RiArrowRightLine, RiCompasses2Line, RiMagicLine, RiToolsFill, RiToolsLine } from '@remixicon/react'
import React from 'react'
import {motion} from 'framer-motion'

export const SlideLeft = (delay) => {
    return {
        initial: {
            opacity: 0,
            x: 100
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                delay: delay,
                duration: 0.3,
                ease: 'easeInOut'
            }

        }
    }
}

const Steps = () => {
  return (
    <section className='steps mt-[80px] lg:mt-[200px] relative z-20'>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <motion.div 
                    variants={SlideLeft(0.3)} 
                    initial='initial' 
                    whileInView={"animate"} 
                    viewport={{once: true}} 
                    className="steps__step text-center">
                    <div className="flex justify-center mb-4">
                        <RiCompasses2Line size={40} className='text-5xl text-accent' />
                    </div>
                    
                    <h2 className='text-3xl m-5 '>
                    Project Planning
                    </h2>
                    <p className='mb-5 max-w-md mx-auto text-[1.1rem]'>
                        There are many variations of the passages of lorem Ipsum from available, majority.
                    </p>
                    <a href='#' className='font-medium text-[1rem] flex justify-center gap-2'>
                        Read more
                        <RiArrowRightLine size={20} className='text-accent' />
                    </a>
                </motion.div>

                <motion.div variants={SlideLeft(0.6)} initial='initial' whileInView={"animate"} viewport={{once: true}} className="steps__step text-center">
                    <div className="flex justify-center mb-4">
                        <RiMagicLine size={40} className='text-5xl text-accent' />
                    </div>
                    
                    <h2 className='text-3xl m-5 '>
                        Gaining Materials
                    </h2>
                    <p className='mb-5 max-w-md mx-auto text-[1.1rem]'>
                        There are many variations of the passages of lorem Ipsum from available, majority.
                    </p>
                    <a href='#' className='font-medium text-[1rem] flex justify-center gap-2'>
                        Read more
                        <RiArrowRightLine size={20} className='text-accent' />
                    </a>
                </motion.div>

                <motion.div variants={SlideLeft(0.9)} initial='initial' whileInView={"animate"} viewport={{once: true}} className="steps__step text-center">
                    <div className="flex justify-center mb-4">
                        <RiToolsLine size={40} className='text-5xl text-accent' />
                    </div>
                    
                    <h2 className='text-3xl m-5 '>
                        Project Execution
                    </h2>
                    <p className='mb-5 max-w-md mx-auto text-[1rem]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum a fugiat.
                    </p>
                    <a href='#' className='font-medium text-[1rem] flex justify-center gap-2'>
                        Read more
                        <RiArrowRightLine size={20} className='text-accent' />
                    </a>
                </motion.div>
            </div>
        </div>
        
      
    </section>
  )
}

export default Steps
