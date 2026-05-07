import FormKontak from "../components/FormKontak";
import { motion } from "motion/react";

function Kontak() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.16, // jeda antar item
            },
        },
    };
    return (
        <motion.section className="py-20 px-20" id="kontak" variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.6 }}>
            <h2 className="font-bold text-secondary mb-3 text-4xl lg:text-5xl text-center font-poppins">
                Kontak <span className="text-white">Saya</span>
            </h2>
            <FormKontak />
        </motion.section>
    );
}

export default Kontak;
