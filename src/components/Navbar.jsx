import React from 'react'
import { SITE } from '../data/siteMeta'

export default function Navbar(){
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-md">
      <div className="container-max flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-xl font-semibold hi-text">{SITE.name.split(' ')[0]}</div>
          <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="text-sm nav-link">LinkedIn</a>
          <a href={SITE.github} target="_blank" rel="noreferrer" className="text-sm nav-link">GitHub</a>
          <a href={`mailto:${SITE.email}`} className="ml-2 px-3 py-1 rounded-full border border-white/10 text-sm hover:bg-white/5 transition">Email</a>
        </div>
      </div>
    </header>
  )
}
