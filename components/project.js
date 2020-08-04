import React from "react";
import Link from "next/link";

const Project = (props) => {
  return (
    <div
      id={props.playlist ? "playlist" : ""}
      className="box-border w-full py-10 md:py-20 flex flex-col md:flex-row justify-center items-center"
    >
      {props.left ? (
        <img
          src={`/pc-${props.project}.png`}
          className="hidden md:block mx-6 w-5/12 h-100 object-contain"
        />
      ) : (
        ""
      )}
      <div className="mb-4 md:mb-0 mx-2 md:mx-6 w-full md:w-7/12 flex flex-col text-dark text-center">
        <h1 className="text-4xl">{props.title}</h1>
        <div className="my-5">
          <p className="mb-5 px-2">
            <strong>Tech Stack:</strong> {props.techStack}
          </p>
          <p className="px-2 w-11/12 mx-auto text-base box-border">
            {props.description}
          </p>
        </div>
        <div className="flex justify-center w-full">
          <a
            className="py-1 px-3 bg-skinT hover:bg-dark hover:text-skin border-dark border-2 border-solid rounded-lg"
            href={props.github}
          >
            GitHub
          </a>
          {props.internal ? (
            <Link href={props.url}>
              <a
                className="ml-4 py-1 px-3 bg-skinT hover:bg-dark hover:text-skin border-dark border-2 border-solid rounded-lg"
                href={props.url}
              >
                Webpage
              </a>
            </Link>
          ) : (
            <a
              className="ml-4 py-1 px-3 bg-skinT hover:bg-dark hover:text-skin border-dark border-2 border-solid rounded-lg"
              href={props.url}
            >
              Website
            </a>
          )}
        </div>
      </div>
      {props.right ? (
        <img
          src={`/pc-${props.project}.png`}
          className="mx-2 md:mx-6 w-11/12 md:w-5/12 h-100 object-contain"
        />
      ) : (
        <img
          src={`/pc-${props.project}.png`}
          className="md:hidden mx-2 w-11/12 h-100 object-contain"
        />
      )}
    </div>
  );
};

export default Project;
