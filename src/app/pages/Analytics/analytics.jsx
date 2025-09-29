import React from 'react'
import Usermodal from '../../../components/Usermodal'
import DataChart from '../../../components/DataChart'

const Analytics = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <p style={{ fontFamily: "Montserrat-Bold" }} className='text-[24px]'>Аналитика</p>
                <Usermodal />
            </div>

            <div className='grid grid-cols-4 gap-2 text-center my-[20px]'>
                <div className='bg-white p-[10px] rounded-[10px] '>
                    <button className='bg-[#FF8736] text-white p-[10px] rounded-full mb-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </button>
                    <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "6px" }} className=' whitespace-nowrap'>На утверждении</p>
                </div>
                <div className='bg-white p-[10px] rounded-[10px] '>
                    <button className='bg-[#3F83F8] text-white p-[10px] rounded-full mb-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </button>
                    <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "6px" }}>На доставке</p>
                </div>
                <div className='bg-white p-[10px] rounded-[10px] '>
                    <button className='bg-[#0E9F6E] text-white p-[10px] rounded-full mb-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </button>
                    <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "6px" }}>Доставлено</p>
                </div>
                <div className='bg-white p-[10px] rounded-[10px] '>
                    <button className='bg-[#F05252] text-white p-[10px] rounded-full mb-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </button>
                    <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "6px" }}>Отменено</p>
                </div>
            </div>

            <div className='bg-white p-[10px] rounded-[20px] my-[20px]'>
                <div className='grid grid-cols-3 gap-[5px]'>
                    <div className="bg-[#F5F7FA] flex gap-1 items-center py-[5px] px-2 justify-between rounded-[40px]">
                        <p
                            style={{ fontFamily: "Montserrat-SemiBold" }}
                            className="text-[9px] whitespace-nowrap"
                        >Всего</p>
                        <button
                            style={{ fontFamily: "Inter-SemiBold" }}
                            className="text-[10px] bg-white px-[8px] py-[6px] rounded-[20px] whitespace-nowrap"
                        >
                            252300 с
                        </button>
                    </div>
                    <div className="bg-[#F5F7FA] flex gap-1 items-center py-[5px] px-2 justify-between rounded-[40px]">
                        <p
                            style={{ fontFamily: "Montserrat-SemiBold" }}
                            className="text-[9px] whitespace-nowrap"
                        >месяц</p>
                        <button
                            style={{ fontFamily: "Inter-SemiBold" }}
                            className="text-[10px] bg-white px-[8px] py-[6px] rounded-[20px] whitespace-nowrap"
                        >
                            25250 с
                        </button>
                    </div>
                    <div className="bg-[#F5F7FA] flex gap-1 items-center py-[5px] px-2 justify-between rounded-[40px]">
                        <p
                            style={{ fontFamily: "Montserrat-SemiBold" }}
                            className="text-[9px] whitespace-nowrap"
                        >сегодня</p>
                        <button
                            style={{ fontFamily: "Inter-SemiBold" }}
                            className="text-[10px] bg-white px-[8px] py-[6px] rounded-[20px] whitespace-nowrap"
                        >
                            2525 с
                        </button>
                    </div>
                </div>

                <div className='mt-[20px]'>
                    <DataChart />
                </div>
            </div>

            <div className='bg-white p-[10px] rounded-[20px] my-[20px]'>
                <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "16.84px" }}>Последние заказы</p>

                <div className='flex gap-4 items-center border-b border-gray-500 py-[5px] my-[15px]'>
                    <button className='bg-[#3F83F8] text-white p-[10px] rounded-full mb-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </button>
                    <div className='flex  justify-between w-[80%]'>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "16.84px" }}>Валиджон</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10.95px", color: "#5E5F62" }}>+992 901 09 00 00</p>
                        </div>
                        <div className='text-end'>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "16.84px", color: "#0E9F6E" }}>25000 c.</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10.95px", color: "#5E5F62" }}>17.04.2024, 13:00</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 items-center border-b border-gray-500 py-[5px] my-[15px]'>
                    <button className='bg-[#3F83F8] text-white p-[10px] rounded-full mb-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </button>
                    <div className='flex  justify-between w-[80%]'>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "16.84px" }}>Шабнам</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10.95px", color: "#5E5F62" }}>+992 901 09 00 00</p>
                        </div>
                        <div className='text-end'>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "16.84px", color: "#0E9F6E" }}>25000 c.</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10.95px", color: "#5E5F62" }}>17.04.2024, 13:00</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 items-center border-b border-gray-500 py-[5px] my-[15px]'>
                    <button className='bg-[#0E9F6E] text-white p-[10px] rounded-full mb-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </button>
                    <div className='flex  justify-between w-[80%]'>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "16.84px" }}>Исмоил</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10.95px", color: "#5E5F62" }}>+992 901 09 00 00</p>
                        </div>
                        <div className='text-end'>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "16.84px", color: "#0E9F6E" }}>25000 c.</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10.95px", color: "#5E5F62" }}>17.04.2024, 13:00</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 items-center border-b border-gray-500 py-[5px] my-[15px]'>
                    <button className='bg-[#FF8736] text-white p-[10px] rounded-full mb-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </button>
                    <div className='flex  justify-between w-[80%]'>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "16.84px" }}>Махмуд</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10.95px", color: "#5E5F62" }}>+992 901 09 00 00</p>
                        </div>
                        <div className='text-end'>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "16.84px", color: "#0E9F6E" }}>25000 c.</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10.95px", color: "#5E5F62" }}>17.04.2024, 13:00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white p-[10px] rounded-[20px] my-[20px]'>
                <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "16.84px" }}>Маржинальность</p>

                <div className='flex items-center gap-4 border-y py-[10px] border-gray-400 my-[15px]'>
                    <button className='bg-[#3F83F8] text-white p-[10px] rounded-full mb-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </button>
                    <div className='flex  justify-between gap-2 w-[80%]'>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "16.84px" }} className=' whitespace-nowrap'>Кроссовки Nikec</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10.95px", color: "#5E5F62" }}>Топ по количеству продаж</p>
                        </div>
                        <div className='text-end'>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "16.84px", color: "#0E9F6E" }}>2314 шт</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10.95px", color: "#5E5F62" }}>доходность: 90000с</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-4 border-b py-[10px] border-gray-400 my-[15px]'>
                    <button className='bg-[#0E9F6E] text-white p-[10px] rounded-full mb-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </button>
                    <div className='flex  justify-between gap-2 w-[80%]'>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "16.84px" }} className=' whitespace-nowrap'>Духи La Coster</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10.95px", color: "#5E5F62" }}>Топ по количеству продаж</p>
                        </div>
                        <div className='text-end'>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "16.84px", color: "#0E9F6E" }}>25000 c.</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10.95px", color: "#5E5F62" }}>количество: 10 шт</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-4 border-b py-[10px] border-gray-400 my-[15px]'>
                    <button className='bg-[#FF8736] text-white p-[10px] rounded-full mb-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </button>
                    <div className='flex  justify-between gap-2 w-[80%]'>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "16.84px" }} className=' whitespace-nowrap'>Брюки Adios</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10.95px", color: "#5E5F62" }}>Топ по количеству продаж</p>
                        </div>
                        <div className='text-end'>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "16.84px", color: "#D03801" }}>100 шт</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10.95px", color: "#5E5F62" }}>425 дней в складе</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white p-[10px] rounded-[20px] my-[20px]'>
                <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "12.63px" }}>Топ клиентов </p>
                <div className='flex gap-4 px-[10px] py-[5px] bg-[#F5F7FA] my-[15px] rounded-[10px]'>
                    <div className='w-[40px] h-[40px] rounded-full bg-white'></div>
                    <div className='flex  justify-between items-center w-[80%]'>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "9.47px" }}>Ардадрагон</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "8.21px", color: "#5E5F62" }}>Лохути 25А</p>
                        </div>
                        <div className='text-end'>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "9.47px", color: "#FF8736" }}>2314</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "8.21px", color: "#5E5F62" }}>Сомони</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 px-[10px] py-[5px] bg-[#F5F7FA] my-[15px] rounded-[10px]'>
                    <div className='w-[40px] h-[40px] rounded-full bg-white'></div>
                    <div className='flex  justify-between items-center w-[80%]'>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "9.47px" }}>Ахлиддин</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "8.21px", color: "#5E5F62" }}>Лохути 25А</p>
                        </div>
                        <div className='text-end'>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "9.47px", color: "#FF8736" }}>2314</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "8.21px", color: "#5E5F62" }}>Сомони</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 px-[10px] py-[5px] bg-[#F5F7FA] my-[15px] rounded-[10px]'>
                    <div className='w-[40px] h-[40px] rounded-full bg-white'></div>
                    <div className='flex  justify-between items-center w-[80%]'>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "9.47px" }}>Зехния</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "8.21px", color: "#5E5F62" }}>Лохути 25А</p>
                        </div>
                        <div className='text-end'>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "9.47px", color: "#FF8736" }}>2314</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "8.21px", color: "#5E5F62" }}>Сомони</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics