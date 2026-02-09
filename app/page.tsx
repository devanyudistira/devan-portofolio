import Layout from "@/components/layout/Layout"
import Home1 from "@/components/sections/Home1"
import Projects1 from "@/components/sections/Projects1"
import Skills1 from "@/components/sections/Skills1"

export default function Home() {

	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<Home1 />
				<Skills1 />
				<Projects1 />

				<section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
					<div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900 overflow-hidden">
						<div className="wow img-custom-anim-top">
							<h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">Devan Yudistira</h3>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}