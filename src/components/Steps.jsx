import { RiArrowRightLine, RiCompasses2Line, RiMagicLine, RiToolsFill, RiToolsLine } from '@remixicon/react'
import React from 'react'

const Steps = () => {
  return (
    <section className='steps mt-[80px] lg:mt-[200px] relative z-20'>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="steps__step text-center">
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
                </div>

                <div className="steps__step text-center">
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
                </div>

                <div className="steps__step text-center">
                    <div className="flex justify-center mb-4">
                        <RiToolsLine size={40} className='text-5xl text-accent' />
                    </div>
                    
                    <h2 className='text-3xl m-5 '>
                        Project Execution
                    </h2>
                    <p className='mb-5 max-w-md mx-auto text-[1rem]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum a fugiat tempore, expedita ex? Nisi amet quis, odio nostrum modi optio eveniet consequatur. Libero id debitis quae ad sapiente laudantium molestiae maiores soluta provident.
                    </p>
                    <a href='#' className='font-medium text-[1rem] flex justify-center gap-2'>
                        Read more
                        <RiArrowRightLine size={20} className='text-accent' />
                    </a>
                </div>
            </div>
        </div>
        
      
    </section>
  )
}

export default Steps
