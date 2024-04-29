import MovieCard from "./MovieCard";

const MovieList = ({ title, postermovie }) => {
  // console.log(postermovie[0].poster_path);
  return (
    <>
      <h4 className="text-3xl font-semibold pb-2 my-5">{title}</h4>
      <div className="flex overflow-x-auto">
        <div className="flex flex-row mb-9">
          {postermovie &&
            postermovie?.map((list) => (
              <MovieCard key={list.id} posterpath={list?.poster_path} />
            ))}
          {/* <MovieCard posterpath={movie[0].poster_path} /> */}
        </div>
      </div>
    </>
  );
};
export default MovieList;
