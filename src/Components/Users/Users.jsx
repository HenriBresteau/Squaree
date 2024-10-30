import UserCard from "./UserCard";

const Users = () => {
    return (
        <div className="mt-16 md:mt-32 max-w-5xl mx-4 md:mx-auto">
            <div className="flex flex-col gap-2.5">
                <h2 className="text-center font-DMSans font-semibold  text-3xl md:text-5xl md:leading-[3.25rem] text-primary">
                    What squaree users say
                </h2>
                <p className="text-center font-inter font-semibold  md:text-lg md:leading-[1.625rem] text-secondary ">
                    Here is how homely can help you
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-8 mt-14">
                <UserCard
                    title="Brilliant houses to rent"
                    text="All eFounders teams have moved to Cycle for all things product management and it is truly a game-changer."
                    name="John Master"
                    role="Director,  Blue"
                    size="md:size-[40%]"
                    img="users1.png"
                />
                <UserCard
                    title="Convenient for searching apartments"
                    text="Cycle makes it easy to contact the most relevant users whenever I need feedback on a new product initiative. It helps me capture all the necessary customer context without friction."
                    name="Jinx"
                    role="Ceo,  ADC"
                    size="md:size-[56%]"
                    img="users2.png"
                />
                <UserCard
                    title="It feels much more safe"
                    text="As a company with a strong Slack culture, it’s important that we find ways to meet our champions where they are, and Channeled allows us to do just that."
                    name="John Master"
                    role="Director,  Fynx"
                    size="md:size-[56%]"
                    img="users3.png"
                />
                <UserCard
                    title="Secure search for all"
                    text="All eFounders teams have moved to Cycle for all things product management and it is truly a game-changer."
                    name="Jinx"
                    role="Ceo,  Whyle"
                    size="md:size-[40%]"
                    img="users4.png"
                />
            </div>
        </div>
    );
};

export default Users;
