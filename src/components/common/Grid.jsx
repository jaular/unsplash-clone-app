import React from "react";
import Card from "./Card";

const Grid = ({ data }) => {
  return (
    <ul className="grid-auto-md gap-md">
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default Grid;