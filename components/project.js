import React from "react";
import Link from "next/link";

const Project = (props) => {
  return (
    <div
      id={props.playlist ? "playlist" : ""}
      className="box-border w-full py-10 md:py-20 flex flex-col sm:flex-row justify-center items-center"
    >
      {props.left ? (
        <div className="hidden sm:block mx-6 w-5/12 h-100 bg-dark" />
      ) : (
        ""
      )}
      <div className="mb-4 sm:mb-0 mx-2 sm:mx-6 w-full sm:w-7/12 flex flex-col text-dark text-center">
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
            className="py-1 px-3 bg-skinT border-dark border-2 border-solid w-fit rounded-lg"
            href={props.github}
          >
            GitHub
          </a>
          {props.internal ? (
            <Link href="/publicplaylist">
              <a className="ml-4 py-1 px-3 bg-skinT border-dark border-2 border-solid w-fit rounded-lg">
                Website
              </a>
            </Link>
          ) : (
            <a
              className="ml-4 py-1 px-3 bg-skinT border-dark border-2 border-solid w-fit rounded-lg"
              href={props.url}
            >
              Website
            </a>
          )}
        </div>
      </div>
      {props.right ? (
        <div className="mx-2 sm:mx-6 w-11/12 sm:w-5/12 h-100 bg-dark" />
      ) : (
        <div className="sm:hidden mx-2 w-11/12 h-100 bg-dark" />
      )}
    </div>
  );
};

export default Project;
