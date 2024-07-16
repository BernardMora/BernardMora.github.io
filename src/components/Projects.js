import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Weather App',
      description: 'A weather app showing current weather, forecasts, and historical data.',
      imageUrl: '/path-to-image.jpg',
    },
    {
      title: 'Task Manager',
      description: 'A task manager app to organize and prioritize tasks with deadlines.',
      imageUrl: '/path-to-image.jpg',
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-4">
              <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded" />
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
