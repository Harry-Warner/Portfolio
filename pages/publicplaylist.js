import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PlayList = () => {
  const { data, error } = useSWR(`/api/posts`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;
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
              className="h-10 px-3 uppercase bg-dark text-cream rounded-lg border-dark border-2 border-solid text-base self-center leading-vtight hover:bg-skin hover:text-dark"
              onClick={() => {
                fetch(`/api/post/${e.id}`, { method: "DELETE" });
              }}
            >
              DEL
            </button>
          </li>
        ))}
      </div>
      <form
        method="POST"
        action={`/api/post/${data.length + 1}`}
        className="w-11/12 md:w-2/3 lg:w-1/2 mx-auto text-center my-10 flex justify-between"
      >
        <input
          type="text"
          name="artist"
          placeholder="New Artist"
          className="h-8 w-24 md:w-32 lg:w-40 xl:w-48 px-2 bg-cream self-center text-darkT placeholder-dark border-b-2 border-dark border-solid bg-opacity-0"
        />
        <input
          type="text"
          name="song"
          placeholder="New Song"
          className="h-8 w-24 md:w-32 lg:w-40 xl:w-48 px-2 bg-cream self-center text-darkT placeholder-dark border-b-2 border-dark border-solid bg-opacity-0"
        />
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
