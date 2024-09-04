import React from 'react';
import { FaReact, FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaDatabase } from 'react-icons/fa';

const OurServices = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 px-16 py-8 ">
      {/* First Section */}
      <div className="col-span-2 border p-10">
        <img 
          src="https://via.placeholder.com/300" 
          alt="Placeholder"
          className="w-full h-[300px] "
        />
         <p className="mb-4">
It Management        </p>
        <p className="mb-4">
          This is a 4-line paragraph. It might contain some introductory text about the content, providing useful information to the user.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Click Me
        </button>
      </div>

      {/* Second Section */}
      <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Box */}
        <div className="border p-4 flex flex-col items-center">
          <FaReact className="text-4xl text-blue-500 mb-2" />
          <h3 className="text-xl font-semibold mb-2">React Development</h3>
          <p className="text-center">
            Build interactive UIs with React.js and manage component state efficiently.
          </p>
        </div>
        {/* Second Box */}
        <div className="border p-4 flex flex-col items-center">
          <FaCode className="text-4xl text-green-500 mb-2" />
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-center">
            Create modern, responsive websites using the latest web technologies.
          </p>
        </div>
        {/* Third Box */}
        <div className="border p-4 flex flex-col items-center">
          <FaLaptopCode className="text-4xl text-purple-500 mb-2" />
          <h3 className="text-xl font-semibold mb-2">Frontend Engineering</h3>
          <p className="text-center">
            Design and implement engaging user experiences on the frontend.
          </p>
        </div>
        {/* Fourth Box */}
        <div className="border p-4 flex flex-col items-center">
          <FaMobileAlt className="text-4xl text-red-500 mb-2" />
          <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
          <p className="text-center">
            Develop responsive mobile apps with React Native and other frameworks.
          </p>
        </div>
        {/* Fifth Box */}
        <div className="border p-4 flex flex-col items-center">
          <FaServer className="text-4xl text-orange-500 mb-2" />
          <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
          <p className="text-center">
            Build scalable backend services with Node.js, Express, and databases.
          </p>
        </div>
        {/* Sixth Box */}
        <div className="border p-4 flex flex-col items-center">
          <FaDatabase className="text-4xl text-yellow-500 mb-2" />
          <h3 className="text-xl font-semibold mb-2">Database Management</h3>
          <p className="text-center">
            Manage and optimize database schemas, queries, and performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
