import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 
        bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text 
        text-transparent text-center"
          >
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-8 rounded-xl border border-white/10 
          hover:-translate-y-1 hover:border-blue-500/30 
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Petify</h3>
              <p className="text-gray-400 mb-4">
                Petify is a monolithic web application designed to connect pet
                owners with essential services like pet sitting, pet hotels,
                re-homing, and pet grooming. Built with Spring Boot, it provides
                a seamless experience for users to find and book pet care
                services while ensuring reliability and security.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {["Spring Boot", "MySQL", "JWT Authentication"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 ml-1 px-1 rounded-full text-small hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-col justify-end">
                <a
                  href="https://github.com/ilkerkrbyikk/Petify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors mt-4"
                >
                  View Project
                </a>
              </div>
            </div>

            <div
              className="p-8 rounded-xl border border-white/10 
          hover:-translate-y-1 hover:border-blue-500/30 
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
            >
              <h3 className="text-xl font-bold mb-2">E-Commerce</h3>
              <p className="text-gray-400 mb-4">
                E-Commerce is a scalable and modular e-commerce platform built
                using Spring Boot and React, following a microservices
                architecture. It features independent services for products,
                orders, payments, and authentication, ensuring flexibility, high
                availability, and efficient scaling for modern online shopping
                experiences..
              </p>
              <div className=" flex flex-wrap gap-1">
                {[
                  "Spring Boot",
                  "MongoDB",
                  "PostgreSQL",
                  "Kafka",
                  "Keycloak",
                  "Mail Dev",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 ml-1 px-1 rounded-full text-small hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/ilkerkrbyikk/micro-service-e-commerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors mt-4"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
