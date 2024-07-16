import React from 'react';

function Skills() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'PHP', 'Python', 'Java',
    'HTML', 'CSS', 'SCSS', 'Git', 'MySQL', 'Linux', 'AWS', 'Docker', 'Jenkins',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Skills and Experiences</h2>
        <div className="flex flex-wrap justify-center mt-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-4">
              <img src={`/path-to-icons/${skill}.svg`} alt={skill} className="w-12 h-12" />
              <p className="mt-2">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
