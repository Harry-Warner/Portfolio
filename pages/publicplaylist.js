import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { useForm } from "react-hook-form";

const fetcher = async (url) => await fetch(url).then((res) => res.json());

const PlayList = () => {
  const { data, mutate, error } = useSWR(`/api/posts`, fetcher);
  const { register, errors, handleSubmit, reset } = useForm();
  const [deleteId, setDeleteId] = useState(0);

  useEffect(() => {
    if (deleteId > 0) {
      console.log(deleteId);
      fetch(`/api/post/${deleteId}`, {
        method: "DELETE",
        body: JSON.stringify(deleteId),
      });
      mutate();
      setDeleteId(0);
    }
  }, [deleteId]);

  const sendDataToApi = async (newData) => {
    newData.id = data.length + 1;

    await fetch(`/api/post/${data.length + 1}`, {
      method: "POST",
      body: JSON.stringify(newData),
    });

    mutate();
    reset();
    // `/api/post/${data.length + 1}`
    // Send a POST request to that URL with the data, then
    // refetch using SWR
  };

  if (error) return <div>{error.message}</div>;
  if (!data) return <div className="text-center">Loading...</div>;
  return (
    <>
      <h1 className="w-11/12 md:w-2/3 lg:w-1/2 uppercase font-bold mx-auto my-10 tracking-widest text-2xl text-dark">
        Playlist
      </h1>
      <div className="w-11/12 md:w-2/3 lg:w-1/2 mx-auto my-6 border-b-2 border-dark border-solid">
        <div className="flex justify-between my-2">
          <h2 className="text-dark font-bold self-center px-1 w-24 md:w-32 lg:w-40 xl:w-48">
            Artists
          </h2>
          <h2 className="text-dark font-bold self-center px-1 w-24 md:w-32 lg:w-40 xl:w-48">
            Songs
          </h2>
          <h2 className="font-bold self-center tracking-wider text-2xl text-dark px-3">
            +/-
          </h2>
        </div>
      </div>
      <div className="flex justify-center flex-col w-11/12 md:w-2/3 lg:w-1/2 mx-auto">
        {data.map((e) => (
          <li key={e.id} className="flex justify-between my-2">
            <p className="text-dark px-1 w-24 md:w-32 lg:w-40 xl:w-48">
              {e.artist}:
            </p>
            <p className="text-dark px-1 w-24 md:w-32 lg:w-40 xl:w-48">
              {e.song}
            </p>
            <button
              onClick={() => setDeleteId(e.id)}
              className="h-10 px-3 uppercase bg-dark text-cream rounded-lg border-dark border-2 border-solid text-base self-center leading-vtight hover:bg-skin hover:text-dark"
            >
              DEL
            </button>
          </li>
        ))}
      </div>
      <form
        onSubmit={handleSubmit(sendDataToApi)}
        className="w-11/12 md:w-2/3 lg:w-1/2 mx-auto text-center items-center my-10 flex justify-between"
      >
        <div className="relative">
          <input
            type="text"
            name="artist"
            ref={register({ required: true })}
            placeholder="New Artist"
            className="h-8 w-24 md:w-32 lg:w-40 xl:w-48 px-2 bg-cream self-center text-dark placeholder-darkT border-b-2 border-dark border-solid bg-opacity-0"
          />
          {errors.artist && (
            <div className="absolute top-0 w-full mt-8 text-red">
              artist required
            </div>
          )}
        </div>
        <div className="relative">
          <input
            type="text"
            ref={register({ required: true })}
            name="song"
            placeholder="New Song"
            className="h-8 w-24 md:w-32 lg:w-40 xl:w-48 px-2 bg-cream self-center text-dark placeholder-darkT border-b-2 border-dark border-solid bg-opacity-0"
          />
          {errors.song && (
            <div className="absolute top-0 w-full mt-8 text-red">
              song required
            </div>
          )}
        </div>
        <button
          name="id"
          value={data.length + 1}
          className="h-10 px-3 uppercase bg-skin text-dark rounded-lg border-dark border-2 border-solid text-base self-center leading-vtight hover:bg-dark hover:text-cream"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default PlayList;
