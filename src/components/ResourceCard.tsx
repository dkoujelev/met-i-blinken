import React from "react";
import { Resource } from "../data";

export const ResourceCard = ({ title, link, icon }: Resource) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="resource-card"
    >
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <span className="card-icon">{icon}</span>
      </div>
    </a>
  );
};
