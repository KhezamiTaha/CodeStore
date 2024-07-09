import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa6";
import { FaEyeLowVision } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  console.log('data set', data)


  return (
    <section id='login'>
      <div className='mx-auto container p-4'>

        <div className=' bg-white p-3 w-full max-w-sm mx-auto'>
          <div className='w-20 h-20 mx-auto'>
            <img src={loginIcons} alt='login icon' />
          </div>

          <form className='pt-7' onSubmit={handleSubmit}>

            <div className='grid'>
              <label>Email :</label>
              <div className='bg-slate-100 p-2'>
                <input
                  type='email'
                  placeholder='enter email '
                  name='email'
                  value={data.email}
                  onChange={handleOnChange}
                  className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>

            <div>
              <label>Password :</label>
              <div className='bg-slate-100 p-2 flex'>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder='enter password'
                  name='password'
                  value={data.password}
                  onChange={handleOnChange}
                  className='w-full h-full outline-none bg-transparent' />
                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((prev) => !prev)}>
                  <span>
                    {
                      showPassword ? (
                        <FaEyeLowVision />
                      )
                        :
                        (
                          <FaEye />
                        )
                    }


                  </span>
                </div>
              </div>

              <Link to={'/forgot-password'} className='block text-blue-500 underline  hover:text-blue-700 w-fit ml-auto '>
                Forgot
              </Link>
            </div>
            <button className='bg-envatoGreen text-white px-5 py-3 w-full max-w-[150px] hover:bg-green-700 rounded-xl hover:scale-105 transition-all mx-auto block  mt-7'>Login</button>
          </form>

          <p className='my-5 text-gray-500 text-center'>New here? <Link to={"/sign-up"} className='text-blue-500 underline hover:text-blue-700' >Create a CodeStore account</Link></p>



        </div>
      </div>
    </section>
  )
}

export default SignUp