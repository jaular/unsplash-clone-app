import React from "react";
import Card from "./Card";

const Grid = React.memo(({ data }) => {
  return (
    <ul className="grid-auto-sm gap-md">
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </ul>
  );
});

export default Grid;
