import Sosmed from "../components/Sosmed";
import aditya from "../assets/Aditya.png";
import DownloadBt from "../components/DownloadBt";
import bloob from "../assets/blob.svg";
import { useState } from "react";
import { motion } from "motion/react";
import { delay } from "motion";
import Typewriter from "typewriter-effect";

function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.16, // jeda antar item
                delayChildren: 0.9, // delay sebelum anak-anak mulai muncul
            },
        },
    };
    return (
        <section className="pt-36 lg:pt-20" id="beranda">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full px-5 pl-14 self-center lg:w-1/2 font-poppins flex flex-col items-start">
                        <motion.h1 className="text-base font-bold text-primary md:text-xl xl:text-xl 2xl:text-3xl" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}>
                            Halo Semua, saya <span className="block font-bold text-white mb-1 text-4xl 2xl:text-6xl">Ahmad Aditya</span>
                        </motion.h1>
                        <motion.h2 className="font-medium text-slate-500 mb-5 text-lg 2xl:text-xl" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}>
                            Front-end Web Developer
                        </motion.h2>
                        <motion.div className="font-medium text-slate-400 mb-2 leading-relaxed 2xl:text-lg" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Saya adalah ")
                                        .typeString('<span style="color: white; font-weight: bold;">Front-End Web Developer</span>')
                                        .typeString(" yang menciptakan antarmuka web yang modern dan responsif. Saya percaya bahwa kode yang bersih dan desain yang indah adalah kunci untuk membangun produk digital yang luar biasa")
                                        .pauseFor(2500)
                                        .start();
                                }}
                                options={{
                                    autoStart: true,
                                    loop: false,
                                    cursor: "|",
                                    delay: 30,
                                }}
                            />

                            {/* Saya adalah <span className="text-white font-bold">Front-End Web Developer</span> yang menciptakan antarmuka web yang modern dan responsif. Saya percaya bahwa kode yang bersih dan desain yang indah adalah kunci
                            untuk membangun produk digital yang luar biasa */}
                        </motion.div>
                        <motion.div className="inline-flex items-center gap-3 mb-5 pl-3" variants={container} initial="hidden" animate="show">
                            <Sosmed sosmed="telegram" link="" />
                            <Sosmed sosmed="linkedin" link="" />
                            <Sosmed sosmed="github" link="https://github.com/ad1tya-gh" />
                            <Sosmed sosmed="instagram" link="https://www.instagram.com/_iamditss/" />
                        </motion.div>
                        <DownloadBt />
                    </div>

                    <div className="w-full lg:w-1/2 px-4 self-end lg:pr-0">
                        <div className="relative mt-10 lg:mt-0 lg:right-0 md:p y-0">
                            <motion.img
                                src={aditya}
                                alt="Ahmad Aditya"
                                className="xl:scale-70 xl:-translate-y-5 lg:scale-70 lg:-translate-y-10 md:translate-x-1/15 mx-auto sm:translate-x-0 my-auto max-w-full scale-75 z-2 relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                            />
                            <motion.span
                                className="absolute -top-0 left-1/2 -translate-x-3/5 opacity-80 lg:-translate-x-3/6 translate-y-2/7 xl:scale-140 lg:scale-135 md:scale-160 md:-translate-x-3/6 md:translate-y-2/5 scale-130 lg:translate-y-2/7 w-max"
                                initial={{ opacity: 0, y: 70 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "ease" }}
                            >
                                <img src={bloob} alt="bloob" className="w-[370px] h-[370px] object-cover" />
                            </motion.span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
