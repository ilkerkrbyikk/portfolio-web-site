import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const About = () => {
  const frontendSkills = ["React", "TailwindCSS", "JavaScript", "HTML/CSS"];
  const backendSkills = [
    "Spring Boot",
    "MongoDB",
    "PostgreSQL",
    "Kafka",
    "Keycloak",
    "Docker",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-3"
    >
      <RevealOnScroll>
        <div>
          <h2
            className="text-3xl font-bold mb-8 
        bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text 
        text-transparent text-center"
          >
            About Me
          </h2>

          <div className="rounded-xl ml-65 mr-65 p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a dedicated Computer Engineering student and a passionate
              developer committed to turning complex challenges into elegant,
              effective digital solutions. My expertise in Java Spring and React
              has allowed me to work on projects that blend functionality with
              outstanding user experiences. I thrive on continuous learning,
              collaboration, and pushing the boundaries of technology. When I'm
              not coding, I explore emerging tech trends and contribute to open
              source projects. Thank you for visiting my portfolio — I look
              forward to creating something amazing together.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-1 rounded-full text-small hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-1 rounded-full text-small hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 ml-65 mr-65 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl  font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S in Computer Engineering</strong> - Abant Izzet
                  Baysal University (2022-2026)
                </li>
                <li>
                  Relevant Cousework: Data Structures, Algorithms, Web
                  Development
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl  font-bold mb-4">Working Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold"></h4>
                  <p>
                    I have not completed an internship yet, but I am eager to
                    gain hands-on experience and apply my skills in real-world
                    projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
