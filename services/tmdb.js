const API_KEY = process.env.API_CREDENTIALS;

const API_URL = "https://api.themoviedb.org/3";

export const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getTopRatedMovie = async () => {
  const res = await fetch(
    `${API_URL}/movie/top_rated?language=pt-BR&page=1`,
    getOptions
  );

  if (!res.ok) {
    console.error("Erro ao pegar top rated movie");
  }

  const data = await res.json();

  return data;
};

export const getPopularMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/popular?language=pt-BR`,
    getOptions
  );

  if (!res.ok) {
    console.error("Erro ao pegar dados");
  }

  const data = await res.json();

  return data;
};

export const getMovies = async (breakpoints) => {
  const res = await fetch(`${API_URL}/discover/movie`, getOptions);

  if (!res.ok) {
    console.error("Erro no fetch da API");
  }

  const data = await res.json();

  return data;
};

export const getMoviePage = async (page) => {
  const res = await fetch(
    `${API_URL}/discover/movie?language=pt-BR&page=${page}`,
    getOptions
  );

  if (!res.ok) {
    console.error("Erro no fetch da API pages");
  }

  const data = await res.json();

  return data;
};
