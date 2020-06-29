import React, { useState } from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-scroll";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
    replyTo: "@",
    accessKey: "3fab35c1-e484-4b82-a7c2-ec8a5403c0cf",
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "success",
          message: "Message sent! Thank you for reaching out to me.",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
    }
  };

  return (
    <section
      name="contact"
      className="relative sm:h-screen w-full flex flex-col lg:flex-row justify-around items-center bg-teal pt-12"
    >
      <StyledDiv className="w-full text-center text-dark mx-auto flex flex-col items-center lg:hidden">
        <h1 className="text-4xl uppercase">Get in touch!</h1>
        <p className="w-11/12 md:w-7/12 text-base my-3">
          Drop me an email from the below form, email me directly at
          harry.e.p.warner@gmail.com, give me a call on 07901676166 or reach out
          to me from any of the below social platforms.
        </p>
        <div className="flex justify-around items-center mt-2 w-1/3">
          <GitHubIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
      </StyledDiv>
      <StyledDiv>
        <form
          action="https://api.staticforms.xyz/submit"
          method="post"
          onSubmit={handleSubmit}
          className="my-20 lg:my-0 mx-auto w-64 sm:w-84 flex flex-col"
        >
          <input
            onChange={(e) => {
              handleChange(e);
              setName(e.target.value);
            }}
            required
            type="text"
            name="name"
            value={name}
            placeholder="Full Name"
            className="text-dark placeholder-darkT h-8 text-base my-3 bg-transparent border-b-2 border-solid border-dark"
          />
          <input
            onChange={(e) => {
              handleChange(e);
              setEmail(e.target.value);
            }}
            required
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            className="text-dark placeholder-darkT h-8 text-base my-3 bg-transparent border-b-2 border-solid border-dark"
          />
          <textarea
            onChange={(e) => {
              handleChange(e);
              setMessage(e.target.value);
            }}
            required
            type="text"
            name="message"
            value={message}
            placeholder="Message"
            className="text-dark placeholder-darkT h-32 text-base my-3 bg-transparent border-b-2 border-solid border-dark"
          />
          <div style={{ display: "none" }}>
            <label>Title</label>
            <div>
              <input
                type="text"
                name="honeypot"
                style={{ display: "none" }}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            name="submit"
            className="bg-skinT text-dark my-3 border-2 border-solid border-dark rounded-lg w-full h-12 mx-auto uppercase tracking-widest font-bold hover:bg-dark hover:text-skin hover:shadow-lg"
          >
            Submit
          </button>
          <p className="text-center text-dark mx-auto my-2">
            {response.message}
          </p>
        </form>
      </StyledDiv>
      <div className="hidden lg:block h-1/2 w-0 border-solid border-dark border-r-2 mx-10" />
      <StyledDiv className="hidden lg:flex text-center text-dark mx-auto flex-col items-center">
        <h1 className="text-4xl uppercase">Get in touch!</h1>
        <p className="w-7/12 text-base my-3 mx-auto">
          Drop me an email from the adjacent form, email me directly at
          harry.e.p.warner@gmail.com, give me a call on 07901676166 or reach out
          to me from any of the below social platforms.
        </p>
        <div className="flex justify-around items-center mt-2 mx-auto w-1/3">
          <a href="https://github.com/Harry-Warner">
            <GitHubIcon />
          </a>
          <a href="https://www.twitter.com/harrywarner7/">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/harrywarner7/">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/harry-warner-a78554153/">
            <LinkedInIcon />
          </a>
        </div>
      </StyledDiv>
      <Link
        to="home"
        activeClass="active"
        duration={500}
        spy={true}
        smooth={true}
        scroll={true}
        className="text-dark my-8 absolute w-full text-center underline bottom-0 text-base cursor-pointer"
      >
        Back to top
      </Link>
    </section>
  );
};

const StyledDiv = styled.div`
  @media (min-width: 64rem) {
    width: calc(50% - 1px);
  }
`;

export default Contact;
