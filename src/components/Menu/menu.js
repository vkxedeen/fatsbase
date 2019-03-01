import React from "react";
import { view } from "react-easy-state";
import * as actions from "./menu-actions";
import state from "../../state";

import "./menu-style.css";

function Menu() {
  const { inputValue, sortDirection, fryChecked, vegChecked, sort } = state;

  const buttonNames = [
    { name: "sF", label: "Saturated fats" },
    { name: "mUF", label: "Monounsaturated fats" },
    { name: "omega3", label: "Omega 3" },
    { name: "omega6", label: "Omega 6" }
  ];

  const buttons = buttonNames.map(({ name, label }) => {
    const isActive = sort === name;
    const className = isActive
      ? "btn btn-secondary active"
      : "btn btn-secondary";
    return (
      <label key={name} className={className} htmlFor={name}>
        <input
          type="radio"
          id={name}
          name="sort"
          onChange={() => actions.setSortProp(name)}
        />
        {label}
      </label>
    );
  });

  return (
    <div>
      <p>
        <b>Find:</b>
        <br />
        <input
          type="text"
          size="40"
          defaultValue={inputValue}
          onChange={event => actions.changeForm(event.target.value)}
          className="input-group"
        />
      </p>

      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          id="frying"
          checked={fryChecked}
          onChange={() => actions.toggleFrying()}
          className="custom-control-input"
        />
        <label className="custom-control-label" htmlFor="frying">
          Frying frendly
        </label>
      </div>
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          id="vegeterian"
          checked={vegChecked}
          onChange={() => actions.toggleVegetarian()}
          className="custom-control-input"
        />
        <label className="custom-control-label" htmlFor="vegeterian">
          Vegetarian
        </label>
      </div>

      <div class="filter-group btn-group">
        <div className="btn-group btn-group-toggle">{buttons}</div>
        <select
          className="select"
          value={sortDirection}
          onChange={() => actions.directionChange()}
        >
          <option value={true}>Increase</option>
          <option value={false}>Decrease</option>
        </select>
      </div>
    </div>
  );
}

export default view(Menu);
