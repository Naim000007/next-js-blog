"use client"
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

    const [blogs, setBlogs] = useState([])

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog')
        setBlogs(response.data.blogs);
    }

    const deleteBlog = async (mongoId) => {
        const response = await axios.delete('/api/blog', {
            params: {
                id: mongoId
            }
        })
        toast.success(response.data.msg)
        fetchBlogs()
    }

    useEffect(() => {
        fetchBlogs()
    }, [])
    return (
        <div className='flex-1 px-5 sm:pt-12 sm:pl-16'>
            <h1 className='text-2xl font-semibold text-gray-800'>All Blogs</h1>
            <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-6 border border-gray-300 rounded-lg shadow-md'>
                <table className='w-full text-sm text-gray-600'>
                    <thead className='bg-gray-100 text-gray-700 text-left uppercase tracking-wider'>
                        <tr>
                            <th scope='col' className='hidden sm:block px-6 py-4 font-semibold'>Author Name</th>
                            <th scope='col' className='px-6 py-4 font-semibold'>Blog Title</th>
                            <th scope='col' className='px-6 py-4 font-semibold'>Date</th>
                            <th scope='col' className='px-6 py-4 font-semibold'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                        {
                            blogs.map((item, index) => {
                                return <BlogTableItem key={index} title={item.title} mongoId={item._id} author={item.author} data={item.date} deleteBlog={deleteBlog} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default page
