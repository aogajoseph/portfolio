import { ChevronLeft } from "lucide-react";

export default function ComingSoonProjects() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="flex flex-col items-center text-center space-y-6">

        {/* Icon / Visual Anchor */}
        <div className="w-14 h-14 rounded-full bg-[#aa2078]/10 flex items-center justify-center">
          <span className="text-[#aa2078] text-xl font-semibold">∞</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Projects Coming Soon
        </h1>

        {/* Description */}
        <p className="max-w-xl text-gray-600 text-base leading-relaxed">
          Some ideas are already taking shape. This project is currently in
          exploration, research and early architectural design. I'm still
          clarifying the challenges before building solutions.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-8">

          <div className="p-6 rounded-xl bg-gray-50 text-left space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Early Ideation
            </h3>
            <p className="text-gray-600 text-sm">
              Concept validation through research, stakeholder feedback
              and system design.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-50 text-left space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Architecture First
            </h3>
            <p className="text-gray-600 text-sm">
              Prioritizing navigation, data contracts and scalability designs before
              basic features.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-50 text-left space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Human-Centered Focus
            </h3>
            <p className="text-gray-600 text-sm">
              Understanding real user needs and long-term
              impact.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-50 text-left space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Shipping Intentionally
            </h3>
            <p className="text-gray-600 text-sm">
              Steady and deliberate progress, built to last. No rushed MVPs.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="pt-10">
          <a
            href="/#projects"
            className="inline-flex items-center border border-indigo-600 text-indigo-600 hover:bg-[#aa2078]/10 px-6 py-3 rounded-lg text-sm transition"
          >
            <ChevronLeft className="w-4 h-4 mr-2" /> Back to Homepage
          </a>
        </div>

      </div>
    </section>
  );
}
