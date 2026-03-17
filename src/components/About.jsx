import React from 'react'

function About() {
  return (
    <section id="about" className="w-full min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-10 xl:gap-20">
          
          <div className="w-full xl:w-1/3 flex flex-col items-center xl:items-start text-center xl:text-left">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black leading-none">
              About <br className="hidden xl:block" /> Me.
            </h2>
          </div>

          <div className="w-full xl:w-2/3 space-y-6 text-base md:text-lg leading-relaxed text-gray-700 font-medium text-justify md:text-left">
            <p>
              I'm a student currently pursuing a degree in Informatics at President University. 
              I’ve been actively learning and building projects in web development—working on both the front-end and back-end. 
              My journey started with university assignments, where I got introduced to HTML, CSS, JavaScript, and frameworks like React and Tailwind CSS. 
            </p>
            
            <p>
              Over time, I explored backend development as well, using tools like Laravel and Flask to build full-stack applications.
              For my concentration, I chose Cybersecurity, spending a full semester diving deep into digital defense and data protection.
            </p>

            <p>
              While I don’t have official industry experience yet, my academic and self-initiated projects have strengthened my technical foundation. 
              I’m currently seeking <span className="text-black font-bold underline decoration-gray-300 underline-offset-4">internship opportunities</span> where I can collaborate on real-world projects and grow as a developer.
            </p>
            
            {/* <div className="pt-4">
              <a href="https://docs.google.com/document/d/1THtbBQmL_54L5SMYS3ctjhsREmV7V-R3/edit?usp=sharing&ouid=100316868527235210012&rtpof=true&sd=true" className="text-sm font-black uppercase tracking-widest text-black hover:text-gray-500 transition-colors border-b-2 border-black pb-1">
                View Resume
              </a>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About