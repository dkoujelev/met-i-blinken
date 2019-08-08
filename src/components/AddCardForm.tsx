import React, { useState } from "react";

const initState = {
  title: "",
  url: ""
};

type Props = {
  display: boolean;
  close: () => void;
  add: (title: string, url: string) => void;
};

export const AddCardForm: React.FC<Props> = ({ display, close, add }) => {
  const [state, setState] = useState(initState);
  const { title, url } = state;

  const closeForm = () => {
    setState(initState);
    close();
  };

  const addLink = () => {
    let tmpUrl = url;
    let regex = /^http:\/\/|^https:\/\//;
    if (
      !regex.test(tmpUrl)
      //   tmpUrl.substring(0, 6) !== "http://" ||
      //   tmpUrl.substring(0, 7) !== "https://"
    ) {
      tmpUrl = "https://" + url;
    }
    add(title, tmpUrl);
    closeForm();
  };

  return (
    <div
      className={`add-card-modal ${display ? "" : "hidden"}`}
      onClick={closeForm}
    >
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-head">
          <h1 className="modal-title">Legg til link</h1>
        </div>

        <div className="modal-body">
          <input
            type="text"
            className="modal-text-input"
            placeholder="Titel på link"
            value={title}
            onChange={e => setState({ ...state, title: e.target.value })}
          />

          <input
            type="text"
            className="modal-text-input"
            placeholder="URL"
            value={url}
            onChange={e => {
              setState({ ...state, url: e.target.value });
            }}
          />
        </div>

        <div className="modal-foot">
          <button className="modal-confirm" onClick={addLink}>
            Legg til
          </button>
          <button className="modal-cancel" onClick={closeForm}>
            Avbryt
          </button>
        </div>
      </div>
    </div>
  );
};
