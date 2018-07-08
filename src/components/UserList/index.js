import React, {Component} from 'react';
import { connect } from 'react-redux';
import User from '../User'
import * as Types from '../../redux/action-types';

class UsersList extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      age: '',
      gender: 'male'
    }
  }
  handleUser = () => {
    this.props.addUser({...this.state})
  }
  render () {
    return (
      <div>
        {/* 输入用户信息，点击“新增”按钮可以增加用户 */}
        <div className='add-user'>
          <div>
            Username:
            <input
              type='text'
              value={this.state.username}
              onChange={e => this.setState({username: e.target.value})}
            /></div>
          <div>
            Age:
            <input
              type='number'
              value={this.state.age}
              onChange={e => this.setState({age: e.target.value})}
            /></div>
          <div>Gender:
            <label>Male: <input type='radio' name='gender' value='male'  onChange={e => this.setState({gender: 'male'})} defaultChecked={true}/></label>
            <label>Female: <input type='radio' name='gender' value='female' onChange={e => this.setState({gender: 'female'})} /></label>
          </div>
          <button onClick={this.handleUser}>增加</button>
        </div>
        {/* 显示用户列表 */}
        <div className='users-list'>{/* TODO */}</div>

        {
          this.props.users.map((user, idx) => (<User key={idx} user={user}/>))
        }
      </div>
    )
  }
}

export default connect(
  state => ({...state}),
  {
    addUser: (user) => ({
      type: Types.ADD_USER,
      user
    })
  }
)(UsersList)
