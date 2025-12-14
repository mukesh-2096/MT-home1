import React from 'react'
import NavbarHome from '../components/NavbarHome'
import HeroSection from '../components/HeroSection'
import PopularCoursesSection from '../components/PopularCoursesSection'
import HomeFooter from '../components/HomeFooter'
import TrustedCompanies from '../components/TrustedCompanies'
import CareerAccelerators from '../components/CareerAccelerators'

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-1)] text-[var(--text-1)]">
      <NavbarHome />

      {/* Content */}
      <main>
        <HeroSection />

        <TrustedCompanies />

        <CareerAccelerators />

        <PopularCoursesSection />
        
      </main>

      <HomeFooter />
    </div>
  )
}
