import React, { useState, useEffect } from "react";

const Pagination = ({ page, setPage, totalPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const handleIncrement = () => {
    setPage(page + 1);
  };

  const handleDecrement = () => {
    setPage(page - 1);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setCurrentPage(value);
  };

  const handleKeyPress = (e) => {
    const value = e.target.value;
    if (value > 0 && value <= totalPage) {
      if (e.key === "Enter") {
        const currentPageToNumber = parseInt(currentPage);
        setPage(currentPageToNumber);
      }
    }
  };

  return (
    <nav className="pagination" aria-label="Pagination">
      <ul className="pagination__list flex flex-wrap gap-xxxs justify-center">
        <li>
          <button
            className={
              page > 1
                ? "btn pagination__item"
                : "btn pagination__item pagination__item--disabled"
            }
            onClick={handleDecrement}
          >
            <svg className="icon" viewBox="0 0 16 16">
              <title>Go to previous page</title>
              <g strokeWidth="1" stroke="currentColor">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="9.5,3.5 5,8 9.5,12.5 "
                ></polyline>
              </g>
            </svg>
          </button>
        </li>

        <li>
          <span className="pagination__jumper flex items-center margin-x-xs">
            <input
              aria-label="Page number"
              className="form-control"
              type="text"
              id="pageNumber"
              name="pageNumber"
              autoComplete="off"
              value={currentPage}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
            <em>of {totalPage}</em>
          </span>
        </li>

        <li>
          <button
            className={
              page < totalPage
                ? "btn pagination__item"
                : "btn pagination__item pagination__item--disabled"
            }
            onClick={handleIncrement}
          >
            <svg className="icon" viewBox="0 0 16 16">
              <title>Go to next page</title>
              <g strokeWidth="1" stroke="currentColor">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="6.5,3.5 11,8 6.5,12.5 "
                ></polyline>
              </g>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
