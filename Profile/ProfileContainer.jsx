import { connect } from 'react-redux';
import { setCurrentUserPage } from '../Redux/profileReducer'
import React from 'react';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import {getProfile} from '../API/api'
import { compose } from 'redux';
import { withAuthRedirect } from '../HOC/withAuthRedirect';

class ProfileC extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){userId = 2;}
    getProfile(userId)
      .then(data => {
        this.props.setCurrentUserPage(data);
      })
  }

  render() {
    return <Profile postData={this.props.postData} profile={this.props.profile}/>
  }

}

//////////////////////////////////////////////////////////////////////////////////

let mapStateToProps = (state) => {
  return {
    postData: state.postDataReducer.postData,
    profile: state.profileReducer.profile
  }
}

export default compose(
  connect(mapStateToProps, { setCurrentUserPage }),
  withRouter,
  withAuthRedirect
)(ProfileC)