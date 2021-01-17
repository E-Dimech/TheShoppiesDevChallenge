import React from "react";
import "./searchResults.scss";

function SearchResults(props) {
  return (
    <>
      <div className="results" key={props.imdbID}>
        <ul>
          <li className="results__movie-list">
            <div>
              <span className="results__movie-title">{props.title}</span>
              <span>{"   "}</span>
              <span className="results__movie-year"> {props.year} </span>
            </div>
            <button
              disabled={!props}
              className="results__nom-btn"
              onClick={() => props.onClick(props)}
            >
              <i className="results__nom-icon fas fa-award"></i>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SearchResults;
