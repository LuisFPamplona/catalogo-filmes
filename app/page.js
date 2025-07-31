import MovieList from "@/components/MovieList";
import {
  getMovieByGenre,
  getMovieGenre,
  getPopularMovies,
  getTopRatedMovie,
} from "@/services/tmdb";
import { Medal, PlayIcon, PlusCircle, Star, ThumbsUp } from "lucide-react";
import { Play } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const popularMovies = await getPopularMovies();
  const topRatedMovie = await getTopRatedMovie();
  const moviesAnim = await getMovieByGenre(16);
  const moviesRomance = await getMovieByGenre(10749);
  const moviesMistery = await getMovieByGenre(9648);

  const genres = await getMovieGenre();

  return (
    <>
      {/* BANNER PRINCIPAL */}
      <div className="bg-neutral-900 text-white h-fit w-fit flex gap-4 mt-10 rounded-tl-3xl rounded-bl-3xl m-auto">
        <div className="flex flex-col items-center justify-around pl-4 pr-4">
          <h1 className="font-bold text-2xl flex items-center justify-center gap-2">
            <p>
              Filme mais <span className="text-amber-500">popular</span>
            </p>
            <div className="pt-1">
              <Medal color="oklch(76.9% 0.188 70.08)" />
            </div>
          </h1>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-bold text-2xl">
                {popularMovies.results[0].title}
              </h1>
              <div className="flex gap-5 justify-center">
                <p className="text-green-700 font-bold text-sm flex items-center gap-1">
                  <ThumbsUp
                    fill="oklch(52.7% 0.154 150.069)"
                    color="white"
                    width={15}
                    height={15}
                  />
                  {`${popularMovies.results[0].vote_count} votos`}
                </p>
                <p className="text-gray-100 font-bold text-sm">{`${popularMovies.results[0].release_date}`}</p>
              </div>
            </div>
            <div className="flex items-center justify-center font-bold gap-4">
              <button className="flex gap-0.5 items-center justify-center bg-violet-500 hover:opacity-80 active:opacity-100 cursor-pointer text-white rounded-2xl p-2 transition-all">
                <PlayIcon fill="white" />
                <p>Ver mais</p>
              </button>
              <button className="flex gap-0.5 items-center justify-center bg-neutral-500 hover:opacity-80 active:opacity-100 cursor-pointer rounded-2xl p-2 transition-all">
                <Star fill="white" /> <p>Favoritos</p>
              </button>
            </div>
          </div>
        </div>
        <Image
          src={`https://image.tmdb.org/t/p/original/${popularMovies.results[0].backdrop_path}`}
          width={543}
          height={305}
          alt={popularMovies.results[0].title}
        ></Image>
      </div>

      <div>
        {genres.genres.map((genre) => (
          <MovieList key={genre.id} genre={genre.id} title={genre.name} />
        ))}
      </div>
    </>
  );
}
