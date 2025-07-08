import React from 'react'

function Contact() {
    return (
    <div className='h-full my-12 w-full flex justify-center items-center' id='contact'>
        <div className="py-5 text-center flex flex-col">
            <div className="">
            <p className='my-5 text-3xl md:text-5xl text-start font-bold'>Get in touch!</p>
            {/* <p className='my-5 text-xs lg:text-5xl'>I'm currently seeking internship opportunities and collaborative projects. Let's connect!</p> */}
            </div>

            <div className='flex text-base md:text-xl flex-col lg:flex-row items-start'>
                <div className='text-start rounded-3xl px-7 py-1 '>
                    <p>Socials</p>
                    <ul className='flex flex-row py-2 items-center'>
                        <li><a href="https://github.com/graciar"><img src="./github.png" alt="github" className="lg:w-10 w-7 p-1 mx-1 dark:bg-white" /></a></li>
                        <li><a href="https://www.linkedin.com/in/gracia-filia-04a26428b/"><img src="./linkedin.png" alt="linkedin" className="lg:w-10 w-7 p-1 mx-1 dark:bg-white" /></a></li>
                    </ul>
                </div>
                <div className='text-start rounded-3xl px-7 py-1'>
                    <p>Email</p>
                    <p className='py-2'><strong>graciafilia22@gmail.com</strong></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact