import React from 'react'

function About() {
  return (
    <section id="about" className="w-full min-h-screen flex items-center py-32 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

          {/* Header Column */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                01. Background
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-[6rem] font-medium tracking-tighter leading-[0.9] text-[#111] dark:text-[#f3f3f3]">
              About <br className="hidden lg:block" /> Me.
            </h2>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-7/12 space-y-8 text-base md:text-lg lg:text-xl leading-[1.8] text-gray-500 dark:text-gray-400 font-light">
            <p>
              I'm a student currently pursuing a degree in Informatics at President University.
              I’ve been actively learning and building projects in web development—working on both the front-end and back-end.
              My journey started with university assignments, where I got introduced to HTML, CSS, JavaScript, and frameworks like React and Tailwind CSS.
            </p>

            <p>
              Over time, I explored backend development as well, using tools like Laravel and Flask to build full-stack applications.
              For my concentration, I chose <span className="text-[#111] dark:text-[#f3f3f3] font-medium">Cybersecurity</span>,
              where I focused on building a foundation in core security principles.
            </p>

            <p>
              While I don’t have official industry experience yet, my academic and self-initiated projects have strengthened my technical foundation.
              I’m currently seeking <span className="text-[#111] dark:text-[#f3f3f3] font-medium border-b border-gray-300 dark:border-gray-700 pb-0.5">internship opportunities</span> where I can collaborate on real-world projects and grow as a developer.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About