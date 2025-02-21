import { RiArrowRightLine } from '@remixicon/react'
import React from 'react'

const Contact = () => {
  return (
    <section className='z-20 mt-[80px] lg:mt-[150px]'>
      <div className="contact containter mx-auto bg-zinc-600 sm:rounded-3xl py-[80px] lg:mt-[150px]">
        <div className="contact__text max-w-[640px] mx-auto text-center">
            <h2 className='text-3xl text-white mb-4 '>
                Do you want to join Interno?
            </h2>

            <p className='text-gray-200 text-base mb-8 max-w-sm lg:max-w-none mx-auto'>
                It is a long established fact will be distracted.
            </p>

            <button className='btn btn-accent mx-auto'>
                Get In Touch
                <RiArrowRightLine size={20} className='text-accent-secondary' />
            </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
