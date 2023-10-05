import Image from 'next/image'
import {AiOutlineSearch} from "react-icons/ai"
import {BiBell} from "react-icons/bi"
import {AiFillPicture} from "react-icons/ai"

export default function Header() {
    return (
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
    )
  }
  



