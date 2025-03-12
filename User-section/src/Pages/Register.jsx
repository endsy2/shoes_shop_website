import { Link, useNavigate } from "react-router-dom";
import { nav_link } from "../Constants";
import { useState } from "react";

// const register=async()

const Register = () => {
  return (
    <section >
      <h2 className="font-AntonSC font-bold text-center dark:text-[white] text-5xl block mt-7 text-black ">Register</h2>
      <div className="flex flex-col justify-center items-center p-10 ">
        <form action="submit" className="flex flex-col items-center justify-center" >
          <div className="flex flex-col ">
            <label className="text-login text-lg font-bold text-black ">Email</label>
            <input type="email" placeholder="Email" className="text-black placeholder:text-black text-lg rounded-lg w-[500px] h-12 p-4 border-black border-2 focus:border-primary-600 focus:ring-2  focus:outline-none" /><br /><br />
          </div>
          <div className="flex flex-col ">
            <label className="text-login text-lg font-bold text-black">Password</label>
            <input type="password" placeholder="Password" className="text-black placeholder:text-black text-lg rounded-lg w-[500px] h-12 p-4 border-black border-2 focus:border-primary-600 focus:ring-2  focus:outline-none" /><br /><br />
          </div>
          <div className="flex flex-col ">
            <label className="text-login text-lg font-bold text-black">Confirm Password</label>
            <input type=" password" placeholder="Comfirm Password" className="text-black placeholder:text-black text-lg rounded-lg w-[500px] h-12 p-4 border-black border-2 focus:border-primary-600 focus:ring-2  focus:outline-none" /><br /><br />
          </div>
        </form>
        <div className="flex justify-between w-[730px] mt-4">
          {nav_link.map(({ href, label }) => (
            <Link to={'/' + href} key={label} className={`font-bold px-24 py-4 rounded-xl  ${label === 'Login' ? 'bg-primary text-black hover:bg-primary-600' : 'dark:bg-[white] bg-gray-300 hover:bg-gray-200 text-[black] hover:text-[#9B9797]'}`}>{label}</Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Register;
