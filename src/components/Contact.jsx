import React from 'react'

function Contact() {
    return (
    <div className='h-full my-12 w-full flex justify-center items-center'vid='contact'>
        <div className="py-5 text-center flex flex-col">
            <div className="">
            <p className='my-5 text-3xl md:text-5xl text-start font-bold'>Let's get in touch!</p>
            {/* <p className='my-5 text-xs lg:text-5xl'>I'm currently seeking internship opportunities and collaborative projects. Let's connect!</p> */}
            </div>

            <div className='flex text-base md:text-xl flex-col lg:flex-row dark:text-black'>
                <div className='m-2 text-start rounded-3xl px-7 y-3 dark:bg-amber-50'>
                    <p>Socials</p>
                    <ul className='flex flex-row py-2 items-center'>
                        <li><a href="https://github.com/graciar"><img src="./git.png" alt="github" className="lg:w-10 w-7" /></a></li>
                        <li><a href="https://www.linkedin.com/in/gracia-filia-04a26428b/"><img src="./linkedin.png" alt="linkedin" className="lg:w-13 w-9" /></a></li>
                    </ul>
                </div>
                <div className='m-2 text-start rounded-3xl px-7 py-3 dark:bg-amber-50'>
                    <p>Email</p>
                    <p className='py-2'><strong>graciafilia22@gmail.com</strong></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact