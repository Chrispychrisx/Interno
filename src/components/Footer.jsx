import { RiFacebookBoxLine, RiFacebookCircleFill, RiInstagramFill, RiLinkedinFill, RiTiktokFill, RiTwitterFill, RiTwitterXFill, RiXboxFill, RiYoutubeFill, RiYoutubeLine } from '@remixicon/react'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <section className='footer- z-20 mt-[80px] lg:mt-[150px]'>
        <div className="container mx-auto px-0">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100ox] lg:mb-[150px]">
                <div className="footer__item">
                    <a href='#' className='flex justify-center lg:justify-start mb-8'>
                        <img src={logo} alt="logo" />                       
                    </a>

                    <p className='mb-8 text-lg text-center'>
                        It is a long established fact that a reader will be distracted lookings.
                        Socials
                       </p>

                       <ul className="text-primary flex gap-[50px] justify-center lg:justify-start">
                        <li><a href='#'>
                            <RiFacebookCircleFill size={25}
                            className='text-[#1877F2]' />
                        </a>
                        </li>

                        <li><a href='#'>
                            <RiYoutubeFill size={25}
                            className='text-[#E10600]' />
                        </a>
                        </li>

                        <li><a href='#'>
                            <RiLinkedinFill size={25}
                            className='text-[#0077B5]' />
                        </a>
                        </li>

                        <li><a href='#'>
                            <RiInstagramFill size={25}
                            className='text-[#962fbf]' />
                        </a>
                        </li>

                        <li><a href='#'>
                            <RiTwitterXFill size={25}
                            className='text-primary' />
                        </a>
                        </li>
                       
                        
                    </ul>
                </div>

                <div className="flex-1 flex flex-col lg:flex-row text-center lg:text-right gap-8 lg:gap-[100px] justify-end">
                    <div className="footer__item">
                        <h3 className='text-3xl mb-3'>Pages</h3>
                        <ul>
                            
                            <li>
                                <a href='#' className='!text-[16px]'>About Us</a>
                            </li>

                            <li>
                                <a href='#' className='!text-[16px]'>Testimonials</a>
                            </li>

                            <li>
                                <a href='#' className='!text-[16px]'>Our Works</a>
                            </li>

                            <li>
                                <a href='#' className='!text-[16px]'>Blog</a>
                            </li>

                            <li>
                                <a href='#' className='!text-[16px]'>Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__item">
                        <h3 className='text-3xl mb-3'>Services</h3>
                        <ul>
                            
                            <li>
                                <a href='#' className='!text-[16px]'>Kitchen</a>
                            </li>

                            <li>
                                <a href='#' className='!text-[16px]'>BedRoom</a>
                            </li>

                            <li>
                                <a href='#' className='!text-[16px]'>Livin Room</a>
                            </li>

                            <li>
                                <a href='#' className='!text-[16px]'>BathRoom</a>
                            </li>

                            <li>
                                <a href='#' className='!text-[16px]'>Others</a>
                            </li>   
                        </ul>
                    </div>

                    <div className="footer__item mx-w-[260px] mx-auto lg:mx-0 text-xl">
                        <h3 className='text-3xl mb-3'>Contact</h3>
                        <div className="flex flex-col gap-2 ">
                            <p>
                                55 East Allen Ave. Brooklyn, New York 11201
                            </p>
                            <p>Contact@interno.com</p>
                            <p>+234 911 252 4812</p>
                        </div>
                    </div>

                </div>

                
            </div>
        </div>
      
    </section>
  )
}

export default Footer