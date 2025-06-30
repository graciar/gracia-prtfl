import React from 'react'
import { motion } from 'framer-motion';

function About() {
    
  return (
    <>
    <motion.div
      className="opacity-0 max-md:hidden"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 70 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false, amount: 0.5 }} 
    >
    <div id="home"className='min-h-screen flex items-center'>
        <div className='py-10 flex flex-col items-center'>
            <div className="flex flex-col xl:flex-row justify-center items-start">
                <div className="p-10 pb-5  flex flex-col tracking-widest">
                    <div className='flex justify-center text-3xl xl:text-7xl py-12 tracking-widest'>
                        <p><strong>About Me</strong></p>
                    </div>
                   {/* <img src="" alt="" /> */}
                </div>

                <div className="py-8 text-lg tracking-widest leading-relaxed rounded-xl text-justify">
                    <p className=''>
                        I'm a student currently pursuing a degree in Informatics at President University, I’m actively learning and building projects focusing on the back-end.
                        My journey into development started through university projects, where I started using tools like HTML, CSS, JavaScript, and frameworks such as React and Tailwind CSS. 
                        Currently, I focus on backend development and learn by working on hands-on projects.
                        For my concentration, I chose Cybersecurity, and I spent a whole semester focusing on it. So, I got to learn a lot about keeping stuff secure.
                    </p><br />
                    <p>
                        While I don’t have official industry experience yet, I’ve worked on academic and self-initiated projects that have strengthened my skills and deepen my understanding of web development. 
                        I’m currently seeking internship opportunities where I can grow as a developer, collaborate with others, and contribute to real-world projects. You can find my resume <a href="#" className='underline hover:text-red-400'>here</a> for more details.
                    </p><br />
                </div>
            </div>
        </div>
    </div>
    </motion.div>
    <div id="home"className='min-h-screen flex items-center md:hidden'>
        <div className=' py-10 flex flex-col items-center'>
            <div className="flex flex-col xl:flex-row justify-center items-start">
                <div className="pb-5 flex flex-col tracking-widest">
                    <div className='flex justify-center text-3xl xl:text-7xl py-12 tracking-widest'>
                        <p><strong>About Me</strong></p>
                    </div>
                </div>

                <div className="py-8 text-lg tracking-widest leading-relaxed rounded-xl text-justify">
                    <p className=''>
                        I'm a student currently pursuing a degree in Informatics at President University, I’m actively learning and building projects focusing on the back-end.
                        My journey into development started through university projects, where I started using tools like HTML, CSS, JavaScript, and frameworks such as React and Tailwind CSS. 
                        Currently, I focus on backend development and learn by working on hands-on projects.
                        For my concentration, I chose Cybersecurity, and I spent a whole semester focusing on it. So, I got to learn a lot about keeping stuff secure.
                    </p><br />
                    <p>
                        While I don’t have official industry experience yet, I’ve worked on academic and self-initiated projects that have strengthened my skills and deepen my understanding of web development. 
                        I’m currently seeking internship opportunities where I can grow as a developer, collaborate with others, and contribute to real-world projects. You can find my resume <a href="#" className='underline hover:text-red-400'>here</a> for more details.
                    </p><br />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About