import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <nav className='px-4 md:px-8 lg:px-12 xl:px-40 py-2 flex flex-col md:flex-row md:justify-between md:items-center'>
        <Link href="/"><Image src="/logo.png" height={50} width={100} className='h-[50px] w-auto ' alt='FoodFusion'/></Link>
        <ul className='flex items-center gap-3'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/docs">Docs</Link></li>
        </ul>
    </nav>
  )
}

export default Nav