import ThemeSwitch from "@/components/elements/ThemeSwitch";
import Link from "next/link";
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isOffCanvas, handleOffCanvas }: any) {
    return (
        <>
            <header>
                <nav className={`navbar navbar-expand-lg navbar-light w-100 flex-nowrap z-999 p-0 ${scroll ? "navbar-stick" : ""}`} style={{ position: `${scroll ? "fixed" : "relative"}`, top: `${scroll ? "0" : "auto"}` }}>
                    <a href="#" className="navbar-menu p-4 text-center square-100 menu-tigger icon_80 icon-shape d-none d-md-flex" data-bs-target=".offCanvas__info" aria-controls="offCanvas__info" onClick={handleOffCanvas}>
                        <i className="ri-menu-2-line" />
                    </a>
                    <div className="container py-3 px-0">
                        <Link className="navbar-brand d-flex main-logo align-items-center ms-lg-0 ms-md-5 ms-3" href="/">
                            <span className="fs-4 ms-2">Devan.Yudistira</span>
                        </Link>
                        <div className="d-none d-lg-flex position-absolute start-50 translate-middle-x">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link href="#work" className="nav-link">
                                            Portfolio
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="#skills" className="nav-link">
                                            Skills
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-social d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
                            <div className="burger-icon burger-icon-white border rounded-3" onClick={handleMobileMenu}>
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                    </div>
                    <ThemeSwitch />
                </nav>

                <div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
                    <div className="offCanvas__close-icon menu-close" onClick={handleOffCanvas}>
                        <button><i className="ri-close-line" /></button>
                    </div>
                    <div className="offCanvas__logo mb-5">
                        <h3 className="mb-0">Navigation</h3>
                    </div>
                    <div className="offCanvas__side-info mb-30">
                        <div className="contact-list mb-30">
                            <p className="fs-6 fw-medium text-200 mb-5">I'm always excited to take on new projects and collaborate with innovative minds.</p>
                        </div>
                    </div>
                </div>
                <div className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`} onClick={handleOffCanvas} />

                <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
                    <div className="mobile-header-wrapper-inner">
                        <div className="mobile-header-logo">
                            <Link className="d-flex main-logo align-items-center d-inline-flex" href="/">
                                <span className="fs-4 ms-2 text-dark">Devan.Yudistira</span>
                            </Link>
                            <div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                        <div className="mobile-header-content-area">
                            <PerfectScrollbar className="perfect-scroll">
                                <div className="mobile-menu-wrap">
                                    <nav>
                                        <ul className="mobile-menu font-heading ps-0">
                                            <li className="nav-item">
                                                <Link href="#work" className="nav-link">
                                                    Portfolio
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="#skills" className="nav-link">
                                                    Skills
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </PerfectScrollbar>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
