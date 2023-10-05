import Image from 'next/image'
export default function Filmes() {
    return (      
    <>
        <section className='bg-black w-auto bg-cover h-screen'>
      <div>
        <h1 className='text-white flex ml-6 pt-16 text-xl font-bold'> Em alta </h1>
        <div className='flex pt-2 gap-4 ml-6 '>
          
          <Image alt='' height={30} width={250} src={'/jovemshledon.webp'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/sonic.webp'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/cargaMaxima.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/sintonia.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/lupin.jpg'} className='flex rounded'/>

        </div>


        <h1 className='text-white flex ml-6 pt-16 text-xl font-bold'> Lançamentos </h1>
        <div className='flex pt-2 gap-4 ml-6 '>
          <Image alt='' height={30} width={250} src={'/sexeducation.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/onepiece.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/jogododiabo.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/depoisdacabana.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/cargaMaxima.jpg'} className='flex rounded'/>

        </div>
      </div>
    </section>
    </>
    )
}