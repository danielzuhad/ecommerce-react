import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { API } from "../api";
import { getProducts } from "../features/ProductSlicer";
import { Slider } from "./Slider";

export default function Product() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(API).then(({ data }) => {
      dispatch(getProducts(data));
      console.log(data);
    });
  }, [dispatch]);

  return (
    <div>
      <Slider />
      <h1>product</h1>
    </div>
  );
}
