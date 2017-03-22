import React, { Component } from 'react'
import { render } from 'react-dom'

export class GroceryList extends Component {
  constructor (props){
    super (props)  
    console.log(this.props)
  }
  render() {
    return (
      <div>
        {this.props.items.map((item, i) => {
          return (
            <div onClick={this.handleClick.bind(this, i)} key={i}>{item}</div>
          );
        })}
      </div>
    );
  }  
}

render(
  <GroceryList items={['Apple', 'Banana', 'Cranberry']} />, mountNode
);