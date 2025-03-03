import React from 'react'
import { RiArrowDownBoxFill, RiArrowDownSLine, RiBuilding2Line, RiSettings3Fill, RiWirelessChargingLine } from '@remixicon/react'

const Pricelist = () => {
  return (
    <section className='mx-auto justify-center text-center mt-5 text-[35px]'>
        See Our Price List
        <div className="container__price">
            <div className="border: border-y-2 grid-cols-2 ">
                <RiSettings3Fill className='text-5xl text-accent size-[40px]' />
                <div className="text-center text-[30px] justify-center">
                    Basic
                    <div className="text_all text-[15px] mx-3 ">
                        <div className="">Decorations <RiArrowDownSLine /></div>
                        <div className="">Wall Painting</div>
                        <div className="">Arts & Design</div>
                        <div className="">Lightening</div>
                        <div className="">CCTV Cameras</div>
                        <div className="">Solar Powering</div>
                    </div>
                    
                </div>
            </div>
            
        </div>      
    </section>
  )
}

export default Pricelist
