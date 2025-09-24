const SkillItem = ({ title, tools }) => {
  return (
    <div className="m-5 px-5 py-3 transition-transform rounded-2xl overflow-hidden shadow-lg dark:border hover:scale-[1.05]">
      {/* Title */}
      <div className="h-7 p-5 flex items-center text-xl xl:text-2xl font-semibold">
        {title}
      </div>

      {/* Tools */}
      <div className="p-3 text-lg xl:text-xl">
        <ul className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <li
              key={index}
              className="flex items-center gap-2 px-2 py-1 hover:bg-amber-300 hover:scale-[1.1] dark:text-black bg-gray-200 transition-all duration-300"
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-5 h-5 object-contain"
              />
              {tool.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}



export default SkillItem;
