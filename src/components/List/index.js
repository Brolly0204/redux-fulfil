import React, {Component} from 'react'
import LoadData from '../../util/LoadData'
import HeaderTitle from '../../util/HeaderTitle'

class List extends Component {
  static defaultProps = {
    data: []
  }
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul>
          {
            this.props.data.map(item => (
              <li key={item.id}>{item.id}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default LoadData(HeaderTitle(List, 'Hello Title'))
