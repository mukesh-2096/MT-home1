import React from 'react'

const heroLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 360" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Diksuchi 3D chrome text" style="display:block;margin:auto;max-width:100%;height:auto;">
  <defs>
    <linearGradient id="sceneBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f9fbff" />
      <stop offset="1" stop-color="#dee6f5" />
    </linearGradient>
    <linearGradient id="textGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f8fbff" />
      <stop offset="0.28" stop-color="#d6deeb" />
      <stop offset="0.55" stop-color="#9ca9ba" />
      <stop offset="1" stop-color="#4a5260" />
    </linearGradient>
    <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#adb6c4" />
      <stop offset="0.45" stop-color="#5c6572" />
      <stop offset="1" stop-color="#232930" />
    </linearGradient>
    <linearGradient id="extrudeGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#353b45" />
      <stop offset="1" stop-color="#08090a" />
    </linearGradient>
    <radialGradient id="haloGradient" cx="50%" cy="40%" r="80%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.75" />
      <stop offset="0.5" stop-color="#ffffff" stop-opacity="0.25" />
      <stop offset="1" stop-color="#ffffff" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="reflectionGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.35" />
      <stop offset="0.45" stop-color="#ffffff" stop-opacity="0.12" />
      <stop offset="1" stop-color="#ffffff" stop-opacity="0" />
    </linearGradient>
    <filter id="dropShadow" x="-40%" y="-40%" width="180%" height="220%">
      <feOffset dx="0" dy="18" result="offset" />
      <feGaussianBlur in="offset" stdDeviation="14" result="blur" />
      <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.25 0" result="shadow" />
      <feMerge>
        <feMergeNode in="shadow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <filter id="innerSpec" x="-15%" y="-15%" width="130%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
      <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.8" specularExponent="35" lighting-color="#ffffff" result="spec">
        <fePointLight x="-200" y="-200" z="400" />
      </feSpecularLighting>
      <feComposite in="spec" in2="SourceAlpha" operator="in" result="specOut" />
      <feBlend in="SourceGraphic" in2="specOut" mode="screen" />
    </filter>
    <mask id="shineMask">
      <rect width="100%" height="100%" fill="black" />
      <rect x="-200" y="0" width="300" height="360" fill="white">
        <animate attributeName="x" values="-220;960" dur="5s" repeatCount="indefinite" />
      </rect>
    </mask>
    <linearGradient id="shineGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="rgba(255,255,255,0)" />
      <stop offset="0.5" stop-color="rgba(255,255,255,0.45)" />
      <stop offset="1" stop-color="rgba(255,255,255,0)" />
    </linearGradient>
  </defs>
  <g>
    <rect x="40" y="40" width="880" height="260" rx="48" fill="url(#sceneBg)" />
    <rect x="40" y="40" width="880" height="260" rx="48" fill="url(#haloGradient)" opacity="0.35" />
    <ellipse cx="480" cy="270" rx="320" ry="60" fill="#414b60" opacity="0.08" />
  </g>
  <g transform="translate(120,230)">
    <g fill="url(#extrudeGradient)" opacity="0.75">
      <text x="0" y="0" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="190" font-weight="800" transform="translate(20,38)">Diksuchi</text>
      <text x="0" y="0" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="190" font-weight="800" transform="translate(16,34)">Diksuchi</text>
      <text x="0" y="0" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="190" font-weight="800" transform="translate(12,30)">Diksuchi</text>
      <text x="0" y="0" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="190" font-weight="800" transform="translate(8,26)">Diksuchi</text>
      <text x="0" y="0" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="190" font-weight="800" transform="translate(4,22)">Diksuchi</text>
    </g>
    <g filter="url(#dropShadow)">
      <text x="0" y="0" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="190" font-weight="800" fill="url(#textGradient)" filter="url(#innerSpec)">Diksuchi</text>
      <text x="0" y="0" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="190" font-weight="800" fill="none" stroke="#1b1f26" stroke-width="3" stroke-linejoin="round" opacity="0.32">Diksuchi</text>
      <text x="0" y="0" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="190" font-weight="800" fill="none" stroke="#ffffff" stroke-width="1.6" stroke-opacity="0.55">Diksuchi</text>
      <text x="0" y="0" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="190" font-weight="800" fill="url(#edgeGradient)" opacity="0.12" transform="translate(-2,-2)">Diksuchi</text>
    </g>
    <g opacity="0.6">
      <text x="0" y="0" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="190" font-weight="800" fill="url(#reflectionGradient)" transform="scale(1,-1) translate(0,-90)">Diksuchi</text>
    </g>
  </g>
  <g mask="url(#shineMask)">
    <rect x="60" y="60" width="840" height="220" rx="40" fill="url(#shineGradient)" opacity="0.35" />
  </g>
</svg>`

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="max-w-xl text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-800">Navigate Your Learning Journey</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">Diksuchi</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            Personalized learning paths, AI-powered tools, and expert-led courses designed to help every learner thrive.
          </p>
          <div className="mt-10">
            <button className="rounded-md bg-blue-700 px-8 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-800 hover:shadow-lg">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:flex-1">
          <div className="relative w-full max-w-3xl">
            <div
              className="mx-auto w-full"
              dangerouslySetInnerHTML={{ __html: heroLogoSvg }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}