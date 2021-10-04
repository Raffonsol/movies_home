export type MovieData = {
    adult?: boolean,
    backdrop_path?: string,
    genre_ids?: number[],
    id: number,
    original_language?: string,
    original_title?: string,
    overview?: string,
    popularity?: number,
    poster_path?: string,
    release_date?: string,
    title: string,
    video?: boolean,
    vote_average?: number,
    vote_count?: number,
};
export type TheMovieDbResponse = {
    page: number,
    results: MovieData[],
    total_pages: number,
    total_results: number;
};
export type ApiMethod = "POST" | "GET";
export type ApiOptions = {
    baseUrl: string,
    imageUrl: string,
    moviesEndpoint: string,
    posterSize: string,
    apiKey: string,
}
export type SystemErrors = {
    apiFailed: string;
    imageNotFound: string;
    dataNotStored: string;
    noKey: string;
}
export type SystemTitles = {
    grid: string;
    details: string;
}