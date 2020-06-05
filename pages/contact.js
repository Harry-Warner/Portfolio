import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-1/2 mx-auto">
        <form className="bg-darkT w-full grid gap-6 grid-cols-1 md:grid-cols-2 p-10 border-dark border-4 border-solid">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="text-cream placeholder-cream col-start-1 h-12 text-lg px-3 bg-transparent border-b-2 border-solid border-cream"
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="text-cream placeholder-cream col-start-1 h-12 text-lg px-3 bg-transparent border-b-2 border-solid border-cream"
          ></input>
          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            className="text-cream placeholder-cream col-start-1 h-12 text-lg px-3 bg-transparent border-b-2 border-solid border-cream"
          ></input>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="text-cream placeholder-cream col-start-1 h-12 text-lg px-3 bg-transparent border-b-2 border-solid border-cream"
          ></input>
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            className="text-cream placeholder-cream row-start-1 col-start-2 row-end-4 h-3/4 text-lg p-3 bg-transparent border-b-2 border-solid border-cream"
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
