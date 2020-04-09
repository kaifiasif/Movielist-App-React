import React, { useState, useEffect } from "react";
import Appbar from "../../components/Appbar";
import { routePaths } from "../../constants";

export default props => {
  const current_path = props.history.location.pathname;
  const [searchbar, setSearchbar] = useState(false);
  const [deatils, setDeatils] = useState(false);

  useEffect(() => {
    if (
      current_path === routePaths.defult ||
      current_path === routePaths.home
    ) {
      setSearchbar(true);
      setDeatils(false);
    } else {
      setDeatils(true);
      setSearchbar(false);
    }
  }, [current_path]);
  return <Appbar searchbar={searchbar} deatils={deatils} routes={props.history}/>;
};
