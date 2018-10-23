import React from "react";
import { addChart } from "./addChart";
import { Link } from "react-router-dom";

class Diagram extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      inputValue: null,
      formValue: false,
      radio: null       
    };
    this.nodes = [];
  }
  
  componentDidUpdate() {
    let bars = this.state.data.filter(item => item.isSelect == true) // повтор из рендера, не хорошо
    for (let i = 0; i < bars.length; i++) {
      addChart(this.nodes[i], bars[i]); 
    }
  }
 
  componentDidMount() {
    for (let i = 0; i < this.state.data.length; i++) {
      addChart(this.nodes[i], this.state.data[i]);
    }
  }

  sortByProp(str){
    if(!str) return
    let sorted = []
    if (this.state.formValue) this.state.data.sort(compare) //data тоже сортируется
    else this.state.data.sort(compare).reverse()
    
    function compare(a, b) {
      return a[str] - b[str]
    }
    
    this.setState({ 
      data: sorted,
      radio: str
     })
  }

  directionChange(event){
    console.log (this.state.formValue)
    let newDirection = event.target.value
    this.setState({formValue: newDirection} )
    console.log (this.state.formValue)
    this.sortByProp(this.state.radio) 
   // this.sortByProp(this.state.radio)
    
  }

  render() {
    if (this.state.data) {
      let bars = this.state.data
        .filter(item => item.isSelect == true)
        .map((item, i) => (
          <div key={i}>  
            <Link to={`/${item.name}`}>{item.name}</Link>
            <div id={i}  ref={node => this.nodes[i] = node} />
          </div> 
        ))
        
      return (
        <div id="container" style={{ width: 500 + "px"}} >
          <p><b>Find:</b><br/>
            <input type="text" size="40" value={this.state.inputValue} onChange={(event) => this.props.findByPattern(event)}/>
          <p>  Упорядочить по <select value={this.state.formValue} onChange={(event) => this.directionChange(event)}>
                             <option value={true}>Возрастанию</option>
                             <option value={false}>Убыванию</option>
                           </select><br/></p>
          <input type="radio" id="sf" name="sort" value="sF" onChange={() => this.sortByProp("sF")}></input>
          <label for="sF">Saturated fats</label>
          <input type="radio" id="mUF" name="sort" value="mUF" onChange={() => this.sortByProp("mUF")}></input>
          <label for="mUF">Monounsaturated fats</label>
          <input type="radio" id="om3" name="sort" value="om3" onChange={() => this.sortByProp("omega3")}></input>
          <label for="om3">Omega 3</label>
          <input type="radio" id="om6" name="sort" value="om6" onChange={() => this.sortByProp("omega6")}></input>  
          <label for="om6">Omega 6</label>
          </p>
          {bars}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Diagram;
