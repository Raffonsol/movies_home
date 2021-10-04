import * as React from "react";

// Third party
import InfiniteScroll from "react-infinite-scroll-component";

// Local
import './Grid.css';
import { APIService } from "../helpers/APIService";
import { MovieData, TheMovieDbResponse } from "../helpers/types";
import { scrollTreshold, systemErros, titles } from "../helpers/constants";
import { MovieService } from "../helpers/MovieService";
import Modal from './Modal';
import Header from './Header';

let page: number = 1;
type CollageProps = {
  onClick: (event: number) => void;
}

/**
 * Template with images using infinite scroll.
 */
export const Collage: React.FC<CollageProps> = (props: CollageProps) => {
  const { onClick } = props;
  const [images, setImages]: any[] = React.useState<MovieData[] | null>([]);
  const [loaded, setIsLoaded]: any[] = React.useState(false);
  const api: APIService = new APIService();
  /**
   * Method that calls API service to get all images.
   */
  const fetchImages: () => Promise<void> | undefined = () => {
    const scrollPercentage: number = window.scrollY/document.documentElement.scrollHeight;
    if(scrollPercentage !==0 && scrollPercentage < scrollTreshold) {
      return;
    }
    return api.getAllMovies(page)
      .then(data => {
        if (!data) {
          return [];
        }
        page = (data as TheMovieDbResponse).page + 1;
        return (data as TheMovieDbResponse).results;
      })
      .then(data => {
        setImages([...images, ...data]);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(systemErros.apiFailed, err);
      });
  }

  React.useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <div className="container" id="scroll">
        <InfiniteScroll
          dataLength={20}
          next={() => {}}
          onScroll={() => fetchImages()}
          hasMore={true}
          loader={"Loading"}
        >
          <div className="image-grid">
            {loaded ? images.map((image: MovieData) => (
                  <UnsplashImage
                    key={image.id}
                    id={image.id}
                    url={image.poster_path ? api.getThumbnail( image.poster_path) : ""}
                    clickEvent={(event) => {onClick(event);}}
                  />
                ))
              : ""}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

interface ImageProps {
  url: string, 
  key: number,
  id: number,
  clickEvent: (id: number) => void,
}
/**
 * Template for each image in grid.
 */
export class UnsplashImage extends React.Component <ImageProps, {}> {
  render() {
    return (
      <div className="image-item" key={this.props.id}>
        <img id="image" alt="image" src={this.props.url} onClick={() => this.props.clickEvent(this.props.id)}/>
      </div>
    );
  }
}
interface GridState {
  title: string,
  showModal: boolean,
  showReturn: boolean,
  id: number
}
/**
 * Grid component that puts all pieces together and controls detail modals.
 */
export default class Grid extends React.Component <{}, GridState> {
  private _movieService: MovieService = MovieService.Instance;
  constructor(props: {}) {
    super(props);
    this.state = {
      title: titles.grid,
      showModal: false,
      showReturn: false,
      id: 0,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(id: number){
    this.setState({ showModal: true, id: id, title: titles.details, showReturn: true});
  }

  hideModal() {
    this.setState({ showModal: false, title: titles.grid, showReturn: false});
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} showReturn={this.state.showReturn} clickReturn={() => this.hideModal()}/>
        <Modal show={this.state.showModal} data={this._movieService.getMovieById(this.state.id)} />
        <Collage onClick={(event) => {this.showModal(event)}} />
      </div>
    );
  }
}