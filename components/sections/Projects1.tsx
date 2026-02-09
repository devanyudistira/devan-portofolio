"use client";
import Link from "next/link";

import Isotope from "isotope-layout"
import { useEffect, useRef, useState } from "react"

export default function Projects1() {

    const isotope = useRef<Isotope | null>(null)
	const [filterKey, setFilterKey] = useState<string>("*")

	useEffect(() => {
		const timeout = setTimeout(() => {
			isotope.current = new Isotope(".masonry-active", {
				itemSelector: ".filter-item",
				percentPosition: true,
				masonry: {
					columnWidth: ".filter-item",
				},
			})
		}, 1000)

		// Cleanup on unmount
		return () => clearTimeout(timeout)
	}, [])

	useEffect(() => {
		if (isotope.current) {
			isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` })
		}
	}, [filterKey])

    return (
        <>
            <div id="projects" className="section-projects-1 position-relative pt-120 pb-6 bg-900">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-7 me-auto">
                            <h3 className="ds-3 mt-3 text-primary-1">My Works</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-900 fillter-project">
                <div className="container">
                    <div className="row masonry-active justify-content-between">
                        <div className="grid-sizer" />
                        <div className="filter-item col-lg-6 col-12 brand ui app">
                            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
                                <Link href="/work-single">
                                    <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-1.png" alt="infinia" />
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
                        <div className="filter-item col-lg-6 col-12 webdesign brand dataanalysis brand">
                            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
                                <Link href="/work-single">
                                    <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-2.png" alt="infinia" />
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
                        <div className="filter-item col-lg-6 col-12 ui app">
                            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
                                <Link href="/work-single">
                                    <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-3.png" alt="infinia" />
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
                        <div className="filter-item col-lg-6 col-12 app app dataanalysis brand">
                            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
                                <Link href="/work-single">
                                    <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-4.png" alt="infinia" />
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
