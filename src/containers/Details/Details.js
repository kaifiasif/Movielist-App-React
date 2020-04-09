import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./DetailsStyle";
import { imageBaseURL } from "../../constants";

export default props => {
  const classes = useStyles();
  const movieDetails = useSelector( state => state.moviesReducer.movieDetail)
  
  const getReleaseyear = date => {
    if (date !== undefined) {
      let dt = new Date(date);
      return dt.getFullYear();
    } else {
      return;
    }
  };

  return (
    movieDetails !== null && (
      <Grid container className={classes.detailsContainer}>
        <Grid item xs={12} sm={4} md={2}>
          <img
            src={`${imageBaseURL}${movieDetails.poster_path}`}
            alt=""
            className={classes.detailsPoster}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={10} className={classes.movieInfo}>
          <Grid container direction={"column"} spacing={1}>
            <Grid item xs={12}>
              <Grid container spacing={2} alignItems={"flex-end"}>
                <Grid item>
                  <Typography variant="h5"> {movieDetails.title}</Typography>
                </Grid>
                <Grid item>
                <Rating
                size={"small"}
                name="read-only"
                value={movieDetails.vote_average/2}
                readOnly
              />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography component="span">
                {" "}
                {getReleaseyear(movieDetails.release_date)}
              </Typography>
              <Typography component="span">
                {" "}
                {movieDetails.runtime && "| " } {movieDetails.runtime}
              </Typography>
              <Typography component="span"> {movieDetails.tagline && "| "} {movieDetails.tagline}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{movieDetails.overview}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  );
};
