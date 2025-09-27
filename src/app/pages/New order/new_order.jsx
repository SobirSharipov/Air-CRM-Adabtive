import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import img from '../../../shared/img1 (9).svg'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'

const New_order = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <p style={{ fontFamily: "Gilroy-Ligght" }} className='text-[#8696BB] text-[16px]'>Добро пожаловать,</p>
                    <p style={{ fontFamily: "Gilroy-ExtraBold" }} className='text-[#0D1B34] text-[20px]'>Фирдавс Намозов</p>
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

            <div className='my-[20px]'>
                <p style={{ fontFamily: "Gilroy-Ligght", fontSize: "19px" }} className='mb-[20px]'>Новый заказ</p>
                <div className='bg-white p-[10px] rounded-[10px]'>
                    <div className='flex justify-between items-center'>
                        <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "14" }}>Заполните информацию</p>
                        <button style={{ fontFamily: "Gilroy-Ligght", fontSize: "11px" }} className='bg-[#F5F7FA] p-[10px] rounded-[5px]'>Очистить</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </div>
                    <div className='flex gap-3 my-[20px]'>
                        <div className='w-[50%]'>
                            <TextField
                                select
                                label="Склад"
                                defaultValue="standard"
                                size="small"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "5px", height: "40px" },
                                    "& .MuiInputLabel-root": { fontSize: "13px", zIndex: 0, },
                                    "& .MuiSelect-select": { fontSize: "13px", padding: "8px" },
                                }}
                            >
                                <MenuItem value="standard">82 мкр</MenuItem>
                            </TextField>
                        </div>
                        <div className='w-[50%]'>
                            <TextField
                                select
                                label="Категория"
                                defaultValue="standard"
                                size="small"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "5px", height: "40px" },
                                    "& .MuiInputLabel-root": { fontSize: "13px", zIndex: 0, },
                                    "& .MuiSelect-select": { fontSize: "13px", padding: "8px" },
                                }}
                            >
                                <MenuItem value="standard">Выбрать</MenuItem>
                            </TextField>
                        </div>
                    </div>
                    <div className='flex items-center gap-[10px] px-[10px] my-[10px] border border-gray-400 rounded-[5px] '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input type="text" placeholder='Поиск' className='border-none outline-none p-[8px] rounded-lg w-full' />
                    </div>
                </div>
            </div>

            <div className='bg-white p-[10px] rounded-[10px]'>
                <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "14px" }} className='my-[20px]'>Выберите товары</p>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-[#F5F7FA] p-[20px] rounded-[10px]'>
                        <img src={img} alt="" />
                        <p style={{ fontFamily: "Montserrat-Regular", fontSize: "12.23px" }}>Кроссовки <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "12.23px" }}>Nike</span></p>
                        <p style={{ fontFamily: "Gilroy-Ligght", fontSize: "10.35px" }} className='text-[#5E5F62] mt-[5px]'>Атрибут: <span style={{ fontFamily: "Gilroy-ExtraBold", fontSize: "10.35px" }}>M</span> <span>Размер</span></p>
                        <p style={{ fontFamily: "Gilroy-ExtraBold", fontSize: "10.35px", color: "#5E5F62" }} className='flex justify-between my-[5px]'>Цена: <span>2045с</span></p>
                        <button style={{ fontFamily: "Montserrat-SemiBold", fontSize: "10.35px" }} className='bg-[#005456] text-white w-full p-[10px] rounded-[4.7px] '>В корзину</button>
                    </div>
                    <div className='bg-[#F5F7FA] p-[20px] rounded-[10px]'>
                        <img src={img} alt="" />
                        <p style={{ fontFamily: "Montserrat-Regular", fontSize: "12.23px" }}>Кроссовки <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "12.23px" }}>Nike</span></p>
                        <p style={{ fontFamily: "Gilroy-Ligght", fontSize: "10.35px" }} className='text-[#5E5F62] mt-[5px]'>Атрибут: <span style={{ fontFamily: "Gilroy-ExtraBold", fontSize: "10.35px" }}>M</span> <span>Размер</span></p>
                        <p style={{ fontFamily: "Gilroy-ExtraBold", fontSize: "10.35px", color: "#5E5F62" }} className='flex justify-between my-[5px]'>Цена: <span>2045с</span></p>
                        <button style={{ fontFamily: "Montserrat-SemiBold", fontSize: "10.35px" }} className='bg-[#005456] text-white w-full p-[10px] rounded-[4.7px] '>В корзину</button>
                    </div>
                    <div className='bg-[#F5F7FA] p-[20px] rounded-[10px]'>
                        <img src={img} alt="" />
                        <p style={{ fontFamily: "Montserrat-Regular", fontSize: "12.23px" }}>Кроссовки <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "12.23px" }}>Nike</span></p>
                        <p style={{ fontFamily: "Gilroy-Ligght", fontSize: "10.35px" }} className='text-[#5E5F62] mt-[5px]'>Атрибут: <span style={{ fontFamily: "Gilroy-ExtraBold", fontSize: "10.35px" }}>M</span> <span>Размер</span></p>
                        <p style={{ fontFamily: "Gilroy-ExtraBold", fontSize: "10.35px", color: "#5E5F62" }} className='flex justify-between my-[5px]'>Цена: <span>2045с</span></p>
                        <button style={{ fontFamily: "Montserrat-SemiBold", fontSize: "10.35px" }} className='bg-[#005456] text-white w-full p-[10px] rounded-[4.7px] '>В корзину</button>
                    </div>
                    <div className='bg-[#F5F7FA] p-[20px] rounded-[10px]'>
                        <img src={img} alt="" />
                        <p style={{ fontFamily: "Montserrat-Regular", fontSize: "12.23px" }}>Кроссовки <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "12.23px" }}>Nike</span></p>
                        <p style={{ fontFamily: "Gilroy-Ligght", fontSize: "10.35px" }} className='text-[#5E5F62] mt-[5px]'>Атрибут: <span style={{ fontFamily: "Gilroy-ExtraBold", fontSize: "10.35px" }}>M</span> <span>Размер</span></p>
                        <p style={{ fontFamily: "Gilroy-ExtraBold", fontSize: "10.35px", color: "#5E5F62" }} className='flex justify-between my-[5px]'>Цена: <span>2045с</span></p>
                        <button style={{ fontFamily: "Montserrat-SemiBold", fontSize: "10.35px" }} className='bg-[#005456] text-white w-full p-[10px] rounded-[4.7px] '>В корзину</button>
                    </div>

                </div>
                <div className='flex justify-center my-[20px]'>
                    <Stack spacing={2}>
                        <Pagination count={4} color="success" showFirstButton showLastButton />
                    </Stack>
                </div>
            </div>

            <div className='bg-white my-[20px] p-[10px] rounded-[10px]'>
                <div className='flex justify-between items-center'>
                    <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "14" }}>Корзина</p>
                    <button style={{ fontFamily: "Gilroy-Ligght", fontSize: "11px" }} className='bg-[#F5F7FA] p-[10px] rounded-[5px]'>Очистить</button>
                </div>
                <hr className='mt-[20px] text-gray-500' />
                <div className='flex py-[20px]'>
                    <div className='w-[30%]'>
                        <img src={img} alt="" />
                    </div>
                    <div className='w-[70%]'>
                        <div className='flex justify-between'>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "14" }}>Кроссовки</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10px" }} className='text-[#5E5F62] my-[10px] flex gap-5 items-center'>Цена <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "12px" }} className='text-black'>2045</span> <span>сомони</span></p>
                        <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10px" }} className='text-[#5E5F62] my-[10px] flex gap-3 items-center'>Скидка <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "12px" }} className='text-black border px-[8px] py-[2px] rounded-[5px] border-[#5E5F62]'>45</span> <span style={{ fontFamily: "Montserrat-Bold", fontSize: "10px" }} className='text-[#005456]'>сомони</span> <span>| %</span></p>
                        <div className='flex  gap-4 items-center'>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10px" }} className='text-[#5E5F62]'>Атрибут</p>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "12px" }} className=''>42</p>
                            <p style={{ fontFamily: "Montserrat-Regular", fontSize: "10px" }} className='text-[#5E5F62]'>размер</p>
                            <div className='flex gap-2 border border-[#005456] rounded-[5px] '>
                                <button className='px-[10px] border-r border-r-[#005456] bg-[#F5F7FA] rounded-l-[6px] w-full'>-</button>
                                <p>1</p>
                                <button className='px-[10px] border-l border-l-[#005456] bg-[#F5F7FA] rounded-r-[5px] w-full'>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white my-[20px] p-[10px] rounded-[10px]'>
                <div className='flex items-center justify-between'>
                    <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "17px" }}>
                        Информация о клиенте
                    </p>

                    <div className="flex items-center gap-[5px]">
                        <button
                            style={{ fontFamily: "Gilroy-Light", fontSize: "12px" }}
                            className='bg-[#F5F7FA] px-[12px] py-[6px] rounded-[5px]'
                        >
                            Добавить клиента
                        </button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-600"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>

                <div className='my-[20px]'>
                    <TextField
                        select
                        label="Клиент"
                        defaultValue="standard"
                        size="small"
                        fullWidth
                        sx={{
                            "& .MuiOutlinedInput-root": { borderRadius: "5px", height: "40px" },
                            "& .MuiInputLabel-root": { fontSize: "13px", zIndex: 0, },
                            "& .MuiSelect-select": { fontSize: "13px", padding: "8px" },
                        }}
                    >
                        <MenuItem value="standard">Шахзод</MenuItem>
                    </TextField>
                </div>
                <div className='my-[20px]'>
                    <TextField
                        select
                        label="Адрес доставки"
                        defaultValue="standard"
                        size="small"
                        fullWidth
                        sx={{
                            "& .MuiOutlinedInput-root": { borderRadius: "5px", height: "40px" },
                            "& .MuiInputLabel-root": { fontSize: "13px", zIndex: 0, },
                            "& .MuiSelect-select": { fontSize: "13px", padding: "8px" },
                        }}
                    >
                        <MenuItem value="standard">Адрес доставки</MenuItem>
                    </TextField>
                </div>
                <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "11" }}>Комментарий к заказу</p>
                <textarea placeholder='Оставьте свой комментарий к зака...' className='border border-gray-500 w-full h-[100px] rounded-[5px] p-[10px] mt-[10px]'></textarea>
            </div>

            <div className='bg-white mt-[20px] p-[10px] py-[20px] rounded-[10px]'>
                <hr className='text-gray-500' />
                <div className='my-[20px]'>
                    <TextField
                        label="Списать баллы"
                        defaultValue="Указать количество баллов"
                        fullWidth
                        sx={{
                            "& .MuiOutlinedInput-root": { borderRadius: "5px", height: "40px", fontFamily: "Gilroy-Ligght", fontSize: "13px" },
                            "& .MuiInputLabel-root": { fontSize: "13px", zIndex: 0, },
                            "& .MuiSelect-select": { fontSize: "13px", padding: "8px" },
                        }}
                    >
                    </TextField>
                </div>
                <p style={{ fontFamily: "Montserrat-Regular", fontSize: "15px" }} className='flex justify-between items-center'>Итого <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "15px" }}>2045 сомони</span></p>
                <p style={{ fontFamily: "Montserrat-Regular", fontSize: "15px" }} className='flex justify-between items-center'>Скидка <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "15px" }} className='text-red-600'>45 сомони</span></p>
                <p style={{ fontFamily: "Montserrat-Regular", fontSize: "15px" }} className='flex justify-between items-center'>Списанные баллы   <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "15px" }} className='text-red-600'>10 сомони</span></p>
                <p style={{ fontFamily: "Montserrat-Regular", fontSize: "15px" }} className='flex justify-between items-center'>Доставка <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "15px" }}>20 сомони</span></p>
                <p style={{ fontFamily: "Montserrat-Regular", fontSize: "15px" }} className='flex justify-between items-center'>К оплате <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "15px" }}>2010 сомони</span></p>
                <p style={{ fontFamily: "Montserrat-Regular", fontSize: "15px" }} className='flex justify-between items-center'>К начислению баллов <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "15px" }}>100,05 сомони</span></p>
                <div className='flex justify-between items-center my-[10px]'>
                    <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "14" }}>Товар в рассрочку</p>
                    <button style={{ fontFamily: "Gilroy-Ligght", fontSize: "11px" }} className='bg-[#F5F7FA] p-[10px] rounded-[5px]'>тоггле тут</button>
                </div>
                <div className='my-[20px]'>
                    <TextField
                        label="Сумма первоначального платежа"
                        defaultValue="100"
                        fullWidth
                        sx={{
                            "& .MuiOutlinedInput-root": { borderRadius: "5px", height: "40px", fontFamily: "Gilroy-Ligght", fontSize: "13px" },
                            "& .MuiInputLabel-root": { fontSize: "13px", zIndex: 0, },
                            "& .MuiSelect-select": { fontSize: "13px", padding: "8px" },
                        }}
                    >
                    </TextField>
                </div>
                <div className='my-[20px]'>
                    <TextField
                        placeholder="Дата закрытия долга"
                        fullWidth
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "5px",
                                height: "40px",
                                fontSize: "13px",
                                fontFamily: "Gilroy-Light",
                            },
                            "& input::placeholder": {
                                fontSize: "13px",
                                color: "#555",
                            },
                        }}
                    />
                </div>
                <p style={{ fontFamily: "Montserrat-Regular", fontSize: "13px" }}>Остаток долга: <span style={{ fontFamily: "Gilroy-ExtraBold", fontSize: "13px" }}> 3 980 сомони (Без учета доставки!)</span></p>
                <button className='bg-[#005456] text-white w-full p-[10px] rounded-[5px] mt-[10px]'>Оформить заказ</button>
            </div>
        </div>
    )
}

export default New_order