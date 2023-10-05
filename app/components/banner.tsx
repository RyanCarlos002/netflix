import Image from 'next/image'
import {BsFillPlayFill} from "react-icons/bs"
import {GrCircleInformation} from "react-icons/gr"
import Link from 'next/link'

export default function Banner() {
    return (
    <>
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



    </>
    )
}