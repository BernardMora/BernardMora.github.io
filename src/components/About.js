import React from 'react';

function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Who am I?</h2>
        <p className="mt-4">
          I am a passionate developer with experience in building web applications.
          My skills include JavaScript, React, Node.js, and more. I aim to create impactful solutions that improve user experiences.
        </p>
        <div className="flex justify-center mt-8">
          <img src="/path-to-your-image.jpg" alt="Profile" className="rounded-full w-32 h-32" />
        </div>
        <div className="mt-4">
          <p>Skills: JavaScript, React, Node.js, HTML, CSS</p>
          <p>Experience: 3 years as a Full Stack Developer</p>
          <p>Education: Bachelor's Degree in Computer Science</p>
        </div>
      </div>
    </section>
  );
}

export default About;
