import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Modal from "../../components/modal";
import router from "next/router";

const Song = ({ data }) => {
  const { register, errors, handleSubmit, reset } = useForm();
  const [song, setSong] = useState(data.song);
  const [artist, setArtist] = useState(data.artist);
  const myRef = useRef(null);
  const [action, setAction] = useState("");
  const [display, setDisplay] = useState(false);

  const saveData = async (newData) => {
    console.log(JSON.stringify(data._id));
    await fetch(`/api/post/${data._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    setDisplay(false);
    router.push("/publicplaylist");
    reset();
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-teal">
        <h1 className="font-bold tracking-widest text-2xl text-dark uppercase mb-10">
          Edit or Delete Song
        </h1>
        <div className="w-full max-w-xs">
          <form
            onSubmit={handleSubmit(saveData)}
            className="border-2 border-solid border-dark shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="artist"
              >
                Artist
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                ref={register({ required: true })}
              />
              {errors.artist && (
                <div className="text-red text-xs italic">artist required</div>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="song"
              >
                Song
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                ref={register({ required: true })}
                name="song"
                value={song}
                onChange={(e) => setSong(e.target.value)}
              />
              {errors.song && (
                <div className="text-red text-xs italic">song required</div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <Modal
                action={action}
                data={data}
                display={display}
                setDisplay={setDisplay}
              />
              <button
                className="py-2 px-4 h-10 uppercase bg-skin text-dark rounded-lg border-dark border-2 border-solid text-base self-center leading-vtight hover:bg-dark hover:text-cream"
                type="button"
                onClick={() => {
                  setAction("Edit");
                  setDisplay(true);
                }}
              >
                Save
              </button>
              <button
                className="py-2 px-4 h-10 uppercase bg-skin text-dark rounded-lg border-dark border-2 border-solid text-base self-center leading-vtight hover:bg-dark hover:text-cream"
                type="button"
                onClick={() => {
                  setAction("Delete");
                  setDisplay(true);
                }}
              >
                Delete
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Harry Warner. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

Song.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(
    `https://portfolio.harry-warner.vercel.app/api/post/${id}`
  );
  const { data } = await res.json();

  return { data: data };
};
export default Song;
