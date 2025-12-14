import React from 'react'

import googleLogo from '../assets/logos/google.svg'
import microsoftLogo from '../assets/logos/microsoft.png'
import amazonLogo from '../assets/logos/amazon.svg'
import metaLogo from '../assets/logos/meta.svg'
import appleLogo from '../assets/logos/apple.svg'

const companies = [
  { name: 'Google', logo: googleLogo, width: 150 },
  { name: 'Microsoft', logo: microsoftLogo, width: 180 },
  { name: 'Amazon', logo: amazonLogo, width: 200 },
  { name: 'Meta', logo: metaLogo, width: 180 },
  { name: 'Apple', logo: appleLogo, width: 150 },
]

export default function TrustedCompanies() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Trusted by learners from leading companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {companies.map(({ name, logo, width }) => (
            <img
              key={name}
              src={logo}
              alt={`${name} logo`}
              width={width}
              className="h-auto max-h-16 opacity-80 transition-opacity duration-200 hover:opacity-100"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
