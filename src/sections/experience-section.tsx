import Section from "../components/section";

export default function ExperienceSection() {
  const experience = [
    {
      image: "/assets/ncf-icon.png",
      title: "Co-founder & Lead Developer",
      company: "Neuro Care Foundation",
      location: "Remote",
      start: "Jan 2024",
      end: "Present",
      description: [
        "Leading the design and development of the Neuro Care platform, from concept to implementation.",
        "Managing a phased development roadmap, ensuring structured progress from planning to deployment and scalability.",
        "Providing technical support in computer maintenance, software installation and configuration, network setup, troubleshooting and assisting users in utilizing digital tools effectively.",
      ],
    },
    {
      image: "/assets/shak.png",
      title: "Volunteer Web Developer",
      company: "Spina bifida & Hydrocephalus Association of Kenya (SHAK), Nairobi",
      location: "Hybrid",
      start: "Apr 2020",
      end: "Nov 2023",
      description: [
        "Volunteered as a web developer, supporting the organization’s digital initiatives and online presence.",
        "Collaborated with non-technical stakeholders to translate needs into functional web solutions.",
        "Resolved technical issues and assisted users in understanding and using digital tools effectively."
      ],
    },
  ];

  return (
    <Section title="Experience">
      <div className="space-y-6">
        {experience.map((exp) => (
          <div key={exp.title} className="w-full border border-gray-200 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-1">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    width={45}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col text-gray-500 text-sm">
                    <span>{exp.company}</span>
                    <span>{exp.location}</span> {/* Added location */}
                  </div>
                </div>
              </div>
              <div className="text-gray-500 text-sm">{exp.start} - {exp.end}</div>
            </div>
            <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
              {exp.description.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
