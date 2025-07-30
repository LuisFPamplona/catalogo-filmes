import { getPopularMovies, getTopRatedMovie } from "@/services/tmdb";
import { Medal, PlayIcon, PlusCircle, Star, ThumbsUp } from "lucide-react";
import { Play } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const popularMovies = await getPopularMovies();
  const topRatedMovie = await getTopRatedMovie();

  return (
    <>
      {/* DIV TOP RATED */}
      <div className="bg-black text-white h-fit w-fit flex gap-4 mt-10 rounded-tl-3xl rounded-bl-3xl m-auto">
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
              <button className="flex gap-0.5 items-center justify-center bg-white hover:opacity-80 active:opacity-100 cursor-pointer text-black rounded-3xl p-2 transition-all">
                <PlayIcon fill="black" />
                <p>Ver mais</p>
              </button>
              <button className="flex gap-0.5 items-center justify-center bg-neutral-500 hover:opacity-80 active:opacity-100 cursor-pointer rounded-3xl p-2 transition-all">
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

      {/* NAVEGAÇAO DE CATEGORIAS*/}
      <div className="h-20 max-w-screen bg-black mt-4 text-white flex items-center justify-around gap-8 font-bold text-2xl">
        <button>Todos</button>
        <button>Açao</button>
        <button>Aventura</button>
        <button>Comédia</button>
        <button>Terror</button>
      </div>

      {/* DIV POPULARES */}
      <div className="ml-4">
        <h1 className="text-3xl font-bold text-white mt-4">Mais populares</h1>
        <ul className="flex gap-2 w-full h-90 overflow-x-hidden overflow-y-hidden">
          {popularMovies.results.map((item) => (
            <li
              key={item.id}
              className="shrink-0 hover:scale-105 w-50 flex justify-center items-center cursor-pointer transition-all"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`}
                width={200}
                height={300}
                alt={item.title}
              />
            </li>
          ))}
          <div className="flex items-center justify-center p-6">
            <div className="bg-violet-800 hover:bg-violet-700 active:bg-violet-900 text-white font-bold text-[14pt] w-24 rounded-2xl p-2">
              <Link href={"/movies/1"}>
                <button className="flex flex-col items-center justify-center cursor-pointer">
                  <PlusCircle />
                  Ver mais
                </button>
              </Link>
            </div>
          </div>
        </ul>
      </div>
      {/* DIV AVALIADOS */}
      <div className="ml-4">
        <h1 className="text-3xl font-bold text-white mt-4">Mais avaliados</h1>
        <ul className="flex gap-2 w-full h-90 overflow-x-hidden overflow-y-hidden">
          {topRatedMovie.results.map((item) => (
            <li
              key={item.id}
              className="shrink-0 hover:scale-105 w-50 flex justify-center items-center cursor-pointer transition-all"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`}
                width={200}
                height={300}
                alt={item.title}
              />
            </li>
          ))}
          <div className="flex items-center justify-center p-6">
            <div className="bg-violet-800 hover:bg-violet-700 active:bg-violet-900 text-white font-bold text-[14pt] w-24 rounded-2xl p-2">
              <Link href={"/movies/1"}>
                <button className="flex flex-col items-center justify-center cursor-pointer">
                  <PlusCircle />
                  Ver mais
                </button>
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}
