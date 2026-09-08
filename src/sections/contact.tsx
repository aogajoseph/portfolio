import { useState, type FormEvent } from "react";

import Section from "../components/section";

import { Check, ChevronDown, ChevronUp, Mail } from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"success" | "error" | null>(null);
    const [isProjectTypeOpen, setIsProjectTypeOpen] = useState(false);
    const [projectType, setProjectType] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            projectType: formData.get("projectType"),
            message: formData.get("message"),
        };

        setIsSubmitting(true);

        try {
            setStatus(null);
        
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        
            if (!response.ok) {
                throw new Error("Failed to send message.");
            }
        
            form.reset();
            setStatus("success");
        
            setTimeout(() => {
                setStatus(null);
            }, 4000);
        } catch (error) {
            console.error(error);
            setStatus("error");
        
            setTimeout(() => {
                setStatus(null);
            }, 4000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id="contact" title="Contact">
            {status && (
                <div
                    role="status"
                    aria-live="polite"
                    className={`fixed bottom-6 right-6 z-50 rounded-lg border px-4 py-3 text-sm font-medium shadow-lg ${
                        status === "success"
                            ? "border-emerald-200 bg-white text-emerald-700"
                            : "border-red-200 bg-white text-red-700"
                    }`}
                >
                    {status === "success"
                        ? "Message sent successfully."
                        : "Something went wrong. Please try again."}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
                {/* Left Side: Context & Direct Contact */}
                <div className="md:col-span-2 space-y-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-base font-semibold text-gray-800">
                            Let's build something Great!
                        </h3>

                        <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                            Have a project in mind or want to discuss an idea? Send me
                            an email or message me on WhatsApp to get started.
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
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                            </span>

                            <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                                I'm Currently Open for Projects
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Project Intake Form */}
                <form
                    onSubmit={handleSubmit}
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
                            <button
                                type="button"
                                onClick={() => setIsProjectTypeOpen((open) => !open)}
                                className={`w-full border border-gray-200 rounded-lg p-2.5 pr-10 text-sm text-left bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 transition ${
                                    projectType ? "text-gray-800" : "text-gray-600"
                                }`}
                                aria-haspopup="listbox"
                                aria-expanded={isProjectTypeOpen}
                            >
                                {projectType || "Select a project type"}

                                {isProjectTypeOpen ? (
                                    <ChevronUp className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-600" />
                                ) : (
                                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-600" />
                                )}
                            </button>

                            {isProjectTypeOpen && (
                                <div
                                    className="absolute left-0 right-0 top-full z-20 mt-1 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
                                    role="listbox"
                                >
                                    {[
                                        "Landing Page",
                                        "Business Website",
                                        "Web/Mobile App",
                                        "Custom Project",
                                    ].map((option) => (
                                        <button
                                            key={option}
                                            type="button"
                                            onClick={() => {
                                                setProjectType(option);
                                                setIsProjectTypeOpen(false);
                                            }}
                                            className="flex w-full items-center justify-between px-3 py-2.5 text-left text-sm text-gray-700 transition hover:bg-gray-50"
                                            role="option"
                                            aria-selected={projectType === option}
                                        >
                                            {option}

                                            {projectType === option && (
                                                <Check className="size-4 text-gray-600" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <input
                                type="hidden"
                                name="projectType"
                                value={projectType}
                                required
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
                            placeholder="Describe your project, what you aim to achieve or anything else that might be helpful."
                            className="w-full border border-gray-200 rounded-lg p-2.5 text-sm text-gray-800 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 transition resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gray-900 hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-60 text-white font-medium text-sm py-2.5 px-4 rounded-lg transition"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </Section>
    );
}