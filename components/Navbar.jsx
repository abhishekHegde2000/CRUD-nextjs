import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center  m-2 p-2 justify-between">
        <Link href={'/'} className="font-bold text-3xl text-white">
            Crud App
        </Link>
        <ul className='flex space-x-2'>
            <li><Link href={'/'} className="font-bold text-2xl text-white">Home</Link></li>
            <li><Link href={'/about'} className="font-bold text-2xl text-white">About</Link></li>
            <li><Link href={'/contact'} className="font-bold text-2xl text-white">Contact</Link></li>
        </ul>
    </nav>

  )
}

export default Navbar