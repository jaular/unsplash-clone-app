import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchInput = ({ setQuery, setPage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      const category = inputValue;

      setQuery(() => [category]);
      setPage(1);
    }
  };

  return (
    <div className="container max-width-adaptive-sm margin-y-lg">
      <form onSubmit={handleSubmit}>
        <div className="search-input search-input--icon-right">
          <input
            className="search-input__input form-control"
            type="search"
            name="search-input"
            id="search-input"
            placeholder="Search..."
            aria-label="Search"
            autoComplete="off"
            value={inputValue}
            onChange={handleChange}
          />
          <button className="search-input__btn">
            <svg className="icon" viewBox="0 0 24 24">
              <title>Submit</title>
              <g
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeMiterlimit="10"
              >
                <line x1="22" y1="22" x2="15.656" y2="15.656"></line>
                <circle cx="10" cy="10" r="8"></circle>
              </g>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;

SearchInput.propTypes = {
  setQuery: PropTypes.func.isRequired,
  setPage: PropTypes.func,
};
