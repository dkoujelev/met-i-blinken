import React from "react";
import { FaPlus } from "react-icons/fa";

export const AddCard: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className="resource-card add" onClick={onClick}>
      <div className="card-content">
        <h1 className="card-title">Legg til link</h1>
        <span className="card-icon">
          <FaPlus />
        </span>
      </div>
    </button>
  );
};
