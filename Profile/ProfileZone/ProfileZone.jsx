import React from 'react';
import PreloaderCSS from '../../assets/Preloader';
import s from './ProfileZone.module.css';
import ava from '../../assets/img/ava.png';
import back from '../../assets/img/backdef.jpg';
import ProfileStatus from './ProfileStatus';

const ProfileZone = (props) => {

    if(!props.profile){
        return <PreloaderCSS />
    }

    return (
        <>
            <div className={s.wall}>
                <img src={props.profile.photos.large?props.profile.photos.large:back} alt='something went wrong'/>
            </div>

            <div className={s.profile}>
                <img src={props.profile.photos.small?props.profile.photos.small:ava} alt='something went wrong'/>

                <div className={s.info}>
                    <span>{props.profile.fullName}</span>
                    <ProfileStatus aboutMe={props.profile.aboutMe}
                    lookingForAJobDescription={props.profile.lookingForAJobDescription}/>
                </div>
            </div>
        </>
    )
}

export default ProfileZone;