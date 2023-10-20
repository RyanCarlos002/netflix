import Image from 'next/image'
import React from 'react'


export default function Movies() {
    return (      
      <section className='bg-black w-auto bg-cover h-screen'>
        <h1 className='text-white flex ml-6 pt-16 text-xl font-bold'> Em alta </h1>
        <div className='flex pt-2 gap-4 ml-6  cursor-pointer'>
          
          <Image alt='' height={30} width={250} src={'/jovemshledon.webp'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/sonic.webp'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/cargaMaxima.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/sintonia.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/lupin.jpg'} className='flex rounded'/>

        </div>


        <h1 className='text-white flex ml-6 pt-16 text-xl font-bold'> Lançamentos </h1>
        <div className='flex pt-2 gap-4 ml-6 rounded cursor-pointer object-cover transition duration shadow-xl group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-wull h-[12vw]'>
          
          <Image alt='' height={30} width={250} src={'/sexeducation.jpg'} className='flex rounded  '/>
          <Image alt='' height={30} width={250} src={'/onepiece.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/jogododiabo.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/depoisdacabana.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/cargaMaxima.jpg'} className='flex rounded'/>

        </div>
      
      </section>
    )
}