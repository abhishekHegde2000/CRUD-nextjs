import Link from "next/link"

const Navbar = () => {
  return (
    <>
        <header className="w-full md:w-[70%] py-3 px-2 mx-auto items-center">

            <nav 
            className="w-full flex justify-between  border shadow-md p-2 rounded-md items-center "> 
                <Link href={'/'} className="font-bold text-2xl">
                    Crud - App
                </Link>
                <ul className="flex space-x-2 font-semibold">
                    <li>
                        <Link href={'/'} className=" ">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={'/about'} className=" ">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href={'/contact'} className=" ">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

        </header>
    </>
  )
}

export default Navbar