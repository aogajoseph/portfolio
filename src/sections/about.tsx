import Section from "../components/section";

export default function AboutSection() {
    return (
        <Section id="about" title="About">
            <div className="text-sm/6.5">
                <p>
                    I’m a Software Developer focused on helping organizations,
                    businesses and individuals build and improve the digital
                    touchpoints through which they engage their audiences. I
                    design and develop modern websites, web/mobile applications and
                    digital experiences with an emphasis on clarity, usability
                    and practical results.
                </p>

                <p className="mt-2">
                    Alongside client work, I’m building Globe Technologies — a
                    technology and Intellectual Property company focused on
                    creating software products, digital platforms, intellectual
                    properties, franchises, creative media and other assets
                    designed for a global audience. My work today is therefore
                    both practical and long-term: helping others build better
                    digital experiences while laying the foundation for a
                    technology company of my own.
                </p>
            </div>
        </Section>
    );
}
