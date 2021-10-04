import * as React from "react";

// Third party
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

// Local
import "./Trailer.scss";

interface TrailerProps {
    index: number,
}
/**
 * Component for showing trailer palceholder sections.
 * To be replaced with video playing features.
 */
export default class Trailer extends React.Component <TrailerProps, {}> {
  render() {
    return (
      <div className="box">
        <PlayCircleFilledWhiteOutlinedIcon/>
        Play trailer {this.props.index}
      </div>
    );
  }
}