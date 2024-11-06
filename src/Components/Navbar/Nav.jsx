import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import logo from "../../assets/Logo.svg";
import { cn } from "@/lib/utils";
import React from "react";

const components = [
    {
        title: "Button",
        href: "/components/button",
        description: "Various button styles.",
    },
    {
        title: "Card",
        href: "/components/card",
        description: "Interactive and informative cards.",
    },
    {
        title: "Avatar",
        href: "/components/avatar",
        description: "User profile avatars.",
    },
];
const ListItem = React.forwardRef(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-100 hover:text-accent-foreground focus:bg-btn/75 focus:text-accent-foreground",
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">
                            {title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    }
);
ListItem.displayName = "ListItem";

function Nav() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-primary font-semibold py-1.5 px-3.5">
                        Features
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 w-[250px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-white to-btn p-6 no-underline outline-none focus:shadow-md hover:shadow-sm"
                                        href="/features"
                                    >
                                        <img src={logo} className="h-6 w-6" />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Our Features
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Explore a range of features designed
                                            to enhance productivity.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem
                                href="/features/overview"
                                title="Overview"
                            >
                                Comprehensive view of all features and benefits.
                            </ListItem>
                            <ListItem
                                href="/features/performance"
                                title="Performance"
                            >
                                High-performance tools tailored to your needs.
                            </ListItem>
                            <ListItem
                                href="/features/security"
                                title="Security"
                            >
                                Advanced security features for data protection.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid  w-[250px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4  w-[250px] md:w-[400px]">
                            <ListItem href="/company/about" title="About Us">
                                Learn more about our mission and values.
                            </ListItem>
                            <ListItem href="/company/careers" title="Careers">
                                Join our team and grow your career with us.
                            </ListItem>
                            <ListItem href="/company/contact" title="Contact">
                                Reach out for support or general inquiries.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="/contact-sales">
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            Contact Sales
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default Nav;
