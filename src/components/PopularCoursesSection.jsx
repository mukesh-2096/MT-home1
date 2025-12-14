import React from 'react'
import figmaThumbnail from '../assets/thumbnails/figma.jpg'
import gitThumbnail from '../assets/thumbnails/Git-and-GitHub-thumbnail.jpg'
import pythonThumbnail from '../assets/thumbnails/Python-Mastery-thumbnail.jpg'

const courses = [
  {
    id: 1,
    title: 'Git & GitHub Mastery',
    instructor: 'Diksuchi Faculty Team',
    description: 'Master version control workflows, pull requests, and collaborative best practices.',
    rating: '4.8',
    ratingCount: '18.5K reviews',
    price: '₹0',
    oldPrice: '₹2,499',
    tag: 'Bestseller',
    gradient: 'from-[#d8e5ff] via-[#b7ccff] to-[#7b9dff]',
    thumbnail: gitThumbnail,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-11 w-11 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 4.5h9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v7.5m0 0a2.25 2.25 0 11-2.25-2.25H12m0 2.25a2.25 2.25 0 102.25-2.25H12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 19.5h12" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'UI/UX Fundamentals & Figma Mastery',
    instructor: 'Product Design Mentors',
    description: 'Design intuitive interfaces, map user journeys, and build high-fidelity prototypes in Figma.',
    rating: '4.7',
    ratingCount: '12.1K reviews',
    price: '₹0',
    oldPrice: '₹2,999',
    tag: 'Career Track',
    gradient: 'from-[#ffe3f3] via-[#ffb6d6] to-[#ff83b5]',
    thumbnail: figmaThumbnail,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-11 w-11 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3.75h10.5a1.5 1.5 0 011.5 1.5V12a6 6 0 01-6 6h-6a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9h4.5M9.75 12h3" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Python Mastery: Beginner to Advanced',
    instructor: 'AI & Data Faculty',
    description: 'Write clean Python, automate tasks, and build APIs with real-world case studies.',
    rating: '4.9',
    ratingCount: '22.4K reviews',
    price: '₹0',
    oldPrice: '₹3,499',
    tag: 'Trending',
    gradient: 'from-[#dfffea] via-[#7ee9b2] to-[#3dcf87]',
    thumbnail: pythonThumbnail,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-11 w-11 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 4.5h4.5A2.25 2.25 0 0116.5 6.75v2.25h-3a3 3 0 00-3 3v3H7.5A2.25 2.25 0 015.25 12.75v-3A5.25 5.25 0 0110.5 4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 19.5h-4.5A2.25 2.25 0 017.5 17.25v-2.25h3a3 3 0 003-3v-3h3.75A2.25 2.25 0 0119.5 12.75v3a5.25 5.25 0 01-5.25 5.25z" />
      </svg>
    ),
  },
]

export default function PopularCoursesSection() {
  return (
    <section className="bg-[#fefefe] pt-10 pb-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-700">Trending Courses</p>
            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">Launch-ready skills for your next role</h2>
            <p className="text-lg text-slate-600 md:text-xl">
              Each path blends bite-sized lessons, mentor checkpoints, and portfolio-ready builds aligned with recruiter expectations.
            </p>
          </div>

          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-800 hover:shadow-lg">
            Browse all tracks
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {courses.map(({ id, title, instructor, description, rating, ratingCount, price, oldPrice, tag, gradient, icon, thumbnail }) => (
            <article
              key={id}
              className="group flex h-full flex-col rounded-[28px] border border-slate-200/80 bg-white/95 p-5 shadow-[0_20px_40px_-24px_rgba(30,41,59,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-18px_rgba(30,41,59,0.45)]"
            >
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} shadow-inner`}> 
                {thumbnail ? (
                  <img
                    src={thumbnail}
                    alt={`${title} thumbnail`}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-48 w-full items-center justify-center">
                    {icon}
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 via-transparent to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/96 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-slate-800 shadow-sm">
                  {tag}
                </span>
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="text-[1.3rem] font-semibold text-slate-900 leading-tight">{title}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-500">{instructor}</p>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate-600">{description}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2 text-[0.75rem] font-semibold text-slate-700">
                  <span className="flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {rating}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">{ratingCount}</span>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-slate-900">{price}</span>
                    <span className="text-sm font-semibold text-slate-400 line-through">{oldPrice}</span>
                  </div>
                  <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-slate-700">
                    Start learning
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}