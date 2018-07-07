import React, {Component} from 'react'

// wrapWithLoadData
export default (WrappedComponent, name) => {
  class NewComponent extends Component {
    constructor () {
      super()
      this.state = { data: null }
    }

    componentWillMount () {
      console.log('load');
      let data = localStorage.getItem(name)
      this.setState({ data })
    }

    render () {
      console.log('load', 'render');
      return <WrappedComponent data={this.state.data} />
    }
  }
  return NewComponent
}