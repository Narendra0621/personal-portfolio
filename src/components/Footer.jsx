import React from 'react'
import { SITE } from '../data/siteMeta'

export default function Footer(){
  return (
    <footer className="py-8">
      <div className="container-max text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} {SITE.name} • Built with React + Tailwind
      </div>
    </footer>
  )
}
