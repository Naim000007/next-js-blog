import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
            <Image src={assets.logo_light} alt='' width={120} />
            <p className='text-sm text-white'>All right reserved. Copyright @blooger</p>
            <div className='flex '>
                <Link href="https://www.facebook.com/profile.php?id=100025159483956"><Image src={assets.facebook_icon} alt='' width={40} /></Link>
                <Link href="https://www.linkedin.com/in/sheikh-naim/"><Image src={assets.twitter_icon} alt='' width={40} /></Link>
                <Image src={assets.googleplus_icon} alt='' width={40} />
            </div>
        </div>
    )
}

export default Footer