import { ChevronUp } from "lucide-react";

import {
    FaWhatsapp,
    FaEnvelope,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import { contact } from "../config/contact";

export default function Footer() {
    return (
        <footer className="mt-32 w-full border-t border-gray-200">
            <div className="mx-auto max-w-5xl px-6 py-6">
                <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-3 md:gap-0">

                    {/* Copyright */}
                    <p className="text-center text-xs text-gray-400 md:text-left">
                        © {new Date().getFullYear()} Joseph Onyango
                    </p>

                    {/* Social Links */}
                    <nav className="flex items-center justify-center text-gray-700">

                        <a
                            href={`https://wa.me/${contact.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-gray-500"
                            aria-label="WhatsApp"
                            title="WhatsApp"
                        >
                            <FaWhatsapp className="size-4" />
                        </a>

                        <span className="mx-3 text-gray-500">·</span>

                        <a
                            href={`mailto:${contact.email}`}
                            className="transition-colors hover:text-gray-500"
                            aria-label="Email"
                            title="Email"
                        >
                            <FaEnvelope className="size-4" />
                        </a>

                        <span className="mx-3 text-gray-500">·</span>

                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-gray-500"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                        >
                            <FaLinkedin className="size-4" />
                        </a>

                        <span className="mx-3 text-gray-500">·</span>

                        <a
                            href={contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-gray-500"
                            aria-label="GitHub"
                            title="GitHub"
                        >
                            <FaGithub className="size-4" />
                        </a>

                    </nav>

                    {/* Back to Top */}
                    <button
                        type="button"
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                        className="flex size-8 items-center justify-center justify-self-center rounded-lg bg-gray-300 text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-900 md:justify-self-end"
                        aria-label="Back to top"
                        title="Back to top"
                    >
                        <ChevronUp className="size-4" />
                    </button>

                </div>
            </div>
        </footer>
    );
}