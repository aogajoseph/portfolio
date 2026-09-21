import Section from "../components/section";

interface Project {
    title: string;
    type: string;
    description: string;
    image: string;
    href: string;
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-0.5 transition">
            <img
                src={project.image}
                alt={project.title}
                className="aspect-video w-full object-cover bg-gray-100"
            />

            <div className="p-5">
                <p className="inline-flex w-fit items-center rounded-full border border-indigo-200 bg-indigo-50 px-2 py-1 text-[9px] font-small tracking-wide text-gray-800">
                    {project.type}
                </p>

                <h3 className="text-sm font-medium uppercase mt-3 text-indigo-600">
                    {project.title}
                </h3>

                <div className="relative mt-2">
                    <p className="text-sm/6 text-gray-600">
                        {project.description}
                    </p>
                </div>

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
    );
}

export default function ProjectsSection() {
    const projects: Project[] = [
        {
            title: "Globe Technologies",
            type: "Personal Project",
            description:
                "An innovation company being developed to research, develop and commercialize ideas into products, services and intellectual properties.",
            image: "/assets/globe.png",
            href: "https://globe-aoga-j.vercel.app/",
        },
        {
            title: "Darmian Kingston",
            type: "Concept Project",
            description:
                "A premium digital presence for celebrities and public figures, showcasing their personal brand, achievements, projects and exclusive content.",
            image: "/assets/darmian-kingston.png",
            href: "/projects/coming-soon",
        },
        {
            title: "Alora Kitchen",
            type: "Concept Project",
            description:
                "A refined restaurant website designed to showcase culinary excellence, seasonal offerings, reservations and memorable dining experiences.",
            image: "/assets/alora-kitchen.png",
            href: "/projects/coming-soon",
        },
        {
            title: "Summit Properties",
            type: "Concept Project",
            description:
                "A modern real estate website designed to simplify the discovery of premium properties and unlock exceptional investment opportunities.",
            image: "/assets/summit-properties.png",
            href: "/projects/coming-soon",
        },
    ];

    return (
        <Section id="projects" title="Projects">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full items-start">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                    />
                ))}
            </div>
        </Section>
    );
}