import React from "react";

function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20 pt-28 pb-14">
      <div className="flex px-10 columns-2 py-10">
        <div className="w-3/4 pr-10">
          <h1 className="text-left text-4xl font-bold">
            Hi! I am Bernardo Morales, Software Engineer Student
          </h1>
          <p className="mt-4">Always Learning, Building, and Growing</p>
          <p className="italic pt-5 mt-4">"Difficulty, struggle and frustration when you're learning something are not signs that you've reached your limits, they're signs that you're expanding them."</p>
          <p className="italic mt-4">- David Yaeger</p>

        </div>
        <div className="w-1/3 mt-8">
          <img
            src="/path-to-your-image.jpg"
            alt="Profile"
            className="rounded-full w-32 h-32"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
