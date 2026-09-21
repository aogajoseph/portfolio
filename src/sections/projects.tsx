import { useState } from "react";
import { X, Clock, Sparkles } from "lucide-react";

import Section from "../components/section";

interface Project {
    title: string;
    type: string;
    description: string;
    image: string;
    href?: string;
    status?: "active" | "coming-soon" | "live";
}

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
    if (!project) return null;

    const isActive = project.status === "active";

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5 backdrop-blur-sm"
            onClick={onClose}
            role="presentation"
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900"
                    aria-label="Close modal"
                >
                    <X className="size-4" />
                </button>

                {/* Icon */}
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    {isActive ? (
                        <Clock className="size-6" />
                    ) : (
                        <Sparkles className="size-6" />
                    )}
                </div>

                {/* Content */}
                <h2
                    id="project-modal-title"
                    className="pr-8 text-lg font-semibold text-gray-900"
                >
                    {project.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                    {isActive
                        ? "This project is currently in active development. Please check back soon."
                        : "This project is coming soon. It will be available after the current project is complete."}
                </p>

                {/* Close Action */}
                <button
                    type="button"
                    onClick={onClose}
                    className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
                >
                    Got it
                </button>
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const [modalProject, setModalProject] = useState<Project | null>(null);

    const handleProjectClick = () => {
        if (
            project.status === "active" ||
            project.status === "coming-soon"
        ) {
            setModalProject(project);
        }
    };

    return (
        <>
            <div className="overflow-hidden rounded-xl border border-gray-200 transition hover:-translate-y-0.5">
                <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video w-full bg-gray-100 object-cover"
                />

                <div className="p-5">
                    <p className="inline-flex w-fit items-center rounded-full border border-indigo-200 bg-indigo-50 px-2 py-1 text-[9px] font-small tracking-wide text-gray-800">
                        {project.type}
                    </p>

                    <h3 className="mt-3 text-sm font-medium uppercase text-indigo-600">
                        {project.title}
                    </h3>

                    <div className="relative mt-2">
                        <p className="text-sm/6 text-gray-600">
                            {project.description}
                        </p>
                    </div>

                    {project.status === "live" && (
                        <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center rounded-lg border border-indigo-600 px-4 py-2 text-sm text-indigo-600 transition hover:bg-indigo-50"
                        >
                            View Live Site
                        </a>
                    )}

                    {(project.status === "active" ||
                        project.status === "coming-soon") && (
                        <button
                            type="button"
                            onClick={handleProjectClick}
                            className="mt-4 inline-flex items-center rounded-lg border border-indigo-600 px-4 py-2 text-sm text-indigo-600 transition hover:bg-indigo-50"
                        >
                            View Live Site
                        </button>
                    )}
                </div>
            </div>

            {/* Modal */}
            {modalProject && (
                <ProjectModal
                    project={modalProject}
                    onClose={() => setModalProject(null)}
                />
            )}
        </>
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
            status: "live",
        },
        {
            title: "Darmian Kingston",
            type: "Concept Project",
            description:
                "A premium digital presence for celebrities and public figures, showcasing their personal brand, achievements, projects and exclusive content.",
            image: "/assets/darmian-kingston.png",
            href: "/projects/coming-soon",
            status: "active",
        },
        {
            title: "Alora Kitchen",
            type: "Concept Project",
            description:
                "A refined restaurant website designed to showcase culinary excellence, seasonal offerings, reservations and memorable dining experiences.",
            image: "/assets/alora-kitchen.png",
            href: "/projects/coming-soon",
            status: "coming-soon",
        },
        {
            title: "Summit Properties",
            type: "Concept Project",
            description:
                "A modern real estate website designed to simplify the discovery of premium properties and unlock exceptional investment opportunities.",
            image: "/assets/summit-properties.png",
            href: "/projects/coming-soon",
            status: "coming-soon",
        },
    ];

    return (
        <Section id="projects" title="Projects">
            <div className="grid w-full grid-cols-1 items-start gap-5 sm:grid-cols-2">
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