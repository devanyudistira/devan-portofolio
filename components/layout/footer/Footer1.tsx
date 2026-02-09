import Link from "next/link";

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="section-footer position-relative pt-60 pb-60 bg-secondary-1">
                    <div className="container position-relative z-1">
                        <div className="text-center">
                            <Link className="d-flex main-logo align-items-center d-inline-flex" href="/">
                                <span className="fs-4 ms-2 text-white-keep">Devan.Yudistira</span>
                            </Link>
                        </div>
                        <div className="row text-center">
                            <span className="fs-6 text-white-keep">
                                © {new Date().getFullYear()} All Rights Reserved by{" "}
                                <span>
                                    <Link href="#" className="text-primary-1">
                                        Devan.Yudistira
                                    </Link>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="position-absolute top-0 start-0 w-100 h-100 z-0" data-background="assets/imgs/footer-1/background.png " />
                </div>
            </footer>
        </>
    );
}
