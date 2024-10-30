const HeroCardDatas = () => {
    return (
        <div className="p-4 md:p-8 rounded-[20px] bg-[#DDD6CF] md:min-h-[434px] md:min-w-[407px] h-fit">
            <div className="flex justify-between items-start gap-4">
                <div className="flex bg-[#B1ABA6] px-4 py-2 text-white rounded-full font-inter font-medium text-xs tracking-wide uppercase w-fit">
                    Value
                </div>
                <div className="flex bg-black px-4 py-2 text-white rounded-full font-inter font-medium text-xs tracking-wide uppercase w-fit">
                    Daily Visits
                </div>
            </div>
            <div className="mt-6 bg-[url('./Datas.svg')] bg-cover bg-no-repeat bg-top flex items-center flex-col gap-3">
                <p className="text-primary font-inter font-semibold text-4xl mt-20">
                    $5476
                </p>
                <p className="text-primary font-inter text-sm">
                    Spening this week
                </p>
            </div>
            <div className="flex flex-col gap-1 mt-12 md:mt-24">
                <p className="text-primary font-inter font-normal text-lg">
                    Work force
                </p>
                <p className="text-secondary font-inter font-medium text-sm ">
                    Short description goes here
                </p>
            </div>
        </div>
    );
};

export default HeroCardDatas;
