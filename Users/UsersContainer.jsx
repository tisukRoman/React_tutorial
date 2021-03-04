import React from 'react';
import Users from './Users';
import Preloader from '../assets/Preloader';
import { connect } from 'react-redux';
import { toFollow, toUnfollow, getUsersThunk } from '../Redux/usersReducer';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';

////////////////////////////////////////////////////////////////////////////

class UsersC extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (currentPage) => {
    this.props.getUsersThunk(currentPage, this.props.pageSize)
  }
  render() {
    return (<>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
        toFollow={this.props.toFollow}
        toUnfollow={this.props.toUnfollow}
        users={this.props.users}
      />
    </>)
  }
}

////////////////////////////////////////////////////////////////////////////

let mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    totalUsersCount: state.usersReducer.totalUsersCount,
    pageSize: state.usersReducer.pageSize,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching
  }
}

export default compose(
  connect(mapStateToProps, { toFollow, toUnfollow, getUsersThunk}),
  withAuthRedirect
)(UsersC)
