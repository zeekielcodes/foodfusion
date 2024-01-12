import Image from 'next/image'
import React from 'react'

function Nav() {
  return (
    <nav className='px-4 md:px-8 lg:px-12 xl:px-40 py-2 flex justify-between items-center'>
        <Image src="/logo.png" height={50} width={100} className='h-[50px] w-auto ' alt='FoodFusion'/>
        <ul className='flex items-center gap-3'>
            <li>Home</li>
            <li>About</li>
            <li>Docs</li>
        </ul>
    </nav>
  )
}

export default Nav