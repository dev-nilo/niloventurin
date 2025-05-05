import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg text-center max-w-2xl">
        If you have any questions or would like to get in touch, feel free to
        reach out!
      </p>
      <div className="mt-8">
        <a href=""></a>
        <button className="bg-lime-500 text-white px-4 py-2 rounded">
          Email Me
        </button>
      </div>
    </div>
  );
};

export default Contact;
