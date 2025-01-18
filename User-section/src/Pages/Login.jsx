
import { Link } from "react-router-dom";
import { nav_link } from "../Constants";

const Login = () => {
  return (
    <section>
      <h2 className="font-AntonSC font-bold text-center text-[white] text-5xl block mt-10 dark:text-primary-600">Login</h2>
      <div className="flex flex-col align-center items-center p-10 ">
        <form action="submit" className="flex flex-col" >
          <div className="flex flex-col">
            <label className="text-login font-bold text-xl pb-4 dark:text-primary-600">Email</label>
            <input type="email" placeholder="Email" className="text-black dark:placeholder:text-primary-600 text-lg rounded-lg w-[500px] h-12 p-4 dark:border-primary border-2 focus:border-primary-600 focus:ring-2  focus:outline-none" /><br /><br />
          </div>
          <div className="flex flex-col">
            <label className="text-login font-bold text-xl pb-4 dark:text-primary-600">Password</label>
            <input type="password" placeholder="Password" className="text-black dark:placeholder:text-primary-600 text-lg rounded-lg w-[500px] h-12 p-4 dark:border-primary border-2 focus:border-primary-600 focus:ring-2  focus:outline-none" /><br /><br />
          </div>
        </form>
        <div className="flex justify-between w-[730px] mt-10 ">
          {nav_link.map(({ href, label }) => (
            <Link to={'/' + href} key={label} className={`font-bold px-24 py-4 rounded-xl  ${label === 'Login' ? 'bg-primary text-[white] hover:bg-[#0A5561]' : 'bg-[white] dark:bg-gray-300 dark:hover:bg-gray-200 text-[black] hover:text-[#9B9797]'}`}>{label}</Link>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Login
