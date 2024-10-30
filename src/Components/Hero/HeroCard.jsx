const HeroCard = () => {
    return (
        <div className="p-4 md:p-8 rounded-[20px] bg-[url('bg_card.png')] bg-no-repeat min-h-60 md:min-h-[290px] min-w-60  md:min-w-[284px] ">
            <div className="flex bg-black px-4 py-2 text-white rounded-full font-inter font-medium text-xs tracking-wide uppercase w-fit">
                Profile
            </div>
        </div>
    );
};

export default HeroCard;
