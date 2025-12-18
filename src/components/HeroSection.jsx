import React from 'react'
import heroDisplay from '../assets/display.jpg'

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
            <img src={heroDisplay} alt="Diksuchi dashboard illustration" className="mx-auto h-auto w-full max-w-2xl object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}