import React from "react";
import "./App.scss";
import { Main, Header, Footer } from "./components";

const App: React.FC = () => {
  return (
    <div className="page-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
