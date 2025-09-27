import React from 'react'
import Usermodal from '../../../components/Usermodal'

const Basic = () => {
    return (
        <div>
            <div className='flex justify-between items-center mb-[20px]'>
                <p style={{ fontFamily: "Montserrat-Bold" }} className='text-[#0D1B34] text-[24px]'>Общая информация</p>
                <Usermodal />
            </div>

            <div className='bg-white p-[10px] rounded-[20px] my-[15px]'>
                <div className='flex justify-end'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                </div>
                <div>
                    <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "12px" }}>
                        Основные финансовые показатели
                    </p>
                    <div className="grid grid-cols-2 gap-2 my-[20px]">
                        <div className="bg-[#F5F7FA] flex gap-[5px] items-center py-[10px] px-3 justify-between rounded-[40px]">
                            <p
                                style={{ fontFamily: "Montserrat-SemiBold" }}
                                className="text-[10px] whitespace-nowrap"
                            >
                                За <span style={{ fontFamily: "Montserrat-Bold" }}>год</span>
                            </p>
                            <button
                                style={{ fontFamily: "Inter-SemiBold" }}
                                className="text-[10px] bg-white px-[12px] py-[6px] rounded-[20px] whitespace-nowrap"
                            >
                                252300 с
                            </button>
                        </div>

                        <div className="bg-[#F5F7FA] flex gap-[5px] items-center py-[10px] px-3 justify-between rounded-[40px]">
                            <p
                                style={{ fontFamily: "Montserrat-SemiBold" }}
                                className="text-[10px] whitespace-nowrap"
                            >
                                За <span style={{ fontFamily: "Montserrat-Bold" }}>месяц</span>
                            </p>
                            <button
                                style={{ fontFamily: "Inter-SemiBold" }}
                                className="text-[10px] bg-white px-[12px] py-[6px] rounded-[20px] whitespace-nowrap"
                            >
                                25250 с
                            </button>
                        </div>

                        <div className="bg-[#F5F7FA] flex gap-[5px] items-center py-[10px] px-3 justify-between rounded-[40px]">
                            <p
                                style={{ fontFamily: "Montserrat-SemiBold" }}
                                className="text-[10px] whitespace-nowrap"
                            >
                                За <span style={{ fontFamily: "Montserrat-Bold" }}>неделю</span>
                            </p>
                            <button
                                style={{ fontFamily: "Inter-SemiBold" }}
                                className="text-[10px] bg-white px-[12px] py-[6px] rounded-[20px] whitespace-nowrap"
                            >
                                2525 с
                            </button>
                        </div>

                        <div className="bg-[#F5F7FA] flex gap-[5px] items-center py-[10px] px-3 justify-between rounded-[40px]">
                            <p
                                style={{ fontFamily: "Montserrat-SemiBold" }}
                                className="text-[10px] whitespace-nowrap"
                            >
                                За <span style={{ fontFamily: "Montserrat-Bold" }}>сегодня</span>
                            </p>
                            <button
                                style={{ fontFamily: "Inter-SemiBold" }}
                                className="text-[10px] bg-white px-[12px] py-[6px] rounded-[20px] whitespace-nowrap"
                            >
                                2525 с
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex gap-2 my-[15px]'>
                <div className='bg-white p-[10px] w-[32%] rounded-[20px]'>
                    <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "12px" }}>Доходы</p>
                    <button style={{ fontFamily: "Montserrat-SemiBold", fontSize: "8px" }} className='bg-[#F5F7FA] w-full p-[10px] flex justify-between rounded-2xl my-[10px]'>Декабрь <span className='text-[#FF8736]'>20314</span></button>
                    <button style={{ fontFamily: "Montserrat-SemiBold", fontSize: "8px" }} className='bg-[#F5F7FA] w-full p-[10px] flex justify-between rounded-2xl my-[10px]'>Ноябрь <span className='text-[#FF8736]'>20314</span></button>
                </div>
                <div className='bg-white p-[10px] w-[32%] rounded-[20px]'>
                    <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "12px" }}>Расходы</p>
                    <button style={{ fontFamily: "Montserrat-SemiBold", fontSize: "8px" }} className='bg-[#F5F7FA] w-full p-[10px] flex justify-between rounded-2xl my-[10px]'>Декабрь <span className='text-[#FF8736]'>16314</span></button>
                    <button style={{ fontFamily: "Montserrat-SemiBold", fontSize: "8px" }} className='bg-[#F5F7FA] w-full p-[10px] flex justify-between rounded-2xl my-[10px]'>Ноябрь <span className='text-[#FF8736]'>16314</span></button>
                </div>
                <div className='bg-white p-[10px] w-[32%] rounded-[20px]'>
                    <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "12px" }}>Доходность</p>
                    <button style={{ fontFamily: "Montserrat-SemiBold", fontSize: "8px" }} className='bg-[#F5F7FA] w-full px-[10px] py-[5px] flex justify-between rounded-2xl mt-[13px]'>Ноябрь <span className='text-[#FF8736]'>4000 <p style={{ fontFamily: "Montserrat-Regular", fontSize: "5px" }}>19,69%</p></span></button>
                    <button style={{ fontFamily: "Montserrat-SemiBold", fontSize: "8px" }} className='bg-[#F5F7FA] w-full px-[10px] py-[5px] flex justify-between rounded-2xl mt-[13px]'>Ноябрь <span className='text-[#FF8736]'>4000 <p style={{ fontFamily: "Montserrat-Regular", fontSize: "5px" }}>19,69%</p></span></button>
                </div>
            </div>


            <div className='bg-white p-[10px] rounded-[20px] my-[15px]'>
                <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "12px" }}>Должники</p>
                <div className='bg-[#F5F7FA] rounded-[10px] flex items-center my-[15px]' >
                    <div className=' flex justify-between p-[10px] w-[90%] '>
                        <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "10px" }}>№</p>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "10px" }}>Имя клиента</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "8px", color: "#5E5F62" }} className='mt-[10px]'>Наименование продукции</p>
                        </div>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "10px", color: "#FF8736" }}>Сумма</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "8px", color: "#5E5F62" }} className='mt-[10px]'>Сомони</p>
                        </div>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "10px", color: "#FF8736" }}>Дни</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "8px", color: "#5E5F62" }} className='mt-[10px]'>Кол-во</p>
                        </div>
                    </div>
                    <button className='w-[10%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                </div>
                <div className='bg-[#F5F7FA] rounded-[10px] flex items-center my-[15px]' >
                    <div className=' flex justify-between p-[10px] w-[90%] '>
                        <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "10px" }}>12</p>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "10px" }}>Мадонна</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "8px", color: "#5E5F62" }} className='mt-[10px]'>Jordan Air, Air Nike</p>
                        </div>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "10px", color: "#FF8736" }}>4000</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "8px", color: "#5E5F62" }} className='mt-[10px]'>Сомони</p>
                        </div>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "10px", color: "#FF8736" }}>9</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "8px", color: "#5E5F62" }} className='mt-[10px]'>дней</p>
                        </div>
                    </div>
                    <button className='w-[10%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                </div>
                <div className='bg-[#F5F7FA] rounded-[10px] flex items-center my-[15px]' >
                    <div className=' flex justify-between p-[10px] w-[90%] '>
                        <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "10px" }}>13</p>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "10px" }}>Мадонна</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "8px", color: "#5E5F62" }} className='mt-[10px]'>Jordan Air, Air Nike</p>
                        </div>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "10px", color: "#FF8736" }}>4000</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "8px", color: "#5E5F62" }} className='mt-[10px]'>Сомони</p>
                        </div>
                        <div>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "10px", color: "#FF8736" }}>9</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "8px", color: "#5E5F62" }} className='mt-[10px]'>дней</p>
                        </div>
                    </div>
                    <button className='w-[10%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Basic