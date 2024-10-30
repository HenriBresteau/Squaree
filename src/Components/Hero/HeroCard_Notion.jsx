import icon from "../../assets/icon.png";

const HeroCardNotion = () => {
    return (
        <div className="p-4 md:p-8 rounded-[20px] bg-primary md:min-h-[145px] md:min-w-[336px] h-fit ">
            <div className="flex items-center gap-4">
                <div className="">
                    <img src={icon} alt="Notion" className="rounded-3xl" />
                </div>
                <div className="flex flex-col gap-1 ">
                    <p className="text-white font-inter font-semibold  text-lg md:text-2xl">
                        Clear roadmap
                    </p>
                    <p className="text-secondary font-inter font-medium text-sm ">
                        notion.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroCardNotion;
