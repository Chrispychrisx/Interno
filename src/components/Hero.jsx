import heroImg from '../assets/hero/bg.jpg'

const Hero = () => {
  return (
    <section className='hero h-[640px] bg-center bg-no-repeat bg-fixed relative z-20 mt-14 lg:rounded-bl-[290px]' 
        style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container mx-auto h-full flex items-center justify-center">
            <div className="hero__text w-[567px]">
                <h1 className='text-[2.3rem] md:text-[3.5rem] font-semibold mb-8'>Let Your Home Be Unique</h1>
                
                <button className='btn btn-primary mx-auto lg:mx-0'>
                    Get free estimation
                </button>
            </div>
        </div>    
    </section>
  )
}

export default Hero
