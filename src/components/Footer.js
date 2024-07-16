import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p>© 2022 Brand, Inc. · Privacy · Terms · Sitemap</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
        <a href="https://youtube.com" className="hover:text-gray-400">YouTube</a>
        <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
        <a href="https://linkedin.com" className="hover:text-gray-400">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
