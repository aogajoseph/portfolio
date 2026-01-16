import { Link } from "react-router-dom";
import Section from "../components/section";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Neuro Care Platform",
      description: "Neurological Information & Community Support",
      image: "/assets/neurocare.jfif",
      href: "/projects/neurocare",
    },
    {
      title: "Project Coming Soon",
      description: "This project is currently undergoing Ideation",
      image: "/assets/coming-soon.jfif",
      href: "/projects/coming-soon",
    }
  ];

  return (
    <Section title="Projects">
      <div className="flex flex-wrap gap-4 justify-center">
        {projects.map((project) => (
          <div
            key={project.title}
            className="max-w-75 border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-0.5 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-42 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-base font-medium">{project.title}</h3>
              <p className="text-gray-500 mt-1">{project.description}</p>

              {/* Project Details button */}
              <Link
                to={project.href}
                className="mt-3 inline-block border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg transition text-sm"
              >
                Project Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
