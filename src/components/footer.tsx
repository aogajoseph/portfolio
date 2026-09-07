export default function Footer() {
  return (
    <footer className="mt-32 w-full border-t border-gray-200">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="https://github.com/username"
            className="font-medium text-gray-700 transition-colors hover:text-gray-950"
          >
            Personal Website & Projects Portfolio
          </a>

          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <a href="https://github.com/username" className="transition-colors hover:text-gray-950">
              WhatsApp
            </a>
            <span className="mx-1 text-gray-600">·</span>
            <a href="mailto:namemail@gmail.com" className="transition-colors hover:text-gray-950">
              Email
            </a>
            <span className="mx-1 text-gray-600">·</span>
            <a href="https://linkedin.com/in/username" className="transition-colors hover:text-gray-950">
              LinkedIn
            </a>
            <span className="mx-1 text-gray-600">·</span>
            <a href="https://github.com/username" className="transition-colors hover:text-gray-950">
              GitHub
            </a>
          </nav>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} Joseph Onyango
        </p>
      </div>
    </footer>
  );
}