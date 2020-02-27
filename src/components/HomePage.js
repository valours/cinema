import React from "react";
import MovieHomeLastestList from "./MovieHomeLastestList";
import hookMovie from "../movie/hook";

const HomePage = () => {
  const {} = hookMovie();
  return (
    <div>
      <h1>The home page</h1>
      <MovieHomeLastestList movies={[]} />
    </div>
  );
};

export default HomePage;
