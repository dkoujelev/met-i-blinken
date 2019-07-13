import React from "react";
import { resources } from "../data";
import { ResourceCard } from ".";

export const Main = () => {
  return (
    <main className="main">
      {resources.map(resource => {
        return <ResourceCard {...resource} />;
      })}
    </main>
  );
};
