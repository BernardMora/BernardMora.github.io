import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <form className="mt-8 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 rounded h-32"></textarea>
          <button className="bg-blue-500 px-4 py-2 rounded">Send Message</button>
        </form>
        <div className="flex justify-center space-x-4 mt-8">
          <a href="https://linkedin.com" className="hover:text-gray-400">LinkedIn</a>
          <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
          <a href="https://github.com" className="hover:text-gray-400">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
