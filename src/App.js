import React from "react"
import Diagram from "./Diagram"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    let self = this;
    fetch("/data.json")
      .then(function(response) {
        return response.json()
      })
      .then(function(result) {
        self.setState({ data: result })
      });
  }

  render() {
    if (this.state.data) {
      return (
        <div>
          <Diagram data={this.state.data} />
        </div>
      );
    } else return null
  }
}

export default App
