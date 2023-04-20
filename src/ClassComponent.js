import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: "Alex"
    }

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: "Hiiiiiiiiiiiiiiiiiiiiiii"
    })
  }
  render() {
        return (
      <div>ClassComponent
        <h2>{this.state.name}</h2>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

ClassComponent.defaultProps = {
  numbers: [1,2,6]
}
