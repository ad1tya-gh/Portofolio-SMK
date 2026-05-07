import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiPhp } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { useState } from "react";
import { motion } from "motion/react";

function TechIcon({ name, variant = "stack" }) {
    const techData = {
        html: {
            icon: <FaHtml5 />,
            color: "text-orange-500",
            label: "HTML",
        },
        css: {
            icon: <FaCss3Alt />,
            color: "text-blue-500",
            label: "CSS",
        },
        javascript: {
            icon: <RiJavascriptFill />,
            color: "text-yellow-400",
            label: "JavaScript",
        },
        react: {
            icon: <FaReact />,
            color: "text-cyan-400",
            label: "React",
        },
        mysql: {
            icon: <GrMysql />,
            color: "text-blue-700",
            label: "MySQL",
        },
        tailwind: {
            icon: <SiTailwindcss />,
            color: "text-blue-400",
            label: "Tailwind CSS",
        },
        bootstrap: {
            icon: <FaBootstrap />,
            color: "text-purple-500",
            label: "Bootstrap",
        },
        php: {
            icon: <SiPhp />,
            color: "text-purple-600",
            label: "PHP",
        },
    };

    // 2. Ambil data berdasarkan prop 'name' yang dikirim
    // Jika nama tidak terdaftar, tampilkan default abu-abu
    const selectedTech = techData[name.toLowerCase()] || {
        icon: null,
        color: "text-gray-400",
        label: name,
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 },
    };
    const item2 = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    if (variant === "stack") {
        return (
            <motion.div className="flex flex-col items-center gap-2 bg-[#212121] border-1 text-white rounded-lg py-3 px-5" variants={item}>
                <span className={`text-2xl ${selectedTech.color}`}>{selectedTech.icon}</span>
                <span className="text-white text-sm font-semibold font-poppins">{selectedTech.label}</span>
            </motion.div>
        );
    }

    return (
        <motion.div className="flex gap-1 items-center border-1 border-slate-500 rounded-lg p-1" variants={item2}>
            <span className={`text-lg ${selectedTech.color}`}>{selectedTech.icon}</span>
            <span className="text-white text-xxs font-semibold font-poppins">{selectedTech.label}</span>
        </motion.div>
    );
}

export default TechIcon;
