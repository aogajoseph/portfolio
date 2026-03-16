import { Download, Github } from "lucide-react";

export default function NeuroCareCaseStudy() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 space-y-12">

      {/* HERO */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

      <div className="flex flex-col gap-6">

        {/* Header Content */}
        <div className="flex items-start gap-4">

          <img
            src="/assets/ncf-icon.png"
            alt="Neuro Care Foundation"
            className="h-14 w-14 rounded-lg"
          />

          <div>
            <h1 className="text-3xl font-semibold text-[#aa2078]">
              Neuro Care App
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              Neurology Support Platform
            </p>

            <p className="text-gray-700 text-sm mt-4 leading-relaxed">
              Neuro Care is a mobile platform designed to help people understand neurological conditions,
              connect with supportive communities, and access trusted guidance and care resources.
            </p>
          </div>

        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">

          <a
            href="https://expo.dev/artifacts/eas/UESTZnoXb7vCiXWWC2EN8.apk"
            className="inline-flex items-center justify-center bg-[#aa2078] hover:bg-[#931c67] text-white px-6 py-3 rounded-lg text-sm transition"
          >
            <Download className="mr-2 h-4 w-4" />
            Download APK
          </a>

          <a
            href="https://github.com/aogajoseph/neurocare"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-[#aa2078] text-[#aa2078] hover:bg-[#aa2078]/10 px-6 py-3 rounded-lg text-sm transition"
          >
            <Github className="mr-2 h-4 w-4" />
            View Source
          </a>

        </div>

      </div>

      </div>

      {/* Project Facts */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <p className="text-xs text-gray-500">Role</p>
          <p className="text-sm font-medium">Co-Founder & Lead Developer</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <p className="text-xs text-gray-500">Platform</p>
          <p className="text-sm font-medium">Android</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <p className="text-xs text-gray-500">Stack</p>
          <p className="text-sm font-medium">React Native + Expo</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <p className="text-xs text-gray-500">Architecture</p>
          <p className="text-sm font-medium">Contract-First</p>
        </div>

      </div>
      
      {/* Overview */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">

        {/* Section Title */}
        <h2 className="text-lg font-semibold text-[#aa2078]">
          Overview
        </h2>

        {/* Section Content */}
        <p className="text-sm text-gray-700 leading-relaxed">
          Neuro Care is a mobile platform designed to improve access to neurological
          knowledge, connect supportive communities and provide trusted guidance
          for individuals affected by neurological conditions.
        </p>

        <p className="text-sm text-gray-700 leading-relaxed">
          The platform brings together health education, moderated peer communities,
          an AI-powered neurology assistant and directories of programs and services
          into a single digital ecosystem.
        </p>

      </div>

      {/* Purpose */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">

        {/* Section Title */}
        <h2 className="text-lg font-semibold text-[#aa2078]">
          Purpose
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed">
          The purpose of Neuro Care is to create a centralized platform where
          individuals, caregivers and professionals can access neurological
          information, connect with others and discover support resources more
          easily.
        </p>

        <p className="text-sm text-gray-700 leading-relaxed">
          Rather than relying on fragmented information across multiple sources,
          Neuro Care brings these elements together into one structured environment
          designed to support learning, connection and care.
        </p>

      </div>

      {/* Problem */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">

        <h2 className="text-lg font-semibold text-red-600">
          The Problem
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed">
          Families and individuals affected by neurological conditions often face
          significant challenges when trying to access reliable information and
          support networks.
        </p>

        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Health information is scattered across multiple sources.</li>
          <li>Caregivers struggle to find communities experiencing similar situations.</li>
          <li>Programs and support services are difficult to discover.</li>
        </ul>

        <p className="text-sm text-gray-700 leading-relaxed">
          While working with community organizations supporting persons with
          disabilities, I observed how these gaps often create confusion and
          isolation for caregivers and families.
        </p>

      </div>

      {/* Approach */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">

        <h2 className="text-lg font-semibold text-green-600">
          The Approach
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed">
          Neuro Care was designed as a centralized digital ecosystem that combines
          education, community and support services within a single platform.
        </p>

        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Accessible neurological health education.</li>
          <li>Moderated community spaces for peer support.</li>
          <li>An AI assistant focused on neurology questions.</li>
          <li>A structured directory of programs and support resources.</li>
        </ul>

        <p className="text-sm text-gray-700 leading-relaxed">
          The goal is to simplify how individuals access neurological support,
          particularly in environments where resources may be limited.
        </p>

      </div>

      {/* Core Features */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-6">

        <h2 className="text-lg font-semibold text-[#aa2078]">
          Core Features
        </h2>

        {/* Home */}
        <div className="space-y-2">
          <h3 className="text-md font-semibold text-gray-800">Home</h3>

          <p className="text-sm text-gray-700 leading-relaxed">
            The Home screen acts as the central dashboard of the platform,
            highlighting announcements, featured resources and quick
            navigation into key sections of the application.
          </p>
        </div>

        {/* Community Spaces */}
        <div className="space-y-2">
          <h3 className="text-md font-semibold text-gray-800">
            Community Spaces
          </h3>

          <p className="text-sm text-gray-700 leading-relaxed">
            Moderated environments where caregivers, individuals living
            with neurological conditions and professionals can connect,
            share experiences and support one another.
          </p>

          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Caregiver support spaces</li>
            <li>Peer communities for persons living with neurological conditions</li>
            <li>Spaces for clinicians and rehabilitation professionals</li>
          </ul>
        </div>

        {/* Neuro AI */}
        <div className="space-y-2">
          <h3 className="text-md font-semibold text-gray-800">
            Neuro (AI Assistant)
          </h3>

          <p className="text-sm text-gray-700 leading-relaxed">
            Neuro is a focused AI assistant designed to answer neurology-related
            questions while grounding responses in medical knowledge and verified
            organizational resources.
          </p>
        </div>

        {/* Resource Directory */}
        <div className="space-y-2">
          <h3 className="text-md font-semibold text-gray-800">
            Resource Directory
          </h3>

          <p className="text-sm text-gray-700 leading-relaxed">
            A structured discovery system for neurological support opportunities
            including programs, events, volunteering and partnerships.
          </p>
        </div>

      </div>

      {/* Architecture + Technology */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">

        <h2 className="text-lg font-semibold text-[#aa2078]">
          Architecture & Technology
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed">
          The application follows a contract-first architecture where the backend
          defines the structure of all frontend data flows. This approach ensures
          consistent data handling and enables the platform to scale as additional
          features are introduced.
        </p>

        {/* Core Principles */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Core Principles
          </h3>

          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Backend-authoritative data contracts</li>
            <li>Modular feature design</li>
            <li>Structured navigation architecture</li>
            <li>Scalable moderation systems</li>
          </ul>
        </div>

        {/* Technology Stack */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Technology Stack
          </h3>

          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>React Native (Expo)</li>
            <li>TypeScript</li>
            <li>Expo Router</li>
            <li>API-driven architecture</li>
            <li>Drawer + Bottom Tabs navigation</li>
          </ul>
        </div>

      </div>

      {/* SYSTEM DESIGN & TECHNICAL DECISIONS */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-5">

        {/* Section Title */}
        <h2 className="text-lg font-semibold text-[#aa2078]">
          System Design & Technical Decisions
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed">
          While building Neuro Care, several architectural decisions were made
          to ensure the platform could remain maintainable and scalable as
          additional features and services are introduced.
        </p>

        {/* Decision 1 */}
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-gray-800">
            Contract-First Architecture
          </h3>

          <p className="text-sm text-gray-700 leading-relaxed">
            The platform follows a contract-first approach where the backend
            defines the structure of data returned to the frontend. This keeps
            the frontend predictable and reduces tight coupling between
            application layers.
          </p>
        </div>

        {/* Decision 2 */}
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-gray-800">
            Modular Navigation Structure
          </h3>

          <p className="text-sm text-gray-700 leading-relaxed">
            The application uses a hybrid navigation system combining a drawer
            and bottom tabs layout. This structure allows the platform to scale
            into multiple feature areas while maintaining a simple navigation
            experience for users.
          </p>
        </div>

        {/* Decision 3 */}
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-gray-800">
            Backend-Driven Configuration
          </h3>

          <p className="text-sm text-gray-700 leading-relaxed">
            Several interface elements are driven directly by backend
            configuration. This allows certain content and features to be
            updated without requiring a full application release.
          </p>
        </div>

        {/* Decision 4 */}
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-gray-800">
            Moderated Community Model
          </h3>

          <p className="text-sm text-gray-700 leading-relaxed">
            Community spaces were designed with moderation systems that support
            actions such as freezing spaces, freezing users and message
            moderation to maintain safe and supportive environments.
          </p>
        </div>

      </div>

      {/* Platform Preview */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-6">

        <h2 className="text-lg font-semibold text-[#aa2078]">
          Platform Preview
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed">
          The current version of Neuro Care is a working Android prototype
          demonstrating the platform’s core interaction model and
          feature structure.
        </p>

        <p className="text-sm text-gray-700 leading-relaxed">
          The preview below shows a walkthrough of the application
          along with screenshots from the main sections of the platform.
        </p>

        {/* Centered Video */}
        <div className="flex justify-center mt-4">
          <video
            src="/assets/neurocare-demo.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full max-w-2xl rounded-xl shadow-md"
          />
        </div>

        {/* Four Screenshots in One Row */}
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          {[
            "/assets/home.png",
            "/assets/community.png",
            "/assets/resources.png",
            "/assets/neuro.png",
          ].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Neuro Care Screenshot ${idx + 1}`}
              className="w-48 h-auto rounded-lg shadow-md object-contain"
            />
          ))}
        </div>

      </div>

      {/* Outcome */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">

        <h2 className="text-lg font-semibold text-green-600">
          Outcome
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed">
          The current version demonstrates the concept of a neurological
          support platform that integrates education, community and
          guidance into a single mobile application.
        </p>

        <p className="text-sm text-gray-700 leading-relaxed">
          The prototype establishes the structural and technical
          foundation for a scalable ecosystem that can expand
          to support neurological care communities globally.
        </p>

      </div>

      {/* My Role */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">

        <h2 className="text-lg font-semibold text-[#aa2078]">
          My Role
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed">
          As a co-founder and lead developer at Neuro Care Foundation,
          I was responsible for designing the technical architecture
          and leading the development of the platform.
        </p>

        <p className="text-sm text-gray-700 leading-relaxed">
          This included defining backend contracts, structuring the
          navigation system, implementing the mobile application
          and establishing the phased development approach used
          throughout the project.
        </p>

      </div>

      {/* Lessons Learned */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">

        <h2 className="text-lg font-semibold text-[#aa2078]">
          Lessons Learned
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed">
          Building Neuro Care reinforced an important principle in
          my approach to software development: meaningful software
          begins with understanding real-world challenges.
        </p>

        <p className="text-sm text-gray-700 leading-relaxed">
          The project reflects my interest in identifying practical
          problems and translating them into thoughtful digital
          systems that can support people and communities.
        </p>

      </div>
    </section>
  )
}   