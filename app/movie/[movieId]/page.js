import { ArrowLeft } from "lucide-react";
import { getMovieDetails } from "../../../services/tmdb.js";
import Image from "next/image";
import Link from "next/link.js";

export default async function MoviePageDetail({ params }) {
  const { movieId } = await params;

  const movie = await getMovieDetails(movieId);

  return (
    <>
      <main>
        <div className="bg-neutral-900 mt-12 text-white p-4 w-fit h-130 m-auto relative">
          <div className="flex justify-between items-center w-210 h-full gap-4 ">
            <div className="w-120 flex flex-col gap-16 h-110 ">
              <div className="absolute left-2 top-2 hover:bg-neutral-800 active:bg-neutral-900 p-1 rounded transition-all">
                <Link href={`/`}>
                  <button className="underline flex gap-1 cursor-pointer">
                    <ArrowLeft />
                  </button>
                </Link>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold">{movie.title}</h1>
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="bg-violet-500 w-fit p-1 rounded">Descricao</h2>
                  <p className="bg-white p-1 rounded text-violet-500 w-full text-left">
                    {movie.overview && movie.overview}
                    {!movie.overview && "Descricao nao disponivel em pt-BR"}
                  </p>
                </div>
                <div className="flex justify-between gap-4">
                  <div className="flex flex-col items-center">
                    <h2 className="bg-violet-500 w-full p-1 rounded text-center">
                      Data de lançamento
                    </h2>
                    <p className="bg-white p-1 rounded font-bold text-violet-500 w-full text-center">
                      {movie.release_date}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="bg-violet-500 w-full p-1 rounded text-center">
                      Genero
                    </h2>
                    <div className="flex flex-wrap w-40 items-center justify-between gap-4">
                      <div className="bg-white w-full flex flex-col items-center justify-center">
                        {movie.genres.map((genre, index) => {
                          return (
                            <p
                              className="font-bold text-violet-500 w-fit text-center"
                              key={index}
                            >
                              {genre.name}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="bg-violet-500 w-full p-1 rounded text-center">
                      Nota
                    </h2>
                    <p className="bg-white p-1 rounded font-bold text-violet-500 w-full text-center">
                      {movie.vote_average}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-violet-500 w-fit h-fit flex items-center justify-center rounded-2xl">
              <Image
                className="p-2 rounded-2xl"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                width={300}
                height={500}
                alt={movie.title}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
