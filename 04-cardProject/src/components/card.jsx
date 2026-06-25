import React from "react";
import "./card.css";
import { Bookmark } from "lucide-react";

const Card = ({ data }) => {
  // Destructuring the props passed from App.jsx
  const { company, logo, postedTime, role, tags, salary, location } = data;

  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src={logo}
            alt={`${company} logo`}
          />

          <button>
            Save <Bookmark size={14} />
          </button>
        </div>

        <div className="center">
          <h3>
            {company} <span>{postedTime}</span>
          </h3>

          <h2>{role}</h2>

          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="divider"></div>

        <div className="footer">
          <div>
            <h3>{salary}</h3>
            <p>{location}</p>
          </div>

          <button className="apply-btn">Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;