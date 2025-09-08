import React from 'react'

const experiences = [
  { role: 'Full Stack Developer Intern', company: 'Elite Solutions Pvt Ltd', loc: 'Visakhapatnam', date: 'Jun 2024 – Jul 2024', bullets: [
    'Optimized full-stack projects to improve performance and scalability',
    'Enhanced website speed and responsiveness by refactoring existing code',
    'Worked with React, Node.js, MongoDB, and SQL'
  ]},
  { role: 'Web Developer Intern', company: 'MotionCut', loc: 'Remote', date: 'Mar 2024 – Apr 2024', bullets: [
    'Improved front-end design and UX for web applications',
    'Designed responsive layouts using HTML, CSS, JavaScript, TailwindCSS'
  ]}
]

export default function Experience(){
  return (
    <section id="experience" className="py-16">
      <div className="container-max">
        <h2 className="text-3xl font-bold mb-6 hi-text">Experience</h2>
        <div className="space-y-6">
          {experiences.map((e) => (
            <div key={e.company} className="card-glass p-5 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{e.role} — {e.company}</div>
                  <div className="text-sm text-neutral-400">{e.loc} • {e.date}</div>
                </div>
              </div>
              <ul className="mt-3 list-disc ml-5 text-neutral-300">
                {e.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
