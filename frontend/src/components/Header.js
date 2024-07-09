import React from 'react'
import Logo from './Logo'
import { IoSearch } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link to={"/"}>
            <Logo w={300} h={110} />
          </Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-3'>
          <input type='text' placeholder='Search application here...' className='w-full  outline-none' />
          <div className='text-lg min-w-[50px] h-8 bg-envatoGreen flex items-center justify-center rounded-r-full text-white'>
            <IoSearch />
          </div>
        </div>



        <div className='flex items-center grap-7 '>

          <div className='text-2xl relative'>

            <span><FaCartShopping /></span>
            <div className='bg-envatoGreen text-white w-5 h-5  rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3 '>
              <p className='text-xs'>0</p>
            </div>
          </div>



          <div className='text-2xl cursor-pointer ml-5' >
            <FaRegCircleUser />
          </div>

          <div>
            <Link to={"/login"} className='px-3 py-1 rounded-full text-white  bg-envatoGreen hover:bg-green-700 ml-7'>Login</Link>
          </div>



        </div>
      </div>
    </header>
  )
}

export default Header