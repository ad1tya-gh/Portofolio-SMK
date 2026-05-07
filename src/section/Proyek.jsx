import Projects from "../data/Projects.json";
import CardProyek from "../components/CardProyek.jsx";
import { motion } from "motion/react";

function Proyek() {
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
        <div className="pt-20 px-20" id="proyek">
            <h2 className="font-bold text-white mb-3 text-4xl lg:text-5xl text-center">
                Proyek <span className="text-secondary">Unggulan</span>
            </h2>

            <motion.div className="flex flex-wrap gap-5 items-stretch justify-center mt-10 mb-10" variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}>
                {Projects.map((project) => (
                    <CardProyek key={project.id} id={project.id} img={project.img} title={project.title} tags={project.tags} />
                ))}
            </motion.div>
        </div>
    );
}

export default Proyek;
