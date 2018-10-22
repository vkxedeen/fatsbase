import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Diagram from "./Diagram";
import ElemInfo from "./ElemInfo";
import NotFound from "./NotFound";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      markedData: null
    }
  }

  componentDidMount() {
    let self = this;
    fetch("./data.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        self.setState({ data: result.map(item => {
          item.isSelect = true
          return item 
        } )});
      })
      .catch(error => console.log(error.message));
  }

  findByPattern = (event) => {
    if (event.target.value && event.keyCode === 13) {
      let regex = new RegExp(event.target.value)
      let filtered = this.state.data.map (item => {
        if(regex.test(item.name) == true ) {
          item.isSelect = true;
        } else {
          item.isSelect = false;
        }
      return item
      })
      this.setState({ data: filtered})
    }
  }

  render() {
    if (this.state.data) {
      return (
        <div>
          <BrowserRouter >
            <div>
              <Switch>
                <Route path="/" exact render={props => <Diagram {...props} data={this.state.data} findByPattern={this.findByPattern}/>}/>  
                <Route path="/:name" render={props => <ElemInfo {...props} data={this.state.data}/>}/>
                <Route path="*" component={NotFound}/>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}

export default App;