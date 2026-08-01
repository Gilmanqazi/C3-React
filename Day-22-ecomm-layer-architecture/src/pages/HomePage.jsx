import React from 'react'
import HeroImg from "../assets/HomeIMG.avif"
import { useAuth } from '../features/auth/hooks/useAuth'
import CollectionSection from '../shared/ui/components/CollectionSection'

const HomePage = () => {

  const {navigate} = useAuth()

  return (
   <div>
     <section className='relative h-screen w-full overflow-hidden bg-black flex justify-center items-center'>
      <div className='absolute inset-0 z-0'>
        <img className='h-full w-full object-cover opacity-60' src={HeroImg} alt="" />
    
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80'></div>
      </div>

      {/* Content Container (Placed over the background) */}
      <div className='relative z-10 w-[90%] flex gap-8 flex-col items-start px-1'>
        
        {/* Main Heading */}
        <h1 className='text-3xl md:text-5xl font-extrabold leading-tight tracking-tight'>
          Upgrade your <strong className='text-emerald-600'>wardrobe</strong>.
        </h1>
        
        {/* Additional Descriptive Paragraphs (Extra Features) */}
        <p className='text-xl text-gray-300 max-w-[400px]'>
          Discover our latest curated collection, where timeless essentials meet modern design. 
          Every piece is a statement of style and quality.
        </p>
        
        <p className='text-lg text-gray-400 max-w-[400px]'>
          Explore unique designs, premium fabrics, and find the perfect pieces to redefine 
          your aesthetic. Elevate your style today.
        </p>
        
        {/* Call-to-Action Button */}
        <button 
          onClick={() => navigate("/main/products")} 
          className='font-semibold text-lg py-3 px-5 rounded-full bg-emerald-600 w-fit hover:bg-emerald-700 transition duration-300 transform hover:scale-95 shadow-xl'
        >
          Shop Now
        </button>
        
      </div>

    </section>

<CollectionSection/>
   </div>
  )
}

export default HomePage