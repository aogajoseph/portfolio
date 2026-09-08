import {
    AppWindow,
    Code2,
    LayoutTemplate,
    Smartphone,
} from "lucide-react";

import Section from "../components/section";

export default function ServicesSection() {
    const services = [
        {
            icon: LayoutTemplate,
            title: "Websites",
            description:
                "Modern, responsive websites that help businesses, organizations and professionals establish a credible presence and turn visitors into opportunities.",
        },
        {
            icon: AppWindow,
            title: "Web Applications",
            description:
                "Custom web applications built around real business processes, services and ideas to make complex tasks simpler and digital experiences more useful.",
        },
        {
            icon: Smartphone,
            title: "Mobile Applications",
            description:
                "Cross-platform mobile apps that extend digital products beyond the browser and give customers a convenient way to engage with their favourite brands.",
        },
        {
            icon: Code2,
            title: "Redesigns & Improvements",
            description:
                "Transforming outdated or underperforming websites and apps into cleaner, faster, more intuitive digital experiences that better serve target audiences.",
        }
    ];

    return (
        <Section id="services" title="Services">
            <div className="w-full">
                <p className="text-sm/6.5 text-gray-500 max-w-2xl">
                I build products that help brands thrive, communicate clearly and serve their audiences better.
                </p>

                <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div className="group flex flex-col sm:flex-row gap-5 sm:gap-8 py-6">

                                <div className="flex items-start gap-4 sm:w-28 shrink-0">
                                    <div className="flex items-center justify-center size-10 rounded-lg border border-gray-200 bg-gray-50 text-indigo-600 transition group-hover:border-indigo-200 group-hover:bg-indigo-50">
                                        <Icon className="size-5" />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-lg font-medium text-gray-800">
                                        {service.title}
                                    </h3>

                                    <p className="text-sm/6 text-gray-500 mt-2 max-w-2xl">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}