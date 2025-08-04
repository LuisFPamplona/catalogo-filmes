import { Clapperboard, House, Star } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="max-w-screen h-20 bg-neutral-900 text-white flex items-center justify-between pr-8 pl-4">
        <div className="flex gap-2">
          <Link href={"/"}>
            <button className="hover:bg-neutral-800 p-2 active:bg-neutral-950 h-full w-18 flex flex-col items-center justify-center rounded cursor-pointer">
              <House width={30} height={30} />
              <p>Home</p>
            </button>
          </Link>
          <button className="hover:bg-neutral-800 p-2 active:bg-neutral-950 h-full w-18 flex flex-col items-center justify-center rounded cursor-pointer">
            <Star width={30} height={30} fill="yellow" color="yellow" />
            <p>Favoritos</p>
          </button>
        </div>
        <div className="flex items-center justify-center w-120 gap-2">
          <h1 className="text-4xl">
            Movies In <span className="text-violet-600 font-bold">Purple</span>
          </h1>
          <Clapperboard
            width={40}
            height={40}
            fill="oklch(54.1% 0.281 293.009)"
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-violet-600 w-28 h-12 rounded-2xl active:bg-violet-700 hover:bg-violet-500 transition-all font-bold text-[14pt] cursor-pointer">
            {/* Entrar */}
          </button>
          <button className="bg-violet-600 w-28 h-12 rounded-2xl active:bg-violet-700 hover:bg-violet-500 transition-all font-bold text-[14pt] cursor-pointer">
            {/* Criar conta */}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
