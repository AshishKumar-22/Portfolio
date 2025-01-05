import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { NAVIGATION_LINKS } from '../constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
        setIsMobileMenuOpen(false)
    }
    return (
        <div >
            <nav className=' fixed left-0 right-0 top-2 z-50 '>
                {/* desktop menu  */}
                <div className="mx-auto hidden max-w-2xl  items-center justify-around rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex   ">
                    <div className="flex  items-center justify-between gap-6 ">
                            <a href="#" className='flex' >
                                <img src={logo} width={160}  alt="" className='' />
                            </a>
                    </div>
                    <ul className='flex items-center gap-7 p-0.5 '>
                        {NAVIGATION_LINKS.map((item, index) => (
                            <li key={index}>
                                <a className='text-sm  hover:text-green-600  hover:border-red-600  cursor-pointer' href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>


                {/*------------------ {mobile Menu}------------------ */}

                <div className=' rounded-lg backdrop-blur-md lg:hidden mr-2 ml-2 pl-2 pr-2'>
                    <div className={`flex items-center justify-between rounded-lg ${isMobileMenuOpen ? 'border' : ''}`}>
                        <div>
                            <a href="#">
                                <img src={logo} alt="logo" width={90} className='m-2' />
                            </a>
                        </div>
                        <div className='flex items-center'>
                            <button className='focus:outline-none lg-hidden ' onClick={toggleMobileMenu}>{isMobileMenuOpen ? <FaTimes className='m-2 h-6 w-5' /> : <FaBars className='m-2 h-6 w-5 ' />}</button>
                        </div>
                    </div>
                    {
                        isMobileMenuOpen && (
                            <ul className='ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md border border-t-0 rounded p-2 '>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index} >
                                        <a href={item.href} className='block w-full text-lg pl-2 pr-2 border-b-[0.3px] ' onClick={(e) => handleLinkClick(e, item.href)} >{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar
