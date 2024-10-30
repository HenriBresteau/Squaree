const FooterListItem = ({ title, bold }) => {
    return (
        <li
            className={`font-inter font-semibold text-base ${
                bold ? "text-primary" : "text-primary/60"
            }`}
        >
            {title}
        </li>
    );
};

export default FooterListItem;
