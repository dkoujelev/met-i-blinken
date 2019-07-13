import React from "react";
import { Resource } from "../data";

export const ResourceCard = ({ title, link, icon, description }: Resource) => {
  return (
    <a href={link} className="resource-card">
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <span className="card-icon">{icon}</span>
      </div>
    </a>
  );
};
