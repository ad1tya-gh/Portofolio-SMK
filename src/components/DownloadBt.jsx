import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "motion/react";

function DownloadBt() {
    const animasi = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };
    return (
        <motion.a
            href="../public/CV/CV Ahmad Aditya.pdf"
            download="CV_Ahmad_Aditya.pdf"
            className="bg-primary inline-flex items-center gap-2 text-white font-semibold py-3 px-6 rounded-full hover:bg-[#02c39a] transition duration-300 hover:scale-105 ease-in-out"
            variants={animasi}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
        >
            Download CV
            <span className="text-2xl">
                <MdOutlineFileDownload />
            </span>
        </motion.a>
    );
}

export default DownloadBt;
