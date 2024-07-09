import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa6";
import { FaEyeLowVision } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)


  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
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

  const handleUploadPic = async (e) => {
    const file = e.target.files[0]

    const imagePic = await imageTobase64(file)

    setData((preve) => {
      return {
        ...preve,
        profilePic: imagePic
      }
    })

  }


  const handleSubmit = async (e) => {
    e.preventDefault()


  }



  console.log('data set', data)


  return (
    <section id='login'>
      <div className='mx-auto container p-4'>

        <div className=' bg-white p-3 w-full max-w-sm mx-auto'>


          <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
            <div>
              <img src={data.profilePic || loginIcons} alt='login icons' />
            </div>
            <form>
              <label>
                <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                  Upload  Photo
                </div>
                <input type='file' className='hidden' onChange={handleUploadPic} />
              </label>
            </form>
          </div>

          <form className='pt-7 flex flex-col gap-2' onSubmit={handleSubmit}>


            <div className='grid'>
              <label>Name : </label>
              <div className='bg-slate-100 p-2'>
                <input
                  type='text'
                  placeholder='enter your name'
                  name='name'
                  value={data.name}
                  onChange={handleOnChange}
                  required
                  className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>



            <div className='grid'>
              <label>Email :</label>
              <div className='bg-slate-100 p-2'>
                <input
                  type='email'
                  placeholder='enter email '
                  name='email'
                  value={data.email}
                  onChange={handleOnChange}
                  required
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
                  required
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
            </div>




            <div>
              <label>Confirm Password :</label>
              <div className='bg-slate-100 p-2 flex'>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder='enter password again'
                  name='confirmPassword'
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  required
                  className='w-full h-full outline-none bg-transparent' />
                <div className='cursor-pointer text-xl' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                  <span>
                    {
                      showConfirmPassword ? (
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
            </div>






            <button className='bg-envatoGreen text-white px-5 py-3 w-full max-w-[150px] hover:bg-green-700 rounded-xl hover:scale-105 transition-all mx-auto block  mt-7'>Sign Up</button>
          </form>

          <p className='my-5 text-gray-500 text-center'>Already have a CodeStore Account? <Link to={"/login"} className='text-blue-500 underline hover:text-blue-700' >Login here.</Link></p>



        </div>
      </div>
    </section>
  )
}

export default SignUp