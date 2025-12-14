import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Explore from './exploreHome'
import logoImg from '../assets/logo.png'



export default function NavbarHome() {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const navigate = useNavigate()
  
  return (
    <header className="sticky top-0 z-50 bg-[#fefefe]/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center gap-6">
          
          {/* Left Section - Brand & Navigation */}
          <div className="flex items-center gap-8">
            {/* Enhanced Brand */}
            <div
              className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity duration-200"
              onClick={() => navigate('/')}
            >
              <img src={logoImg} alt="Diksuchi logo" className="w-10 h-10 rounded-full object-cover" />
              <div className="text-2xl font-semibold text-slate-900">
                Diksuchi
              </div>
            </div>

            {/* Navigation Items */}
            <div className="hidden lg:flex items-center gap-3 text-sm font-medium text-slate-700">
              <Explore />
            </div>
          </div>

          {/* Centered Search Bar */}
          <div className="ml-auto hidden md:flex flex-1 justify-center">
            <div className={`relative w-full max-w-xl transition-all duration-300 ${
              isSearchFocused ? 'shadow-lg shadow-blue-500/10' : ''
            }`}>
              <div className={`flex items-center rounded-full border ${
                isSearchFocused ? 'border-blue-500 bg-white' : 'border-slate-200 bg-white'
              } px-4 py-2`}
              >
                <svg 
                  className={`h-5 w-5 shrink-0 ${
                    isSearchFocused ? 'text-blue-500' : 'text-slate-400'
                  }`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
                <input 
                  className="ml-3 w-full bg-transparent outline-none text-sm placeholder-slate-500 text-slate-900" 
                  placeholder="Search courses, topics, or resources..."
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>
              {isSearchFocused && (
                <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-slate-200 bg-white p-3 text-sm shadow-lg">
                  <div className="px-2 pb-2 text-xs font-medium uppercase tracking-wide text-slate-500">Recent searches</div>
                  <div className="space-y-1">
                    <div className="cursor-pointer rounded-lg px-2 py-2 hover:bg-slate-100">React Hooks</div>
                    <div className="cursor-pointer rounded-lg px-2 py-2 hover:bg-slate-100">JavaScript ES6</div>
                    <div className="cursor-pointer rounded-lg px-2 py-2 hover:bg-slate-100">UI Design</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="ml-auto flex items-center gap-3">
            {/* Mobile Search Button */}
            <button className="md:hidden rounded-full p-3 text-slate-600 hover:bg-slate-100">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </button>

            {/* Certificates Link */}
            <button
              onClick={() => navigate('/certificates')}
              className="hidden sm:block rounded-full border border-transparent px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-blue-700"
            >
              Certificates
            </button>

            {/* Login Button */}
            <button 
              onClick={() => navigate('/login')}
              className="hidden sm:block rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-700"
            >
              Login
            </button>

            {/* Sign Up Button */}
            <button 
              onClick={() => navigate('/signup')}
              className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Sign up
            </button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden rounded-full p-3 text-slate-600 hover:bg-slate-100">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </div>
            <input 
              className="w-full rounded-full border border-slate-200 bg-white pl-12 pr-4 py-3 text-sm placeholder-slate-500 outline-none focus:border-blue-500 focus:bg-white transition" 
              placeholder="Search courses, topics, or resources..."
            />
          </div>
        </div>
      </div>
    </header>
  )
}
