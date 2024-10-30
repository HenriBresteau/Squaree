import HeroCard from "./HeroCard";
import HeroCardCalendar from "./HeroCard_Calendar";
import HeroCardChart from "./HeroCard_Chart";
import HeroCardNotion from "./HeroCard_Notion";
import HeroCardDatas from "./HeroCard_Datas";
import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
    const constraintsRef = useRef(null);

    return (
        <div className="mt-24 mx-auto">
            <div className="flex flex-col gap-6 max-w-2xl mx-auto">
                <motion.h1
                    className="text-center font-DMSans font-bold text-4xl md:text-7xl md:leading-tight text-primary"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Predictable growth starts here
                </motion.h1>

                <motion.p
                    className="text-center font-inter font-medium text-sm leading-6 text-secondary px-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Squaree helps users to go from Zero to Hero with Pockets
                    flow’s simple platform that helps creators like you sell
                    their digital products online.
                </motion.p>
            </div>
            <div className="mt-16 px-6">
                <motion.div
                    className="container mx-auto min-h-[1410px] md:min-h-[1000px] lg:min-h-[700px] overflow-hidden relative"
                    ref={constraintsRef}
                >
                    <motion.div
                        drag
                        dragConstraints={constraintsRef}
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                        initial={{}}
                        className="h-fit w-fit cursor-grab top-0 md:top-4 md:left-0 absolute hover:z-10 transition-all"
                    >
                        <HeroCard />
                    </motion.div>

                    <motion.div
                        drag
                        dragConstraints={constraintsRef}
                        className="h-fit w-fit cursor-grab top-64 left-0 md:left-auto md:top-44 md:right-0   lg:top-24 lg:left-[340px] absolute hover:z-10 transition-all"
                        whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 3,
                        }}
                    >
                        <HeroCardCalendar />
                    </motion.div>
                    <motion.div
                        drag
                        dragConstraints={constraintsRef}
                        animate={{ x: [0, -12, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                        className="h-fit w-fit cursor-grab top-[640px] right-0 md:top-0  ld:right-[300px] absolute hover:z-10 transition-all"
                    >
                        <HeroCardNotion />
                    </motion.div>
                    <motion.div
                        drag
                        dragConstraints={constraintsRef}
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                        className="h-fit w-fit cursor-grab top-[780px] left-0 md:top-[250px] md:left-auto md:right-[450px] absolute hover:z-10 transition-all"
                    >
                        <HeroCardChart />
                    </motion.div>
                    <motion.div
                        drag
                        dragConstraints={constraintsRef}
                        className="h-fit w-fit cursor-grab bottom-0 right-0 absolute hover:z-10 transition-all"
                        whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <HeroCardDatas />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
