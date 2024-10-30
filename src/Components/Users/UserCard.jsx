import { motion } from "framer-motion";

const UserCard = ({ title, text, img, name, role, size }) => {
    return (
        <motion.div
            className={`p-8 rounded-[20px] bg-gradient-to-tl from-[#F6F6F6] to-white border-[#3e3e3e34] border ${size} `}
            initial={{
                opacity: 0,
                y: 20,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.4,
                },
            }}
            viewport={{ once: true }}
        >
            <div className="flex flex-col gap-7">
                <p className=" font-DMSans font-bold text-2xl leading-6 tracking-tighter text-[#0D0D10]">
                    {title}
                </p>
                <p className="font-inter font-normal text-base text-[#0D0D10]">
                    {text}
                </p>
            </div>
            <div className="flex gap-4 items-center mt-7">
                <img src={img} alt="user" className="w-14 h-14" />
                <div className="flex flex-col gap-1">
                    <p className="font-inter font-medium text-base text-[#080809]">
                        {name}
                    </p>
                    <p className="font-inter font-medium text-sm leading-4 text-[#0D0D10]/70">
                        {role}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default UserCard;
