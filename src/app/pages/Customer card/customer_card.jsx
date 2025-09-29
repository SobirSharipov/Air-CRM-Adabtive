import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router'
import Addpoints from '../../../components/Addpoints'
import Cog from '../../../components/Cog'

const Customer_card = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <Link to={'/Patients'} className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[#005456]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    <p style={{ fontFamily: "Montserrat-Bold" }} className='text-[#0D1B34] text-[20px]'>Карточка клиента</p>
                </Link>
                <div className='flex items-center gap-[10px]'>
                  <Cog/>
                    <button className='bg-[#005456] text-white p-[8px] rounded-[5px] cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
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

            <div className='bg-white p-[10px] rounded-[10px] my-[20px]'>
                <div className='flex justify-between items-center'>
                    <p style={{ fontFamily: "Montserrat-Bold", fontSize: "20px" }}>Общие сведения</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </div>
                <div className='flex gap-2 items-start my-[20px]'>
                    <div className='text-center border p-[20px] w-[30%] rounded-[7.89px] border-gray-600 bg-[#F5F7FA]'>
                        <p style={{fontFamily:"Gilroy-Light",fontSize:"10.26px"}}>Загрузить фото 1:1</p>
                        <label className="cursor-pointer flex justify-center">
                            <input type="file" className="hidden" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                            </svg>
                        </label>
                    </div>
                    <div className=''>
                        <TextField
                            label="ФИО клиента"
                            variant="outlined"
                            defaultValue="Намозов Фирдавс Нормуродович"
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        />
                        <div className='flex gap-2 mt-4'>
                            <div className='w-[77%]'>
                                <TextField
                                    label="Номер телефона клиента"
                                    variant="outlined"
                                    defaultValue="+992 988 40 52 48"
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "15px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[23%]' >
                                <TextField
                                    label="ID пациента"
                                    variant="outlined"
                                    defaultValue="13"
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "15px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex gap-2 mt-3'>
                    <div className='w-[40%]'>
                        <TextField
                            label="Дата рождения"
                            variant="outlined"
                            defaultValue="12.04.1994"
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        />
                    </div>
                    <div className='w-[40%]'>
                        <TextField
                            label="Адрес по регистрации"
                            variant="outlined"
                            defaultValue="Фирдавси 24"
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        />
                    </div>
                    <div className='w-[20%]'>
                        <TextField
                            label="Начисление"
                            variant="outlined"
                            defaultValue="2%"
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        />
                    </div>
                </div>
                <div className='flex gap-2 mt-3'>
                    <div className='w-[40%]'>
                        <TextField
                            label="Кол-во обращ..."
                            variant="outlined"
                            defaultValue="2"
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        />
                    </div>
                    <div className='w-[30%]'>
                        <TextField
                            label="Сумма покупок"
                            variant="outlined"
                            defaultValue="100500 с."
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        />
                    </div>
                    <div className='w-[30%]'>
                        <TextField
                            label="Дни отсутствия"
                            variant="outlined"
                            defaultValue="820 дней"
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        />
                    </div>
                </div>
                <div className='flex gap-2 mt-3'>
                    <div className='w-[40%]'>
                        <TextField
                            label="Источник"
                            variant="outlined"
                            defaultValue="Нельзяграм"
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        />
                    </div>
                    <div className='w-[30%]'>
                        <TextField
                            label="Долг"
                            variant="outlined"
                            defaultValue="0 с."
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        />
                    </div>
                    <div className='w-[30%]'>
                        <TextField
                            label="Баллы"
                            variant="outlined"
                            defaultValue="40"
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        />
                    </div>
                </div>
                <div className=' mt-3'>
                    <TextField
                        label="Заметки"
                        variant="outlined"
                        defaultValue="Впишите свои заметки о данном пациенте..."
                        type="text"
                        fullWidth
                        sx={{
                            "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                            "& .MuiInputLabel-root": { fontSize: "15px" },
                            "& input": { fontSize: "15px", padding: "8px" },
                        }}
                        InputProps={{
                            sx: {
                                height: 50,
                                paddingBottom: 10,
                                paddingTop: 3
                            },
                        }}
                    />
                </div>
                <div style={{ fontFamily: "Montserrat-Bold", fontSize: "11px" }} className='flex gap-2 mt-4 mb-2 '>
                    <Addpoints />
                        <button className='w-[32%] p-[10px] rounded-[10px] bg-[#F5F7FA] text-[#005456]'>Редактировать</button>
                    <button className='w-[32%] p-[10px] rounded-[10px] bg-[#005456] text-white'>Сохранить</button>
                </div>
            </div>

            <div className='bg-white p-[10px] rounded-[10px]'>
                <div className='flex items-center gap-[10px] px-[10px] my-[10px] border border-gray-400 rounded-[5px] '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" placeholder='Поиск' className='border-none outline-none p-[8px] rounded-lg w-full' />
                </div>
                <div style={{ fontFamily: "Montserrat-Bold", fontSize: "11px" }} className='flex gap-2 mt-4 mb-2 '>
                    <button className='w-full p-[10px] rounded-[10px] bg-[#005456] text-white'>Общие сведения</button>
                    <button className='w-full p-[10px] rounded-[10px] bg-[#F5F7FA] text-[#005456]'>История баллов</button>
                </div>

                <table className='w-[100%] my-[20px] rounded'>
                    <thead style={{ fontFamily: "Gilroy-Light", fontSize: "13px" }} className='bg-[#F5F7FA]  text-gray-500  text-[13px]  rounded-[8px]'>
                        <tr className='text-left'>
                            <th className='py-[10px] px-[10px] rounded-l-[8px]'>№</th>
                            <th className='px-[5px]'>Дата</th>
                            <th className='px-[5px]'>Сумма</th>
                            <th className='px-[5px]'>Кол-во товаров</th>
                            <th className='px-[5px]  rounded-r-[8px]'>Действия</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontFamily: "Gilroy-Light", fontSize: "13px" }} className='text-[13px] font-medium'>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[15px] rounded-l-[10px] text-[#231F20]'>131</td>
                            <td className='text-[#231F20]'>11.08.2025</td>
                            <td className='text-center  text-[#0E9F6E]'>500 с.</td>
                            <td className='text-center'>1</td>

                            <td className='  rounded-r-[10px] '>
                                <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[15px] rounded-l-[10px] text-[#231F20]'>131</td>
                            <td className='text-[#231F20]'>11.08.2025</td>
                            <td className='text-center  text-[#0E9F6E]'>500 с.</td>
                            <td className='text-center'>1</td>

                            <td className='  rounded-r-[10px] '>
                                <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[15px] rounded-l-[10px] text-[#231F20]'>131</td>
                            <td className='text-[#231F20]'>11.08.2025</td>
                            <td className='text-center  text-[#0E9F6E]'>500 с.</td>
                            <td className='text-center'>1</td>

                            <td className='  rounded-r-[10px] '>
                                <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[15px] rounded-l-[10px] text-[#231F20]'>131</td>
                            <td className='text-[#231F20]'>11.08.2025</td>
                            <td className='text-center  text-[#0E9F6E]'>500 с.</td>
                            <td className='text-center'>1</td>

                            <td className='  rounded-r-[10px] '>
                                <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[15px] rounded-l-[10px] text-[#231F20]'>131</td>
                            <td className='text-[#231F20]'>11.08.2025</td>
                            <td className='text-center  text-[#0E9F6E]'>500 с.</td>
                            <td className='text-center'>1</td>

                            <td className='  rounded-r-[10px] '>
                                <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
                            <td className='p-[10px] py-[15px] rounded-l-[10px] text-[#231F20]'>131</td>
                            <td className='text-[#231F20]'>11.08.2025</td>
                            <td className='text-center  text-[#0E9F6E]'>500 с.</td>
                            <td className='text-center'>1</td>

                            <td className='  rounded-r-[10px] '>
                                <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                                    </svg>
                                </button>
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

export default Customer_card