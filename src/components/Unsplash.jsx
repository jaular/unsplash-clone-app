import React, { useState } from "react";
import { useFetchImages } from "../hooks/useFetchImages";

import Grid from "./common/Grid";
import Hero from "./common/Hero";
import Pagination from "./common/Pagination";
import Message from "./common/Message";

const API_KEY = process.env.REACT_APP_API_KEY;

const Unsplash = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  let url;
  if (!query) {
    url = `https://api.unsplash.com/photos?page=${page}&per_page=12&client_id=${API_KEY}`;
  } else {
    url = `https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${encodeURI(
      query
    )}&client_id=${API_KEY}`;
  }

  const { data: images, loading, totalPages } = useFetchImages(url);

  const displayResult = loading ? (
    <Message text="Loading..." />
  ) : images.length > 0 ? (
    <Grid data={images} />
  ) : (
    <Message text="Not found :(" />
  );

  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  };

  const getLabel = (query) => {
    return query ? capitalize(query.toString()) : "Latest photos";
  };

  return (
    <>
      <Hero setQuery={setQuery} setPage={setPage} />
      <div className="container max-width-adaptive-lg margin-y-md">
        <h4 className="margin-y-md color-contrast-high">{getLabel(query)}</h4>
        {displayResult}
      </div>
      {totalPages > 0 && (
        <Pagination page={page} setPage={setPage} totalPage={totalPages} />
      )}
    </>
  );
};

export default Unsplash;
