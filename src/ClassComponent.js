import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render() {
    return (
      <div>ClassComponent
        <h2>{this.props.numbers.join(" ")}</h2>
      </div>
    )
  }
}

ClassComponent.defaultProps = {
  numbers: [1,2,6]
}
