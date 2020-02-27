import config from "../config";

const {
  themoviedb: { url, apiKey }
} = config;

export async function getLastestMovie() {
  return fetch(`${url}/movie?api_key=${apiKey}`);
}
