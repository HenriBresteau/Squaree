const NavbarItem = ({ name, arrow }) => {
    return (
        <div className="flex items-center text-primary font-semibold py-1.5 px-3.5">
            {name}
            {arrow ? (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.5293 10.5576L12.0003 14.0436L15.4713 10.5576"
                        stroke="#242424"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ) : null}
        </div>
    );
};

export default NavbarItem;
