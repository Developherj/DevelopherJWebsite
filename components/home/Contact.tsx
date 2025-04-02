import React from "react";

const Contact = () => {
  return (
    <div className="pt-16 pb-16 ">
      <h1 className="text-2xl sm:text-3xl text-center text-[var(--dj-blue)] dark:text-white font-bold">
        Lets build something great together!
      </h1>
      <span className="block w-16 h-1 bg-[var(--dj-pink)] mx-auto mt-3"></span>

      <p className="text-center text-sm sm:text-base text-[var(--dj-blue)] dark:text-gray-200 mt-4">
        {" "}
        Please don&apos;t hesitate to get in touch using my details below.
      </p>

      <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mt-16">
        <div className="h-full">
          <input
            type="text"
            placeholder="Name"
            className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md"
          />
        </div>
        <div className="h-full">
          <textarea
            placeholder="message"
            className="w-full block text-black h-full bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
