import { Button, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/products/actions";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { loading, error, data } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (loading) {
    return <h1>Fetch data...</h1>;
  }
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <Grid container>
      {data.map((item) => (
        <Grid key={"product-card-" + item.id} item xs={12} sm={4} md={4}>
          <ProductCard data={item} />
        </Grid>
      ))}
    </Grid>
  );
}
