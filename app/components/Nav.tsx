import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <nav className='px-4 md:px-8 lg:px-12 xl:px-40 py-2 flex justify-between items-center'>
        <Link href="/"><Image src="/logo.png" height={50} width={70} className='h-[20px] md:h-[30px] lg:h-[50px] w-auto ' alt='FoodFusion'/></Link>
       
        <Link href="/docs">Docs</Link>
     
    </nav>
  )
}

export default Nav