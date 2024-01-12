import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <div className='flex flex-col md:flex-row gap-2 items-center'>
            <div className='w-full md:w-1/2'>
                <p className='bg-[#FEE9DE] text-primary px-4 py-2 w-[200px] rounded-3xl'>
                    Easy to use API
                </p>
                <h1 className='text-5xl font-extrabold mt-8 mb-4'>Welcome to <span className='text-primary'>FoodFusion</span></h1>
                <p className='my-2'>Are you a frontend developer with a hunger for innovation? Dive into the realm of delightful possibilities with FoodFusion API - your gateway to seamless food ordering and menu integration.</p>
                <p className='mb-6'>From mouthwatering dishes to culinary masterpieces, our API empowers you to build the next generation of food-centric web experiences.</p>
            <div className='flex gap-2 items-center'>
                <Link href="/docs" className='bg-primary text-white px-6 py-3 rounded-3xl'>Get Started</Link>
                <Link href="/docs" className='flex items-center px-6 py-3 rounded-3xl'><Image src="/play.svg" height={80} width={80} alt='play' className='h-[80px] aspect-square' /> View Docs</Link>
            </div>
            </div>
            <Image src="/hero.png" height={300} width={300} alt='Hero' className='w-full md:w-1/2 h-auto' />
        </div>
    )
}
