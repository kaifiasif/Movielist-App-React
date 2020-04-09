import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./AppbarStyle"
import Home from "@material-ui/icons/Home";
import { routePaths } from "../../constants"
import AutoComplete from "../AutoComplete"

const useStyles = styles;
export default props => {
  const classes = useStyles();
  const handleHomeRoute = () => {
    props.routes.push(routePaths.home)
  }
  return (
    <div className={classes.grow}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          
          {props.searchbar === true ? (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <AutoComplete history={props.routes}/>
            </div>
          )
          :(
            <Typography variant="h6" noWrap>
              Movie Detials
            </Typography>
          )}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton onClick={handleHomeRoute} aria-label="show 4 new mails" color="inherit">
              <Home />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton onClick={handleHomeRoute} aria-label="show 4 new mails" color="inherit">
              <Home />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
