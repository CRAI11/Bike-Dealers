import "./SelectBike.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getBrands, getAllBikes } from "./../../bikeSlice"; // selectores

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
  const [models, setModels] = useState({});
  const [selectedBikes, setSelectedBikes] = useState(allBikes);
  const [displayBike, setDisplayBike] = useState([]);

  // Brands with models
  useEffect(() => {
    let obj = {};
    brands.map((brandName, index) => {
      // console.log(brandName);
      return (obj[brandName] = allBikes.filter(
        (bike) => bike.brand === brandName
      ));
    });
    console.log("Boject:", obj);
    setModels(obj);
  }, [brands]);

  return (
    <>
      <Grid container justifyContent="space-between" item xs={12}>
        <Pagination
          brandState={brandState}
          modelState={modelState}
          selectedBikes={selectedBikes}
          setDisplayBike={setDisplayBike}
        />
      </Grid>

      <Grid container item spacing={4} xs={12}>
        <Grid container item xs={2} spacing={2}>
          <Dropdown
            initialBikeValue={initialBikeValue}
            brands={brands}
            allBikes={allBikes}
            brandState={brandState}
            modelState={modelState}
            setBrand={setBrand}
            setModel={setModel}
            models={models}
            setSelectedBikes={setSelectedBikes}
          />
        </Grid>

        <Grid item xs={10}>
          <Bikes displayBike={displayBike} />
        </Grid>
      </Grid>
    </>
  );
}
