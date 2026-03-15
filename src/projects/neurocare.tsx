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
            Neuro Care App
          </h1>
          <p className="text-sm text-gray-500">
            A Neurology Support Platform.
          </p>
        </div>
      </header>

      {/* Overview */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#aa2078] mb-2">Overview</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Neuro Care is a neurology support platform designed to help people learn about neurological conditions, connect with supportive communities and access trusted guidance and care resources.
        </p>
      </div>

      {/* Purpose */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#aa2078] mb-2">Purpose</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          It is a digital ecosystem combining:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Neurological health education.</li>
          <li>
            Communities (People living with conditions, caregivers, support groups, health professionals and those interested in learning).
          </li>
          <li>
            <span className="font-medium text-[#aa2078]">Neuro</span> (A safe AI assistant that only responds to neurology questions).
          </li>
          <li>Neurological support resources (Articles, talks, webinars, podcasts and trainings).</li>
          <li>Access to programs and events.</li>
        </ul>
        <br />
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          The goal is to bridge gaps in neurological knowledge, support and services.
        </p>
      </div>

      {/* Problem */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#ff0000] mb-2">The Problem</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Families, caregivers and individuals affected by neurological conditions often face:
        </p>
        <br />
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Fragmented information sources.</li>
          <li>Limited access to support communities.</li>
          <li>Difficulty finding programs and services.</li>
        </ul>
        <br />
        <p className="text-sm text-gray-700 leading-relaxed">
          While working with community organizations supporting persons with disabilities, I observed how these gaps create confusion and isolation for many caregivers.
        </p>
      </div>

      {/* Approach */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-3">
        <h2 className="text-lg font-semibold text-[#008000]">Our Approach</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Neuro Care was designed as a centralized digital ecosystem that brings together:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Neurological health education.</li>
          <li>Moderated support communities/spaces.</li>
          <li>Safe AI-powered guidance.</li>
          <li>Directories of organizations and programs.</li>
        </ul>
        <p className="text-sm text-gray-700 leading-relaxed">
          The goal is to make neurological support more accessible especially for low resource areas.
        </p>
      </div>

      {/* Features */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-3">
        <h2 className="text-lg font-semibold text-[#aa2078]">Core Features</h2>
        <h3 className="text-lg font-semibold">Home</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          The dashboard of the app.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Announcements.</li>
          <li>Highlights.</li>
          <li>Features resources.</li>
          <li>Quick navigation into other sections.</li>
        </ul>
        <br />

        <h3 className="text-lg font-semibold">Community Spaces</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          Moderated spaces for caregivers and advocates to connect and share experiences. The app cuurently simulates:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Caregiver Spaces (Guidance & Counselling, Peer Support, etc.)</li>
          <li>PWD Spaces (Living Well, Peer Support, etc.)</li>
          <li>Health Professionals Spaces (Clinicians, Rehabilitation Support etc.)</li>
        </ul>
        <br />

        <h3 className="text-lg font-semibold">Neuro</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          A safe AI-powered assistant designed to answer neurology questions while grounding responses in both medical knowledge and verified resources.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>General neurology knowledge</li>
          <li>Information on Neuro Care Foundation, the organization behind Neuro Care App.</li>
        </ul>
        <br />

        <h3 className="text-lg font-semibold">Resource Directory</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          A structured directory of support services, including:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Events</li>
          <li>Programs</li>
          <li>Volunteering</li>
          <li>Donations</li>
          <li>Partnerships</li>
        </ul>
        <br />

        <h3 className="text-sm font-medium text-gray-800 mt-4">
          Architecture
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          The application was built using a contract-first architecture, where the backend defines all frontend data structures.
          <br />
          Core principles include:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Backend-authoritative data</li>
          <li>Modular feature design</li>
          <li>Scalable community moderation systems</li>
        </ul>
        <br />
        <h3 className="text-sm font-medium text-gray-800 mt-4">
          Technology
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>React Native (Expo)</li>
          <li>TypeScript</li>
          <li>Expo Router</li>
          <li>API-driven architecture</li>
          <li>Drawer + Bottom Tabs layout</li>
        </ul>
      </div>

      {/* Outcome */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-3">
        <h2 className="text-lg font-semibold text-[#008000]">Outcome</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          The current version is a working prototype for android devices demonstrating the core concept of a neurological care support platform.
          <br />
          The project lays the foundation for a scalable digital ecosystem that can support neurological care communities globally.
        </p>
      </div>

      {/* Role */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#aa2078] mb-2">My Role</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          As a Co-founder and lead developer at Neuro Care Foundation, I’m responsible for defining the technical foundation of Neuro Care, including the development standards and phased feature rollout to attain stakeholder needs, achieve organizational goals and support scalability.
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
            "/assets/drawer.png",
            "/assets/home.png",
            "/assets/community.png",
            "/assets/resources.png",
            "/assets/neuro.png",
            "/assets/spaces.png",
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
            href="https://expo.dev/artifacts/eas/UESTZnoXb7vCiXWWC2EN8.apk"
            className="inline-flex items-center bg-[#aa2078] hover:bg-[#931c67] text-white px-6 py-2.5 rounded-lg text-sm transition"
          >
            <Download className="mr-2 h-4 w-4" />
            Download APK
          </a>

          <a
            href="https://github.com/aogajoseph/neurocare"
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
        <h2 className="text-lg font-semibold text-[#aa2078] mb-2">Lesson Learnt</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Working on this project has reflected something I'm deeply passionate about: The zeal to move from identifying real-world challenges, to designing and building software solutions that respond to them effectively.
        </p>
      </div>

    </section>
  );
}
