import { RiArrowRightSLine } from '@remixicon/react'
import blog_1 from '../assets/news/01.png'
import blog_2 from '../assets/news/02.png'
import blog_3 from '../assets/news/03.png'
import {motion} from 'framer-motion' 
import { SlideDown } from './Testimonial'
import { Link } from 'react-scroll';


export const SlideLeft = (delay) => {
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
              duration: 0.4,
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
              duration: 0.4,
              ease: 'easeInOut'
          }

      }
  }
}




const Blog = () => {
  return (
    <section className='z-20 mt-[80px] lg:mt-[150px]' id='blog'>
        <div className="container mx-auto">
            <h1 className='text-4xl font-normal mb-3 text-center'>
                Articles & News
            </h1>

            <p className='mb-10 text-lg max-w-[550px] text-center mx-auto'>
            It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
            </p>

            <div className="blog__grid grid grid-cols-1 lg:grid-cols-3 gap-[27px]">
              <motion.div variants={SlideLeft(0.2)} initial='initial' whileInView={"animate"} viewport={{once: true}} className="grid__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer ease-in-out duration-300 mx-auto lg:mx-0">
                <img src={blog_1} alt="News img" />
                <div className="flex flex-col gap-[30px]">
                  <h3 className='text-lg font-[550px] mt-4'>
                    Let’s Get Solution For Building Construction Work</h3>

                  <div className="flex justify-between items-center">
                    <p className='text-base'>22 June, 2024</p>
                    <button className='bg-accent-secondary w-[38px] h-[38px] rounded-full group-hover:bg-white transition-all duration-300'>
                      <RiArrowRightSLine size={32} className='text-gray-500 pl-1' />
                    </button>
                  </div>
                </div>
              </motion.div>

              
              <motion.div variants={SlideRight(0.5)} initial='initial' whileInView={"animate"} viewport={{once: true}} className="grid__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer ease-in-out duration-300 mx-auto lg:mx-0">
                <img src={blog_2} alt="News img2" />
                <div className="flex flex-col gap-[30px]">
                  <h3 className='text-lg font-[550px] mt-4'>
                    Low Cost Latest Invented Interior Designing Ideas.</h3>

                  <div className="flex justify-between items-center">
                    <p className='text-base'>24 June, 2024</p>
                    <button className='bg-accent-secondary w-[38px] h-[38px] rounded-full group-hover:bg-white transition-all duration-300'>
                      <RiArrowRightSLine size={32} className='text-gray-500 pl-1' />
                    </button>
                  </div>
                </div>
              </motion.div>

              
              <motion.div variants={SlideDown(0.8)} initial='initial' whileInView={"animate"} viewport={{once: true}} className="grid__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer ease-in-out duration-300 mx-auto lg:mx-0">
                <img src={blog_3} alt="News img3" />
                <div className="flex flex-col gap-[30px]">
                  <h3 className='text-lg font-[550px] mt-4'>
                    Best For Any Office & Business Interior 
                  Solution</h3>

                  <div className="flex justify-between items-center">
                    <p className='text-base'>28 June, 2024</p>
                    <button className='bg-accent-secondary w-[38px] h-[38px] rounded-full group-hover:bg-white transition-all duration-300'>
                      <RiArrowRightSLine size={32} className='text-gray-500 pl-1' />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
        </div>
        
    </section>
  )
}

export default Blog
