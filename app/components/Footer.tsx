import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='px-4 md:px-8 lg:px-12 xl:px-40 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'> 
        <Link href="/"><Image src="/logo.png" height={50} width={70} className='h-[50px] w-auto ' alt='FoodFusion'/></Link>
        <ul>
          <h5 className='text-lg mb-3 font-semibold'>Links</h5>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Docs</Link></li>
        </ul>

        <ul>
          <h5 className='text-lg mb-3 font-semibold'>More Links</h5>
          <li><Link href="/">GitHub</Link></li>
          <li><Link href="/">API</Link></li>
          <li><Link href="/">Docs</Link></li>
        </ul>

        <p>&copy; {new Date().getFullYear()} DishDart, All rights reserved.</p>
    </footer>
  )
}
