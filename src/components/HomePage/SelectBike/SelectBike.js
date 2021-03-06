import "./SelectBike.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getBrands, getAllBikes } from "./../../bikeSlice"; // Selectors

// Material Components
import { Grid } from "@material-ui/core";

// Components
import Pagination from "./sub-components/Pagination";
import Dropdown from "./sub-components/Dropdown";
import Bikes from "./sub-components/Bikes";

export default function SelectBike() {
  const initialBikeValue = "All";

  const brands = useSelector(getBrands);
  const allBikes = useSelector(getAllBikes);

  useEffect(() => {
    console.log("All Brands:", brands);
    console.log("All Bikes Data:", allBikes);
  }, [brands, allBikes]);

  // States
  const [brandState, setBrand] = useState(initialBikeValue);
  const [modelState, setModel] = useState(initialBikeValue);
  const [selectedBikes, setSelectedBikes] = useState(allBikes);
  const [displayBike, setDisplayBike] = useState([]);

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        item
        xs={12}
        lg={10}
        xl={8}
        style={{ marginBottom: "1.5rem" }}
      >
        <Pagination
          brandState={brandState}
          modelState={modelState}
          selectedBikes={selectedBikes}
          setDisplayBike={setDisplayBike}
        />
      </Grid>

      <Grid
        container
        item
        xs={12}
        lg={10}
        xl={8}
        justifyContent="space-between"
      >
        <Grid container item xs={12} md={2}>
          <Dropdown
            initialBikeValue={initialBikeValue}
            brands={brands}
            allBikes={allBikes}
            brandState={brandState}
            modelState={modelState}
            setBrand={setBrand}
            setModel={setModel}
            setSelectedBikes={setSelectedBikes}
          />
        </Grid>

        <Grid
          container
          item
          xs={12}
          md={9}
          // justifyContent="center"
          style={{ backgroundColor: "#E7E7E7" }}
          // spacing={2}
        >
          <Bikes displayBike={displayBike} />
        </Grid>
      </Grid>
    </>
  );
}
