
import Link from "next/link"

export default function Home1() {
	return (
		<>
			<section className="section-hero-1 position-relative">
				<div className="container position-relative z-3">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<h1 className="ds-2 mb-3">Hi Everyone, I am <br /><span className="text-primary-1">Devan Yudistira</span></h1>
							<p className="text-300 mb-6">I assist individuals and brands in achieving their objectives by creating and developing user-focused digital products and interactive experiences.</p>
						</div>
					</div>
				</div>
				<div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 d-none d-md-block">
					<img className="position-relative z-1 filter-gray" src="/assets/imgs/hero/hero-1/man.png" alt="man" />
					<div className="position-absolute top-50 start-0 translate-middle z-0 mt-8 ms-10 ps-8">
						<img className="ribbonRotate" src="/assets/imgs/hero/hero-1/decorate.png" alt="" />
					</div>
				</div>
				<div className="position-absolute top-0 start-0 w-100 h-100 filter-invert" data-background="assets/imgs/hero/hero-1/background.png" />
			</section>
		</>
	)
}
