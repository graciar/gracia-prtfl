import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { X, Globe, ArrowUpRight, Terminal, Box, ChevronLeft, ChevronRight, Hash } from "lucide-react";

const VideoHero = ({ videoSources }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);

  const activeVideo = videoSources[currentIdx];

  useEffect(() => {
    setLoaded(false);
    if (videoRef.current) videoRef.current.load();
  }, [currentIdx]);

  const handleNext = () => setCurrentIdx((p) => (p + 1) % videoSources.length);
  const handlePrev = () => setCurrentIdx((p) => (p - 1 + videoSources.length) % videoSources.length);

  return (
    <div className="relative w-full overflow-hidden bg-[#141417]">
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {!loaded && (
          <div
            className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
            style={{ backgroundSize: "200% 100%", animation: "vhShimmer 1.6s infinite linear" }}
          />
        )}
        <video
          ref={videoRef}
          key={activeVideo}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: loaded ? 1 : 0 }}
          loop autoPlay muted playsInline
          onCanPlay={() => setLoaded(true)}
        >
          <source src={activeVideo} type="video/mp4" />
        </video>

        {/* Ambient Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />

        {/* Stream Badging */}
        <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3.5 py-2 bg-black/40 dark:bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-bold text-white/90 uppercase tracking-[0.2em]">
            {videoSources.length > 1 ? `${currentIdx + 1} / ${videoSources.length}` : "Live System"}
          </span>
        </div>

        {/* Floating Controller Handles */}
        {videoSources.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 dark:bg-black/50 backdrop-blur-md border border-white/10 shadow-xl flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <ChevronLeft size={16} className="text-white hover:text-black" strokeWidth={2.5} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 dark:bg-black/50 backdrop-blur-md border border-white/10 shadow-xl flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <ChevronRight size={16} className="text-white hover:text-black" strokeWidth={2.5} />
            </button>
          </>
        )}
      </div>
      <style>{`
        @keyframes vhShimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
      `}</style>
    </div>
  );
};

export default function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" });
      gsap.fromTo(modalRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" });
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  const { title, stack, overview, features, code, note, vid, image } = project;
  const videoSources = Array.isArray(vid) ? vid : vid ? [vid] : [];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Main Framework Container */}
      <div 
        ref={modalRef}
        className="relative w-full h-full sm:h-[92vh] max-w-6xl bg-[#fafafa] dark:bg-[#09090b] sm:rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.3)] border border-black/5 dark:border-white/[0.04] z-10 overflow-y-auto custom-scrollbar flex flex-col"
      >
        {/* Floating Top Header Bar */}
        <div className="sticky top-0 right-0 z-50 w-full flex justify-end pointer-events-none p-4 mix-blend-difference">
          <button 
            onClick={onClose}
            className="pointer-events-auto p-3 rounded-full bg-white text-black dark:bg-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <X size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* TRACK 1: YouTube Theater Widescreen Node (Negates floating margins) */}
        <div className="-mt-14 w-full bg-[#141417]">
          {videoSources.length > 0 ? (
            <VideoHero videoSources={videoSources} />
          ) : image ? (
            <div className="w-full relative" style={{ paddingBottom: "56.25%" }}>
               <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ) : null}
        </div>

        {/* TRACK 2: Structural Data Deck */}
        <div className="px-6 sm:px-10 lg:px-12 py-10 lg:py-12">
          
          {/* Metadata Section Header */}
          <div className="border-b border-black/[0.06] dark:border-white/[0.06] pb-8 mb-10">
            <div className="flex items-center gap-2 text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.25em] mb-4">
              <Hash size={12} />
              <span>Project Blueprint Documentation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111] dark:text-[#f3f3f3] mb-6 leading-tight">
              {title}
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {stack?.split(",").map((tech, i) => (
                <span key={i}
                  className="text-[9px] font-medium text-neutral-600 dark:text-neutral-400 bg-black/[0.03] dark:bg-white/[0.03] px-3 py-1.5
                             rounded-md border border-black/[0.05] dark:border-white/[0.05] tracking-wider uppercase">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Dual Column Asymmetry Layout System */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Main Content Area (Left) */}
            <div className="lg:col-span-7 space-y-10">
              <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.25em]">
                   01 / Project Overview
                </h3>
                <p className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">
                  {overview}
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.25em]">
                   02 / Technical Blueprint
                </h3>
                <div className="space-y-3">
                  {Array.isArray(features) && features.map((f, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#111113] border border-black/[0.03] dark:border-white/[0.02] shadow-xs">
                      <span className="flex-none text-[10px] font-bold text-neutral-400 dark:text-neutral-600 tracking-wider mt-0.5">
                        {(i + 1).toString().padStart(2, '0')}
                      </span>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed font-light">{f}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Track System (Right) */}
            <div className="lg:col-span-5">
              <div className="space-y-6 lg:sticky lg:top-6">
                
                {/* Repository Controller Card */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#111113] border border-black/[0.06] dark:border-white/[0.04] shadow-xs">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-2.5 bg-neutral-100 dark:bg-neutral-800 rounded-xl text-neutral-600 dark:text-neutral-400">
                      <Terminal size={16} />
                    </div>
                    <Globe size={15} className="text-neutral-300 dark:text-neutral-600" />
                  </div>
                  
                  <h4 className="text-sm font-medium mb-1.5 text-neutral-900 dark:text-neutral-100 tracking-tight">Source Distribution</h4>
                  <p className="text-neutral-400 text-xs mb-6 leading-relaxed font-light">
                    Examine architecture files, dependencies, and environment files.
                  </p>
                  
                  {code ? (
                    <a href={code} target="_blank" rel="noreferrer"
                       className="group flex items-center justify-between w-full px-4 py-3.5
                                  bg-neutral-900 text-white dark:bg-white dark:text-black rounded-xl font-medium text-xs tracking-wider uppercase
                                  hover:bg-black dark:hover:bg-neutral-100 transition-all duration-300 shadow-sm">
                      <span>Access Repository</span>
                      <ArrowUpRight size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  ) : (
                    <div className="w-full px-4 py-3.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/60
                                    text-neutral-400 dark:text-neutral-500 rounded-xl text-center text-[10px] uppercase tracking-widest font-bold">
                      Distribution Restricted
                    </div>
                  )}
                </div>

                {/* Inline Scope Notes Block */}
                {note && (
                  <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/40 dark:bg-[#111113]/20">
                    <h4 className="flex items-center gap-2 text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em] mb-2">
                      <Box size={12} className="text-neutral-400" /> System Metrics Note
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed italic font-light">"{note}"</p>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Native Webkit Scroll Overrides */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(100, 100, 100, 0.15);
          border-radius: 20px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(150, 150, 150, 0.1);
        }
      `}</style>
    </div>
  );
}