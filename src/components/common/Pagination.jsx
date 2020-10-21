import React from "react";

const Pagination = ({ page, setPage, totalPage }) => {
  const handleIncrement = () => {
    setPage(page + 1);
  };

  const handleDecrement = () => {
    setPage(page - 1);
  };

  return (
    <nav className="pagination " aria-label="Pagination">
      <ol className="pagination__list flex flex-wrap gap-xxxs justify-center">
        <li>
          <button
            className={
              page > 1
                ? "btn pagination__item"
                : "btn pagination__item pagination__item--disabled"
            }
            aria-label="Go to previous page"
            onClick={handleDecrement}
          >
            <svg
              className="icon margin-right-xxxs"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <title>Previous</title>
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
            <span>Prev</span>
          </button>
        </li>

        <li aria-hidden="true">
          <span className="pagination__item pagination__item--ellipsis">
            {page} of {totalPage}
          </span>
        </li>

        <li>
          <button
            className={
              page < totalPage
                ? "btn pagination__item"
                : "btn pagination__item pagination__item--disabled"
            }
            aria-label="Go to next page"
            onClick={handleIncrement}
          >
            <span>Next</span>
            <svg
              className="icon margin-left-xxxs"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <title>Next</title>
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
      </ol>
    </nav>
  );
};

export default Pagination;
