// Local
import { apiValues, systemErros } from "./constants";
import { TheMovieDbResponse } from "./types"
import { MovieService } from "./MovieService";

/**
 * Service class for connecting to API from themoviedb.org.
 */
export class APIService {
  private _movieService: MovieService = MovieService.Instance;
  /**
   * Get list of popular movies from api using apiValues.
   * @param page Page index number
   * @returns Promise of API response including list of movies.
   */
  public getAllMovies(page: number = 1): Promise<TheMovieDbResponse | void > {
    return this._getData<TheMovieDbResponse>(`${apiValues.baseUrl}/${apiValues.moviesEndpoint}/?page=${page}&api_key=${apiValues.apiKey}`)
      .then((res) => {
        this._movieService.storeMovieData(res.results);
        return res;
      }).catch((err) => {
        console.error(systemErros.noKey)
      });
  }
  /**
   * Get poster image (thumbnail) for a specific movie.
   * @param movieUrl url provided by response from method to get all movies.
   * @returns path string to load image onto an <img> element.
   */
  public getThumbnail(movieUrl: string | undefined): string {
    if (!movieUrl) {
      console.error(systemErros.imageNotFound);
      return "";
    }
    return `${apiValues.imageUrl}/${apiValues.posterSize}${movieUrl}`;
  }
  /**
   * Generic API call function to be used for every API call.
   * @param url // Full url to call.
   * @returns // Promise of data type T provided on call.
   */
  private _getData<T>(url: string): Promise<T> {
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: "",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  }
}
