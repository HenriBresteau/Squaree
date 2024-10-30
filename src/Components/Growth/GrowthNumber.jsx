import { motion } from "framer-motion";
import NumberTicker from "../ui/number-ticker";

const GrowthNumber = ({ number, desc }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-4 md:gap-6 max-w-full md:max-w-36"
        >
            <div className="text-center font-DMSans font-bold text-3xl md:text-6xl text-primary flex items-center">
                <NumberTicker value={number} />%
            </div>
            <p className="text-center font-DMSans font-medium text-base text-primary/50 ">
                {desc}
            </p>
        </motion.div>
    );
};

export default GrowthNumber;
