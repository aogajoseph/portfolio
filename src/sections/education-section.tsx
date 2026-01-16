import Section from "../components/section";

export default function EducationSection() {
    return (
        <Section title="Education">
            <div className="w-full border border-gray-200 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-1">
                            <img
                                src="/assets/ztm.png"
                                alt="Education & Training"
                                width={45}
                                className="size-10.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800">
                                Coursework
                            </h3>
                            <div>Zero to Mastery Academy</div>
                        </div>
                    </div>
                    <div>Feb 2020 - Date</div>
                </div>
                <p className="mt-6 text-gray-500">Online coursework covering JavaScript across frontend, backend and related technologies, with a focus on React and React Native. I continuously apply these concepts through real-world projects, building software that balance user needs, technical maintainability and organizational goals.</p>
            </div>
        </Section>
    );
}