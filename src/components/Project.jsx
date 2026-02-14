const projects = [
  {
    title: "🎌 Anime World",
    description:"Anime World – A full-stack anime web application built with Node.js, Express, Axios, and EJS. The application fetches real-time anime data from the Kitsu Public API and displays it dynamically. It also implements JWT-based authentication with secure HTTP-only cookies to protect routes, manage user sessions, and ensure only authenticated users can access data",
    tech: ["Express", "Node.js", "EJS"],
    image: "/images/animeword.png",
    live: "https://anime-website-zeta-puce.vercel.app/",
    github: "https://github.com/sneharwt0005/anime-website"
  },
  {
    title: "🖋️PixelInk-CURD APP",
    description:
      "PixelInk is a lightweight, modern blogging platform built using Node.js, Express, and EJS without relying on a database. It’s perfect for beginners to showcase CRUD functionality, front-end design, and basic backend logic.",
    tech: ["Node-js", "Express","EJS","API"],
    image:"/images/pixelink.png",
    live: "https://pixel-ink-blog-project.vercel.app/",
    github: "https://github.com/sneharwt0005/PixelInk-Blog_Project"
  },
  {
    title: "Swiggy-Clone",
    description:
      "A full-stack Restaurant Menu web application built using React (Parcel Bundler) for the frontend and Node.js + Express for the backend The application allows users to browse restaurant menus, filter items, search dishes, and manage a cart using Redux",
    tech: ["React", "Redux","Express","Node-js"],
    image:"/images/swiggyClone.png",
    live: "https://swiggy-clone-mauve-one.vercel.app/",
    github:"https://github.com/sneharwt0005/Swiggy_clone"
  },
  
];

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-24 bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
   key={index}
  className="relative group rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 transition duration-500"
  >
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 h-full flex flex-col">

    {/* Screenshot */}
    <div className="overflow-hidden rounded-xl mb-6">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
      />
    </div>

    {/* Title */}
    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
      {project.title}
    </h3>

    {/* Description */}
    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
      {project.description}
    </p>

    {/* Tech Tags */}
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((techItem, i) => (
        <span
          key={i}
          className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full"
        >
          {techItem}
        </span>
      ))}
    </div>

    {/* Buttons */}
 <div className="flex gap-3 mt-auto">

  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition"
  >
    Live Demo
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded-lg text-sm hover:bg-blue-600 hover:text-white transition"
  >
    GitHub
  </a>

</div>

  </div>
</div>

        ))}
      </div>
    </section>
  );
}

export default Projects;
