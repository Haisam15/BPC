import React, { useState } from "react";
import "./Tabs.css";

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  return (

    
    <div className="container">
        <h1>Want to learn more?</h1>
      <div className="tab-list">
        <div
          className={`tab ${getActiveClass(1, "active-tabs")}`}
          onClick={() => toggleTab(1)}
        >
          Investor
        </div>
        <div
          className={`tab ${getActiveClass(2, "active-tabs")}`}
          onClick={() => toggleTab(2)}
        >
          Entrepreuner
        </div>
        <div
          className={`tab ${getActiveClass(3, "active-tabs")}`}
          onClick={() => toggleTab(3)}
        >
          Skiled persom
        </div>
      </div>
      <div className="content-container">
        <div className={`content ${getActiveClass(1, "active-content")}`}>
          <h2>Lorem</h2>
          <p>
            jnvjkbf;jnfbln
            dvakjnaljnklabvkjbvjbvda
            akjvbljkbkljbjkabljkbjdbvlibvdjkbauvd
          </p>
        </div>
        <div className={`content ${getActiveClass(2, "active-content")}`}>
          <h2>Ipsum</h2>
          <p>
            jnvjkbf;jnfbln
            dvakjnaljnklabvkjbvjbvda
            akjvbljkbkljbjkabljkbjdbvlibvdjkbauvd
          </p>
        </div>
        <div className={`content ${getActiveClass(3, "active-content")}`}>
          <h2>Dolor</h2>
          <p>
            jnvjkbf;jnfbln
            dvakjnaljnklabvkjbvjbvda
            akjvbljkbkljbjkabljkbjdbvlibvdjkbauvd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab;
