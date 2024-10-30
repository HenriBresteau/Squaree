import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const NewsletterModal = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const modalRef = useRef(null);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <>
            <motion.button
                onClick={openModal}
                className="bg-btn px-6 py-2.5 rounded-xl text-white font-inter font-semibold   tracking-tight hover:bg-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileTap={{ scale: 1.05 }}
            >
                Joins Us
            </motion.button>
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white p-8 rounded-lg max-w-md mx-4 shadow-lg"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            ref={modalRef}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-center">
                                Join Our Newsletter
                            </h3>
                            <p className="text-center mb-6">
                                Stay updated with the latest news and exclusive
                                offers!
                            </p>
                            <form className="flex flex-col gap-4">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="border border-gray-300 rounded-md p-3 w-full"
                                />
                                <button
                                    type="submit"
                                    className="bg-primary text-white py-2 rounded-lg font-bold"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-white hover:text-gray-800 text-4xl font-bold "
                            >
                                &times;
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default NewsletterModal;
