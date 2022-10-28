import React from "react";
import { Link } from "react-router-dom";

const Table = ({ data }) => {
  data.map((el) => {
    if (el.gender) {
      if (el.gender.toLowerCase() == "male") {
        el.gender = "♂";
      }
      if (el.gender.toLowerCase() == "female") {
        el.gender = "♀";
      }
    }
  });
  return (
    <ul>
      <div className="contact-section">
        {data.map((el, i) => (
          <li key={i}>
            <Link to={`/users/${el.id}`} className="link">
              <p>{el.firstName}</p>
            </Link>
            <hr></hr>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Table;
