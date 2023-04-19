import React from 'react'

export default function FunctionalComponent(props) {
  return (
    <div>FunctionalComponent
      <h2>Hello, {props.name}</h2>
    </div>
  )
}

FunctionalComponent.defaultProps = {
  name: "Not me"
}
