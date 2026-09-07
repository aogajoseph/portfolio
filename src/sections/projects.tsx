import Section from "../components/section";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Globe Technologies",
            type: "Personal Project",
            description:
                "A technology and intellectual property venture being built to create software products, digital platforms, original intellectual properties, franchises, creative media and other assets for global audiences.",
            image: "/assets/globe.png",
            href: "https://globe-aoga-j.vercel.app/",
        },
        {
            title: "Savara",
            type: "Concept Project",
            description:
                "A premium restaurant experience designed to bring its cuisine, atmosphere, reservations, menus, private dining experience and everything else that guests need to discover and connect with the restaurant.",
            image: "/assets/savara.png",
            href: "/projects/coming-soon",
        },
        {
            title: "Kaven Realtors",
            type: "Concept Project",
            description:
                "A modern property platform designed to showcase exceptional listings, simplify property discovery and help prospective buyers acquire their ideal homes and investment opportunities.",
            image: "/assets/kaven.png",
            href: "/projects/coming-soon",
        },
        {
            title: "Mara Voss",
            type: "Concept Project",
            description:
                "A polished digital home for modern media personalities, bringing together content, storytelling, collaborations and audience engagement under one distinctive personal brand.",
            image: "/assets/mara-voss.png",
            href: "/projects/coming-soon",
        },
    ];

    return (
        <Section id="projects" title="Projects">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-0.5 transition"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="aspect-video w-full object-cover bg-gray-100"
                        />

                        <div className="p-5">
                          <p className="inline-flex w-fit items-center rounded-full border border-indigo-200 bg-indigo-50 px-2 py-1 text-xs font-small tracking-wide text-gray-500">
                            {project.type}
                          </p>

                            <h3 className="text-lg font-medium uppercase mt-3 text-indigo-600">
                                {project.title}
                            </h3>

                            <p className="text-sm/6 text-gray-600 mt-2">
                                {project.description}
                            </p>

                            {project.href !== "#" && (
                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg transition text-sm"
                                >
                                    View Live Site
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}