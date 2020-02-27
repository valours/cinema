import apiMovieDB from "../api/themoviedb";

const movieHook = () => {
  const getLastestMovies = async () => {
    const movies = await apiMovieDB.getLastestMovies();
    return movies;
  };

  return {
    getLastestMovies
  };
};

export default movieHook;
