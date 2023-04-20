import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0,
      name: "<○--♥--○>"
    }
    
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    
  }
  increment() {
    this.setState({
      count: this.state.count +1
    })
  }
  decrement() {
    this.setState({
      count: this.state.count -1
    })
  }
  reset() {
    this.setState({
      count: 0
    })
  }
  render() {
        return (
      <div>ClassComponent
        <h5>{'<=-'}{this.props.numbers.join("||")}{"-=>"}</h5>
        <h3>{this.state.name}</h3>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>++</button>
        <button onClick={this.decrement}>--</button>
        <button onClick={this.reset}>reset </button>
      </div>
    )
  }
}

ClassComponent.defaultProps = {
  numbers: [1,2,6]
}
