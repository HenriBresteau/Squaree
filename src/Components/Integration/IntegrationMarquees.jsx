import Marquee from "/src/Components/ui/marquee";

const reviews = [
    {
        name: "Notion",
        img: "./intergration1.svg",
    },
    {
        name: "Slack",
        img: "./intergration2.svg",
    },
    {
        name: "Zapier",
        img: "./intergration3.svg",
    },
    {
        name: "Evernote",
        img: "./intergration4.svg",
    },
    {
        name: "Figma",
        img: "./intergration5.svg",
    },
];

const firstRow = reviews.slice(0, 3);
const secondRow = reviews.slice(3);

const ReviewCard = ({ img }) => {
    return (
        <figure className="relative cursor-pointer overflow-hidden rounded-3xl border p-5 border-[#3E3E3E]/[.15] bg-transparent hover:bg-[#CACACA]/10 flex">
            <div className="flex flex-row items-center gap-2">
                <img
                    className="rounded-full"
                    width="84"
                    height="84"
                    alt=""
                    src={img}
                />
            </div>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex h-[314px] w-full flex-col gap-10 md:gap-14 items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
        </div>
    );
}
