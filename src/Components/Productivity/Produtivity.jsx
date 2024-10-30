import ProductivityCardBubble from "./ProductivityCard_Bubble";
import ProductivityCardProfile from "./ProductivityCard_Profile";
import { motion } from "framer-motion";

const Productivity = () => {
    return (
        <motion.div
            className="mt-32 max-w-7xl mx-4 md:mx-auto"
            initial={{ opacity: 0, x: 400 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
        >
            <div className="flex flex-col md:flex-row gap-10 md:gap-24 items-center">
                <div className="flex flex-col  gap-5">
                    <h2 className="font-DMSans font-semibold  text-3xl md:text-5xl text-primary">
                        Know your productivity by squaree
                    </h2>
                    <p className="font-inter font-semibold text-lg text-secondary ">
                        The expectation that productivity should always lead to
                        tangible results or accomplishments.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row relative min-h-[400px] md:min-w-[560px]">
                    <ProductivityCardBubble />
                    <ProductivityCardProfile />
                </div>
            </div>
        </motion.div>
    );
};

export default Productivity;
