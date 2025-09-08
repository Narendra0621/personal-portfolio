import React from 'react'

const skills = [
  {title:'Programming', list: ['C++','Java','Python']},
  {title:'Full-Stack', list:['React','Tailwind CSS','Node.js','Express.js']},
  {title:'Databases/Cloud', list:['MongoDB','SQL','AWS (EC2, S3)']},
  {title:'AI/ML', list:['TensorFlow','NLP']},
]

export default function Skills(){
  return (
    <section id="skills" className="py-16">
      <div className="container-max">
        <h2 className="text-3xl font-bold mb-6 hi-text">Skills</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {skills.map(s => (
            <div key={s.title} className="card-glass p-4 rounded-xl">
              <div className="font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-neutral-300">{s.list.join(' • ')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
