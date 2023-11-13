import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <header>
                <nav className="w-full md:[70%] py-3 px-2 shadow-md">

                    <Link href={'/'}
                    className="font-bold text-2xl">
                        CRUD APP
                    </Link>
                    {/* {creat Home , Contact , About} */}
                    <ul className="flex justify-end space-x-4">
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link href={'/contact'}>Contact</Link>
                        </li>   
                    </ul>
                </nav>
            </header>
    </>
  )
}

export default Navbar