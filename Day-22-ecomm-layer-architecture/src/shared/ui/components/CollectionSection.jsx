import React from 'react'
import { useAuth } from '../../../features/auth/hooks/useAuth'

// Replace these placeholders with your actual imported images
// import MensImg from "../../../assets/mens.jpg"
// import WomensImg from "../../../assets/womens.jpg"
// import AccessoriesImg from "../../../assets/accessories.jpg"

const CollectionSection = () => {
  const { navigate } = useAuth()

  const collections = [
    {
      id: 1,
      title: "Men's Collection",
      subtitle: "Minimalist & Streetwear Essentials",
      image: "https://images.unsplash.com/photo-1785233765864-b90014ab73b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      link: "/main/products?category=men"
    },
    {
      id: 2,
      title: "Women's Collection",
      subtitle: "Modern Fits & Timeless Aesthetics",
      image: "https://images.unsplash.com/photo-1785233765864-b90014ab73b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      link: "/main/products?category=women"
    },
    {
      id: 3,
      title: "Exclusive Accessories",
      subtitle: "Bags, Watches & Daily Details",
      image: "https://images.unsplash.com/photo-1785233765864-b90014ab73b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      link: "/main/products?category=accessories"
    }
  ]

  return (
    <section className='relative min-h-screen w-full bg-black text-white flex flex-col justify-center items-center px-6 py-20 overflow-hidden'>
      
      {/* Centered Section Header */}
      <div className='z-10 text-center max-w-[700px] mb-12 flex flex-col items-center gap-3'>
        <span className='text-xs font-bold text-emerald-500 uppercase tracking-widest bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-600/30'>
          The Collection
        </span>
        
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight'>
          Explore Our <strong className='text-emerald-600 font-extrabold'>Men's & Women's</strong> Line
        </h2>
        
        <p className='text-gray-400 text-base md:text-lg max-w-[550px]'>
          Handcrafted garments tailored for comfort and elegance. Choose a category below to dive into the modern fit.
        </p>
      </div>

      {/* 3 Cards Grid */}
      <div className='z-10 w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-8 px-2'>
        {collections.map((item) => (
          <div 
            key={item.id}
            onClick={() => navigate(item.link)}
            className='group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-zinc-900 transition-all duration-500 hover:border-emerald-600/50 shadow-2xl'
          >
            {/* Card Background Image */}
            <img 
              src={item.image} 
              alt={item.title} 
              className='h-full w-full object-cover opacity-70 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-50'
            />

            {/* Dark Vignette Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent' />

            {/* Card Content Overlay */}
            <div className='absolute inset-0 p-6 flex flex-col justify-end items-start gap-2 z-10'>
              <h3 className='text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-300'>
                {item.title}
              </h3>
              
              <p className='text-sm text-gray-300 max-w-[90%] font-normal'>
                {item.subtitle}
              </p>

              <button 
                className='mt-3 font-semibold text-sm py-2.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 transform group-hover:translate-x-1 shadow-md'
              >
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default CollectionSection