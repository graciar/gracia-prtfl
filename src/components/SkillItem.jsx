const SkillItem = ({ title, tools }) => {
  return (
    <div className="w-full">
      <div className="m-5 px-5 py-3 border justify-center hover:scale-[1.05] transition-transform duration-300 rounded-2xl cursor-pointer overflow-hidden">
        <div className="h-7 p-5 flex items-center text-2xl font-semibold">{title}</div>

        <div className="overflow-hidden p-3 text-xl">
          <ul className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <li key={i} className="px-2 py-1 bg-gray-200 rounded ">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
