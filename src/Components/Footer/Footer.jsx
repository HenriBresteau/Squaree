import logo from "../../assets/Logo.svg";
import FooterList from "./FooterList";
import FooterListItem from "./FooterListItem";
import NewsletterModal from "./FooterModale";

const Footer = () => {
    return (
        <div className="bg-[#F7F7F7] flex justify-center py-12 md:py-24 px-6">
            <div className="flex flex-wrap items-start max-w-6xl justify-between w-full">
                <div className="flex flex-col gap-4 ">
                    <div className="flex gap-3 items-center ">
                        <img src={logo} alt="Logo Squaree" />
                        <div className="font-DMSans font-bold text-primary">
                            Squaree
                        </div>
                    </div>
                    <div className="font-DMSans font-medium text-sm text-primary/70 max-w-48">
                        What matters is productivity with fun culture
                    </div>
                    <span className="text-[#F7F7F7] text-xs">
                        &copy; Henri B
                    </span>
                </div>
                <div className="flex gap-14 md:gap-40 mt-10 md:mt-0 ">
                    <FooterList>
                        <FooterListItem title="About" bold />
                        <FooterListItem title="Contact" />
                        <FooterListItem title="Blog" />
                        <FooterListItem title="Story" />
                    </FooterList>
                    <FooterList>
                        <FooterListItem title="Company" bold />
                        <FooterListItem title="Product" />
                        <FooterListItem title="Press" />
                        <FooterListItem title="More" />
                    </FooterList>
                </div>
                <div className="flex mt-8">
                    <div className="border rounded-3xl bg-white p-6">
                        <div className="flex items-center gap-8">
                            <div className="flex flex-col gap-3">
                                <h2 className="font-inter font-semibold text-lg md:text-xl text-primary tracking-tight">
                                    Newsletter
                                </h2>
                                <p className="font-inter font-medium text-xs leading-4 text-secondary ">
                                    Stay updated with the latest news
                                </p>
                            </div>
                            <NewsletterModal />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
