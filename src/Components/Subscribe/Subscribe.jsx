import { useState } from "react";
import SubscribeCard from "./SubscribeCard";
import SubscribeCardList from "./SubscribeCardList";
import SubscribeCardListItem from "./SubscribeCardListItem";
import { cn } from "@/lib/utils";

const Subscribe = () => {
    const [isAnnual, setIsAnnual] = useState(false);
    const toggleBilling = () => {
        setIsAnnual(!isAnnual);
    };
    const prices = {
        free: 0,
        pro: isAnnual ? 12 * 12 * 0.85 : 12,
    };
    return (
        <div className="my-24 max-w-5xl mx-2 md:mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-3.5 justify-center">
                <h2
                    className={cn(
                        "text-center font-DMSans font-bold text-primary transition-all duration-300",
                        !isAnnual
                            ? "text-2xl md:text-3xl md:leading-[3.25rem]"
                            : "text-secondary text-xl font-normal delay-100"
                    )}
                >
                    Billed Monthly
                </h2>
                <label className="flex cursor-pointer select-none items-center">
                    <div className="relative">
                        <input
                            type="checkbox"
                            checked={isAnnual}
                            onChange={toggleBilling}
                            className="sr-only"
                        />
                        <div className="box block h-8 w-14 rounded-full bg-btn"></div>
                        <div
                            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full  transition ${
                                isAnnual
                                    ? "translate-x-full bg-white"
                                    : "bg-white"
                            }`}
                        ></div>
                    </div>
                </label>
                <h2
                    className={cn(
                        "text-center font-DMSans font-bold text-primary transition-all duration-300",
                        isAnnual
                            ? "text-2xl md:text-3xl md:leading-[3.25rem]"
                            : "text-secondary text-xl font-normal delay-100"
                    )}
                >
                    Billed Annually <span className="text-lg">(save 15%)</span>
                </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-10 justify-center mt-14 items-start ">
                <SubscribeCard
                    title="Free"
                    price={prices.free}
                    desc="Description of the tier list will go here, copy should be concise and impactful."
                    btn="Try for Free"
                >
                    <SubscribeCardList>
                        <SubscribeCardListItem data="Access to All Features" />
                        <SubscribeCardListItem data="20% discount on backorders" />
                        <SubscribeCardListItem data="Domain Name Appraisal" />
                        <SubscribeCardListItem data="10 Social Profiles" />
                    </SubscribeCardList>
                </SubscribeCard>
                <SubscribeCard
                    title="Pro"
                    price={
                        isAnnual ? (
                            prices.pro.toFixed(2) // Afficher le prix pour l'annuel
                        ) : (
                            <>
                                {prices.pro.toFixed(2)}
                                <span className="font-DMSans font-bold text-primary text-base ml-1">
                                    / month
                                </span>
                            </>
                        )
                    }
                    desc="Description of the tier list will go here, copy should be concise and impactful."
                    btn={isAnnual ? "Subscribe Annually" : "Subscribe Monthly"}
                    pro
                >
                    <div className="flex  flex-col gap-4">
                        <div className="font-inter text-secondary text-lg leading-[1.625rem]">
                            Everything in the Free plan, plus
                        </div>
                        <SubscribeCardList>
                            <SubscribeCardListItem data="Access to All Features" />
                            <SubscribeCardListItem data="20% discount on backorders" />
                            <SubscribeCardListItem data="Domain Name Appraisal" />
                            <SubscribeCardListItem data="10 Social Profiles" />
                            <SubscribeCardListItem data="Calendar View" />
                            <SubscribeCardListItem data="24/7 Support" />
                        </SubscribeCardList>
                    </div>
                </SubscribeCard>
            </div>
        </div>
    );
};

export default Subscribe;
