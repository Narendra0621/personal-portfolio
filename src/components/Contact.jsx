import React from 'react'
import { SITE } from '../data/siteMeta'

export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <div className="container-max text-center">
        <h2 className="text-3xl font-bold hi-text">Get in touch</h2>
        <p className="mt-3 text-neutral-300">I’m available for internships and full-time roles. Feel free to reach out via email or LinkedIn.</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href={`mailto:${SITE.email}`} className="px-6 py-3 rounded-full bg-white/6 border border-white/8">{SITE.email}</a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full card-glass">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
