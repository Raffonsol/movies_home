import * as React from "react";
// Third party
import AppBar from "@material-ui/core/AppBar";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Local
import './Header.scss';

interface HeaderProps {
    title: string,
    showReturn?: boolean,
    clickReturn?: () => void,
}

export default class Header extends React.Component <HeaderProps, {}> {
  render() {
    return (
      <AppBar>
        <div className="app_bar_content">
          <div className="left_section">
            {this.props.showReturn ? <div id="backButton" className="back_arrow" onClick={() => this.props.clickReturn ? this.props.clickReturn() : {}}> <ArrowBackIcon /> </div> : '' }
            <div className="title"> <h3>{this.props.title}</h3> </div>
          </div>
          <div className="settings_button"><MoreVertIcon /></div>
        </div>
      </AppBar>
    );
  }
  
}