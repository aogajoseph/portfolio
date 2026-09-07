import Section from "../components/section";

export default function SkillsSection() {
    const skillGroups = [
        {
            title: "Frontend",
            skills: ["JavaScript", "TypeScript", "React", "React Native", "Next.js", "Expo"],
        },
        {
            title: "Backend & Data",
            skills: ["Node.js", "Express", "Prisma", "API Integration"],
        },
        {
            title: "Engineering",
            skills: ["System Design", "Git", "Debugging"],
        },
    ];

    return (
        <Section id="skills" title="Skills">
            <div className="w-full">
                {skillGroups.map((group, index) => (
                    <div
                        key={group.title}
                        className={`${index > 0 ? "border-t border-gray-200 pt-6 mt-6" : ""}`}
                    >
                        <h3 className="text-sm font-medium text-gray-800">
                            {group.title}
                        </h3>

                        <div className="flex flex-wrap gap-3 mt-3">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="border border-gray-200 bg-gray-50 text-gray-600 text-[12px] rounded-full px-4 py-1.5 cursor-default transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}