import NavbarItem from "./NavbarItem";
import search from "../../assets/search.svg";
import logo from "../../assets/logo.svg";

const Navbar = () => {
    return (
        <div className="px-6 py-5 bg-white flex justify-between items-center max-w-5xl mx-auto rounded-3xl drop-shadow-[0_4px_22px_rgba(0,0,0,0.10)] m-10 sticky top-10 z-20">
            <div className="flex gap-3 items-center ">
                <img src={logo} alt="Logo Squaree" />
                <div className="font-DMSans font-bold text-primary">
                    Squaree
                </div>
            </div>
            <div className="hidden md:flex gap-4 ">
                <NavbarItem name="Features" arrow />
                <NavbarItem name="Ressources" arrow />
                <NavbarItem name="Company" arrow />
                <NavbarItem name="Contact Sales" />
            </div>
            <img src={search} alt="Search" className="hidden md:flex" />
            <div className="ml-auto md:hidden">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4 12H20M4 6H20M4 18H20"
                        stroke="#242424"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Navbar;
