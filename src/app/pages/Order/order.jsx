import '../../../App.css'
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

const Order = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <p style={{ fontFamily: "Montserrat-SemiBold" }} className='text-[#0D1B34] text-[26px]'>Все сделки</p>
                    <button className='bg-[#005456] text-white p-[5px] px-[10px] rounded-[5px] cursor-pointer'>
                        12
                    </button>
                </div>

                <div className='flex items-center gap-[10px]'>
                    <button className='bg-[#005456] text-white p-[8px] rounded-[5px] cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                    </button>
                    <button className='bg-[#005456] text-white p-[8px] rounded-[5px] cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                </div>

            </div>

            <div className='bg-white my-[20px] p-[10px] rounded-[10px]'>
                <div className='flex gap-4 items-center'>
                    <div className='flex items-center gap-[10px] px-[10px] my-[10px] border border-gray-400 rounded-[5px] '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input type="text" placeholder='Поиск' className='border-none outline-none p-[8px] rounded-lg w-full' />
                    </div>
                    <div style={{ fontFamily: "Gilroy-ExtraBold", fontSize: "9px" }} className='flex items-center gap-[10px] bg-[#F5F7FA] text-[#005456] p-[10px] px-[15px] rounded-[10px] text-[13px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                        </svg>

                        <button>Фильтр</button>
                        <div className='w-[10px] h-[10px] rounded-full bg-[#005456]'></div>
                    </div>

                </div>

                <table className='w-[100%] my-[20px] rounded'>
                    <thead style={{ fontFamily: "Gilroy-Ligght", fontSize: "11px" }} className='bg-[#F5F7FA]  text-gray-500  text-[13px]  rounded-[8px]'>
                        <tr className='text-left'>
                            <th className='py-[8px] px-[10px] rounded-l-[8px]'>Клиент</th>
                            <th className='px-[10px]'>Сумма</th>
                            <th className=''>Долг</th>
                            <th className='px-[10px] '>Статус</th>
                            <th className='px-[10px]  rounded-r-[8px]'>Действия</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontFamily: "Gilroy-Ligght", fontSize: "10px" }} className='text-[13px] font-medium'>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[015px] rounded-l-[10px]'>Шабнам</td>
                            <td className='text-center whitespace-nowrap  text-[#0E9F6E]'>25000 c.</td>
                            <td className='text-center whitespace-nowrap  text-[#F05252]'>25000 c.</td>
                            <td className='px-[5px]'>
                                <select style={{ fontFamily: "Gilroy-Ligght", fontSize: "10px" }} className='bg-[#3F83F8] text-white p-[6px] rounded-[5px]'>
                                    <option value="На доставке">На доставке</option>
                                    <option value="Отменено">Отменено</option>
                                    <option value="Доставлено">Доставлено</option>
                                </select>
                            </td>
                            <td className='  rounded-r-[10px] '>
                                <div className='flex justify-center gap-[5px]'>
                                <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                {/* <button className='text-[#FF8736] bg-white p-[6px] rounded-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </button> */}
                                <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                </button>

                                </div>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[15px] rounded-l-[10px]'>Вафо</td>
                            <td className='text-center text-[#0E9F6E]'>25000 c.</td>
                            <td className='text-center text-[#0E9F6E]'>0.00 c.</td>
                            <td className='px-[5px]'>
                                <select style={{ fontFamily: "Gilroy-Ligght", fontSize: "10px" }} className='bg-[#F05252] text-white p-[6px] rounded-[5px]'>
                                    <option value="Отменено">Отменено</option>
                                    <option value="На доставке">На доставке</option>
                                    <option value="Доставлено">Доставлено</option>
                                </select>
                            </td>
                            <td className='  rounded-r-[10px] '>
                                <div className='flex justify-center gap-[5px]'>
                                <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                </button>

                                </div>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[15px] rounded-l-[10px]'>Шабнам</td>
                            <td className='text-center text-[#0E9F6E]'>25000 c.</td>
                            <td className='text-center text-[#0E9F6E]'>0.00 c.</td>
                            <td className='px-[5px]'>
                                <select style={{ fontFamily: "Gilroy-Ligght", fontSize: "10px" }} className='bg-[#0E9F6E] text-white p-[6px] rounded-[5px]'>
                                    <option value="Доставлено">Доставлено</option>
                                    <option value="Отменено">Отменено</option>
                                    <option value="На доставке">На доставке</option>
                                </select>
                            </td>
                            <td className='  rounded-r-[10px] '>
                                <div className='flex justify-center gap-[5px]'>
                                <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                </button>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className='flex justify-center mt-[30px]'>
                    <Stack spacing={2}>
                        <Pagination count={4} color="success" showFirstButton showLastButton />
                    </Stack>
                </div>

            </div>
        </div>
    )
}

export default Order