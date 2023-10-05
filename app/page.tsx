import Image from 'next/image'
import {AiOutlineSearch} from "react-icons/ai"
import {BiBell} from "react-icons/bi"
import {AiFillPicture} from "react-icons/ai"
import {BsFillPlayFill} from "react-icons/bs"
import {GrCircleInformation} from "react-icons/gr"
import {AiOutlineFacebook} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineYoutube} from "react-icons/ai"
import {FaSquareXTwitter} from "react-icons/fa6"
import Link from 'next/link'
import Header from './components/header'


export default function Home() {
  return (
    <>
    
    <Header/>
    <section className="bg-[url('https://occ-0-577-1356.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW_FinO_SRcQS1m2PBqE1zVDnkQhUcuqQ9EWuAA0mMQdtj0pzJs8DhTgOQgvolXMWjUqLkFN7NltUIVdb-t_I-0m6QCP2PU3eUxN.webp?r=e02')] h-screen bg-cover w-auto ">
        <div className=' bg-gradient-to-r from-black h-screen'>
          <Image alt='' height={450} width={650} src={'/sonic.png'} className='flex pt-24'/>

          <h1 className='flex font-bold text-2xl text-white ml-[170px] mt-[-110px]'>
            Top 1 em filmes hoje
          </h1>
          <div className='flex ml-[120px] pt-4 gap-3'>
            <button className=' w-auto p-5 h-6 flex text-lg font-semibold border-solid rounded items-center bg-white hover:bg-gray-300'>
              <a href=""> <BsFillPlayFill/> </a>
              Assistir
            </button>

            <button className='w-auto p-5 h-6 flex text-lg font-semibold border-solid  rounded items-center text-white bg-slate-400 hover:bg-slate-300'>
                <Link href="">  <GrCircleInformation/> </Link>
              Mais informações
            </button>
          </div>
        </div>
    </section>


    <section className='bg-black w-auto bg-cover h-screen'>
      <div>
        <h1 className='text-white flex ml-10 pt-16 text-xl font-bold'> Em alta </h1>
        <div className='flex pt-2 gap-4 ml-10 '>
          
          <Image alt='' height={30} width={250} src={'/jovemshledon.webp'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/sonic.webp'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/cargaMaxima.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/sintonia.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/lupin.jpg'} className='flex rounded'/>

        </div>


        <h1 className='text-white flex ml-10 pt-16 text-xl font-bold'> Lançamentos </h1>
        <div className='flex pt-2 gap-4 ml-10 '>
          <Image alt='' height={30} width={250} src={'/sexeducation.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/onepiece.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/jogododiabo.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/depoisdacabana.jpg'} className='flex rounded'/>
          <Image alt='' height={30} width={250} src={'/cargaMaxima.jpg'} className='flex rounded'/>

        </div>
      </div>
    </section>

    <footer className='bg-black'>
      {/* <nav>
        <a href="https://www.facebook.com/netflixbrasil/?locale=pt_BR"> <AiOutlineFacebook/> </a>
        <a href="https://www.instagram.com/netflixbrasil/?hl=pt-br"> <AiOutlineInstagram/> </a>
        <a className='bg-white h-30 w-30 bg' href= "https://twitter.com/netflix"> <FaSquareXTwitter/> </a>

      </nav> */}
      <section className='text-white flex text-xs justify-around'>
        <div className='flex flex-col gap-5 '>
          <a href="">Audiodescrição</a>
          <a href="">Relações com investidores</a>
          <a href="">Avisos legais</a>
        </div>
        <div className='flex flex-col gap-5'>
          <a href="">Central de Ajuda</a>
          <a href="">Carreiras</a>
          <a href="">Preferências de cookies</a>
        </div>
        <div className='flex flex-col gap-5'>
          <a href="">Cartão pŕe-pago</a>
          <a href="">Termo de uso</a>
          <a href="">Informações corporativas</a>
        </div>
        <div className='flex flex-col gap-5'>
          <a href="">Imprensa</a>
          <a href="">Privacidade</a>
          <a href="">Entre em contato</a>
        </div>
        
      </section>

      <button className='text-white flex border-2 h-8 w-36 mt-10 ml-[100px] text-xs justify-center items-center'>
          Código de serviço
      </button>
    </footer>
    
    
    
    </>
  )
}
