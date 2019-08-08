import React from "react";
import { Resource } from "../data";

export const ResourceCard: React.FC<Resource> = ({ title, url, icon }) => {
  return (
    <a
      href={url}
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
