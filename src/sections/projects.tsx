import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Section from "../components/section";

interface Project {
    title: string;
    type: string;
    description: string;
    image: string;
    href: string;
}

function ProjectCard({ project }: { project: Project }) {
    const [expanded, setExpanded] = useState(false);

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
                    <p
                        className={`text-sm/6 text-gray-600 ${
                            expanded ? "" : "line-clamp-2"
                        }`}
                    >
                        {project.description}
                    </p>

                    {!expanded && (
                        <button
                            type="button"
                            onClick={() => setExpanded(true)}
                            className="absolute bottom-0 right-0 bg-white pl-2 py-1 text-xs font-medium text-green-600 hover:text-green-400 transition-colors inline-flex items-center gap-1"
                            aria-label={`Expand ${project.title} description`}
                        >
                            <ChevronDown className="size-4" />
                            Expand
                        </button>
                    )}

                    {expanded && (
                        <button
                            type="button"
                            onClick={() => setExpanded(false)}
                            className="ml-1 text-xs font-medium text-rose-600 hover:text-rose-700 transition-colors inline-flex items-center gap-1"
                            aria-label={`Collapse ${project.title} description`}
                        >
                            <ChevronUp className="size-4" />
                            Hide
                        </button>
                    )}
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
                "A Technology and Intellectual Property company being developed to create software products, digital platforms, original intellectual properties, franchises, creative media and other assets meant for global audiences.",
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
                "A modern property platform designed to showcase exceptional listings, simplify property discovery and help prospective buyers acquire their ideal homes and investment opportunities efficiently.",
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full items-start">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </Section>
    );
}