import React from "react";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, overview, year, image, vid, onClick }) => {
  const displayVid = Array.isArray(vid) ? vid[0] : vid;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer w-full flex flex-col gap-5"
    >

      {/* MEDIA */}
      <div className="relative w-full overflow-hidden bg-black/5 dark:bg-white/5"
           style={{ paddingBottom: "70%" }}>

        {displayVid ? (
          <video
            key={displayVid}
            className="absolute inset-0 w-full h-full object-cover
                       scale-100 group-hover:scale-[1.05] transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]"
            loop autoPlay muted playsInline
          >
            <source src={displayVid} type="video/mp4" />
          </video>
        ) : (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover
                       scale-100 group-hover:scale-[1.05] transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]"
          />
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-[1.5s] ease-[0.16,1,0.3,1]" />

        {/* Arrow — top right, slides in */}
        <div className="absolute top-4 right-4
                        opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0
                        transition-all duration-700 ease-[0.16,1,0.3,1]">
          <div className="w-10 h-10 rounded-full bg-white text-black backdrop-blur-md shadow-2xl
                          flex items-center justify-center">
            <ArrowUpRight size={18} strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {/* Title row */}
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-medium tracking-tight text-[#111] dark:text-[#f3f3f3] leading-snug group-hover:opacity-70 transition-opacity duration-500">
            {title}
          </h2>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
            {year}
          </span>
        </div>

        {/* Overview */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 font-light">
          {overview}
        </p>
      </div>

    </div>
  );
};

export default ProjectCard;