import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Types from '../../redux/action-types'

class User extends Component {
  render () {
    const { user, deleteUser } = this.props;
    return (
      <div>
        <div>Name: {user.username}</div>
        <div>Age: {user.age}</div>
        <div>Gender: {user.gender}</div>
        <button onClick={() => deleteUser(user)}>删除</button>
      </div>
    )
  }
}

export default connect(
  state => ({...state}),
  {
    deleteUser: (user) => ({
      type: Types.DELETE_USER,
      user
    })
  }
)(User)
