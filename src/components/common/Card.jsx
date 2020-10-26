import React from "react";

const Card = ({ data }) => {
  return (
    <li>
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        <figure className="media-wrapper media-wrapper--4:3">
          <img
            className="block width-100% radius-md"
            src={data.url}
            alt={data.alt}
          />
        </figure>
      </a>
    </li>
  );
};

export default Card;
