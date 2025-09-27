import React from 'react'
import img from '../../../shared/img1.svg'
import img1 from '../../../shared/img1 (5).svg'
import img2 from '../../../shared/img1 (6).svg'
import img3 from '../../../shared/img1 (7).svg'
import img4 from '../../../shared/img1 (8).svg'
import AccordionTransition from '../../../components/Accordion'

const Home = () => {
  return (
    <div>

      <div className='flex justify-between items-center'>
        <div>
          <p style={{ fontFamily: "Gilroy-Ligght" }} className='text-[#8696BB] text-[16px]'>Добро пожаловать,</p>
          <p style={{ fontFamily: "Gilroy-ExtraBold" }} className='text-[#0D1B34] text-[20px]'>Фирдавс Намозов</p>
        </div>
        <img src={img} alt="" />
      </div>

      <div className='bg-[#005456] text-white p-[20px] rounded-[10px] mt-[30px]'>
        <p style={{ fontFamily: "Gilroy-Ligght" }} className='text-[16px]'>Ваша касса на данный момент</p>
        <p style={{ fontFamily: "Gilroy-Ligght" }} className='text-[14px] text-[#CBE1FF]'>+ 3500 сомони</p>
        <hr className='my-[20px]' />
        <div className='flex justify-between '>
          <div className='flex gap-[10px] items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            <p style={{ fontFamily: "Gilroy-Ligght" }} className='text-[12px]'>Sunday, 12 June</p>
          </div>
          <div className='flex gap-[10px] items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p style={{ fontFamily: "Gilroy-Ligght" }} className='text-[12px]'>11:00 - Dushanbe</p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-[22px] my-[30px] text-center text-[#8696BB] text-[15px]'>
        <div>
          <div className='bg-[#005456] flex justify-center p-[20px] rounded-[10px]'>
            <img draggable={false} src={img2} alt="" />
          </div>
          <p style={{ fontFamily: "Gilroy-Ligght" }} className='mt-[10px]'>Клиенты</p>
        </div>
        <div>
          <div className='bg-[#005456] flex justify-center p-[20px] rounded-[10px]'>
            <img draggable={false} src={img4} alt="" />
          </div>
          <p style={{ fontFamily: "Gilroy-Ligght" }} className='mt-[10px]'>Отчеты</p>
        </div>
        <div>
          <div className='bg-[#005456] flex justify-center p-[20px] rounded-[10px]'>
            <img draggable={false} src={img3} alt="" />
          </div>
          <p style={{ fontFamily: "Gilroy-Ligght" }} className='mt-[10px]'>Склад</p>
        </div>
        <div>
          <div className='bg-[#005456] flex justify-center p-[20px] rounded-[10px]'>
            <img draggable={false} src={img1} alt="" />
          </div>
          <p style={{ fontFamily: "Gilroy-Ligght" }} className='mt-[10px]'>Курьеры</p>
        </div>
      </div>

      <div className='my-[20px]'>
        <div className='flex justify-between items-center my-[20px] mx-[10px]'>
          <p style={{ fontFamily: "Gilroy-ExtraBold", fontSize: "16px" }}>Обучение</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </div>

        <div className='grid grid-cols-2 gap-[12px]'>
          <div className='bg-[#005456] text-white p-[20px] rounded-[10px] w-full'>
            <div className='flex justify-between'>
            <button className='bg-white text-black p-[10px] rounded-[10px]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
            </div>
            <p style={{ fontFamily: "Gilroy-Ligght" }} className='text-[13px] my-[10px]'>1. Работа со складом</p>
          </div>
          <div className='bg-[#005456] text-white p-[20px] rounded-[10px] w-full'>
            <div className='flex justify-between'>
            <button className='bg-white text-black p-[10px] rounded-[10px]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
            </div>
            <p style={{ fontFamily: "Gilroy-Ligght" }} className='text-[13px] my-[10px]'>2. Работа с финансами</p>
          </div>
          <div className='bg-[#005456] text-white p-[20px] rounded-[10px] w-full'>
            <div className='flex justify-between'>
            <button className='bg-white text-black p-[10px] rounded-[10px]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
            </div>
            <p style={{ fontFamily: "Gilroy-Ligght" }} className='text-[13px] my-[10px]'>3. Работа с курьерами</p>
          </div>
          <div className='bg-[#005456] text-white p-[20px] rounded-[10px] w-full'>
            <div className='flex justify-between'>
            <button className='bg-white text-black p-[10px] rounded-[10px]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
            </div>
            <p style={{ fontFamily: "Gilroy-Ligght" }} className='text-[13px] my-[10px]'>4. Работа с клиентами</p>
          </div>
        </div>
          <div className='bg-[#005456] text-white p-[20px] rounded-[10px] w-full mt-[15px]'>
            <div className='flex justify-between'>
            <button className='bg-white text-black p-[10px] rounded-[10px]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
            </div>
            <p style={{ fontFamily: "Gilroy-Ligght" }} className='text-[13px] my-[10px]'>5. Работа и управление заказами</p>
          </div>

      </div>

      <div>
        <div className='bg-white p-[20px] rounded-[14px]'>
          <p style={{ fontFamily: "Gilroy-ExtraBold",fontSize:"16px" }} className='ml-[10px]' >Полезно</p>
          <AccordionTransition/>
        </div>
      </div>
    </div>
  )
}

export default Home