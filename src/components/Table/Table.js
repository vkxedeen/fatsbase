import React from "react";
import { view } from "react-easy-state";
import * as helpers from "../../helpers";
import * as actions from "./actions";
import Diagram from "../Diagram";
import globalState from "../../state";
import state from "./state";
import * as R from "ramda";
import Menu from "../Menu";

function Table() {
  const data = globalState.data;
  const { inputValue, sortDirection, fryChecked, vegChecked, sort } = state;
  if (data) {
    const bars = R.pipe(
      R.filter(helpers.findByPattern(inputValue)),
      R.filter(helpers.makeFilterFn(fryChecked, vegChecked)),
      R.sort(helpers.makeSortFn(sortDirection, sort)),
      R.map(item => <Diagram item={item} key={helpers.idMaker(item.name)} />)
    )(data);

    return <ul className="list-group">{bars}</ul>;
  } else {
    return <div>Loading...</div>;
  }
}

export default view(Table);
