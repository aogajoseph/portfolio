export default function NeuroCareCaseStudy() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-12">

      {/* Hero / Header */}
      <header className="text-center">
        <h1 className="text-4xl font-extrabold">Neuro Care</h1>
        <p className="mt-4 text-lg text-gray-600">
          A neurological health information and support platform
        </p>
      </header>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-gray-700">
          Neuro Care is a platform designed to centralize and organize neurological health information,
          enabling individuals, caregivers, and community organizations to access trusted resources,
          navigate support systems, and connect with relevant programs. It is intentionally structured
          to prioritize clarity, maintainability, and long-term use.
        </p>
      </section>

      {/* Problem */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Problem</h2>
        <p className="text-gray-700">
          Navigating neurological health resources is fragmented. People and families often struggle
          to find reliable information and community support, and organizations lack a unified space
          to list resources that are easy to share and maintain. Neuro Care aims to bridge that gap
          without making clinical claims, focusing instead on access, structure, and clarity.
        </p>
      </section>

      {/* Approach */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Approach</h2>
        <p className="text-gray-700">
          The platform was built with a human-centered approach and strict architectural contracts between
          frontend and backend. Starting with foundational systems (navigation, authentication, configuration,
          and localization), development follows a phased strategy to mitigate technical debt and ensure
          long-term sustainability.
        </p>

        <ul className="list-disc list-inside text-gray-700">
          <li>Backend-driven UI and content flow</li>
          <li>Clear navigation and identity structures</li>
          <li>Preference and localization systems</li>
          <li>Progressive feature delivery with minimal disruption</li>
        </ul>
      </section>

      {/* Features & Architecture */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Core Features</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Informational Resource Pages</li>
          <li>Community and Organization Listings</li>
          <li>Navigation with Anonymous & Authenticated Flows</li>
          <li>Localization & Preference Support</li>
        </ul>

        <h3 className="text-xl font-semibold">Tech Stack & Architecture</h3>
        <p className="text-gray-700">
          Built with Expo and React Native for cross-platform performance, backed by clear API contracts
          to ensure reliable data driving the UI. Emphasizes maintainability, modularity, and readiness
          for future expansion.
        </p>
      </section>

      {/* Role & Responsibilities */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">My Role</h2>
        <p className="text-gray-700">
          As a co-founder and lead developer, I was responsible for the technical foundation of Neuro Care.
          This included architectural design, navigation and authentication, localization, and establishing
          development principles that avoid technical debt while supporting real-world constraints.
        </p>
      </section>

      {/* Lessons & Impact */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Lessons & Impact</h2>
        <p className="text-gray-700">
          Building Neuro Care reinforced the value of intentional architecture and phased delivery. Rather
          than racing to feature completeness, prioritizing systems first has yielded a stable foundation
          that can support future iterations with confidence.
        </p>
      </section>

      {/* Call to Action / Links */}
      <footer className="text-center space-y-3">
        <a
          href="/assets/cv.pdf"
          download
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
        >
          Download CV
        </a>

        <a
          href="https://github.com/aogajoseph/neuro-care"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg transition"
        >
          View Source on GitHub
        </a>
      </footer>
    </section>
  );
}
