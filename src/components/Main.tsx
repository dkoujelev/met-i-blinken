import React, { useState } from "react";
import { resources } from "../data";
import { ResourceCard, AddCard, AddCardForm } from ".";
import { CustomResourceCard } from "./CustomResourceCard";

type State = {
  showModal: boolean;
};

export type Link = {
  title: string;
  url: string;
};

const initState: State = {
  showModal: false
};

const useCustomLinks = () => {
  const [customLinks, setState] = useState(
    JSON.parse(localStorage.getItem("customLinks") || "[]")
  );

  const setCustomLinks = (
    link: { title: string; url: string },
    remove: boolean = false
  ) => {
    if (remove) {
      let newCustomLinks = customLinks.filter((l: Link) => {
        return l.title !== link.title || l.url !== link.url;
      });
      setState(newCustomLinks);
      localStorage.setItem("customLinks", JSON.stringify(newCustomLinks));
    } else {
      setState([...customLinks, link]);
      localStorage.setItem(
        "customLinks",
        JSON.stringify([...customLinks, link])
      );
    }
  };

  return [customLinks, setCustomLinks];
};

export const Main = () => {
  const [state, setState] = useState(initState);
  const [customLinks, setCustomLinks] = useCustomLinks();

  const toggleModal = (open: boolean) => {
    setState({ ...state, showModal: open });
  };

  const addCustomLink = (title: string, url: string) => {
    setCustomLinks({ title: title, url: url });
  };

  const removeCustomLink = (title: string, url: string) => {
    setCustomLinks({ title: title, url: url }, true);
  };

  return (
    <main className="main">
      {resources.map((resource, i) => {
        return <ResourceCard key={i} {...resource} />;
      })}
      {customLinks.map((link: Link, i: number) => {
        return (
          <CustomResourceCard
            key={i}
            title={link.title}
            url={link.url}
            remove={() => removeCustomLink(link.title, link.url)}
          />
        );
      })}
      <AddCard onClick={() => toggleModal(true)} />
      <AddCardForm
        display={state.showModal}
        close={() => toggleModal(false)}
        add={addCustomLink}
      />
    </main>
  );
};
