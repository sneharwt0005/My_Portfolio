import { ReactTyped } from "react-typed";


export default function Hero() {


  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-gray-100 dark:bg-gray-800">
      
      {/* Left Side - Text */}
      <div className="text-center md:text-left md:w-1/2">
        <h2 className="text-5xl font-bold mb-4">
          Hi, I'm Sneha 👋
        </h2>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
  <ReactTyped
    strings={[
      "Full Stack Developer | MERN Stack Developer ",
      "React Developer",
      "Node.js Enthusiast",
      "MERN Stack Developer"
    ]}
    typeSpeed={40}
    backSpeed={50}
    loop
  />
</p>


        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          
          {/* View Work */}
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View My Work
          </a>

          {/* Download CV */}
          <a
            href="/Sneha-Resume.pdf"
            download
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Download CV
          </a>
        </div>

       
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
  <div className="relative">
    
    {/* Background Glow */}
    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30"></div>

    {/* Image */}
    <img
      src="/images/snehaRawat.jpeg"
      alt="Sneha Rawat"
      className="relative w-72 h-72 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800 hover:scale-105 transition duration-500"
    />
  </div>
</div>

    </section>
  );
}
