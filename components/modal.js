import React from "react";
import router from "next/router";

const Modal = ({ action, data, display, setDisplay }) => {
  const deleteData = async () => {
    await fetch(`/api/post/${data._id}`, {
      method: "DELETE",
    });
    setDisplay(false);
    router.push("/publicplaylist");
  };
  return (
    <>
      <div
        className={`${
          display ? "block" : "hidden"
        } absolute top-0 left-0 right-0 bottom-0 bg-darkT flex justify-center items-center`}
      >
        <div className="h-40 w-84 bg-cream rounded-lg">
          <p className="h-1/2 w-full p-3 text-dark text-2xl font-bold">
            Are you sure you want to {action}?
          </p>
          <div className="h-1/2 w-full flex justify-end items-end">
            <button
              className="m-3 py-2 px-4 h-10 uppercase bg-skin text-dark rounded-lg border-dark border-2 border-solid text-base leading-vtight hover:bg-skin hover:text-dark"
              type={action === "Delete" ? "button" : "submit"}
              onClick={action === "Delete" ? deleteData : ""}
            >
              yes
            </button>
            <button
              className="m-3 py-2 px-4 h-10 uppercase bg-dark text-cream rounded-lg border-dark border-2 border-solid text-base leading-vtight hover:bg-dark hover:text-cream"
              type="button"
              onClick={() => setDisplay(false)}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
