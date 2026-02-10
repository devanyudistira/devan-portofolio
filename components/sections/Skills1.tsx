"use client";
export default function Skills1() {
    const techStacks = [
        { name: "Next.js", icon: "ri-nextjs-line" },
        { name: "MongoDB", icon: "ri-database-2-line" },
        { name: "Vue.js", icon: "ri-vuejs-fill" },
        { name: "React.js", icon: "ri-reactjs-line" },
        { name: "Python", icon: "ri-terminal-box-line" },
        { name: "TypeScript", icon: "ri-code-box-line" },
        { name: "Node.js", icon: "ri-nodejs-line" },
    ];

    return (
        <>
            <section id="skills" className="section-skills-1 position-relative section-padding bg-900">
                <div className="container">
                    <div className="row">
                        <div className="text-center mb-7">
                            <h3 className="ds-3 mt-3 mb-3 text-primary-1">My Tech Stack</h3>
                            <span className="fs-5 fw-medium text-200">
                                I specialize in building modern web applications using
                                <br className="d-md-block d-none" />
                                industry-leading frameworks and technologies.
                            </span>
                        </div>
                        <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-4 mb-7 px-6">
                            {techStacks.map((tech, index) => (
                                <div key={index} className="skills text-center">
                                    <div className="skills-icon mb-3">
                                        <i className={`${tech.icon} fs-1 text-primary-1`}></i>
                                    </div>
                                    <p className="text-400 fw-medium text-uppercase mb-0">{tech.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
