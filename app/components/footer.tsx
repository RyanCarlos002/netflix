
export default function Footer() {
    return (
    <>
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