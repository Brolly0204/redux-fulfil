import React, {Component} from 'react'

export default class Button extends Component {
  handleClick = async () => {
    alert('didi')
  }
  render() {
    return (
      <div>
         <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
}
