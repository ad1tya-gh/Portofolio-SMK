import { FaTelegramPlane, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { motion } from "motion/react";

function Sosmed({ sosmed, link }) {
    const sosmedData = {
        telegram: {
            icon: <FaTelegramPlane />,
        },
        linkedin: {
            icon: <FaLinkedinIn />,
        },
        github: {
            icon: <FaGithub />,
        },
        instagram: {
            icon: <FaInstagram />,
        },
    };

    const sosmedIcon = sosmedData[sosmed]?.icon;

    const item = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        show: { opacity: 1, scale: 1, y: 0 },
    };

    return (
        <motion.a href={link} target="_blank" className="text-white" variants={item}>
            <span className={`text-xl `}>{sosmedIcon}</span>
        </motion.a>
    );
}

export default Sosmed;
