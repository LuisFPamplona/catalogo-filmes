import MovieCard from "@/components/MovieCard";
import { getMoviePage, getMovies } from "@/services/tmdb";
import Link from "next/link";

export const generateStaticParams = async () => {
  const data = await getMovies();

  return data.results.map((item, index) => ({
    moviesPage: (index + 1).toString(),
    movie: item,
  }));
};

export default async function Movies({ params }) {
  const { moviesPage } = await params;

  const movies = await getMoviePage(moviesPage);

  return (
    <>
      <h1 className="text-4xl">Catalogo</h1>
      <ul className="flex flex-wrap gap-4 bg-red-200 justify-center">
        {movies.results.map((item) => {
          return (
            <li key={item.id}>
              <MovieCard movie={item} />
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-center max-w-full gap-8 mt-4">
        <Link href={`/movies/${Number(moviesPage) - 1}`}>
          <div className="border w-10 h-10 flex items-center justify-center text-3xl pb-1 bg-neutral-950 text-white hover:scale-110 active:scale-95 cursor-pointer transition-all font-bold">
            {"<"}
          </div>
        </Link>
        <div>
          <p className="text-2xl">{`Página ${moviesPage}`}</p>
        </div>
        <Link href={`/movies/${Number(moviesPage) + 1}`}>
          <div className="border w-10 h-10 flex items-center justify-center text-3xl pb-1 bg-neutral-950 text-white hover:scale-110 active:scale-95 cursor-pointer transition-all font-bold">
            {">"}
          </div>
        </Link>
      </div>
    </>
  );
}
