import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-11/12 md:w-9-12 lg:w-2/3 xl:w-1/2 mx-auto mt-32 md:mt-0">
        <h1 className="text-center w-full text-4xl uppercase text-dark my-3">
          Contact me
        </h1>
        <form className="bg-darkT w-full grid gap-6 grid-cols-1 lg:grid-cols-2 p-6 md:p-10 border-dark border-4 border-solid">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="text-cream placeholder-creamT col-start-1 h-12 text-lg px-3 bg-transparent border-b-2 border-solid border-cream"
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="text-cream placeholder-creamT col-start-1 h-12 text-lg px-3 bg-transparent border-b-2 border-solid border-cream"
          ></input>
          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            className="text-cream placeholder-creamT col-start-1 h-12 text-lg px-3 bg-transparent border-b-2 border-solid border-cream"
          ></input>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="text-cream placeholder-creamT col-start-1 h-12 text-lg px-3 bg-transparent border-b-2 border-solid border-cream"
          ></input>
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            className="text-cream placeholder-creamT lg:row-start-1 lg:col-start-2 lg:row-end-4 h-64 md:h-48 text-lg p-3 bg-transparent border-b-2 border-solid border-cream"
          ></textarea>
          <button
            type="submit"
            name="submit"
            className="bg-dark text-skin border-2 border-solid border-skin rounded-xl w-32 mx-auto uppercase tracking-widest font-bold hover:bg-skin hover:text-dark"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
