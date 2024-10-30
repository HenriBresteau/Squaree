import graph from "../../assets/graph.svg";

const HeroCardChart = () => {
    return (
        <div className="p-4 md:p-8 rounded-[20px] bg-[#CFDDDB] md:min-h-[289px] md:min-w-[290px] h-fit ">
            <div className="flex justify-between items-start gap-4">
                <div className="flex gap-6">
                    <div className="flex flex-col gap-3.5">
                        <p className="text-primary font-inter font-extrabold text-4xl tracking-tight">
                            72K
                        </p>
                    </div>
                </div>
                <div className="flex bg-black px-4 py-2 text-white rounded-full font-inter font-medium text-xs tracking-wide uppercase w-fit">
                    Value
                </div>
            </div>
            <div className="mt-6">
                <img src={graph} alt="Graph" className="pointer-events-none" />
            </div>
            <div className="flex flex-col gap-1 mt-10">
                <p className="text-primary font-inter font-normal text-lg">
                    Product Title
                </p>
                <p className="text-secondary font-inter font-medium text-sm ">
                    Short description goes here
                </p>
            </div>
        </div>
    );
};

export default HeroCardChart;
