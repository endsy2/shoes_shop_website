
import { NavLink } from 'react-router-dom'
import { hamburgerBar } from '../assets/icon'
import { nav_icon, nav_link } from '../Constants'
import { menubar } from '../Constants'

const NavBar = () => {
  return (
    <>
      <nav className="flex-col">
        <section className='flex justify-between items-center px-7 py-10'>
          <NavLink to="/" className="text-white">
            <h1 className='font-Jaro  text-primary max-xl:text-2xl text-6xl mx-10 w-30'>Shoes Store</h1>
          </NavLink>
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md px-5 py-1 w-[650px] h-12"
          />
          <div className="flex gap-10">
            

            {nav_icon.map(element => (
              <NavLink key={element.label} to={element.href} className='max-xl:hidden'>
                <img src={element.img} alt={element.label} className="w-12 "/>
              </NavLink>
            ))}
            
            
          </div>
          <div className='mt-3 mx-7 flex gap-10'>
          {nav_link.map(element=>(
              <NavLink key={element.label} to={element.href} className=''>
                <label className={`font-bold px-7 py-4 rounded-xl ${element.label==='Login'?'bg-primary text-[white] hover:bg-[#0A5561]':'bg-[white] text-[black] hover:text-[#9B9797]'}`} >{element.label}</label>
            </NavLink>
            ))}
          </div>
          <NavLink to='menu'>
              <img src={hamburgerBar} alt="" className='hidden max-xl:block w-10 mr-12'/>
            </NavLink>
            </section>
            <section className='bg-lightGray w-full h-20 '>
              <ol className='flex justify-center items-center w-full h-20 gap-36 text-[white] text-xl'>
                {menubar.map(({label,items})=>(
                  <li key={label} className='text-[white]'>
                    {label}
                    <div className='flex justify-center absolute top-80  bg-lightGray w-56 h-36  '>
                      {items}
                    </div>
                
                  </li>
                ))}
              </ol>
              <ol >
              </ol>
            </section>
        </nav>
        
    </>
  )
}

export default NavBar
