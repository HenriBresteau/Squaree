import profil from "../../assets/profile_productivity.png";

const ProductivityCardProfile = () => {
    return (
        <div className="p-4 md:p-8 rounded-[20px] bg-gradient-to-tl from-[#F1F1F1] to-white h-fit md:min-h-[156px] mt-4 md:mt-20 md:min-w-[366px] border-[#3e3e3e34] border md:absolute bottom-0 right-0 ">
            <div className="flex justify-between items-start gap-4">
                <div className="flex gap-4 items-center md:gap-6">
                    <img
                        src={profil}
                        alt="Profil picture"
                        className="rounded-[20px]"
                    />
                    <div className="flex flex-col gap-3.5">
                        <p className="text-primary font-inter font-semibold text-lg md:text-2xl tracking-tight ">
                            Moana John
                        </p>
                        <p className="text-secondary font-inter font-medium text-sm ">
                            moana_j@mail.com
                        </p>
                    </div>
                </div>
                <div className="bg-black px-4 py-2 text-white rounded-full font-inter font-medium text-xs tracking-wide uppercase w-fit hidden md:flex">
                    Profile
                </div>
            </div>
        </div>
    );
};

export default ProductivityCardProfile;
