import { RiArrowRightSLine } from '@remixicon/react'
import proj_1 from '../assets/work/01.png'
import proj_2 from '../assets/work/02.png'
import proj_3 from '../assets/work/03.png'
import proj_4 from '../assets/work/04.png'

const Projects = () => {
  return (
    <section className='projects mt-[80px] lg:mt-[200px] z-20'>
        <div className="container mx-auto">
            <h1 className='text-4xl font-semibold mb-5 text-center'>
                Follow Our Projects
            </h1>

            <p className='mb-20 max-w-3xl mx-auto text-xl text-center'>
                It is a long established fact that a reader will be distracted by the of readable content of page looking at its layouts points.
            </p>

            <div className="project__grid grid grid-cols-1 lg:grid-cols-2 gap-[105px] gap-y-12">
                <div className="w-full max-w-[550px] h-full mx-auto">
                    <img src={proj_2} alt="Project 1" />

                    <div className="flex justify-between items-center w-full">
                        <div className="mt-3">
                            <h3 className='text-[1.2rem] font-semibold'>Modern Room</h3>
                            <p className='text-[1rem]'>Decor/Architecture</p>
                        </div>

                        <button className='btn-right-arrow'>
                            <RiArrowRightSLine size={35} className='pl-2 text-gray-500' />
                        </button>
                    </div>
                </div>

                <div className="w-full max-w-[550px] h-full mx-auto">
                    <img src={proj_1} alt="Project 1" />

                    <div className="flex justify-between items-center w-full">
                        <div className="mt-3">
                            <h3 className='text-[1.2rem] font-semibold'>Modern Kitchen</h3>
                            <p className='text-[1rem]'>Decor/Architecture</p>
                        </div>

                        <button className='btn-right-arrow'>
                            <RiArrowRightSLine size={35} className='pl-2 text-gray-500' />
                        </button>
                    </div>
                </div>

                <div className="w-full max-w-[550px] h-full mx-auto">
                    <img src={proj_4} alt="Project 1" />

                    <div className="flex justify-between items-center w-full">
                        <div className="mt-3">
                            <h3 className='text-[1.2rem] font-semibold'>Living Room</h3>
                            <p className='text-[1rem]'>Decor/Architecture</p>
                        </div>

                        <button className='btn-right-arrow'>
                            <RiArrowRightSLine size={35} className='pl-2 text-gray-500' />
                        </button>
                    </div>
                </div>

                <div className="w-full max-w-[550px] h-full mx-auto">
                    <img src={proj_3} alt="Project 1" />

                    <div className="flex justify-between items-center w-full">
                        <div className="mt-3">
                            <h3 className='text-[1.2rem] font-semibold'>Reading Center</h3>
                            <p className='text-[1rem]'>Decor/Architecture</p>
                        </div>

                        <button className='btn-right-arrow'>
                            <RiArrowRightSLine size={35} className='pl-2 text-gray-500' />
                        </button>
                    </div>
                </div>


            </div>
        </div>
    </section>
  )
}

export default Projects
