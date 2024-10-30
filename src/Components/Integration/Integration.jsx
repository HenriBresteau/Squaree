import { MarqueeDemo } from "./IntegrationMarquees";
import { motion } from "framer-motion";
const Integration = () => {
    return (
        <motion.div
            className="mt-32 max-w-7xl mx-4 md:mx-auto"
            initial={{ opacity: 0, x: -400 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
        >
            <div className="flex flex-wrap-reverse md:flex-nowrap gap-10 md:gap-16 items-center">
                <div className="flex relative min-h-[400px] min-w-full md:min-w-[560px] ">
                    <MarqueeDemo />
                </div>
                <div className="flex flex-col md:min-w-[480px] gap-5">
                    <h2 className="font-DMSans font-bold text-3xl md:text-5xl md:leading-[3.25rem] text-primary text-balance">
                        Seamless integration with best apps
                    </h2>
                    <p className="font-inter font-semibold text-lg text-secondary ">
                        What ever you use, we integrate with the best of best
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Integration;
