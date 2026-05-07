import { useParams, Link } from "react-router-dom";
import Projects from "../data/Projects.json";
import TechIcon from "./TechIcon";
import { HashLink } from "react-router-hash-link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";

function DetailProjek() {
    const { id } = useParams(); // Mengambil ID dari URL
    const project = Projects.find((p) => p.id === id);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // jeda antar item
            },
        },
    };

    const itemLi = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    if (!project) return <div className="text-white text-center font-bold text-3xl font-poppins pt-40">Proyek tidak ditemukan.</div>;

    return (
        <div className="min-h-screen bg-[#121212] text-white pt-25 pb-10 px-10 md:px-20">
            <HashLink to="/#proyek" className="text-white bg-primary hover:bg-secondary mb-4 text-poppins font-semibold py-1 px-2 rounded-lg inline-block transition-all duration-300 hover:scale-105 ease-in-out hover:cursor-pointer">
                Kembali
            </HashLink>

            {/* Grid untuk Gambar dan Deskripsi */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-3">
                    {/* Judul Proyek */}
                    <motion.h1 className="text-4xl font-bold mb-4 font-poppins" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        {project.title}
                    </motion.h1>

                    {/* Deskripsi */}
                    <motion.p className="text-slate-300 leading-relaxed mb-6" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                        {project.desc}
                    </motion.p>

                    {/* Tech Stack */}
                    <motion.div className="flex flex-wrap gap-2" variants={container} initial="hidden" animate="show">
                        {project.tags.map((tag, index) => (
                            <TechIcon key={index} name={tag} variant="tag" />
                        ))}
                    </motion.div>
                </div>

                <div>
                    <Swiper modules={[Pagination, Autoplay]} spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 3000 }} loop>
                        {project.img.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt={`${project.title} ${index + 1}`} className="w-full max-h-80 object-cover rounded-lg" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Fitur utama */}
                    <div className="mt-6">
                        <motion.h2 className="text-2xl font-semibold mb-2 font-poppins" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            Fitur Utama
                        </motion.h2>
                        <motion.ul className="list-disc list-inside text-slate-300 space-y-1" variants={container} initial="hidden" animate="show" transition={{ delay: 0.8 }}>
                            {project.fitur.map((fitur, index) => (
                                <motion.li key={index} variants={itemLi}>
                                    {fitur}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailProjek;
