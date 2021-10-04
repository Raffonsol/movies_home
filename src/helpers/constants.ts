import { ApiOptions, SystemErrors, SystemTitles } from "./types";

/** 
 * All pieces to building api requests 
 * Add apiKey acquired from themoviedb.org account here
 */
export const apiValues: ApiOptions = {
    baseUrl: "http://api.themoviedb.org",
    imageUrl: "https://image.tmdb.org/t/p",
    moviesEndpoint: "3/movie/popular",
    posterSize: "w185",
    apiKey: "",
}

export const scrollTreshold: number = 0.6;

// System errors
export const systemErros: SystemErrors = {
    apiFailed: "API failed to load.",
    dataNotStored: "Movie data was not stored for movie being shown.",
    imageNotFound: "Image not found.",
    noKey: "No api_key found. Please add an api_key from themoviedb.org in the helpers/constants file",
}
// Titles that can be on header
export const titles: SystemTitles = {
    // the page showing all the movies
    grid: "Pop Movies",
    // the page showing the details of one movie
    details: "Movie details"
}