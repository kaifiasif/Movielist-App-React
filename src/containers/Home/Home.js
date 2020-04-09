import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux"

import useStyles from "./homeStyle";
import LatestMovies from "../../components/LatestMovies"
import Infy from "../InfinteScroll"

export default props => {
  const classes = useStyles();
  const moviesData = useSelector( state => state.moviesReducer.popularMovies)
  const upcoming = useSelector( state => state.moviesReducer.upcomingMovies)

  return (
    <div>
    <Grid direction={"row"} container>
      <Grid item xs={12} className={classes.movieContainer}>
        <LatestMovies upcoming={upcoming} history={props.history}/>
      </Grid>
      <Grid item xs={12} className={classes.movieContainer}>
        <Infy moviesData={moviesData}  history={props.history}/>
      </Grid>
    </Grid>
  </div>
  );
};
