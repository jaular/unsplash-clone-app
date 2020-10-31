import React from "react";
import SearchInput from "./SearchInput";

const Hero = React.memo(({ setQuery, setPage, url, label, paragraph }) => {
  return (
    <section
      className="hero hero--overlay-layer position-relative padding-y-xxl"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className="container max-width-adaptive-sm">
        <div className="position-relative z-index-2 text-center">
          <div className="text-component margin-bottom-sm">
            <h1>{label}</h1>
            <p>{paragraph}</p>
            <SearchInput setQuery={setQuery} setPage={setPage} />
          </div>
        </div>
      </div>
    </section>
  );
});

// defaultProps
Hero.defaultProps = {
  // url: `https://source.unsplash.com/random/800x400`,
  url: `https://picsum.photos/1000/600`,
  label: "Unsplash",
  paragraph: "Beautiful Free Images & Pictures",
};

export default Hero;
