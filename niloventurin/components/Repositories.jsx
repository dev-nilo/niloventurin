import React from "react";

const Repositories = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">My Repositories</h1>
      <p className="text-lg text-center max-w-2xl">
        Here are some of my repositories. Feel free to explore and check out my
        work!
      </p>
      <div className="mt-8">
        {/* Add your repository links here */}
        <a href="">
          <button className="bg-lime-500 text-white px-4 py-2 rounded">
            View on GitHub
          </button>
        </a>
      </div>
    </div>
  );
};

export default Repositories;
