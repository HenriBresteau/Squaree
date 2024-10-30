const InfosBlock = ({ title, value }) => {
    return (
        <div className="flex flex-col gap-1">
            <h3 className="text-primary font-inter font-normal leading-6 text-lg">
                {title}
            </h3>
            <p className="text-secondary font-inter font-medium text-sm leading-4">
                {value}
            </p>
        </div>
    );
};
const ProductivityCardBubble = () => {
    return (
        <div className="p-4 md:p-8 rounded-[20px] bg-gradient-to-tl from-[#F1F1F1] to-white h-fit min-h-[297px] md:min-w-[366px] border-[#3e3e3e34] border ">
            <div className="flex">
                <div className="flex gap-6">
                    <img
                        src="./partners3.png"
                        alt="Profil picture"
                        className=""
                    />
                </div>
            </div>
            <div className="flex mt-10 gap-9">
                <InfosBlock title="Employees" value="1200+" />
                <InfosBlock title="Growth" value="Reviewed" />
            </div>
            <div className="flex flex-col gap-4 mt-10">
                <div className="flex flex-col gap-1">
                    <h3 className="text-primary font-inter font-normal text-lg leading-6">
                        Productivity by squaree
                    </h3>
                    <p className="text-primary font-DMSans font-bold text-4xl  leading-[3rem] ">
                        70%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductivityCardBubble;
