import Partner from "../ui/partner";

const partnersArray = [
    { name: "Fluid Glu", img: "./partners1.png" },
    { name: "Hikkeno", img: "./partners2.png" },
    { name: "Bubble", img: "./partners3.png" },
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
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-between ">
                <Partner pauseOnHover className="[--duration:20s]">
                    {partnersArray.map((review) => (
                        <PartnerCard key={review.name} {...review} />
                    ))}
                </Partner>
            </div>
        </div>
    );
};

export default Partners;
