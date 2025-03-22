"use client";
import Avatar from "./ui/Avatar";

const Projects = () => {
  return (
    <div className="flex flex-col mt-20 items-center mb-8">
      {/* Profile Section */}
      <div className="text-center mt-8">
        <Avatar />
      </div>
      {/* Name and Title */}
      <h1 className="text-5xl font-bold mt-5">Thai An (An) Le</h1>
      <p className="text-2xl font-light text-gray-600 mt-1">software engineer</p>

      {/* Introduction Message */}
      <div className="text-s text-center text-light mt-4 px-6 py-3 border rounded-full  max-w-xl">
      hey there, welcome to my portfolio. Take a quick look at my work, experiences, and passions. :-)      </div>

    </div>
  );
};

export default Projects;
