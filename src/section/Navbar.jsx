import NavBt from "../components/NavBt";
import { useState } from "react";

function Navbar() {
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!active);
    };
    return (
        <header className="bg-dark opacity-85 backdrop-blur-[5px] top-0 left-0 w-full flex items-center z-10 fixed">
            <div className="container mx-auto">
                <div className="flex items-center justify-between relative">
                    <div className="px-4 ml-4">
                        <a href="#beranda" className="font-bold text-xl pl-5 text-white block py-6 font-poppins">
                            Ahmad Aditya
                        </a>
                    </div>
                    <div className="flex items-center px-4">
                        <button
                            id="hamburger"
                            name="humburger"
                            type="button"
                            className={active ? "hamburger-active block absolute right-6 lg:hidden focus:outline-none z-10" : "block absolute right-6 lg:hidden focus:outline-none z-10"}
                            onClick={toggleMenu}
                        >
                            <span className="hamburger-menu transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="hamburger-menu transition duration-300 ease-in-out"></span>
                            <span className="hamburger-menu transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>

                        <nav
                            id="nav-menu"
                            className={
                                active
                                    ? "opacity-100 visible translate-0 absolute py-5 bg-[#212121] shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:max-w-full lg:shadow-none lg:bg-transparent lg:py-0 transition-all duration-300"
                                    : "opacity-0 invisible -translate-y-5 absolute py-5 bg-[#212121] shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:max-w-full lg:shadow-none lg:bg-transparent lg:py-0 transition-all duration-300"
                            }
                        >
                            <ul className="block lg:flex">
                                <NavBt />
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
