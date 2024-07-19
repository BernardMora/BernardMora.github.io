import React from "react";
import { Button } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-black text-white py-4 text-center">
      <div className="flex justify-center space-x-4 mt-2">
        <Button
          onClick={() => window.open("https://github.com/BernardMora")}
          className="p-0 border-0 bg-transparent hover:text-gray-200 focus:outline-none"
        >
          Icons
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
