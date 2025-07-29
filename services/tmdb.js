const API_KEY = process.env.API_CREDENTIALS;

export const getMovies = async () => {
  const res = await fetch("https://api.themoviedb.org/3/discover/movie", {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!res.ok) {
    console.error("Erro no fetch da API");
  }

  const data = await res.json();

  return data;
};

export const getMoviePage = async (page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  if (!res.ok) {
    console.error("Erro no fetch da API pages");
  }

  const data = await res.json();

  return data;
};
