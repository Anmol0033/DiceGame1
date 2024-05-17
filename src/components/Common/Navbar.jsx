import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
import { setToken } from '../../../Features/Auth/AuthSlice'
// import toast qfrom 'react-hot-toast';


export const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector((state)=>state.auth.token)
  console.log(token);
  const handleLogout = ()=>{
    dispatch(setToken(null));
    localStorage.removeItem("token")
    toast.success("Logout Success");
    navigate("/");
  }
  return (
    <div className='border-solid bg-white border-b-2 border-b-blue-100 sticky top-0 flex justify-between min-h-16 items-center px-2 md:px-4 shadow-md z-50'>
        <Link to={"/"}><div className='font-bold text-[18px] md:text-[25px]'>Dice Game</div></Link>
        <div >
            <ul className='flex gap-4 md:gap-12'>
                <Link to={"/"}><li className='border border-none rounded-md hover:bg-black hover:text-white hover:rounded-md px- md:px-4 transition ease-in-out delay-150 duration-400'>Home</li></Link>
                <Link><li className='border border-none rounded-md hover:bg-black hover:text-white hover:rounded-md px- md:px-4 transition ease-in-out delay-150 duration-400'>Contact</li></Link>
                <Link to={"/"}><li className='border border-none rounded-md hover:bg-black hover:text-white hover:rounded-md px- md:px-4 transition ease-in-out delay-150 duration-400'>About us</li></Link>
            </ul>
        </div>
        {token ? 
            <Link to={"/logout"} onClick={handleLogout}><button>Logout</button></Link>
        :
        <div className='hidden md:flex md:gap-6'>
            <Link to={"/"}><button onSubmit={"/login"}>Login</button></Link>
            <Link to={"/"}><button>Signup</button></Link>
        </div>
        }
    </div>
  )
}
