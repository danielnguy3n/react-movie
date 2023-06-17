import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function PageBtns({page, setPage, lastPage}) {
  function handleChange(event) {
    event.preventDefault();
    let page = +event.target.value;
    if (page < 0 || (page === 0 && typeof page == "number")) {
      alert(`Enter a number above 0`);
    } else if (page > lastPage) {
      alert(`Enter a number below ${lastPage}`);
    } else {
      setPage(+event.target.value);
    }
  }

  return (
    <div className="page__btns">
      {page === 1 ? (
        <FontAwesomeIcon icon="chevron-left" className="grey__btn" />
      ) : (
        <FontAwesomeIcon
          icon="chevron-left"
          className="page__btn back"
          onClick={() => setPage((page -= 1))}
        />
      )}

      <h3 className="page__num">
        {" "}
        <span className="colour-text">
          <input
            type="number"
            className="choose__page"
            value={page}
            onClick={(event) => event.target.select()}
            onChange={(event) => handleChange(event)}
            onKeyDown={(event) => event.key === "Enter" && event.target.blur()}
          />
        </span>{" "}
        / {lastPage}
      </h3>
      <FontAwesomeIcon
        icon="chevron-right"
        className="page__btn forward"
        onClick={() => setPage((page = page + 1))}
      />
    </div>
  );
}
