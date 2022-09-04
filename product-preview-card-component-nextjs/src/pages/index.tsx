import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-slate-700">
      <Head>
        <title>Gabrielle Chanel Perfume | Gabrielle Chanel</title>
        <meta name="description" content="A product prieview card component built to try out tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main className='w-screen h-screen flex items-center justify-center'>
        <div className='max-w-[37.5rem] flex flex-col lg:flex-row px-6 mt-20'>
          <img
            src="/images/image-product-desktop.jpg"
            alt=""
            className='w-full hidden lg:block lg:w-1/2 rounded-l-xl'
          />

          <img
            src="/images/image-product-mobile.jpg"
            alt=""
            className='w-full block lg:hidden rounded-t-xl'
          />

          <div className='w-full lg:w-1/2 px-6 lg:px-8 bg-white rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none space-y-5 py-8'>
            <span className='text-dark-grayish-blue font-medium text-base leading-5 tracking-wider'>Perfume</span>
            <h1 className='text-very-dark-blue font-bold text-[2rem] leading-none'>Gabrielle Essence Eau De Parfum</h1>
            <p className='text-dark-grayish-blue font-medium text-base leading-normal tracing-[-0.66em]'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
            <p className='flex items-center text-dark-cyan font-bold text-[2rem] leading-none'>
              <span className='font-display mr-5'>$149.99</span>
              <span className='font-medium text-base text-dark-grayish-blue leading-normal tracking-tight line-through'>$169.99</span></p>
            <button className='flex items-center gap-5 bg-dark-cyan rounded-lg font-bold text-base text-white py-4 w-full justify-center'>
              <span>
                <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/></svg>
              </span>
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
