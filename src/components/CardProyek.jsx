import TechIcon from "./TechIcon.jsx";
import Detail from "./Detail.jsx";
import { motion } from "motion/react";

function CardProyek({ id, img, title, tags }) {
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <motion.div className="w-full md:w-1/3 lg:w-1/4 flex flex-col justify-between bg-[#212121] border text-white rounded-xl px-5 py-3" variants={item}>
            <img src={img[0]} alt={title} className="w-full h-auto object-cover rounded-lg mb-3" />
            <h3 className="font-semibold text-xl mb-2 font-poppins pt-2">{title}</h3>
            <div className="flex flex-wrap gap-1 justify-start mb-2">
                {tags.map((tag, index) => (
                    <TechIcon key={index} name={tag} variant="tag" />
                ))}
            </div>
            <Detail to={id} />
        </motion.div>
    );
}

export default CardProyek;
