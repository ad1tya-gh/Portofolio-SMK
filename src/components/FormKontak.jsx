import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUser, FaTelegramPlane, FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion"; // Pastikan import motion dari 'framer-motion'

function FormKontak() {
    // State untuk memantau status form: 'idle', 'loading', atau 'success'
    const [status, setStatus] = useState("idle");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("loading");

        emailjs.sendForm("service_t216usx", "template_1s9zzzi", e.target, "A3VIB8cH1VVMKMHel").then(
            (result) => {
                setStatus("success");
            },
            (error) => {
                setStatus("error");
                e.target.reset();
                setTimeout(() => setStatus("idle"), 5000);
            },
        );
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="container mx-auto">
            <div className="max-w-md mx-auto p-5 mt-10 rounded-lg shadow-md border-slate-200 border-1 min-h-[400px] flex items-center justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                    {/* TAMPILAN LOADING */}
                    {status === "loading" && (
                        <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center">
                            <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-white mt-4 font-poppins">Mengirim pesan...</p>
                        </motion.div>
                    )}

                    {/* TAMPILAN BERHASIL (Ceklis Animasi) */}
                    {status === "success" && (
                        <motion.div key="success" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="text-center">
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 200, damping: 10 }}>
                                <FaCheckCircle className="text-secondary text-6xl mx-auto mb-4" />
                            </motion.div>
                            <h3 className="text-white font-semibold text-2xl font-poppins">Berhasil Terkirim!</h3>
                            <p className="text-gray-400 text-sm mt-2">Terima kasih telah menghubungi saya.</p>
                        </motion.div>
                    )}

                    {/* TAMPILAN GAGAL (X Mark Animasi) */}
                    {status === "error" && (
                        <motion.div key="error" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="text-center">
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 200, damping: 10 }}>
                                <FaCircleXmark className="text-red-500 text-6xl mx-auto mb-4" />
                            </motion.div>
                            <h3 className="text-white font-semibold text-2xl font-poppins">Gagal Mengirim!</h3>
                            <p className="text-gray-400 text-sm mt-2">Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.</p>
                        </motion.div>
                    )}

                    {/* TAMPILAN FORM UTAMA */}
                    {status === "idle" && (
                        <motion.form key="form" onSubmit={sendEmail} className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <motion.div className="text-center mb-4 mt-3" variants={item}>
                                <FaTelegramPlane className="text-white text-3xl inline mb-2" />
                                <h3 className="text-white font-semibold text-2xl font-poppins inline ml-2">Kirimi Saya Pesan</h3>
                            </motion.div>

                            <motion.div className="mb-5 relative" variants={item}>
                                <FaUser className="absolute bottom-2.5 left-2 text-white" />
                                <input
                                    className="appearance-none border-b-2 border-b-slate-400 rounded-xs w-full py-2 pl-10 leading-tight focus:outline-none text-white text-sm font-poppins focus:border-b-secondary transition-colors duration-500 ease-in-out bg-transparent"
                                    name="name"
                                    type="text"
                                    placeholder="Nama"
                                    required
                                />
                            </motion.div>

                            <motion.div className="mb-5 relative" variants={item}>
                                <BsFillTelephoneFill className="absolute bottom-2.5 left-2 text-white" />
                                <input
                                    className="appearance-none border-b-2 border-b-slate-400 rounded-xs w-full py-2 pl-10 leading-tight focus:outline-none font-poppins text-sm text-white focus:border-b-secondary transition-colors duration-500 ease-in-out bg-transparent"
                                    name="email-telp"
                                    type="text"
                                    placeholder="Email atau Telepon"
                                    required
                                />
                            </motion.div>

                            <motion.div className="mb-4" variants={item}>
                                <div className="flex items-center mb-2">
                                    <IoChatbubbleEllipses className="text-white text-lg mr-2" />
                                    <label className="text-gray-400 font-poppins text-sm">Pesan</label>
                                </div>
                                <textarea
                                    className="appearance-none outline-slate-400 border rounded w-full py-2 px-3 text-white text-sm font-poppins leading-tight focus:outline-primary transition-colors duration-500 ease-in-out bg-transparent"
                                    name="message"
                                    placeholder="Tulis pesan Anda di sini..."
                                    rows="4"
                                    required
                                ></textarea>
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="bg-secondary hover:bg-primary transition duration-300 ease-in-out text-white font-semibold font-poppins py-2 px-4 rounded-2xl focus:outline-none w-full"
                                variants={item}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Kirim Pesan
                            </motion.button>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default FormKontak;
