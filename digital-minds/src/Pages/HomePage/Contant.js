import React from 'react'
import Title from '../../components/Titlecom/Title'

export default function Contant() {
    return (
        <section id='للتواصل' className='bg-white'>
            <div className='w-[90%] lg:w-[80%] mx-auto h-full mt-10  '>
                <Title title={"للتواصل"} />

                <div className="md:flex justify-between items-center gap-4 mt-10">
                    <div className='w-full md:w-[70%] h-full'>
                        <form className='w-full'>
                            <input type='text' placeholder='الاسم' required className='block w-[80%]  bg-[#f3f3f3] mx-auto h-[50px]  rounded-lg placeholder:pr-4 focus:outline-none my-5' />
                            <input type='tel' placeholder='رقم التليفون' required className='block bg-[#f3f3f3]  w-[80%] mx-auto h-[50px]  rounded-lg placeholder:pr-4 placeholder:text-end focus:outline-none my-5' />
                            <textarea placeholder='رسالتك' required className='block w-[80%] mx-auto bg-[#f3f3f3]  h-[150px] resize-none  rounded-lg placeholder:pr-4 focus:outline-none my-5'>
                            </textarea>
                            <div className='w-[210px] h-[40px] mx-auto'>
                                <button type='submit' className='w-full h-full text-lg  bg-[#00BF62] text-white rounded-md'>
                                    ارسال
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='w-[70%] h-[400px] bg-[#111] flex justify-center items-start text-[40px] text-white'>
                        <p>
                            هنا الخريطه
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
