import Section from "../components/section";

export default function ExperienceSection() {
  const experience = [
    {
      image: "/assets/ncf-icon.png",
      title: "Lead Developer",
      company: "Neuro Care Foundation",
      location: "Remote",
      start: "Jan 2024",
      end: "Present",
      description: [
        "Leading the development and design of the Neuro Care platform.",
        "Responsible for the platform’s core architecture, navigation structure, authentication flows and backend contracts.",
        "Managing a phased development approach."
      ],
    },
    {
      image: "/assets/shak.png",
      title: "Volunteer Web Developer",
      company: "Spina bifida & Hydrocephalus Association of Kenya",
      location: "Nairobi, Kenya",
      start: "Apr 2020",
      end: "Nov 2023",
      description: [
        "Volunteering as a web developer to support the organization’s digital initiatives.",
        "Working with non-technical stakeholders to translate needs into functional solutions.",
        "Identifying and fixing technical issues to improve performance."
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
