import search from "../../assets/search.svg";
import logo from "../../assets/Logo.svg";
import Nav from "./Nav";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    };
    const closeModal = () => {
        setIsOpenModal(false);
    };
    return (
        <>
            <div className="px-6 py-5 mx-4  bg-white flex justify-between items-center max-w-5xl md:mx-auto rounded-3xl drop-shadow-[0_4px_22px_rgba(0,0,0,0.10)] m-10 sticky top-10 z-20">
                <div className="flex gap-3 items-center ">
                    <img src={logo} alt="Logo Squaree" />
                    <div className="font-DMSans font-bold text-primary">
                        Squaree
                    </div>
                </div>
                <div className="hidden md:flex gap-4 ">
                    <Nav />
                </div>
                <img src={search} alt="Search" className="hidden md:flex" />
                <div className="ml-auto md:hidden" onClick={openModal}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 12H20M4 6H20M4 18H20"
                            stroke="#242424"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                {/* Modal */}
                <AnimatePresence>
                    {isOpenModal && (
                        <motion.div
                            className="fixed top-[76px] h-fit w-full inset-0 flex items-center justify-center z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                        >
                            <motion.div
                                className="bg-white rounded-lg px-6 py-12 w-11/12 max-w-md relative"
                                initial={{ y: "-100vh" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-100vh" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="absolute top-2 right-2 text-gray-500 text-4xl"
                                    onClick={closeModal}
                                >
                                    &times;
                                </button>
                                <Nav />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Navbar;
