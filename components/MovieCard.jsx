import Image from "next/image";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="w-60 h-full bg-stone-900">
        <div className="flex w-full">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            width={240}
            height={120}
            alt={movie.title}
          />
        </div>
        <div className="bg-neutral-900 w-60 text-white font-bold text-center p-2">
          <p className=" h-24 text-2xl flex items-center justify-center">
            {movie.title}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
