const SubscribeCardList = ({ children }) => {
    return (
        <ul className="flex flex-col list-disc list-inside text-primary gap-4 md:gap-6">
            {children}
        </ul>
    );
};

export default SubscribeCardList;
