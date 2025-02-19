import { RiArrowRightLine, RiPhoneFill } from '@remixicon/react'
import React from 'react'

const About = () => {
  return (
    <section className='about mt-[80px] relative z-20'>
        <div className="container mx-auto lg:px-0">
            <div className="flex flex-col lg:flex-row text-center lg:text-left justify-center items-center gap-8 lg:gap-[75px]">
                <div className="flex-1 order-2 lg:order-none max-w-xl lg:min-w-[410px] flex flex-col items-center lg:items-start gap-8">
                    <h2 className='text-4xl font-semibold'>
                        We Create The Art Of Stylish Living Stylishly
                    </h2>

                    <p className='text-lg'>
                        It is a long established fact that a reader will be distracted by the of readable content of a page 
                        when looking at its layouts the points of using 
                        that it has a more-or-less normal.
                    </p>

                    <div className="flex items-center justify-center lg:justify-start gap-4">
                        <div className="bg-accent/15 w-[80px] h-[80px] rounded-full flex justify-center items-center">
                        <RiPhoneFill size={30} className='text-accent'/>

                        </div>

                        <div className="text-left">
                            <div className="text-2xl font-semibold">081-234-5678</div>
                            <div className="">Call us any time.</div>
                        </div>
                    </div>

                    <button className='btn btn-primary mx-auto lg:mx-0'>
                        Get free estimation
                        <RiArrowRightLine size={15} className='text-white' />

                </button>
                </div>

                <div className="about__img order-1 lg:order-none max-w-[450px] lg:max-w-none lg:mx-0">
                    <img src="../src/assets/about/img.png" alt="about img" />                   
                </div>            
            </div>     
        </div>
      
    </section>
  )
}

export default About
