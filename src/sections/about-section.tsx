import Section from "../components/section";

export default function AboutSection() {
    return (
        <Section title="About">
            <div className="text-sm/6.5">
                <p>
                    Software developer driven by a strong interest in understanding real-world challenges and translating them into practical digital solutions. My background includes working with community organizations supporting persons with disabilities, where I co-founded Neuro Care Foundation and currently serve as Lead Developer.
                </p>
                <p className="mt-2">
                    My goal is to continue building thoughtful systems that respond to real needs across sectors including health, education and business.
                </p>
            </div>
        </Section>
    );
}