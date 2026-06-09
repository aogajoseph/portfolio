import { ChevronLeft } from "lucide-react";

export default function ComingSoonProjects() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="flex flex-col items-center text-center space-y-6">

        {/* Icon / Visual Anchor */}
<div className="flex items-center justify-center overflow-hidden">
  <img
    src="/assets/akiba.png"
    alt="Visual anchor"
    className="w-24 h-24 object-contain"
  />
</div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Akiba
        </h1>

        {/* Description */}
        <p className="max-w-xl text-gray-600 text-base leading-relaxed">
          This project has progressed beyond ideation, research and early architectural design. The first beta release (v0.8.0-beta.1) has been successfully developed and is currently undergoing closed internal testing. The current focus is on validating core functionalities, identifying edge cases, ensuring architectural stability and refining the user experience ahead of broader testing and future public releases.
        </p>

        {/* CTA */}
        <div className="pt-6">
          <a
            href="/"
            className="inline-flex items-center border border-indigo-600 text-indigo-600 hover:bg-[#aa2078]/10 px-6 py-3 rounded-lg text-sm transition"
          >
            <ChevronLeft className="w-4 h-4 mr-2" /> Back to Homepage
          </a>
        </div>

      </div>
    </section>
  );
}
