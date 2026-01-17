import { Download } from "lucide-react";

export default function NeuroCareCaseStudy() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 space-y-10">

      {/* Header with Logo */}
      <header className="flex items-center gap-4">
        <img
          src="/assets/ncf-icon.png"
          alt="Neuro Care Foundation"
          className="h-10 w-10 rounded-md"
        />
        <div>
          <h1 className="text-2xl font-semibold text-[#aa2078]">
            Neuro Care
          </h1>
          <p className="text-sm text-gray-500">
            A neurological health information & support platform.
          </p>
        </div>
      </header>

      {/* Overview */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#aa2078] mb-2">Overview</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Neuro Care is a platform designed to centralize neurological health information,
          helping individuals, caregivers and community organizations access trusted resources,
          navigate support systems and connect with relevant programs. The platform prioritizes
          clarity, maintainability and long-term sustainability.
        </p>
      </div>

      {/* Problem */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#ff0000] mb-2">The Problem</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Neurological health resources are fragmented. Families struggle to find reliable
          information, while organizations lack a unified space to present and maintain their
          offerings. Neuro Care addresses this gap without making clinical claims, focusing on
          access, structure and clarity.
        </p>
      </div>

      {/* Approach */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-3">
        <h2 className="text-lg font-semibold text-[#008000]">Our Approach</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          The platform is built with a human-centered approach and strict architectural contracts
          between frontend and backend. Foundational systems are established first, followed by
          phased feature delivery to reduce technical debt.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Backend-driven UI and content flow.</li>
          <li>Clear navigation and identity structures.</li>
          <li>Localization and preference management.</li>
          <li>Incremental, low-risk feature rollout.</li>
        </ul>
      </div>

      {/* Features & Tech */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-3">
        <h2 className="text-lg font-semibold text-[#aa2078]">Core Features</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Curated informational resource pages.</li>
          <li>Community and organization listings.</li>
          <li>Anonymous and authenticated user flows.</li>
          <li>Localization and user preferences.</li>
        </ul>

        <h3 className="text-sm font-medium text-gray-800 mt-4">
          Tech Stack & Architecture
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          Built with Expo and React Native, supported by backend-authoritative API contracts.
          The architecture emphasizes modularity, maintainability and readiness for future growth.
        </p>
      </div>

      {/* Role */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#aa2078] mb-2">My Role</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          As the lead developer, I’m responsible for defining the technical foundation
          of Neuro Care — including architecture, navigation, authentication flows, localization
          and development standards that support long-term maintainability.
        </p>
      </div>

      {/* Screenshots / Access */}
      <div className="bg-white rounded-xl p-6 space-y-6">
        <h2 className="text-lg font-semibold text-[#aa2078]">
          Platform Preview
        </h2>

        {/* Video Overview */}
        <div className="bg-white rounded-xl p-6 space-y-4">
          <div className="relative w-full h-[420px] overflow-hidden rounded-xl">

            {/* Poster layer */}
            <img
              src="/assets/neurocare.png"
              alt="Neuro Care Demo Thumbnail"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Video layer */}
            <video
              src="/assets/neurocare-demo.mp4"
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              onPlay={(e) => {
                const poster = (e.currentTarget.previousSibling as HTMLElement);
                if (poster) poster.style.opacity = "0";
              }}
            />

          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "/assets/neurocare.jpg",
            "/assets/neurocare2.jpg",
            "/assets/neurocare3.jpg",
            "/assets/neurocare4.jpg",
          ].map((src, idx) => (
            <div
              key={idx}
              className="w-full max-h-[360px] flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Neuro Care Screenshot ${idx + 1}`}
                className="max-h-[360px] w-auto rounded-xl shadow-md object-contain"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://expo.dev/artifacts/eas/c1536a38-b6dd-4350-be79-22919e8e2227.apk"
            className="inline-flex items-center bg-[#aa2078] hover:bg-[#931c67] text-white px-6 py-2.5 rounded-lg text-sm transition"
          >
            <Download className="mr-2 h-4 w-4" />
            Download APK
          </a>

          <a
            href="https://github.com/aogajoseph/neurocare-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-[#aa2078] text-[#aa2078] hover:bg-[#aa2078]/10 px-6 py-2.5 rounded-lg text-sm transition"
          >
            View Source Code
          </a>
        </div>

      </div>

      {/* Lessons */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#aa2078] mb-2">Lessons & Impact</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Building Neuro Care has reinforced the importance of intentional architecture and phased
          delivery. Establishing strong foundations early creates stable platforms, capable
          of evolving based on human needs without constant rewrites.
        </p>
      </div>

    </section>
  );
}
