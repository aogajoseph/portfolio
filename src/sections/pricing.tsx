import Section from "../components/section";

export default function PricingSection() {
    const pricingPackages = [
        {
            title: "Landing Pages",
            badge: "Single-page Websites",
            price: "From $250",
            emoji: "🎯",
            description: "Focused landing pages for specific products, campaigns or events, ideal for capturing leads."
        },
        {
            title: "Business Webites",
            badge: "Professional Sites",
            price: "From $500",
            emoji: "🏢",
            description: "Corporate multi-page websites for businesses, organizations and service providers."
        },
        {
            title: "Applications",
            badge: "Web & Mobile Apps",
            price: "From $1,000",
            emoji: "📱",
            description: "Dynamic, interactive web and mobile applications built around well defined workflows, data and users."
        },
        {
            title: "Custom Projects",
            badge: "Tailor-Made Solutions",
            price: "Let's Talk",
            emoji: "🛠️",
            description: "Complex, personalized projects tailored to specialized goals, requirements and workflows."
        }
    ];

    return (
        <Section id="pricing" title="Pricing">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {pricingPackages.map((pkg) => (
                    <div key={pkg.title} className="w-full rounded-xl border border-gray-200 p-6 transition hover:-translate-y-0.5">
                        <div>
                            <div className="flex flex-col sm:flex-row items-start gap-3 sm:items-center justify-between w-full text-gray-500">
                                <div className="flex items-center gap-3">
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 text-xl cursor-default">
                                        {pkg.emoji}
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-800">
                                            {pkg.title}
                                        </h3>
                                        <div className="text-xs text-gray-400">
                                            {pkg.badge}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right whitespace-nowrap">
                                    {pkg.price.startsWith("From ") ? (
                                        <>
                                            <div className="text-[10px] uppercase tracking-wider text-gray-400">
                                                From
                                            </div>
                                            <div className="text-lg font-semibold text-indigo-700">
                                                {pkg.price.replace("From ", "")}
                                            </div>
                                        </>
                                    ) : (
                                        <div className="text-[1rem] font-semibold text-indigo-700">
                                            {pkg.price}
                                        </div>
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
