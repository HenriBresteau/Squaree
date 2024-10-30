import { motion } from "framer-motion";
import ShineBorder from "../ui/shine-border";

const SubscribeCard = ({ title, price, desc, children, btn, pro }) => {
    const CardContent = (
        <motion.div
            className="p-8 rounded-[20px] bg-gradient-to-tl from-[#F1F1F1] to-white border-[#3e3e3e34] border hover:shadow-md hover:from-btn/10 transition-all"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
        >
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <p className="text-primary font-DMSans font-bold text-2xl md:text-[2rem] md:leading-10  tracking-tight">
                        {title}
                    </p>
                    <p className="text-primary font-DMSans font-bold text-3xl md:text-[2.375rem] md:leading-[2.875rem] tracking-tight ">
                        ${price}
                    </p>
                    <p className=" text-primary font-inter md:text-lg leading-[1.625rem]">
                        {desc}
                    </p>
                </div>
                <hr />
                {children}
                <div className="flex bg-btn px-6 py-2.5 text-white rounded-full font-inter font-medium text-base w-full justify-center cursor-pointer hover:bg-black hover:shadow transition-all">
                    {btn}
                </div>
            </div>
        </motion.div>
    );
    return pro ? (
        <ShineBorder className="rounded-[20px] overflow-hidden" color="#F2B53C">
            {CardContent}
        </ShineBorder>
    ) : (
        CardContent
    );
};

export default SubscribeCard;
