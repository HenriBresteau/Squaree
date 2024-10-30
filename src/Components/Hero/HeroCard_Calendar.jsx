import calendar from "../../assets/calendar.svg";
import profil from "../../assets/profile_card.png";

const RowCalendar = ({ month, date, name, hours, color }) => {
    return (
        <div className="flex gap-4 items-center bg-black p-4 rounded-2xl">
            <div
                className={`flex rounded-2xl flex-col gap-1.5 items-center px-4 py-1 bg-[${color}]`}
            >
                <p className="font-inter font-medium text-sm text-primary">
                    {month}
                </p>
                <p className="font-inter font-black leading-tight text-2xl">
                    {date}{" "}
                </p>
            </div>
            <div className="flex flex-col gap-3.5 ">
                <p className="font-inter font-semibold text-lg md:text-xl text-white">
                    {name}
                </p>
                <p className="font-inter font-medium text-sm text-white/50">
                    {hours}{" "}
                </p>
            </div>
        </div>
    );
};
const HeroCardCalendar = () => {
    return (
        <div className="p-4 md:p-8 rounded-[20px] bg-[#C8A2D6] h-fit md:min-h-[384px] md:min-w-[366px] relative">
            <div className="flex justify-between items-start gap-4">
                <div className="flex gap-4 md:gap-6">
                    <img
                        src={profil}
                        alt="Profil picture"
                        className="rounded-[20px]"
                    />
                    <div className="flex flex-col md:gap-3.5">
                        <p className="text-primary font-inter font-semibold  text-xl md:text-2xl tracking-tight">
                            Moana John
                        </p>
                        <p className="text-secondary font-inter font-medium text-sm ">
                            5 mins ago
                        </p>
                    </div>
                </div>
                <div className="flex bg-black px-4 py-2 text-white rounded-full font-inter font-medium text-xs tracking-wide uppercase w-fit">
                    <img src={calendar} alt="Icon calendar" />
                </div>
            </div>
            <div className="absolute w-full h-px bg-[#80808059] left-1/2 -translate-x-1/2 block mt-2 "></div>
            <div className="flex flex-col gap-4 mt-8">
                <RowCalendar
                    name="Review Sync"
                    date="28"
                    month="Feb"
                    hours="12:00 - 01:30 PM"
                    color="#CFDDDB"
                />
                <RowCalendar
                    name="Marketing"
                    date="02"
                    month="Mar"
                    hours="02:00 - 02:30 PM"
                    color="#C8A2D6"
                />
            </div>
        </div>
    );
};

export default HeroCardCalendar;
