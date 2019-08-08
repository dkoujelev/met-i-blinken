import React from "react";
import { Link } from ".";
import { FaStar } from "react-icons/fa";

type Props = Link & {
  remove: () => void;
};

export const CustomResourceCard: React.FC<Props> = ({ title, url, remove }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="resource-card"
    >
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <span className="card-icon">
          <FaStar />
        </span>
        <button
          className="remove-card"
          onClick={e => {
            e.stopPropagation();
            e.preventDefault();
            remove();
          }}
        >
          x
        </button>
      </div>
    </a>
  );
};
