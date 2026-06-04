import React from "react";

const SkillItem = ({ title, tools }) => {
  return (
    <div className="mb-16 last:mb-0">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#111] dark:text-[#f3f3f3]">{title}</h3>
        <div className="flex-1 h-[1px] bg-black/5 dark:bg-white/5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="group relative flex items-center gap-5 py-4 border-b border-black/5 dark:border-white/5 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer"
          >
            {/* <div className="w-6 h-6 flex items-center justify-center opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500">
              <img src={tool.logo} alt="" className="w-full h-full object-contain" />
            </div> */}

            <span className="text-sm tracking-wide font-light text-gray-500 group-hover:text-[#111] dark:group-hover:text-[#f3f3f3] transition-colors duration-500">
              {tool.name}
            </span>

            {/* Floating Tooltip */}
            {tool.desc && (
              <div className="absolute left-1/2 bottom-full -translate-x-1/2 mb-3 w-max max-w-[200px] sm:max-w-xs
                              opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0
                              transition-all duration-300 ease-out z-20">
                <div className="bg-[#111] dark:bg-white text-white dark:text-[#111] text-[11px] leading-relaxed p-3 rounded-xl shadow-xl border border-white/10 dark:border-black/10">
                  {tool.desc}
                </div>
                {/* Tooltip Arrow */}
                <div className="absolute left-1/2 top-full -translate-x-1/2 -mt-[1px]
                                border-[6px] border-transparent border-t-[#111] dark:border-t-white"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillItem;
