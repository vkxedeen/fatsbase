import React from "react";

import "./spinner-style.css";

const Spinner = () => {
  return (
    <div className="lds-css ng-scope spinner">
      <div className="lds-spin">
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
