import { RiCalendar2Line, RiCheckLine, RiGroup2Line, RiToolsLine } from '@remixicon/react'
import React from 'react'

const Stats = () => {
  return (
    <>

    <h1 className='mt-[80px] lg:[200px] text-4xl font-normal mb-8 text-center'>Statistics</h1>

        <section className='stat z-20 bg-accent-secondary py-[80px] lg:py-[150px]'>
            
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    <div className="stat__item items-center border-r lg:border-accent">                        
                            <div className="flex justify-center bg-accent/20 w-fit mx-auto p-3 rounded-full mb-3">
                                <RiCalendar2Line size={30} className='text-accent' />
                            </div>

                            <h3 className='text-5xl font-semibold text-accent font-primary'>12</h3>
                            <p className='text-lg text-slate-500'>Years of Experience</p>
                     </div>

                     <div className="stat__item items-center border-r lg:border-accent">
                        
                            <div className="flex justify-center border border-emerald-300 bg-accent/20 w-fit mx-auto p-3 rounded-full mb-3">
                                <RiCheckLine size={30} className='text-accent' />
                            </div>

                            <h3 className='text-5xl font-semibold text-accent font-primary'>85</h3>
                            <p className='text-lg text-slate-500'>Project Completed</p>
                     </div>

                     <div className="stat__item items-center border-r lg:border-accent">
                        
                            <div className="flex justify-center bg-accent/20 w-fit mx-auto p-3 rounded-full mb-3">
                                <RiToolsLine size={30} className='text-accent' />
                            </div>

                            <h3 className='text-5xl font-semibold text-accent font-primary'>15</h3>
                            <p className='text-lg text-slate-500'>Active Project</p>
                     </div>

                     <div className="stat__item items-center">
                        
                            <div className="flex justify-center bg-accent/20 w-fit mx-auto p-3 rounded-full mb-3">
                                <RiGroup2Line size={30} className='text-accent' />
                            </div>

                            <h3 className='text-5xl font-semibold text-accent font-primary'>93</h3>
                            <p className='text-lg text-slate-500'>Happy Customer</p>
                     </div>
                </div>

                
            </div>
        
        </section>
    </>
    
  )
}

export default Stats
