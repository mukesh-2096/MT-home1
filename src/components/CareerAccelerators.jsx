import React from 'react'

const accelerators = [
  {
    id: 1,
    title: 'Full Stack Web Developer',
    ratings: '4.7',
    reviews: '465K ratings',
    hours: '88 total hours',
    description: 'Build modern web apps with hands-on projects across the full JavaScript stack.',
    gradient: 'from-[#ffe6c2] via-[#ffb45a] to-[#ff8f3f]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v9A2.25 2.25 0 004.5 16.5H9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5h-6A2.25 2.25 0 009.75 9.75v9A2.25 2.25 0 0012 21h9a2.25 2.25 0 002.25-2.25V12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l3 3-3 3" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Digital Marketer',
    ratings: '4.4',
    reviews: '3.7K ratings',
    hours: '28.4 total hours',
    description: 'Shape brand narratives, master paid media, and track growth with analytics.',
    gradient: 'from-[#f7defe] via-[#d9a4ff] to-[#9b6bff]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 4.5h9M6 19.5h12M12 4.5v15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9.75h15a1.5 1.5 0 011.5 1.5v2.25a1.5 1.5 0 01-1.5 1.5h-15" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Data Scientist',
    ratings: '4.6',
    reviews: '223K ratings',
    hours: '47.1 total hours',
    description: 'Turn complex datasets into insights using Python, SQL, and machine learning.',
    gradient: 'from-[#ffd9f2] via-[#ff8adb] to-[#ff5fa5]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h2.25M3 12h4.5M3 6h6.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 6H21M7.5 12H21M5.25 18H21" />
      </svg>
    ),
  },
]

export default function CareerAccelerators() {
  return (
    <section className="bg-[#fefefe] pt-14 pb-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-700">Career Accelerators</p>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">Ready to reimagine your career?</h2>
          <p className="text-lg text-slate-600 md:text-xl">
            Gain practical skills and real-world experience that hiring managers trust. Each path combines mentor support, immersive tasks, and verifed certificate.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {accelerators.map(({ id, title, ratings, reviews, hours, description, gradient, icon }) => (
            <article
              key={id}
              className="group rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className={`relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-8`}> 
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                  {icon}
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{description}</p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-medium text-slate-700">
                <span className="flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {ratings}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1">{reviews}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">{hours}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-sm text-slate-500">
          Cohorts open monthly with mentor feedback, live labs, and placement support.
        </div>
      </div>
    </section>
  )
}
