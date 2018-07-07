import React, {Component} from 'react'

// wrapWithAjaxData
export default (WrappedComponent, name) => {
  class NewComponent extends Component {
    constructor () {
      super()
      this.state = { data: '' }
    }

    componentWillMount () {
      console.log('ajax');
      // ajax.get('/data/' + name, (data) => {
      //   this.setState({ data })
      // })
    }

    render () {
      console.log('ajax', 'render');
      return <WrappedComponent data={this.state.data} />
    }
  }
  return NewComponent
}