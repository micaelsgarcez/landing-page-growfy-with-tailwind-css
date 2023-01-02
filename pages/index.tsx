import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      <header>
        <div className='flex w-full items-center'>
          <div className='container max-w-7xl mx-auto'>
            <div className='relative -mx-4 flex items-center justify-between'>
              <div className='w-60 max-w-full px-4'>
                <a href='javascript:void(0)' className='block w-full py-9'>
                  <Image
                    src='/logo.svg'
                    alt='logo'
                    className='w-full'
                    width={136}
                    height={32}
                  />
                </a>
              </div>
              <div className='flex items-center justify-between px-4'>
                <div>
                  <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    id='navbarToggler'
                    className={`${
                      navbarOpen && 'navbarTogglerActive'
                    } ring-primary absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden`}
                  >
                    <span className='bg-body-color relative my-[6px] block h-[2px] w-[30px]' />
                    <span className='bg-body-color relative my-[6px] block h-[2px] w-[30px]' />
                    <span className='bg-body-color relative my-[6px] block h-[2px] w-[30px]' />
                  </button>
                  <nav
                    id='navbarCollapse'
                    className={`${
                      !navbarOpen && 'hidden'
                    } absolute right-4 top-full w-full max-w-[250px] rounded-lg py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none`}
                  >
                    <ul className='block lg:flex'>
                      <li>
                        <a
                          href='javascript:void(0)'
                          className='text-dark hover:text-primary flex py-2 text-base font-light lg:ml-12 lg:inline-flex'
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href='javascript:void(0)'
                          className='text-dark hover:text-primary flex py-2 text-base font-light lg:ml-12 lg:inline-flex'
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href='javascript:void(0)'
                          className='text-dark hover:text-primary flex py-2 text-base font-light lg:ml-12 lg:inline-flex'
                        >
                          Pages
                        </a>
                      </li>
                      <li>
                        <a
                          href='javascript:void(0)'
                          className='text-dark hover:text-primary flex py-2 text-base font-light lg:ml-12 lg:inline-flex'
                        >
                          Services
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className='hidden justify-end pr-16 sm:flex lg:pr-0'>
                  <a
                    href='javascript:void(0)'
                    className='py-4 px-8 text-base font-medium tracking-widest bg-primary text-white rounded-full'
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div>
          {/* ====== Hero Section Start */}
          <div className='relative pt-11 pb-[110px]'>
            <div className='container max-w-7xl mx-auto'>
              <div className='-mx-4 flex flex-wrap items-center'>
                <div className='w-full px-4 lg:w-5/12'>
                  <div className='hero-content relative'>
                    <picture className='absolute -left-8 -top-4'>
                      <img
                        src='/detail-dots.svg'
                        alt='detail dots'
                        width={122}
                        height={122}
                      />
                    </picture>
                    <h1 className='text-dark mb-3 text-5xl font-medium leading-tight'>
                      Marketing solutions <br /> that grow your <br /> business.
                    </h1>
                    <p className='text-[#9C9C9C] mb-8 max-w-[500px] text-lg'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor.
                    </p>
                    <ul className='flex gap-8 flex-wrap items-center'>
                      <li>
                        <a
                          href='javascript:void(0)'
                          className='bg-primary inline-flex items-center justify-center rounded-full py-4 px-8 text-center text-sm font-medium tracking-widest text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10'
                        >
                          Our Services
                        </a>
                      </li>
                      <li>
                        <a
                          href='javascript:void(0)'
                          className='bg-[#81818B] bg-opacity-20 inline-flex items-center justify-center rounded-full py-4 px-8 text-center text-sm font-medium tracking-widest text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10'
                        >
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='hidden px-4 lg:block lg:w-1/12' />
                <div className='w-full px-4 lg:w-6/12'>
                  <div className='lg:ml-auto lg:text-right'>
                    <div className='relative z-10 inline-block pt-11 lg:pt-0'>
                      <Image
                        src='/hero.png'
                        alt='hero'
                        className='max-w-full lg:ml-auto'
                        width={624}
                        height={697}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ====== Hero Section End */}
        </div>
      </section>
      <section>
        {/* ====== Brands Section Start */}
        <section className=' py-20 lg:py-[120px]'>
          <div className='container max-w-7xl mx-auto'>
            <p className='text-sm font-light uppercase text-center mb-5'>
              TRUSTED BY startups and large enterprises
            </p>
            <div className='-mx-4 flex flex-wrap'>
              <div className='w-full px-4'>
                <div className='flex flex-wrap items-center justify-center'>
                  <a
                    href='javascript:void(0)'
                    className='mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]'
                  >
                    <img
                      src='https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg'
                      alt='image'
                      className='h-10 w-full image-white'
                    />
                  </a>
                  <a
                    href='javascript:void(0)'
                    className='mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]'
                  >
                    <img
                      src='https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg'
                      alt='image'
                      className='h-10 w-full image-white'
                    />
                  </a>
                  <a
                    href='javascript:void(0)'
                    className='mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]'
                  >
                    <img
                      src='https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg'
                      alt='image'
                      className='h-10 w-full image-white'
                    />
                  </a>
                  <a
                    href='javascript:void(0)'
                    className='mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]'
                  >
                    <img
                      src='https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg'
                      alt='image'
                      className='h-10 w-full image-white'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Brands Section End */}
      </section>
    </>
  )
}
