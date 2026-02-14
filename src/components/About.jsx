function About() {
  return (
    <section
      id="about"
      className="px-6 py-24 bg-white dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            I'm Sneha, a passionate Full Stack Developer who loves building
            modern, scalable, and user-friendly web applications.
            I enjoy turning complex problems into simple,
            beautiful, and intuitive solutions.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I have experience working with React, Node.js, MongoDB,
            PostgreSQL and building real-world projects like AI-powered
            tools, dynamic web apps, and interactive UI systems.
            <br></br>
            <br></br>
            I am looking for opportunities to grow, contribute, and showcase my abilities while learning from real-world challenges. I am dedicated, quick to learn, and excited to be part of projects that make an impact.
            
          </p>
        </div>

        {/* Right Side - Skills */}
        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
            Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
                "HTML",
                "CSS",
              "React",
              "JavaScript",
              "Node.js",
              "Express",
              "MongoDB",
              "My-SQL",
              "PostgreSQL",
              "Redux",
              "Tailwind CSS",
              
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
