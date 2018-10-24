import React from "react";
import { addChart, checkCookingPossibility } from "../helpers";
import { Link } from "react-router-dom";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      inputValue: undefined,
      formValue: false,
      radio: null,
      fryCheck: false,
      vegCheck: false
    };
    this.nodes = [];
  }

  componentDidUpdate() {
    let bars = this.makeList();
    for (let i = 0; i < bars.length; i++) {
      addChart(this.nodes[i], bars[i]);
    }
  }

  componentDidMount() {
    for (let i = 0; i < this.state.data.length; i++) {
      addChart(this.nodes[i], this.state.data[i]);
    }
  }

  sortByProp(str) {
    debugger;
    if (!str) return;
    if (this.state.formValue)
      this.setState(prevState => ({ data: prevState.data.sort(compare) }));
    else
      this.setState(prevState => ({
        data: prevState.data.sort(compare).reverse()
      }));

    function compare(a, b) {
      return a[str] - b[str];
    }
    this.setState({ radio: str });
  }

  makeList() {
    function fltrByName(data) {
      return data.filter(item => item.isSelect === true);
    }

    function fltrCook(data) {
      return data.filter(item => checkCookingPossibility(item) === true);
    }

    function fltrVeg(data) {
      return data.filter(item => item.isVegeterian === true);
    }

    if (this.state.data) {
      if (this.state.fryCheck && this.state.vegCheck) {
        return fltrByName(fltrCook(fltrVeg(this.state.data)));
      } else if (this.state.fryCheck) {
        return fltrByName(fltrCook(this.state.data));
      } else if (this.state.vegCheck) {
        return fltrByName(fltrVeg(this.state.data));
      } else {
        return fltrByName(this.state.data);
      }
    }
  }

  directionChange() {
    this.setState(
      { formValue: !this.state.formValue },
      this.sortByProp(this.state.radio)
    );
  }

  checkFrying() {
    this.setState({ fryCheck: !this.state.fryCheck });
  }

  checkVeg() {
    this.setState({ vegCheck: !this.state.vegCheck });
  }

  render() {
    let bars = this.makeList();
    if (bars) {
      bars = bars.map((item, i) => (
        <div key={i}>
          <Link to={`/${item.name}`}>{item.name}</Link>
          <div id={i} ref={node => (this.nodes[i] = node)} />
        </div>
      ));
      return (
        <div id="container" style={{ width: 500 + "px" }}>
          <p>
            <b>Find:</b>
            <br />
            <input
              type="text"
              size="40"
              value={this.state.inputValue}
              onChange={event => this.props.findByPattern(event)}
            />
          </p>
          <p>
            {" "}
            Упорядочить по{" "}
            <select
              value={this.state.formValue}
              onChange={() => this.directionChange()}
            >
              <option value={true}>Возрастанию</option>
              <option value={false}>Убыванию</option>
            </select>
            <input
              type="checkbox"
              id="frying"
              checked={this.state.fryCheck}
              onChange={() => this.checkFrying()}
            />
            <label htmlFor="frying">Frying frendly</label>
            <input
              type="checkbox"
              id="vegeterian"
              checked={this.state.vegCheck}
              onChange={() => this.checkVeg()}
            />
            <label htmlFor="vegeterian">Vegeterian</label>
            <br />
          </p>

          <p>
            <input
              type="radio"
              id="sf"
              name="sort"
              value="sF"
              onChange={() => this.sortByProp("sF")}
            />
            <label htmlFor="sF">Saturated fats</label>
            <input
              type="radio"
              id="mUF"
              name="sort"
              value="mUF"
              onChange={() => this.sortByProp("mUF")}
            />
            <label htmlFor="mUF">Monounsaturated fats</label>
            <input
              type="radio"
              id="om3"
              name="sort"
              value="om3"
              onChange={() => this.sortByProp("omega3")}
            />
            <label htmlFor="om3">Omega 3</label>
            <input
              type="radio"
              id="om6"
              name="sort"
              value="om6"
              onChange={() => this.sortByProp("omega6")}
            />
            <label htmlFor="om6">Omega 6</label>
          </p>
          {bars}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default Wrapper;
