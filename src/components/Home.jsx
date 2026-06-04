import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="relative flex w-full min-h-screen flex-col px-6 lg:px-24 justify-center items-center" id="home">
            <div className="flex w-full max-w-5xl flex-col justify-center items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-medium tracking-tighter leading-[0.9] mb-8 text-[#111] dark:text-[#f3f3f3]">
                        Gracia <br className="hidden md:block" /> Rumondor.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-2xl flex flex-col items-center"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <span className="w-8 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">
                            Software Developer & Cybersecurity
                        </p>
                        <span className="w-8 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
                    </div>
                    <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-light max-w-md">
                        I enjoy building web development projects with an interest in exploring cybersecurity
                    </p>
                </motion.div>
            </div>
        </div>
    );
}