import React from 'react'
import { Link, Outlet, useLocation } from 'react-router'

const Layout = () => {
  const location = useLocation();

  const getLinkClass = (path) =>
    ` ${location.pathname === path ? 'bg-[#005456] p-[10px] rounded-[10px] text-white' : 'px-[5px]'}`;
  return (
    <div className="flex flex-col min-h-screen">
      <main className="bg-[#F5F7FA] flex-1 p-4 px-2 pb-[120px]">
        <Outlet />
      </main>

      <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200">
        <nav className="flex justify-around items-center py-4">
          <Link to={'/'}>
            <div className='flex justify-center'>
              <button className={`${getLinkClass("/")} `}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                  className="size-5 transition">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 
                8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 
                12M4.5 9.75v10.125c0 .621.504 1.125 
                1.125 1.125H9.75v-4.875c0-.621.504-1.125 
                1.125-1.125h2.25c.621 0 1.125.504 
                1.125 1.125V21h4.125c.621 0 
                1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </button>
            </div>

            <p style={{ fontFamily: "Gilroy-Ligght", fontSize: "11px" }} className='text-center'>Главная</p>

          </Link>

          <Link to={'/Order'}>
            <div className='flex justify-center'>
              <button className={getLinkClass("/Order")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
              </button>
            </div>
            <p style={{ fontFamily: "Gilroy-Ligght", fontSize: "11px" }} className='text-center'>Заказы</p>
          </Link>

          <Link to={'/New_order'}>
            <div className='flex justify-center'>
              <button className={getLinkClass("/New_order")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
            <p style={{ fontFamily: "Gilroy-Ligght", fontSize: "11px" }} className='text-center'>Новый заказ</p>
          </Link>

          <Link to={'/Patients'}>
            <div className='flex justify-center'>
              <button className={getLinkClass("/Patients")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </button>
            </div>
            <p style={{ fontFamily: "Gilroy-Ligght", fontSize: "11px" }} className='text-center'>Клиенты</p>
          </Link>

          <Link to={'/Finance'}>
            <div className='flex justify-center'>
              <button className={getLinkClass("/Finance")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
              </button>
            </div>
            <p style={{ fontFamily: "Gilroy-Ligght", fontSize: "11px" }} className='text-center'>Финансы</p>
          </Link>
        </nav>
      </footer>
    </div>
  )
}

export default Layout
