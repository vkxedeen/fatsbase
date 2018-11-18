import React from "react";

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: Boolean(props.on)
    };
  }

  toggle = () => {
    debugger;
    this.setState(state => ({ on: !state.on }));
  };

  render() {
    debugger;
    let { children } = this.props;
    return children({
      on: this.state.on,
      toggle: this.toggle
    });
  }
}
