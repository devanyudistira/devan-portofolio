"use client";
import Link from "next/link";

export default function Projects1() {
    return (
        <>
            <div id="work" className="section-projects-1 position-relative pt-120 pb-6 bg-900">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-7 me-auto">
                            <h3 className="ds-3 mt-3 text-primary-1">My Works</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-900">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
                                <Link href="/work-single">
                                    <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-1.png" alt="Photo App UI/UX" style={{ aspectRatio: "7/5", objectFit: "cover" }} />
                                </Link>
                                <div className="d-flex align-items-center mt-4">
                                    <Link href="/work-single" className="project-card-content">
                                        <h3 className="fw-semibold">Photo App UI/UX</h3>
                                        <p>Bokeh network</p>
                                    </Link>
                                    <Link href="/work-single" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                                        <i className="ri-arrow-right-up-line" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
                                <Link href="/work-single">
                                    <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-2.png" alt="Mobile App Design" style={{ aspectRatio: "7/5", objectFit: "cover" }} />
                                </Link>
                                <div className="d-flex align-items-center mt-4">
                                    <Link href="/work-single" className="project-card-content">
                                        <h3 className="fw-semibold">Mobile App Design</h3>
                                        <p>Tech Innovators Inc.</p>
                                    </Link>
                                    <Link href="/work-single" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                                        <i className="ri-arrow-right-up-line" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
                                <Link href="/work-single">
                                    <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-3.png" alt="Interaction Design" style={{ aspectRatio: "7/5", objectFit: "cover" }} />
                                </Link>
                                <div className="d-flex align-items-center mt-4">
                                    <Link href="/work-single" className="project-card-content">
                                        <h3 className="fw-semibold">Interaction Design</h3>
                                        <p>HealthTrack Solutions</p>
                                    </Link>
                                    <Link href="/work-single" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                                        <i className="ri-arrow-right-up-line" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
                                <Link href="/work-single">
                                    <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-4.png" alt="Design Consultation" style={{ aspectRatio: "7/5", objectFit: "cover" }} />
                                </Link>
                                <div className="d-flex align-items-center mt-4">
                                    <Link href="/work-single" className="project-card-content">
                                        <h3 className="fw-semibold">Design Consultation</h3>
                                        <p>Creative Pulse Studios</p>
                                    </Link>
                                    <Link href="/work-single" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                                        <i className="ri-arrow-right-up-line" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
