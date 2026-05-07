import TechIcon from "../components/TechIcon.jsx";
import { motion } from "motion/react";

function TechStack() {
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
        <div className="py-10 px-20">
            <h2 className="font-bold text-secondary mb-3 text-4xl lg:text-5xl text-center font-poppins">
                Tech <span className="text-white">Stack</span>
            </h2>
            <motion.div className="flex flex-wrap gap-5 starting-center justify-center mt-10 mb-10" variants={container} initial="hidden" whileInView="show" viewport={{ once: false }}>
                <TechIcon name="HTML" variant="stack" />
                <TechIcon name="CSS" variant="stack" />
                <TechIcon name="javascript" variant="stack" />
                <TechIcon name="tailwind" variant="stack" />
                <TechIcon name="bootstrap" variant="stack" />
                <TechIcon name="php" variant="stack" />
                <TechIcon name="mysql" variant="stack" />
                <TechIcon name="React" variant="stack" />
            </motion.div>
        </div>
    );
}

export default TechStack;
