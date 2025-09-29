import TextField from '@mui/material/TextField'
import React from 'react'
import { Link } from 'react-router'
import img from '../../../shared/img1 (10).svg'

const Implementation = () => {
  return (
    <div>
      <Link to={'/Customer_card'} className='flex gap-2 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[#005456]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <p style={{ fontFamily: "Montserrat-SemiBold" }} className='text-[#0D1B34] text-[20px]'>Реализация №</p>
      </Link>

      <div className='bg-white p-[10px] rounded-[10px] my-[20px]'>
        <div className='flex justify-between items-center'>
          <p style={{ fontFamily: "Montserrat-SemiBold" }} className='text-[#0D1B34] text-[20px]'>Реализация №</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div className=''>
            <TextField
              label="Имя клиента"
              variant="outlined"
              defaultValue="Сайнукрдин"
              type="text"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                "& .MuiInputLabel-root": { fontSize: "15px" },
                "& input": { fontSize: "13px", padding: "8px" },
              }}
            />
          </div>
          <div className=''>
            <TextField
              label="Контакты клиента"
              variant="outlined"
              defaultValue="+992 988 40 52 48"
              type="text"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                "& .MuiInputLabel-root": { fontSize: "15px" },
                "& input": { fontSize: "13px", padding: "8px" },
              }}
            />
          </div>
          <div className=''>
            <TextField
              label="Стоимость доставки"
              variant="outlined"
              defaultValue="20"
              type="text"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                "& .MuiInputLabel-root": { fontSize: "15px" },
                "& input": { fontSize: "13px", padding: "8px" },
              }}
            />
          </div>
          <div className=''>
            <TextField
              label="Статус проведения"
              variant="outlined"
              defaultValue="Проведен"
              type="text"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                "& .MuiInputLabel-root": { fontSize: "15px" },
                "& input": { fontSize: "13px", padding: "8px" },
              }}
            />
          </div>
        </div>
      </div>

      <div className='bg-white p-[10px] rounded-[10px] my-[20px]'>
        <div className='flex justify-between items-center'>
          <p style={{ fontFamily: "Montserrat-SemiBold" }} className='text-[#0D1B34] text-[20px]'>Курьер</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </div>
        <div className='flex gap-4 items-center my-4'>
          <img src={img} alt="" />
          <div>
            <p style={{ fontFamily: "Gilroy-Light", fontSize: "15px" }}>Мухамад Джаборов</p>
            <p style={{ fontFamily: "Gilroy-Light", fontSize: "13px", color: "#5E5F62" }}>+992 902 99 99 99</p>
          </div>
        </div>
      </div>

      <div className='bg-white p-[10px] rounded-[10px] my-[20px]'>
        <p style={{ fontFamily: "Montserrat-SemiBold" }} className='text-[#0D1B34] text-[20px] text-center'>Товары</p>
        <div className='flex justify-between items-center'>

        </div>

        <table className='w-[100%] my-[20px] rounded'>
          <thead style={{ fontFamily: "Gilroy-Light", fontSize: "13px" }} className='bg-[#F5F7FA]  text-gray-500  text-[13px]  rounded-[8px]'>
            <tr className='text-left'>
              <th className='py-[10px] px-[5px] rounded-l-[8px]'>№</th>
              <th className='px-[5px]'>Товар</th>
              <th className=''>Количество</th>
              <th className='px-[5px]'>Атрибут</th>
              <th className='px-[5px]'>Итого</th>
              <th className='px-[5px]  rounded-r-[8px]'>Детали</th>
            </tr>
          </thead>
          <tbody style={{ fontFamily: "Gilroy-Light", fontSize: "13px" }} className='text-[13px] font-medium'>
            <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
            <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
              <td className='p-[10px] py-[15px] rounded-l-[10px] text-[#231F20]'>1</td>
              <td className='text-[#231F20] whitespace-nowrap'>Духи La Co</td>
              <td className='px-[10px] text-center'>10</td>
              <td className='px-[10px]'>M</td>
              <td className='px-[10px]'>2800</td>

              <td className='px-[10px]  rounded-r-[10px] '>
                <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
            <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
              <td className='p-[10px] py-[15px] rounded-l-[10px] text-[#231F20]'>1</td>
              <td className='text-[#231F20] whitespace-nowrap'>Духи La Co</td>
              <td className='px-[10px] text-center'>10</td>
              <td className='px-[10px]'>M</td>
              <td className='px-[10px]'>2800</td>

              <td className='px-[10px]  rounded-r-[10px] '>
                <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='bg-white p-[20px]'> <td className='p-[5px]'></td></tr>
            <tr className='bg-[#F5F7FA] rounded-[10px] my-[20px]  overflow-hidden'>
              <td className='p-[10px] py-[15px] rounded-l-[10px] text-[#231F20]'>1</td>
              <td className='text-[#231F20] whitespace-nowrap'>Духи La Co</td>
              <td className='px-[10px] text-center'>10</td>
              <td className='px-[10px]'>M</td>
              <td className='px-[10px]'>2800</td>

              <td className='px-[10px]  rounded-r-[10px] '>
                <button className='text-[#005456] bg-white p-[6px] rounded-[5px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <hr className='text-gray-500 mt-[50px]' />

        <div className='mt-4'>
          <p style={{ fontFamily: "Montserrat-Regular", fontSize: "15px" }} className='flex justify-between items-center my-1'>Итого <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "15px" }}>560 сомони</span></p>
          <p style={{ fontFamily: "Montserrat-Regular", fontSize: "15px" }} className='flex justify-between items-center my-1'>Скидка <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "15px" }} className='text-red-600'>0 сомони</span></p>
          <p style={{ fontFamily: "Montserrat-Regular", fontSize: "15px" }} className='flex justify-between items-center my-1'>Списано баллов  <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "15px" }} className='text-red-600'>0 сомони</span></p>
          <p style={{ fontFamily: "Montserrat-Regular", fontSize: "15px" }} className='flex justify-between items-center my-1'>Доставка <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "15px" }}>40 сомони</span></p>
          <p style={{ fontFamily: "Montserrat-Regular", fontSize: "15px" }} className='flex justify-between items-center my-1'>К оплате <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "15px" }}>600 сомони</span></p>
          <p style={{ fontFamily: "Montserrat-Regular", fontSize: "15px" }} className='flex justify-between items-center my-1'>Начислено баллов <span style={{ fontFamily: "Montserrat-SemiBold", fontSize: "15px", color: "#0E9F6E" }} >20 сомони</span></p>
        </div>
        
        <div style={{ fontFamily: "Montserrat-Bold", fontSize: "11px" }} className='flex gap-2 mt-4 mb-2 '>
          <button className='w-full p-[10px] rounded-[10px] bg-[#F5F7FA] text-[#005456]'>Отменить проведение</button>
          <button className='w-full p-[10px] rounded-[10px] bg-[#005456] text-white'>Назад</button>
        </div>
      </div>
    </div>
  )
}

export default Implementation