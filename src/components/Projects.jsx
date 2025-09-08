import React from 'react'
import { PROJECTS } from '../data/projects'
import { motion } from 'framer-motion'

export default function Projects(){
  return (
    <section id="projects" className="py-16">
      <div className="container-max">
        <h2 className="text-3xl font-bold mb-6 hi-text">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <motion.a key={p.title} href={p.repo} target="_blank" rel="noreferrer" className="block card-glass p-5 rounded-2xl hover:scale-[1.02] transition" whileHover={{ y: -6 }}>
              <div className="flex items-center justify-between">
                <div className="font-semibold">{p.title}</div>
                <div className="text-xs text-neutral-400">{p.tags.join(' • ')}</div>
              </div>
              <p className="mt-3 text-sm text-neutral-300">{p.desc}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {p.tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/6">{t}</span>)}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
