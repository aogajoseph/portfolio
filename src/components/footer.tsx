import { ChevronUp } from "lucide-react";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-32 w-full border-t border-gray-200">
      <div className="mx-auto max-w-5xl px-6 py-6">
        <div className="grid grid-cols-3 items-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Joseph Onyango
          </p>

          <nav className="flex items-center justify-center text-gray-700">
            <a
              href="https://wa.me/254725406004"
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
              href="mailto:Joseph Onyango <jonyangomail@gmail.com>"
              className="transition-colors hover:text-gray-500"
              aria-label="Email"
              title="Email"
            >
              <FaEnvelope className="size-4" />
            </a>

            <span className="mx-3 text-gray-500">·</span>

            <a
              href="https://linkedin.com/in/josephonyango"
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
              href="https://github.com/aogajoseph"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-500"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub className="size-4" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex size-8 items-center justify-center justify-self-end rounded-lg bg-gray-300 text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-900"
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