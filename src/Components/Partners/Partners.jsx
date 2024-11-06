import Partner from "../ui/partner";

const partnersArray = [
    { name: "Fluid Glu", img: "./partners1.svg" },
    { name: "Hikkeno", img: "./partners2.svg" },
    { name: "Bubble", img: "./partners3.svg" },
];
const PartnerCard = ({ img }) => {
    return (
        <figure className="relative cursor-pointer overflow-hidden p-5 flex">
            <div className="flex flex-row items-center gap-2">
                <img src={img} />
            </div>
        </figure>
    );
};

const Partners = () => {
    return (
        <div className="mt-24 max-w-3xl mx-auto">
            <div className="flex flex-col gap-6 ">
                <p className="text-center font-DMSans font-semibold text-xl text-primary/50 px-6">
                    We have the fast paced growing companies with us
                </p>
            </div>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-between ">
                <Partner pauseOnHover className="[--duration:20s]">
                    {partnersArray.map((review) => (
                        <PartnerCard key={review.name} {...review} />
                    ))}
                </Partner>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
            </div>
        </div>
    );
};

export default Partners;
