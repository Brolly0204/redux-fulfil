import React, {Component} from 'react'

export default function (WrappedComponent, name) {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = {data: []}
    }
    componentWillMount() {
      this.setState({data: [
        {id: 1},
        {id: 2},
        {id: 3},
      ]})
    }
    render() {
      console.log('LoadData');
      return <WrappedComponent data={this.state.data}/>
    }
  }
  return NewComponent
}
