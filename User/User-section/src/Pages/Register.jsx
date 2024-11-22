import { Link, useNavigate } from "react-router-dom";
import { nav_link } from "../Constants";
import { useState } from "react";



// const register=async()

const Register = () => {
  return (
    <section>
      <Link to='/'><h1 className='font-Jaro  text-primary max-xl:text-2xl text-6xl px-16 py-16 '>Shoes Store</h1></Link>
      <h2 className="font-AntonSC font-bold text-center text-[white] text-5xl block ">Register</h2>
      <div className="flex flex-col align-center items-center p-20 mr-16">
        <form action="submit" >
          <label className="text-login">Email</label>
          <input type="email" placeholder="Email" className="text-xl ml-[250px] rounded-lg w-[500px] h-12 p-4" /><br /><br />
          <label className="text-login">Password</label>
          <input type="password" placeholder="Password" className="text-xl ml-[197px] rounded-lg w-[500px] h-12 p-4"/><br /><br />
          <label className="text-login">Confirm Password</label>
          <input type=" password" placeholder="Comfirm Password" className="text-xl ml-24 rounded-lg w-[500px] h-12 p-4"/><br /><br />
        </form>
        <div className="flex justify-between w-[730px] mt-32">
        {nav_link.map(({href,label})=>(
          <Link to={'/'+href} key={label} className={`font-bold px-24 py-4 rounded-xl  ${label==='Login'?'bg-primary text-[white] hover:bg-[#0A5561]':'bg-[white] text-[black] hover:text-[#9B9797]'}`}>{label}</Link>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Register;
