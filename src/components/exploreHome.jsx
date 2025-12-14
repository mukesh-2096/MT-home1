import React, { useState } from 'react'

export default function Explore() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const courseList = [
    'JavaScript Fundamentals',
    'Git & GitHub Mastery',
    'Html for Beginners',
    'UI/UX Fundamentals & Figma Mastery',
    'Backend Development with Node.js & Express',
    'Master Prompt Engineering & AI Tools',
    'Tailwind CSS Mastery',
    'Frontend - React + Vite Frame work',
    'Database - Mongo DB Mastery',
    'SQL & MySQL Mastery',
    'Python Mastery: Beginner to Advanced',
    'Java Fundamentals : Beginners to Advanced',
    'C++ Fundamentals : Beginners to Advanced',
    'Docker Mastery : Beginner to Advanced',
    'CSS - Zero to Advanced'
  ]
  const toolsList = [
    'PDF Hub',
    'Code Editor',
    'Chat with PDF',
    'AI Chat Bot',
    'Portfolio (feature idea)'
  ]
  const featureList = [
    'Extension',
    'Focus Timer',
    'Smart Calender',
    'Bookmarks',
    'Notes'
  ]

  return (
    <>
      <div className="hidden sm:flex items-center space-x-3 relative">
        <button 
          className="flex items-center space-x-1 text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>Explore</span>
          <svg 
            className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Full-width dropdown bar - positioned outside navbar */}
      {isDropdownOpen && (
        <>
          {/* Invisible overlay to close dropdown */}
          <div 
            className="fixed inset-0 z-30"
            onClick={() => setIsDropdownOpen(false)}
          />
          
          {/* Dropdown content */}
          <div className="fixed left-0 right-0 bg-white shadow-xl border-b border-gray-200 z-40" style={{top: '88px'}}>
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Courses Section */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-linear-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">Courses</h4>
                      <p className="text-sm text-gray-500">Browse our course catalog</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {courseList.slice(0, 5).map(course => (
                      <a key={course} href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        {course}
                      </a>
                    ))}
                    <a href="#" className="block text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                      View more courses →
                    </a>
                  </div>
                </div>

                {/* Diksuchi Tools Section */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-linear-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">Diksuchi Tools</h4>
                      <p className="text-sm text-gray-500">Productivity and learning tools</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {toolsList.map(tool => (
                      <a key={tool} href="#" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors">
                        {tool}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Additional Features Section */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-linear-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">Additional Features</h4>
                      <p className="text-sm text-gray-500">Enhance your workflow</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {featureList.map(feature => (
                      <a key={feature} href="#" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                        {feature}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
