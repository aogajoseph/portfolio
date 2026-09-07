import Section from "../components/section";

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
                        Have a project in mind or want to discuss an idea? Send me a message or book a discovery call to get started.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <span className="text-base">📅</span>
                            <a 
                                href="https://cal.com" 
                                target="_blank" 
                                rel="noreferrer"
                                className="font-medium text-gray-800 hover:underline decoration-gray-400"
                            >
                                Book a Discovery Call
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <span className="text-base">✉️</span>
                            <a 
                                href="mailto:Joseph Onyango <jonyangomail@gmail.com>"
                                className="font-medium text-gray-800 hover:underline decoration-gray-400"
                            >
                                jonyangomail@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <span className="flex h-2.5 w-2.5 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                                Available for New Projects
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Side: The Structural Project Intake Form (3 Columns) */}
                <form 
                    onSubmit={(e) => e.preventDefault()} 
                    className="md:col-span-3 border border-gray-200 p-6 rounded-xl space-y-4 bg-white"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                placeholder="Jane Doe"
                                className="w-full border border-gray-200 rounded-lg p-2.5 text-sm text-gray-800 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 transition"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder="jane@company.com"
                                className="w-full border border-gray-200 rounded-lg p-2.5 text-sm text-gray-800 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 transition"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="project-type" className="block text-xs font-medium text-gray-700 mb-1">
                            What are you looking to build?
                        </label>
                        <select
                            id="project-type"
                            className="w-full border border-gray-200 rounded-lg p-2.5 text-sm text-gray-600 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 transition"
                        >
                            <option>Landing Page</option>
                            <option>Business Website</option>
                            <option>Web/Mobile Application</option>
                            <option>Custom Project / Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                            Your Goals/Project Brief
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            required
                            placeholder="Tell me a bit about what you want to achieve..."
                            className="w-full border border-gray-200 rounded-lg p-2.5 text-sm text-gray-800 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 transition resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm py-2.5 px-4 rounded-lg transition"
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </Section>
    );
}
