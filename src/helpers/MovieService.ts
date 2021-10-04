// Local
import { systemErros } from "./constants";
import { MovieData} from "./types"

/**
 * Singleton class used to provide movie data
 * across different components in app.
 */
export class MovieService {
  // This makes this class a singleton so data is reliable
  private static _instance: MovieService;
  public movies: MovieData[] = [];
  public storedIds: {[key: number]: boolean} = {};

  private constructor() {}
  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
  /**
   * Assumes previously stored movie data and retrieves from specific movie id.
   * @param id movie id
   * @returns specific movie data
   */
  public getMovieById(id: number): MovieData {
    if (!this.storedIds[id] && id !== 0 ) {
      console.error(systemErros.dataNotStored, id);      
    }
    return this.movies.find((movie) => movie.id === id) as MovieData;
  }
  /**
   * Stores movie data passed through parameters.
   * verifies that items in list have not been stored previously
   * @param items list of items
   */
  public storeMovieData(items: MovieData[]): void {
    items.map((item) => {
      if (!this.storedIds[item.id] ) {
        this.movies.push(item);
        this.storedIds[item.id] = true;
      }
      return null;
    })
  }
  
}
