import React from "react";

const SkillItem = ({ title, tools }) => {
  return (
    <div className="mb-12 last:mb-0">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Tool List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition"
          >
            <div className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg">
              <img src={tool.logo} alt="" className="w-5 h-5 object-contain" />
            </div>

            <span className="text-sm font-medium text-gray-800">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillItem;
