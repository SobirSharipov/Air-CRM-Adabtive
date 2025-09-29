import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import SpringModal from '../../../components/Addclient'
import { Link } from 'react-router'

const Patients = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <p style={{ fontFamily: "Montserrat-Bold" }} className='text-[#0D1B34] text-[24px]'>Список клиентов</p>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <SpringModal />
                    <button className='bg-[#005456] text-white p-[8px] rounded-[5px] cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-2 my-[20px]'>
                <div className='flex justify-between gap-2 items-center bg-white p-[10px] rounded-[10px]'>
                    <div>
                        <button className='bg-[#005456] text-white p-[8px] rounded-[5px] cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                        </button>
                        <p style={{ fontFamily: "Gilroy-Light", fontSize: "12px" }} className='text-gray-600 mt-[10px]'>Авг.</p>
                    </div>
                    <div className='text-end'>
                        <p style={{ fontFamily: "Montserrat-Bold" }} className='text-[#0D1B34] text-[12px]'>Ден рождения</p>
                        <p style={{ fontFamily: "Gilroy-Light", fontSize: "12px" }} className='text-gray-600 mt-[20px] text-end'>300 клиента</p>
                    </div>
                </div>
                <div className='flex justify-between gap-2 items-center bg-white p-[10px] rounded-[10px]'>
                    <div>
                        <button className='bg-[#F05252] text-white p-[8px] rounded-[5px] cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                        </button>
                        <p style={{ fontFamily: "Gilroy-Light", fontSize: "12px" }} className='text-gray-600 mt-[10px]'>Авг.</p>
                    </div>
                    <div className='text-end'>
                        <p style={{ fontFamily: "Montserrat-Bold" }} className='text-[#0D1B34] text-[12px]'>Отсутствие</p>
                        <p style={{ fontFamily: "Gilroy-Light", fontSize: "12px" }} className='text-gray-600 mt-[20px] text-end'>300 клиента</p>
                    </div>
                </div>
                <div className='flex justify-between gap-2 items-center bg-white p-[10px] rounded-[10px]'>
                    <div>
                        <button className='bg-[#0E9F6E] text-white p-[8px] rounded-[5px] cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                        </button>
                        <p style={{ fontFamily: "Gilroy-Light", fontSize: "12px" }} className='text-gray-600 mt-[10px]'>Авг.</p>
                    </div>
                    <div className='text-end'>
                        <p style={{ fontFamily: "Montserrat-Bold" }} className='text-[#0D1B34] text-[12px]'>Новые</p>
                        <p style={{ fontFamily: "Gilroy-Light", fontSize: "12px" }} className='text-gray-600 mt-[20px] text-end'>300 клиента</p>
                    </div>
                </div>
                <div className='flex justify-between gap-2 items-center bg-white p-[10px] rounded-[10px]'>
                    <div>
                        <button className='bg-[#3F83F8] text-white p-[8px] rounded-[5px] cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                        </button>
                        <p style={{ fontFamily: "Gilroy-Light", fontSize: "12px" }} className='text-gray-600 mt-[10px]'>Авг.</p>
                    </div>
                    <div className='text-end'>
                        <p style={{ fontFamily: "Montserrat-Bold" }} className='text-[#0D1B34] text-[12px]'>Репродажи</p>
                        <p style={{ fontFamily: "Gilroy-Light", fontSize: "12px" }} className='text-gray-600 mt-[20px] text-end'>300 клиента</p>
                    </div>
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
                    <div style={{ fontFamily: "Gilroy-ExtraBold", fontSize: "9px" }} className='flex items-center gap-[10px] bg-[#F5F7FA]  p-[10px] px-[15px] rounded-[10px] text-[13px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                        </svg>

                        <button>Фильтр</button>
                        <div className='w-[10px] h-[10px] rounded-full bg-black'></div>
                    </div>

                </div>

                <table className='w-[100%] my-[20px] rounded'>
                    <thead style={{ fontFamily: "Gilroy-Light", fontSize: "8px" }} className='bg-[#F5F7FA]  text-gray-500    rounded-[8px]'>
                        <tr className='text-left'>
                            <th className='py-[10px] px-[10px] rounded-l-[8px]'>№</th>
                            <th className='px-[5px]'>Клиент</th>
                            <th className='px-[8px]'>Сумма</th>
                            <th className='px-[5px] whitespace-nowrap'>Кол-во</th>
                            <th className='px-[5px] '>Баллы</th>
                            <th className='px-[5px] '>Отсутствие</th>
                            <th className='px-[5px]  rounded-r-[8px]'>Действия</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontFamily: "Gilroy-Light", fontSize: "9px" }} className='text-[13px] font-medium'>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[5px] py-[15px] rounded-l-[10px] text-[#231F20]'>1209</td>
                            <td className='text-[#231F20] whitespace-nowrap'>Фирдавс Намозов</td>
                            <td className='text-center  text-[#0E9F6E]'>25000 c.</td>
                            <td className='text-center'>83</td>
                            <td className='text-center'>150</td>
                            <td className='text-center'>1024 дн.</td>

                            <td className='  rounded-r-[10px] '>
                                <Link className='flex justify-center gap-[5px]' to={'/Customer_card'}>
                                    <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                        </svg>
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[015px] rounded-l-[10px] text-[#231F20]'>1209</td>
                            <td className='text-[#231F20]'>Фирдавс Намозов</td>
                            <td className='text-center  text-[#0E9F6E]'>25000 c.</td>
                            <td className='text-center'>83</td>
                            <td className='text-center'>150</td>
                            <td className='text-center'>1024 дн.</td>

                            <td className='  rounded-r-[10px] '>
                                <Link className='flex justify-center gap-[5px]' to={'/Customer_card'}>
                                    <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                        </svg>
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[015px] rounded-l-[10px] text-[#231F20]'>1209</td>
                            <td className='text-[#231F20]'>Фирдавс Намозов</td>
                            <td className='text-center  text-[#0E9F6E]'>25000 c.</td>
                            <td className='text-center'>83</td>
                            <td className='text-center'>150</td>
                            <td className='text-center'>1024 дн.</td>

                            <td className='  rounded-r-[10px] '>
                                <Link className='flex justify-center gap-[5px]' to={'/Customer_card'}>
                                    <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                        </svg>
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[015px] rounded-l-[10px] text-[#231F20]'>1209</td>
                            <td className='text-[#231F20]'>Фирдавс Намозов</td>
                            <td className='text-center  text-[#0E9F6E]'>25000 c.</td>
                            <td className='text-center'>83</td>
                            <td className='text-center'>150</td>
                            <td className='text-center'>1024 дн.</td>

                            <td className='  rounded-r-[10px] '>
                                <Link className='flex justify-center gap-[5px]' to={'/Customer_card'}>
                                    <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                        </svg>
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[015px] rounded-l-[10px] text-[#231F20]'>1209</td>
                            <td className='text-[#231F20]'>Фирдавс Намозов</td>
                            <td className='text-center  text-[#0E9F6E]'>25000 c.</td>
                            <td className='text-center'>83</td>
                            <td className='text-center'>150</td>
                            <td className='text-center'>1024 дн.</td>

                            <td className='  rounded-r-[10px] '>
                                <Link className='flex justify-center gap-[5px]' to={'/Customer_card'}>
                                    <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                        </svg>
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[015px] rounded-l-[10px] text-[#231F20]'>1209</td>
                            <td className='text-[#231F20]'>Фирдавс Намозов</td>
                            <td className='text-center  text-[#0E9F6E]'>25000 c.</td>
                            <td className='text-center'>83</td>
                            <td className='text-center'>150</td>
                            <td className='text-center'>1024 дн.</td>

                            <td className='  rounded-r-[10px] '>
                                <Link className='flex justify-center gap-[5px]' to={'/Customer_card'}>
                                    <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                        </svg>
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[015px] rounded-l-[10px] text-[#231F20]'>1209</td>
                            <td className='text-[#231F20]'>Фирдавс Намозов</td>
                            <td className='text-center  text-[#0E9F6E]'>25000 c.</td>
                            <td className='text-center'>83</td>
                            <td className='text-center'>150</td>
                            <td className='text-center'>1024 дн.</td>

                            <td className='  rounded-r-[10px] '>
                                <Link className='flex justify-center gap-[5px]' to={'/Customer_card'}>
                                    <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                        </svg>
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[015px] rounded-l-[10px] text-[#231F20]'>1209</td>
                            <td className='text-[#231F20]'>Фирдавс Намозов</td>
                            <td className='text-center  text-[#0E9F6E]'>25000 c.</td>
                            <td className='text-center'>83</td>
                            <td className='text-center'>150</td>
                            <td className='text-center'>1024 дн.</td>

                            <td className='  rounded-r-[10px] '>
                                <Link className='flex justify-center gap-[5px]' to={'/Customer_card'}>
                                    <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                        </svg>
                                    </button>
                                </Link>
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

export default Patients