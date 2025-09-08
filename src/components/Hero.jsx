import React from 'react'
import profile from '../assets/profile.png'
import { SITE } from '../data/siteMeta'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="home" className="min-h-screen flex items-center py-28">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-extrabold leading-tight">
            Narendra Nidamanuri
            <span className="block text-2xl mt-2 font-medium hi-text">Full-Stack Developer • AI/ML Enthusiast</span>
          </motion.h1>

          <motion.p initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.15}} className="mt-6 text-neutral-300 max-w-xl">
            I build scalable MERN applications and integrate AI features to deliver polished, production-ready experiences. Currently focused on AI-powered web apps and cloud deployment.
          </motion.p>

          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="mt-8 flex gap-4">
            <a href="#projects" className="px-5 py-3 rounded-full card-glass border border-white/10 text-sm font-medium hover:scale-105 transition">View Projects</a>
            <a href={`mailto:${SITE.email}`} className="px-5 py-3 rounded-full bg-white/6 border border-white/8 text-sm font-medium hover:scale-105 transition">Hire me</a>
          </motion.div>
        </div>

        <motion.div initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay:0.2}} className="flex justify-center md:justify-end">
          <div className="w-[260px] h-[340px] card-glass rounded-2xl p-4 flex flex-col items-center gap-4 shadow-lg">
            <img src={profile} alt="profile" className="w-40 h-40 object-cover rounded-full border-2 border-white/10" />
            <div className="text-center">
              <div className="font-semibold">Narendra Nidamanuri</div>
              <div className="text-sm text-neutral-300">Full-Stack Developer</div>
            </div>
            <div className="mt-3 flex gap-3">
              <a href={SITE.linkedin} className="text-sm nav-link">LinkedIn</a>
              <a href={SITE.github} className="text-sm nav-link">GitHub</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
