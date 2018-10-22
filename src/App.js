import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Diagram from "./Diagram";
import ElemInfo from "./ElemInfo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    newData: null}
  }

  componentDidMount() {
    debugger
    let self = this;
    fetch("./data.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        self.setState({ data: result });
      })
      .catch(error => console.log(error.message));
  }

  findByPattern = (event) => {
    let obj = this.state.data.slice()
    if (event.target.value && event.keyCode === 13) {

      let regex = new RegExp(event.target.value)
      debugger
      let filtered = obj.filter(item =>  regex.test(item.name) == true )
      this.setState({newData: filtered
        })
      console.log(this.state.newData)  

    }
  }

  render() {
    if (this.state.data) {
      return (
        <div>
        <p><b>Find:</b><br/>
        <input type="text" size="40" value={this.state.inputValue} onKeyUp={(event) => this.findByPattern(event)}/>
       </p>
        <HashRouter basename="/fatsbase">
          <div>
            <Switch>
              <Route path="/:name" component={ElemInfo} />
              <Diagram data={this.state.data} newData={this.state.newData}/>
            </Switch>
          </div>
        </HashRouter>
        </div>
      );
    } else return null;
  }
}

export default App;