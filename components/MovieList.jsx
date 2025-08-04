import { ChevronLeft, ChevronRight, Plus, PlusCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getMovieByGenre } from "@/services/tmdb";

const MovieList = async ({ genre, title }) => {
  const NewGenre = await getMovieByGenre(genre);

  return (
    <div className="ml-4 relative z-10 flex flex-col justify-center mb-4 h-80 pl-8 pr-8 mt-4">
      <h1 className="text-3xl font-bold text-white mt-4">{title}</h1>
      <ul className="flex gap-2 w-full h-65 overflow-x-auto overflow-y-hidden mt-4">
        {NewGenre.results.map((item) => (
          <li
            key={item.id}
            className="shrink-0 hover:scale-105 w-40  h-60 flex justify-center items-center cursor-pointer transition-all"
          >
            <Link href={`/movie/${item.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`}
                width={160}
                height={300}
                alt={item.title}
              />
            </Link>
          </li>
        ))}
        <div className="w-40 h-60 flex items-center bg-transparent">
          <button className="bg-neutral-900 w-16 h-60 rounded-2xl flex justify-center items-center cursor-pointer">
            <Plus color="white" size={48} />
          </button>
        </div>
      </ul>
    </div>
  );
};

export default MovieList;
