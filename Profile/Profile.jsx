import React from 'react';
import Post from './Post/Post';
import ProfileZone from './ProfileZone/ProfileZone';

const Profile = (props)=>{

    return(
        <main>
        <ProfileZone profile={props.profile} />
        <Post postData={props.postData} />
      </main>
    )
}
export default Profile;