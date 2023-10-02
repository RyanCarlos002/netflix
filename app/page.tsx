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


export default function Home() {
  return (
    <>
    <header className='flex gap-5 text-xs px-10 text-white bg-black '>
      <Image alt='' height={70} width={100} src={'/logonetflix.png'} className='flex '/>

      <div className='flex items-center justify-between w-full'>
        <nav className='gap-6 flex'>
          <a href="">Início</a>        
          <a href="">Séries</a>        
          <a href="">Filmes</a>        
          <a href="">Bombando</a>        
          <a href="">Minha Lista</a>        
          <a href="">Navegar por idiomas</a> 
        </nav>

        <nav className='flex justify-between items-center gap-6 '>
          <a href=""> <AiOutlineSearch/> </a>
          <a href="" className=''> Infantil </a>       
          <a href=""> <BiBell/> </a>
          <a href=""> < AiFillPicture/> </a>

        </nav>
      </div>
    </header>

      <section className="bg-[url('https://occ-0-577-1356.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW_FinO_SRcQS1m2PBqE1zVDnkQhUcuqQ9EWuAA0mMQdtj0pzJs8DhTgOQgvolXMWjUqLkFN7NltUIVdb-t_I-0m6QCP2PU3eUxN.webp?r=e02')] h-screen bg-cover w-auto">
      <Image alt='' height={450} width={700} src={'/sonic.png'} className='p-10'/>

        <h1 className='flex font-bold text-2xl text-white ml-[225px]'>
          Top 1 em filmes hoje
        </h1>
        <button>
          <a href=""> <BsFillPlayFill/> </a>
          Assistir
        </button>

        <button>
          <a href=""> <GrCircleInformation/> </a>
          Mais informações
        </button>
    </section>


    <section>
      <div>
        <div>
          <h1>
            Em alta
          </h1>
          {/* <Image alt='' height={} width={} src={}/>
          <Image alt='' height={} width={} src={}/>
          <Image alt='' height={} width={} src={}/>
          <Image alt='' height={} width={} src={}/>
          <Image alt='' height={} width={} src={}/> */}

        </div>


        <div>
          <div>
            <h1>
              Lançamentos
            </h1>
            {/* <Image alt='' height={30} width={30} src={}/>
            <Image alt='' height={32} width={32} src={}/>
            <Image alt='' height={32} width={32} src={}/>
            <Image alt='' height={32} width={32} src={}/> */}
            {/* <Image alt='' height={23} width={2} src={}/> */}

          </div>
        </div>
      </div>

    </section>

    <footer>
      <nav>
        <a href=""> <AiOutlineFacebook/> </a>
        <a href=""> <AiOutlineInstagram/> </a>
        <a href=""> <AiOutlineYoutube/> </a>
        <a href=""> <FaSquareXTwitter/> </a>

      </nav>

    </footer>
    
    
    
    </>
  )
}
