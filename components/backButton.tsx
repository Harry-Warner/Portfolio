import React from "react";
import Link from "next/link";

type Url = {
  url: string;
};

const BackButton = ({ url }: Url) => {
  return (
    <Link href={url} scroll={false}>
      <a
        href="/index"
        className="shadow absolute top-0 left-1/12 my-5 md:my-10 -translate-x-1/2 py-1 px-3 hover:bg-dark text-dark hover:text-teal border-dark border-2 border-solid rounded-lg focus:outline-none focus:shadow-outline"
      >
        Back
      </a>
    </Link>
  );
};

export default BackButton;
