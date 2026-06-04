import React, { useState } from 'react'

function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "gracia.rumondor25@gmail.com"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <section id="contact" className="w-full max-h-screen flex flex-col justify-end pt-32 px-6 pb-12 bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center">

        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-6 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
            04. Get In Touch
          </span>
          <span className="w-6 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
        </div>

        {/* Main Heading Change */}
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#111] dark:text-[#f3f3f3] mb-4">
          Get in touch!
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md text-sm md:text-base font-light mb-12 tracking-wide leading-relaxed">
          Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        {/* REDESIGNED: Premium Email Display Card */}
        <div className="group relative flex flex-col sm:flex-row items-center gap-4 p-2 pl-6 pr-3 bg-white dark:bg-[#121212] border border-black/[0.06] dark:border-white/[0.06] rounded-full shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300 mb-24 max-w-full overflow-hidden">
          <a
            href={`mailto:${email}`}
            className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors tracking-wide break-all py-2 sm:py-0"
          >
            {email}
          </a>

          {/* Action Button: Copy to Clipboard */}
          <button
            onClick={handleCopy}
            className={`w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${copied
              ? 'bg-emerald-500 text-white'
              : 'bg-[#111] text-white hover:bg-gray-800 dark:bg-[#f3f3f3] dark:text-black dark:hover:bg-white'
              }`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black/5 dark:bg-white/5 mb-12"></div>

        {/* Footer Links */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-light tracking-wide text-gray-500 dark:text-gray-400">
          <div className="flex gap-8">
            <a href="https://github.com/graciar" className="hover:text-[#111] dark:hover:text-[#f3f3f3] transition-colors uppercase tracking-widest text-[11px] font-medium">Github</a>
            <a href="https://www.linkedin.com/in/gracia-rumondor-04a26428b/" className="hover:text-[#111] dark:hover:text-[#f3f3f3] transition-colors uppercase tracking-widest text-[11px] font-medium">LinkedIn</a>
          </div>
          <p className="text-[11px] uppercase tracking-widest font-medium text-gray-400">© {new Date().getFullYear()} Gracia Rumondor.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact