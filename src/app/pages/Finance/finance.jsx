import React from 'react'
import { Link } from 'react-router'
import Cog from '../../../components/Cog'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Usermodal from '../../../components/Usermodal'

const Finance = () => {
    return (
        <div>
            <div className='flex justify-between items-center mb-[20px]'>
                <p style={{ fontFamily: "Montserrat-Bold" }} className='text-[#0D1B34] text-[24px]'>Общая информация</p>
               <Usermodal/>
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

            <div className='bg-white p-[10px] rounded-[20px] my-[15px]'>
                <div className='flex justify-between m-[10px]'>
                    <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "12px" }}>ДДС</p>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                </div>
                <div className='flex gap-4 my-[20px]'>
                    <div className='w-[50%]'>
                        <TextField
                            select
                            label="Тип операции"
                            defaultValue="standard"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "50px", height: "40px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        >
                            <MenuItem value="standard">Расход</MenuItem>
                        </TextField>
                    </div>
                    <div className='w-[50%]'>
                        <TextField
                            select
                            label="Категория"
                            defaultValue="standard"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "50px", height: "40px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        >
                            <MenuItem value="standard">Выбрать</MenuItem>
                        </TextField>
                    </div>
                </div>
                <div className='flex gap-4 my-[20px]'>
                    <div className='w-[50%]'>
                        <TextField
                            select
                            label="Подкатегория"
                            defaultValue="standard"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "50px", height: "40px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        >
                            <MenuItem value="standard">Выбрать</MenuItem>
                        </TextField>
                    </div>
                    <div className='w-[50%]'>
                        <TextField
                            select
                            label="Категория"
                            defaultValue="standard"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "50px", height: "40px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        >
                            <MenuItem value="standard">Выбрать</MenuItem>
                        </TextField>
                    </div>
                </div>
                <div className='flex gap-4 my-[20px]'>
                    <div className='w-[40%]'>
                        <TextField
                            label="Цена"
                            variant="outlined"
                            defaultValue="Впишите сумму"
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "50px", height: "40px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        />
                    </div>
                    <div className='w-[60%]'>
                        <TextField
                            label="Комментарий"
                            variant="outlined"
                            defaultValue="Впишите детали"
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "50px", height: "40px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        />
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
                <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "12px" }}>Анализ прибыльности по товарам</p>
                <div className='flex items-center gap-[10px] px-[10px] my-[10px] border border-gray-400 rounded-[40px] '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" placeholder='Поиск' className='border-none outline-none p-[8px] rounded-lg w-full' />
                </div>

                <table className='w-[100%] my-[20px] rounded'>
                    <thead style={{ fontFamily: "Montserrat-Medium", fontSize: "9px" }} className='bg-[#F5F7FA]  text-gray-500  text-[13px]  rounded-[8px]'>
                        <tr className='text-left'>
                            <th className='py-[12px] px-[10px] rounded-l-[8px]'>№</th>
                            <th className='px-[10px]'>Наименование
                                товара</th>
                            <th className=''>Общая
                                прибыльность</th>
                            <th className='px-[10px]  rounded-r-[8px]'>Рентабельность
                                товара</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontFamily: "Montserrat-SemiBold", fontSize: "8px" }} className='text-[13px] font-medium'>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[015px] rounded-l-[10px]'>1</td>
                            <td className='p-[10px]'>Кроссовки Nikec</td>
                            <td className='p-[10px]'>48 000 с</td>
                            <td className='p-[10px] rounded-r-[10px] '>42,11 % </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[015px] rounded-l-[10px]'>2</td>
                            <td className='p-[10px]'>Духи La Coster</td>
                            <td className='p-[10px]'>14 000 с</td>
                            <td className='p-[10px]  rounded-r-[10px] '>36,84 %</td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[015px] rounded-l-[10px]'>1</td>
                            <td className='p-[10px]'>Брюки Adios</td>
                            <td className='p-[10px]'>54 340 с</td>
                            <td className='p-[10px]  rounded-r-[10px] '>36,67 %</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Finance