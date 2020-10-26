import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchImages = (url) => {
  const [state, setState] = useState({
    data: [],
    totalPages: 0,
    loading: true,
  });

  useEffect(() => {
    getData(url);
    return () => {
      setState({ loading: true });
    };
  }, [url]);

  const getData = async (url) => {
    try {
      const response = await axios.get(url);

      if (response.status === 200 && response.data.results) {
        const { total_pages, results } = response.data;

        const imgs = results.map((img) => ({
          id: img.id,
          url: img.urls.small,
          link: img.links.html,
          alt: img.alt_description,
        }));

        setState({ data: imgs, totalPages: total_pages, loading: false });
      } else if (response.status === 200 && response.data) {
        const { data } = response;

        const imgs = data.map((img) => ({
          id: img.id,
          url: img.urls.small,
          link: img.links.html,
          alt: img.alt_description,
        }));

        setState({ data: imgs, totalPages: 10, loading: false });
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 404) console.log("Not found");
      else {
        console.log("An unexpected error ocurred");
        console.log("Logging the error:", ex);
      }
      setState({});
    }
  };

  return state;
};
