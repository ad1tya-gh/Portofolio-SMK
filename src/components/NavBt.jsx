import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "motion/react";

function NavBt({ name }) {
    const [active, setActive] = useState("beranda");

    const menuItems = [
        { id: "beranda", name: "Beranda" },
        { id: "tentang-saya", name: "Tentang Saya" },
        { id: "proyek", name: "Proyek" },
        { id: "kontak", name: "Kontak" },
    ];

    return (
        <>
            {menuItems.map((item) => (
                <li className="group">
                    <NavHashLink
                        key={item.id}
                        to={`/#${item.id}`}
                        className={
                            active === item.id
                                ? "nav-menu-active text-base font-medium text-white py-2 mx-8 flex group-hover:text-primary group-hover:border-b group-hover:border-slate-400 font-poppins transition duration-300 ease-in"
                                : "text-base font-medium text-white py-2 mx-8 flex group-hover:text-primary group-hover:border-b group-hover:border-slate-400 font-poppins transition duration-300 ease-in"
                        }
                        onClick={() => setActive(item.id)}
                    >
                        {item.name}
                    </NavHashLink>
                </li>
            ))}
        </>
    );
}

export default NavBt;
