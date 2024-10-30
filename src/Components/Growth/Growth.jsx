import GrowthNumber from "./GrowthNumber";
import { motion } from "framer-motion";
import HeroChartSVG from "./GrowthChartSVG";

const Growth = () => {
    return (
        <motion.div
            className="mt-32 max-w-4xl mx-4 md:mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
        >
            <div className="flex flex-col gap-5">
                <h2 className="text-center font-DMSans font-semibold text-3xl md:text-5xl text-primary">
                    Turn your growth in to Squaree
                </h2>
                <p className="text-center font-inter font-semibold text-base md:text-lg text-secondary ">
                    The expectation that productivity should always lead to
                    tangible results or accomplishments & notion that certain
                    types of work or activities are more valuable or productive
                    than others.
                </p>
            </div>
            <HeroChartSVG />
            <div className="mt-10 md:mt-16 flex items-center justify-center md:justify-between  mx-6 md:mx-24 flex-wrap gap-6 ">
                <GrowthNumber
                    number={200}
                    desc="Increase in new pipeline generated"
                />
                <GrowthNumber number={70} desc="Increase in form workforce" />
                <GrowthNumber number={40} desc="Decrease in cost per lead" />
            </div>
            <div className="mt-14 md:mt-10 flex items-center justify-center ">
                <motion.button
                    className="bg-btn px-6 py-3 rounded-full text-white font-inter font-medium text-lg hover:bg-primary transition-all "
                    whileHover={{ scale: 1.015 }}
                >
                    Explore our way &gt;
                </motion.button>
            </div>
        </motion.div>
    );
};

export default Growth;
