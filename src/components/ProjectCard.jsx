const ProjectCard = ({title, desc, tech, link, image}) => {
  return(
    <div className="bg-[#f6f6f6] dark:bg-[#102329] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 py-3 flex flex-col justify-between">
      
      <div className="p-3">
      <img
        className="w-full h-40 object-cover "
        src={image}
        alt={title}
      />
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-200 text-sm ">{desc}</p>
        
      </div>
      <div className="px-3 text-gray-500 dark:text-gray-400 text-xs flex flex-row">
        <span className="">● </span> 
        <span className="pl-1">{tech}</span>
        </div>
    </div>
  );
}

export default ProjectCard