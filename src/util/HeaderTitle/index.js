import React, {Component} from 'react'

export default function (WrappedComponent, title) {
  class NewWrappedComponent extends Component {
    render() {
      console.log('title');
      return <WrappedComponent title={title} data={this.props.data}/>
    }
  }
  return NewWrappedComponent
}

