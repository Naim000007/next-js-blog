import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {
    // Check if the date is valid or fallback to a default value
    const BlogDate = date ? new Date(date) : new Date();
    const formattedDate = BlogDate.toString() === 'Invalid Date' ? 'Date not available' : BlogDate.toDateString();

    return (
        <tr className='bg-white border-b hover:bg-gray-50 transition-colors duration-150'>
            <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <Image
                    src={authorImg || assets.profile_icon}
                    alt="Author"
                    width={40}
                    height={40}
                    className='rounded-full shadow-sm'
                />
                <p>{author || "Naim Sheikh"}</p>
            </th>
            <td className='px-6 py-4 text-gray-700'>
                {title || "No title"}
            </td>
            <td className='px-6 py-4 text-gray-500'>
                {formattedDate}
            </td>
            <td onClick={() => { deleteBlog(mongoId) }} className='px-6 py-4 text-center text-red-500 cursor-pointer hover:text-red-600'>
                x
            </td>
        </tr>
    );
}

export default BlogTableItem;
