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
          This project is coming soon. It is currently under ideation, research and early architectural design. While the concept is already taking shape, potential issues are still being scrutinized.
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
