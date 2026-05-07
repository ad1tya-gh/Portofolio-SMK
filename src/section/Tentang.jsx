import aditya2 from "../assets/Aditya2.png";
import { motion } from "motion/react";

function Tentang() {
    return (
        <section className="py-10 pr-10" id="tentang-saya">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="hidden lg:block lg:w-1/3 px-4 self-end lg:pr-0">
                        <div className="mt-10 lg:mt-0 lg:right-0">
                            <motion.img
                                src={aditya2}
                                alt="Ahmad Aditya"
                                className="xl:scale-75 lg:scale-80 lg:-translate-y-10 md:translate-x-1/15 mx-auto sm:translate-x-0 my-auto max-w-full"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.45 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                            />
                        </div>
                    </div>
                    {/* <!-- Informasi tentang saya --> */}
                    <div className="w-full lg:w-2/3 px-5 pr-8 self-center">
                        <motion.h2
                            className="font-bold text-white mb-3 text-4xl lg:text-5xl"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.45 }}
                            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
                        >
                            Tentang <span className="text-secondary">Saya</span>
                        </motion.h2>
                        <motion.p
                            className="font-medium text-slate-400 mb-2 leading-relaxed"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.45 }}
                            transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
                        >
                            Saya tertaik pada pemrograman web sejak saya masih duduk di bangku sekolah menengah pertama. Saya mulai belajar HTML, CSS, dan JavaScript secara otodidak melalui berbagai sumber online dan proyek-proyek kecil
                            yang saya buat sendiri. Seiring berjalannya waktu, saya semakin tertarik dengan dunia pengembangan web dan memutuskan untuk fokus pada bidang ini. Cita-cita saya adalah menjadi seorang
                            <span className="text-white font-bold"> Full-Stack Web Developer</span> yang mampu mengembangkan aplikasi web yang kompleks dan inovatif. Saya percaya bahwa dengan terus belajar dan berlatih, saya dapat mencapai
                            tujuan tersebut dan memberikan kontribusi yang berarti dalam dunia teknologi.
                        </motion.p>
                        <motion.p
                            className="font-medium text-slate-400 mb-2 leading-relaxed"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.45 }}
                            transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
                        >
                            Saat ini, saya sedang fokus untuk meningkatkan keterampilan saya dalam pengembangan front-end, terutama dalam menggunakan framework seperti React dan Vue.js. Saya juga tertarik untuk mempelajari lebih lanjut
                            tentang pengembangan back-end dan database untuk menjadi seorang full-stack developer yang lebih kompeten.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tentang;
