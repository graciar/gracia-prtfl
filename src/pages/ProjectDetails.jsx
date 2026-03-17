import React, { useState, useRef, useEffect } from "react";
import projectsList from "../components/ProjectDetailsList";
import { useNavigate, useParams } from 'react-router-dom';
import {
  Cpu, Globe, ArrowUpRight,
  Info, ChevronLeft, ChevronRight, Terminal,
  Box, Play, Pause
} from "lucide-react";
import ScrollSmoother from "gsap/ScrollSmoother";

/* ─────────────────────────────────────────────────────────────
   VIDEO HERO
───────────────────────────────────────────────────────────── */
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
    <div className="relative w-full overflow-hidden bg-stone-100">

      {/* Aspect ratio wrapper */}
      <div className="relative w-full" style={{ paddingBottom: "52.5%" }}>
        {!loaded && (
          <div
            className="absolute inset-0 bg-gradient-to-r from-stone-200 via-stone-100 to-stone-200"
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

        {/* Status badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2
                        px-3 py-1.5 bg-white/80 backdrop-blur-md
                        border border-stone-200/70 rounded-full shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] font-bold text-stone-500 uppercase tracking-[0.2em]">
            {videoSources.length > 1 ? `${currentIdx + 1} / ${videoSources.length}` : "Live Preview"}
          </span>
        </div>

        {/* Side arrows */}
        {videoSources.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30
                         w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/80 backdrop-blur-md
                         border border-stone-200 shadow flex items-center justify-center
                         hover:scale-110 hover:bg-white transition-all"
            >
              <ChevronLeft size={15} className="text-stone-700" strokeWidth={2.5} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30
                         w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/80 backdrop-blur-md
                         border border-stone-200 shadow flex items-center justify-center
                         hover:scale-110 hover:bg-white transition-all"
            >
              <ChevronRight size={15} className="text-stone-700" strokeWidth={2.5} />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {videoSources.length > 1 && (
        <div className="flex items-center justify-center gap-2 py-3 bg-white border-b border-stone-100">
          {videoSources.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width:      i === currentIdx ? 24 : 6,
                height:     6,
                background: i === currentIdx ? "#1c1917" : "#d6d3d1",
              }}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes vhShimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
      `}</style>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   MODAL
───────────────────────────────────────────────────────────── */
const ProjectDetailsModal = ({ title, stack, overview, features, code, note, vid }) => {
  const videoSources = Array.isArray(vid) ? vid : vid ? [vid] : [];

  return (
    <div className="bg-white rounded-[2.5rem] sm:rounded-3xl overflow-hidden border border-stone-100 shadow-xl shadow-stone-200/40">
      {/* <div className="p-4 bg-gray-100"> 
        {videoSources.length > 0 && (
          <div className="relative group overflow-hidden rounded-[1.5rem]">
            <VideoHero videoSources={videoSources} />
          </div>
        )}
      </div> */}
      {videoSources.length > 0 && <VideoHero videoSources={videoSources} />}

      <div className="px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14">

        {/* HEADER */}
        <div className="mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold text-stone-400 uppercase tracking-[0.25em] mb-4">
            <span className="w-4 h-px bg-stone-300" />
            Project
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-5 leading-tight">
            {title}
          </h2>
          <div className="flex flex-wrap gap-2">
            {stack?.split(",").map((tech, i) => (
              <span key={i}
                className="text-xs font-medium text-stone-500 bg-stone-50 px-3 py-1.5
                           rounded-lg border border-stone-100 tracking-wide">
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* CONTENT GRID — stacks on mobile, side-by-side on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* LEFT */}
          <div className="lg:col-span-7 space-y-10">
            <section>
              <h3 className="flex items-center gap-2 text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-4">
                <Info size={12} className="text-stone-700" /> Overview
              </h3>
              <p className="text-base text-stone-600 leading-relaxed">{overview}</p>
            </section>

            <section>
              <h3 className="flex items-center gap-2 text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-4">
                <Cpu size={12} className="text-stone-700" /> Technical Features
              </h3>
              <div className="space-y-2.5">
                {Array.isArray(features) && features.map((f, i) => (
                  <div key={i}
                    className="flex gap-3.5 p-4 rounded-xl bg-stone-50/60 border border-stone-100
                               hover:bg-white hover:border-stone-200 hover:shadow-sm
                               transition-all duration-200">
                    <span className="flex-none w-5 h-5 rounded-full bg-white border border-stone-200
                                     flex items-center justify-center text-[9px] font-bold text-stone-500 shadow-sm mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-stone-600 text-sm leading-relaxed">{f}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT — full width on mobile, sticky sidebar on desktop */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-10 space-y-4">

              <div className="p-6 rounded-2xl bg-stone-950 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2 bg-stone-800 rounded-xl">
                    <Terminal size={18} className="text-stone-400" />
                  </div>
                  <Globe size={14} className="text-stone-700" />
                </div>
                <h4 className="text-sm font-semibold mb-1">Access Project</h4>
                <p className="text-stone-400 text-xs mb-5 leading-relaxed">
                  Review the source code and documentation.
                </p>
                {code ? (
                  <a href={code} target="_blank" rel="noreferrer"
                     className="group flex items-center justify-between w-full px-4 py-3
                                bg-white text-stone-900 rounded-xl font-semibold text-sm
                                hover:bg-stone-100 active:scale-95 transition-all shadow-sm">
                    <span>View Repository</span>
                    <ArrowUpRight size={15}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <div className="w-full px-4 py-3 bg-stone-900 border border-stone-800
                                  text-stone-600 rounded-xl text-center text-[10px] uppercase tracking-widest font-bold">
                    Currently Unavailable
                  </div>
                )}
              </div>

              {note && (
                <div className="p-5 rounded-2xl border border-dashed border-stone-200 bg-stone-50/50">
                  <h4 className="flex items-center gap-2 text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2.5">
                    <Box size={11} /> Note
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed italic">"{note}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   PAGE — wider max-width, responsive padding
───────────────────────────────────────────────────────────── */
const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsList.find((p) => p.id === id);

  if (!project) return (
    <div className="h-screen flex items-center justify-center font-mono text-sm uppercase tracking-widest text-stone-400">
      Project Not Found
    </div>
  );
  const handleBack = () => {
  const smoother = ScrollSmoother.get();
  if (smoother) {
    smoother.scrollTo(0, false);
  } else {
    window.scrollTo(0, 0);
  }
  navigate(-1);
};

  return (
    <div className="min-h-screen bg-[#F8F7F5] py-8 sm:py-10 px- sm:px-6">
      {/* max-w-7xl gives more breathing room without going full-bleed */}
      <div className="max-w-7xl mx-auto">
        <button
          // onClick={() => navigate(-1)}
          onClick={handleBack}
          className="group flex items-center gap-2 text-[11px] font-bold uppercase
                     tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-colors mb-6 sm:mb-8"
        >
          <ChevronLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>
        <ProjectDetailsModal {...project} />
      </div>
    </div>
  );
};

export default ProjectDetails;