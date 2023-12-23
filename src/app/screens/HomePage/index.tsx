import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurants";
import { BestRestaurants } from "./bestRestaurants";
import { BestDishes } from "./bestDishes";
import { Advertisements } from "./advertisements";
import { Events } from "./events";
import "../../../css/home.css";
import { Recommendations } from "./recommendations";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopRestaurants } from "./slice";
import { retrieveTopRestaurants } from "./selector";
import { Restaurant } from "../../../types/user";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispach(setTopRestaurants(data)),
});
// REDUX SELECTOR
const topRestaurantRetriever = createSelector(
  retrieveTopRestaurants,
  (topRestaurants) => ({
    topRestaurants,
  })
);

export function HomePage() {
  //INITIALIZATION
  const { setTopRestaurants } = actionDispatch(useDispatch());
  const { topRestaurants } = useSelector(topRestaurantRetriever);
  //selector: store => data

  useEffect(() => {
    //backend data request => data

    setTopRestaurants([]);

    //slice: data => store
  }, []);
  return (
    <div className="homepage">
      <Statistics />
      <TopRestaurants />
      <BestRestaurants />
      <BestDishes />
      <Advertisements />
      <Events />
      <Recommendations />
    </div>
  );
}
