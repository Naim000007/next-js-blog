"use client"
import { assets, blog_data } from '@/Assets/assets'
import Footer from '@/Components/Footer'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
    const [data, setData] = useState(null)


    const fetchBlogData = async () => {
        // for (let i = 0; i < blog_data.length; i++) {
        //     if (Number(params.id) === blog_data[i].id) {
        //         setData(blog_data[i])
        //         console.log(blog_data[i]);
        //         break
        //     }
        // }
        const response = await axios.get('/api/blog', {
            params: {
                id: params.id
            }
        })
        setData(response.data)
    }

    useEffect(() => {
        fetchBlogData()
    }, [])

    return (
        data ? <>
            <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                <div className='flex justify-between items-center'>
                    <Link href={`/`}>
                        <Image src={assets.logo} alt='' width={180} className='w-[130px] sm:w-auto' />
                    </Link>
                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt=""  ></Image>  </button>

                </div>
                <div className="text-center my-24">
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'> {data.title} </h1>
                    <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} alt='Image' width={60} height={60} />
                    <p className='mt-1 pb-2 textlg max-w-[740px] mx-auto'>{data.author}</p>
                </div>
            </div>
            <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='' />
                <h1 className='my-8 text-[-26px] font-semibold'>Introduction:</h1>
                <p>{data.description}</p>
                <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Settings</h3>
                <p className='my-3'>Befor you can manage your lifestyle, you must have a clear and achival goal. start by reflecting on your values, aspirations and long-term goals.</p>
                <p className='my-3'>Befor you can manage your lifestyle, you must have a clear and achival goal. start by reflecting on your values, aspirations and long-term goals.</p>
                <h3 className='my-5 text-[18px] font-semibold'>Step 2: Self-Reflection and Goal Settings</h3>
                <p className='my-3'>Befor you can manage your lifestyle, you must have a clear and achival goal. start by reflecting on your values, aspirations and long-term goals.</p>
                <p className='my-3'>Befor you can manage your lifestyle, you must have a clear and achival goal. start by reflecting on your values, aspirations and long-term goals.</p>
                <h3 className='my-5 text-[18px] font-semibold'>Step 3: Self-Reflection and Goal Settings</h3>
                <p className='my-3'>Befor you can manage your lifestyle, you must have a clear and achival goal. start by reflecting on your values, aspirations and long-term goals.</p>
                <p className='my-3'>Befor you can manage your lifestyle, you must have a clear and achival goal. start by reflecting on your values, aspirations and long-term goals.</p>
                <h3 className='my-5 text-[18px] font-semibold'>Conclusion </h3>
                <p className='my-3'>Managing your lifestyle is a journey that requires and self awarness. By following setps by step guide  you can take control of your life and make meaningful chane that lead to a more balanced and fulfilling lifestyle. Befor you can manage your lifestyle, you must have a clear and achival goal. start by reflecting on your values, aspirations and long-term goals.Managing your lifestyle is a journey that requires and self awarness. By following setps by step guide  you can take control of your life and make meaningful chane that lead to a more balanced and fulfilling lifestyle. Befor you can manage your lifestyle, you must have a clear and achival goal. start by reflecting on your values, aspirations and long-term goals.</p>
                <div className='my-24'>
                    <p className='text-black font font-semibold my-4'>Share this article on socila media</p>
                    <div className='flex'>
                        <Image src={assets.facebook_icon} alt='facebook' width={50} />
                        <Image src={assets.twitter_icon} alt='facebook' width={50} />
                        <Image src={assets.googleplus_icon} alt='facebook' width={50} />
                    </div>
                </div>

            </div>
            <Footer />
        </> : <></>
    )
}

export default page