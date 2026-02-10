"use client";
import { useEffect, useState } from "react";
import AddClassBody from "../elements/AddClassBody";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import ImageHoverEffects from "../elements/ImageHoverEffects";
import MobileMenu from "./MobileMenu";
import Footer1 from "./footer/Footer1";
import Header1 from "./header/Header1";

interface LayoutProps {
    headerStyle?: Number;
    footerStyle?: Number;
    children?: React.ReactNode;
    breadcrumbTitle?: string;
}

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }: LayoutProps) {
    const [scroll, setScroll] = useState<boolean>(false);
    const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
    const handleMobileMenu = (): void => {
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("mobile-menu-active") : document.body.classList.remove("mobile-menu-active");
    };

    const [isSearch, setSearch] = useState<boolean>(false);
    const handleSearch = (): void => setSearch(!isSearch);

    const [isOffCanvas, setOffCanvas] = useState<boolean>(false);
    const handleOffCanvas = (): void => setOffCanvas(!isOffCanvas);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const initWOW = () => {
                import("wowjs")
                    .then((wowjsModule: any) => {
                        let WOWConstructor: any = null;

                        if (typeof wowjsModule === "function") {
                            WOWConstructor = wowjsModule;
                        } else if (wowjsModule.default && typeof wowjsModule.default === "function") {
                            WOWConstructor = wowjsModule.default;
                        } else if (wowjsModule.WOW && typeof wowjsModule.WOW === "function") {
                            WOWConstructor = wowjsModule.WOW;
                        } else if (wowjsModule.__esModule && wowjsModule.default) {
                            WOWConstructor = wowjsModule.default;
                        } else {
                            WOWConstructor = (window as any).WOW;
                        }

                        if (WOWConstructor && typeof WOWConstructor === "function") {
                            (window as any).wow = new WOWConstructor({
                                live: false,
                            });
                            (window as any).wow.init();
                        } else {
                            if ((window as any).WOW && typeof (window as any).WOW === "function") {
                                (window as any).wow = new (window as any).WOW({
                                    live: false,
                                });
                                (window as any).wow.init();
                            } else {
                                console.error("WOW constructor not found");
                            }
                        }
                    })
                    .catch((err) => {
                        console.error("Failed to import WOW.js:", err);
                        if ((window as any).WOW && typeof (window as any).WOW === "function") {
                            (window as any).wow = new (window as any).WOW({
                                live: false,
                            });
                            (window as any).wow.init();
                        }
                    });
            };

            setTimeout(initWOW, 100);
        }

        const handleScroll = (): void => {
            const scrollCheck: boolean = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);
    return (
        <>
            <div id="top" />
            <AddClassBody />
            <DataBg />
            <ImageHoverEffects />
            {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} /> : null}
            <MobileMenu />

            <main className="main">
                {children}
            </main>

            {footerStyle == 1 ? <Footer1 /> : null}

            <BackToTop target="#top" />
        </>
    );
}
