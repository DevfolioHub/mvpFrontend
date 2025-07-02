import { Link } from "react-router-dom";
import icon from "../assets/bitmoji.jpg"
import ham from "../assets/ham.png"
import close from "../assets/close.png"
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import resume from "../assets/MyResume.pdf";


const Nav = () => {
  const [menuToggled, setMenuToggled] = useState(false)

  // Define the media query for medium screens (example: 768px and above)
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const clickNav = () => {
    console.log(menuToggled);
    setMenuToggled(prev => !prev)
    if (isMediumScreen){
      setMenuToggled(false)
    }
  }

  return (
    <nav className={`flex justify-between font-bold text-base bg-[#E4F3FF] items-center md:px-20 px-10 py-6 border-b-[1px] border-b-black border z-50 left-0 right-0`}>
      <div>
        <img src={icon} alt="manny's bitmoji" className="rounded-full w-14 border-2 border-[#a56526]"/>
      </div>
        <ul className={`flex gap-8 pt-[106px] md:pt-0 font-light items-center text-base md:relative md:navv z-50 ${menuToggled ? 'show' : ''} md:flex-row flex-col fixed justify-start md:justify-end h-dvh md:h-auto bg-[#E4F3FF] left-0 right-0 bottom-0 ${menuToggled ? 'translate-x-0' : 'translate-x-[-100%]'} transition-transform duration-500 ease-in-out md:translate-x-0 `}>
          <li onClick={clickNav} className="hover:cursor-pointer "><Link to="/" className="text-[#010536] focus:font-bold">Home</Link></li>
          <li onClick={clickNav} className="hover:cursor-pointer"><Link to="/about" className="text-[#010536] focus:font-bold">About me</Link></li>
          <li onClick={clickNav} className="hover:cursor-pointer"><Link to="/works" className="text-[#010536] focus:font-bold">Works</Link></li>
          {/* <li onClick={clickNav} className="hover:cursor-pointer"><Link to="/contact" className="text-[#010536]">Contact me</Link></li> */}
          <li onClick={clickNav} className="hover:cursor-pointer"><a href={resume} target="_blank" rel="noopener noreferrer" className="text-[#010536]">Resume</a></li>
          <div id="themeswitcher"></div>
        </ul>
        {menuToggled ? <img src={close} width="30px" className="md:hidden block cursor-pointer" onClick={clickNav} /> : <img src={ham} alt="hamburger" className='md:hidden block cursor-pointer' onClick={clickNav}/> }
    </nav>
  )
}

export default Nav;