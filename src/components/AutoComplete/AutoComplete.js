/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { isArray } from "lodash";
import { routePaths } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { GET_SEARCH_SUGGESTIONS,CLEAR_SEARCH, GET_MOVIE_DETAILS } from "../../stores/moviesReducer";

export default props => {
  const searchData = useSelector(state => state.moviesReducer.searchSuggestions)
  const dispatch = useDispatch()

  const handleSearch = event => {
    let val = event.target.value;
    if (val.length === 0 ) dispatch({type: CLEAR_SEARCH })
    
    if (val.length){
    dispatch({type: GET_SEARCH_SUGGESTIONS, payload: val})
    }
  };
 
  const handleChangeInIP =(v) => {
    dispatch({type: GET_MOVIE_DETAILS, payload: v.id})
    props.history.push(routePaths.details + "/" + v.id);
  }

  return (
    <React.Fragment>
      <Autocomplete
        size="small"
        className="teftFieldIP"
        id="Search"
        options={isArray(searchData) && searchData}
        onChange={(e,v) => handleChangeInIP(v)}
        getOptionLabel={option => option.title}
        renderOption={option =>  option.title }
        freeSolo
        renderInput={params => (
          <TextField
            {...params}
            placeholder="Search "
            variant="outlined"
            onChange={handleSearch}
          />
        )}
      />
    </React.Fragment>
  );
};
