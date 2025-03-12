import React from 'react'
import text_1 from '../assets/testimonial/01.png'
import text_2 from '../assets/testimonial/02.png'
import text_3 from '../assets/testimonial/03.png'
import text_4 from '../assets/testimonial/04.png'
import { RiUser3Line } from '@remixicon/react'
import {motion} from 'framer-motion'
import { Link } from 'react-scroll';




export const SlideLeft = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: delay,
                duration: 0.3,
                ease: 'easeInOut'
            }

        }
    }
}

export const SlideDown = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: -100
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: delay,
                duration: 0.3,
                ease: 'easeInOut'
            }

        }
    }
}

export const SlideRight = (delay) => {
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


export const SlideUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            x: -100
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



const Testimonial = () => {
  return (
    <section className='mt-[120px] container mx-auto' id='testimonial'>
      <h1 className='text-4xl font-semibold mb-8 text-center'>
            What our client says
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center gap-8 h-full overflow-hidden">
            <motion.div variants={SlideLeft(0.3)} initial='initial' whileInView={"animate"} viewport={{once: true}} className="slide">
                <div className="title">
                    <img src={text_1} alt="" className='w-14'/>
                    <div className="">
                        <h2 className='text-xl font-medium '>
                            Nattasha Mith
                        </h2>
                        <span className='text-sm text-gray-500'>
                            Greenville, USA
                        </span>
                    </div>
                </div>

                <div className="mt-8 text-sm line-clamp-3">
                    "Absolutely love our new home! It's everything we wanted—spacious, cozy, and in a great neighborhood. From the layout to the little details, every part feels perfect. We’re excited to start making memories here!"
                </div>

                <div className="text-center mt-3">
                    <span className='flex items-center justify-center gap-3 bg-accent text-white px-5 py-3 rounded-full text-sm'>
                        <RiUser3Line size={15}/>
                        Home owner
                    </span>
                </div>
            </motion.div>

            <motion.div variants={SlideDown(0.5)} initial='initial' whileInView={"animate"} viewport={{once: true}} className="slide">
                <div className="title">
                    <img src={text_2} alt="" className='w-14'/>
                    <div className="">
                        <h2 className='text-xl font-medium '>
                            Jessica White
                        </h2>
                        <span className='text-sm text-gray-500'>
                            Oak Ridge, USA
                        </span>
                    </div>
                </div>

                <div className="mt-8 text-sm line-clamp-3">
                   "From the moment I walked into our new home, I knew it was everything we had dreamed of and more. The space is beautifully designed, with every detail thoughtfully considered. The open floor plan feels so inviting, and the natural light that floods each room creates such a warm atmosphere. The backyard is perfect for family gatherings, and the neighborhood is welcoming and quiet. We couldn't have asked for a better place to start this new chapter in our lives. This house truly feels like home, and we are so excited to make lasting memories here!" 

                    Feel free to adjust it based on your specific experience!
                </div>

                <div className="text-center mt-4">
                    <span className='flex items-center justify-center gap-3 bg-accent text-white px-5 py-3 rounded-full text-sm'>
                        <RiUser3Line size={15}/>
                        Tenant
                    </span>
                </div>
            </motion.div>

            <motion.div variants={SlideRight(0.7)} initial='initial' whileInView={"animate"} viewport={{once: true}} className="slide">
                <div className="title">
                    <img src={text_3} alt="" className='w-14'/>
                    <div className="">
                        <h2 className='text-xl font-medium '>
                            Mike Davis
                        </h2>
                        <span className='text-sm text-gray-500'>
                            Berlin, Germany
                        </span>
                    </div>
                </div>

                <div className="mt-8 text-sm line-clamp-3">
                    "Moving into our new home has been an incredible experience! It's everything we hoped for—comfort, style, and a perfect fit for our family. We’re so grateful for this fresh start and can’t wait to make it our own."
                </div>

                <div className="text-center mt-4">
                    <span className='flex items-center justify-center gap-3 bg-accent text-white px-5 py-3 rounded-full text-sm'>
                        <RiUser3Line size={15}/>
                        Estate Developer
                    </span>
                </div>
            </motion.div>

            <motion.div variants={SlideUp(0.9)} initial='initial' whileInView={"animate"} viewport={{once: true}} className="slide">
                <div className="title">
                    <img src={text_4} alt="" className='w-14'/>
                    <div className="">
                        <h2 className='text-xl font-medium '>
                            Olivia Wilson
                        </h2>
                        <span className='text-sm text-gray-500'>
                            Blue Ridge, France
                        </span>
                    </div>
                </div>

                <div className="mt-8 text-sm line-clamp-3">
                    "Our new house has exceeded all our expectations! It’s bright, spacious, and exactly what we’ve been looking for. The neighborhood is friendly, and we feel so at home already. We’re excited to begin this new chapter!"
                </div>

                <div className="text-center mt-4">
                    <span className='flex items-center justify-center gap-3 bg-accent text-white px-5 py-3 rounded-full text-sm'>
                        <RiUser3Line size={15}/>
                        Interior Expert
                    </span>
                </div>
            </motion.div>
      </div>
    </section>
  )
}

export default Testimonial
