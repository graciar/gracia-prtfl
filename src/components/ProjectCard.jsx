import React from "react";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, overview, year, image, vid, onClick }) => {
  const displayVid = Array.isArray(vid) ? vid[0] : vid;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer w-full bg-white rounded-2xl overflow-hidden
                 border border-stone-100
                 shadow-[0_2px_12px_rgba(0,0,0,0.04)]
                 hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)]
                 hover:-translate-y-1
                 transition-all duration-400 ease-out
                 flex flex-col"
    >

      {/* MEDIA */}
      <div className="relative w-full overflow-hidden bg-stone-100"
           style={{ paddingBottom: "62%" }}>

        {displayVid ? (
          <video
            key={displayVid}
            className="absolute inset-0 w-full h-full object-cover
                       scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            loop autoPlay muted playsInline
          >
            <source src={displayVid} type="video/mp4" />
          </video>
        ) : (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover
                       scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

        <span className="absolute bottom-3.5 left-4
                         text-[9px] font-black uppercase tracking-[0.25em]
                         text-white/90 bg-black/50 backdrop-blur-sm
                         px-2.5 py-1 rounded-full">
          {year}
        </span>

        {/* Arrow — top right, slides in */}
        <div className="absolute top-3.5 right-3.5
                        opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300 ease-out">
          <div className="w-9 h-9 rounded-full bg-white shadow-lg
                          flex items-center justify-center">
            <ArrowUpRight size={16} className="text-stone-900" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 px-5 py-5">

        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-[17px] font-semibold tracking-tight text-stone-900 leading-snug
                         group-hover:text-stone-700 transition-colors duration-300">
            {title}
          </h2>
        </div>

        {/* Overview */}
        <p className="text-[13px] text-stone-400 leading-relaxed line-clamp-2 font-normal">
          {overview}
        </p>
      </div>

    </div>
  );
};

export default ProjectCard;