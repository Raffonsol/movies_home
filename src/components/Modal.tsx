import * as React from "react";

// Third party
import AppBar from "@material-ui/core/AppBar";
import Button from '@mui/material/Button';

// Local
import "./Modal.scss";
import { MovieData } from "../helpers/types";
import { APIService } from "../helpers/APIService";
import { getYearOnly } from "../helpers/util";
import Trailer from "./Trailer";

interface ModalProps {
  // whether to show modal
  show: boolean,
  // data to build modal with
  data: MovieData,
}

export default class Modal extends React.Component <ModalProps, {}> {
    private _showHideClassName: string = "modal display-block" ;
    private _api: APIService = new APIService();
    render() {
        if (!this.props.data || !this.props.show) {
          return <div data-testid="modal"></div>;
        }
        this._showHideClassName  = this.props.show ? "modal display-block" : "modal display-none";
      return (
        <div className={this._showHideClassName} data-testid="modal">
            <section className="modal-main">
              <AppBar>
                <div className="detail_bar"><h3 className="title">{this.props.data.original_title}</h3> </div>
              </AppBar>
                <div className="section_one">
                  <div className="thumbnail">
                    <img alt="" src={this.props.data.poster_path ? this._api.getThumbnail(this.props.data.poster_path) : ""} />
                  </div>
                  <div className="top_info">
                    <p className="year">{this.props.data.release_date ? getYearOnly(this.props.data.release_date) : "Unknown"}</p>
                    <p className="length">120 mins</p>
                    <p className="rating">{this.props.data.vote_average}/10</p>
                    <Button variant="contained">Add to Favorite</Button>
                  </div>
                </div>
                <div className="section_two">
                  <p>{this.props.data.overview ? this.props.data.overview : ""}</p>
                </div>
                <div className="section_three">
                  <h4>TRAILERS</h4>
                  <div className="trailers">
                    <Trailer index={1}/>
                    <Trailer index={2}/>
                  </div>
                </div>
            </section>
        </div>
      );
    }
    
  }