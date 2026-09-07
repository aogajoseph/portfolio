import Section from "../components/section";

export default function PricingSection() {
    const pricingPackages = [
        {
            title: "Landing Page",
            badge: "High-Converting Single Page",
            price: "from $250",
            emoji: "🎯",
            description: "A focused, single-page website designed to capture leads, launch new products, or promote targeted events. Includes structural copy optimization, fast loading speeds, and responsive layouts to turn modern visitors into immediate business opportunities."
        },
        {
            title: "Business Website",
            badge: "Complete Brand Presence",
            price: "from $500",
            emoji: "🏢",
            description: "A multi-page website built to establish a professional, highly credible online authority for brands, organizations, and service providers. Showcases your complete scope of services, client testimonials, and includes clean contact or appointment pipelines."
        },
        {
            title: "Web Application",
            badge: "Interactive Dynamic Platforms",
            price: "from $1,000",
            emoji: "💻",
            description: "Custom-built web software tailored directly to your operational workflows, digital products, or SaaS concept ideas. Focuses heavily on managing real-time data, structured user dashboards, secure authentication flows, and automated backend operations."
        },
        {
            title: "Custom Project",
            badge: "Tailor-Made Solutions",
            price: "Let's discuss",
            emoji: "🛠️",
            description: "Have an intricate cross-platform mobile application, a legacy platform rewrite, or an unlisted complex development challenge? Let’s map out your exact system requirements, architectural roadblocks, and map a budget tailored directly to your technical roadmap."
        }
    ];

    return (
        <Section id="pricing" title="Pricing & Services">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {pricingPackages.map((pkg) => (
                    <div key={pkg.title} className="w-full border border-gray-200 p-6 rounded-xl flex flex-col justify-between">
                        <div>
                            <div className="flex flex-col sm:flex-row items-start gap-3 sm:items-center justify-between w-full text-gray-500">
                                <div className="flex items-center gap-3">
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 text-xl cursor-default">
                                        {pkg.emoji}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-800">
                                            {pkg.title}
                                        </h3>
                                        <div className="text-xs text-gray-400">
                                            {pkg.badge}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-base font-semibold text-gray-800 mt-2 sm:mt-0 whitespace-nowrap">
                                    {pkg.price.startsWith("from ") ? (
                                        <>
                                            from <span className="text-lg text-gray-900">{pkg.price.replace("from ", "")}</span>
                                        </>
                                    ) : (
                                        pkg.price
                                    )}
                                </div>
                            </div>
                            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                                {pkg.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
