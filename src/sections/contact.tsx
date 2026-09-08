import Section from "../components/section";
import { ChevronDown, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
    return (
        <Section id="contact" title="Contact">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
                
                {/* Left Side: Context & Direct Contact (2 Columns) */}
                <div className="md:col-span-2 space-y-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-base font-semibold text-gray-800">
                            Let's build something Great!
                        </h3>
                        <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                        Have a project in mind or want to discuss an idea? Send me an email or  message me on WhatsApp to get started.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="group flex items-center gap-3 text-sm text-gray-900 transition-colors duration-200 hover:text-gray-600">
                            <Mail className="size-4 shrink-0 text-gray-500 transition-transform duration-200 group-hover:scale-110" />
                            <a
                                href="mailto:Joseph Onyango <jonyangomail@gmail.com>"
                                className="font-medium hover:underline decoration-gray-400 underline-offset-2"
                            >
                                Send me Mail
                            </a>
                        </div>

                        <div className="group flex items-center gap-3 text-sm text-emerald-600 transition-colors duration-200 hover:text-gray-600">
                            <FaWhatsapp className="size-4 shrink-0 text-emerald-500 transition-transform duration-200 group-hover:scale-110 group-hover:text-gray-600" />
                            <a
                                href="https://wa.me/254725406004"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium hover:underline decoration-gray-400 underline-offset-2"
                                aria-label="WhatsApp"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <span className="flex h-2.5 w-2.5 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                                I'm Currently Available
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Side: A Structural Project Intake Form */}
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="md:col-span-3 border border-gray-200 p-6 rounded-xl space-y-4 bg-white"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-xs font-medium text-gray-700 mb-1"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                autoComplete="name"
                                placeholder="Jane Doe"
                                className="w-full border border-gray-200 rounded-lg p-2.5 text-sm text-gray-800 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 transition"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-xs font-medium text-gray-700 mb-1"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                autoComplete="email"
                                placeholder="jane@company.com"
                                className="w-full border border-gray-200 rounded-lg p-2.5 text-sm text-gray-800 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 transition"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="project-type"
                            className="block text-xs font-medium text-gray-700 mb-1"
                        >
                            What are you looking to build?
                        </label>
                        <div className="relative">
                            <select
                                id="project-type"
                                name="projectType"
                                required
                                defaultValue=""
                                className="w-full appearance-none border border-gray-200 rounded-lg p-2.5 pr-10 text-sm text-gray-600 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 transition"
                            >
                                <option value="" disabled>
                                Select a project type
                                </option>
                                <option value="landing-page">Landing Page</option>
                                <option value="business-website">Business Website</option>
                                <option value="web-mobile-application">
                                Web & Mobile Application
                                </option>
                                <option value="custom-project">Custom Project</option>
                            </select>

                            <ChevronDown
                                className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-600"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-xs font-medium text-gray-700 mb-1"
                        >
                            Project Brief & Goals
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            placeholder="Tell me what you're looking to build, what you want it to achieve or anything else that might be helpful."
                            className="w-full border border-gray-200 rounded-lg p-2.5 text-sm text-gray-800 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 transition resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-900 hover:bg-gray-600 text-white font-medium text-sm py-2.5 px-4 rounded-lg transition"
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </Section>
    );
}
