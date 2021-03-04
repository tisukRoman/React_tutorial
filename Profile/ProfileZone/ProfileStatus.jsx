import React from 'react'
import s from './ProfileZone.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    toggleEditMode=()=>{
        if(!this.state.editMode){
            this.setState({
                editMode: true
            }) 
        }else{
            this.setState({
                editMode: false
            }) 
        }
    }

    render() {
        return <>
        <div>Работа: {!this.state.editMode?(<span className={s.span}>{this.props.lookingForAJobDescription ? this.props.lookingForAJobDescription : ' нет информации'}</span>):(<input value={this.props.lookingForAJobDescription}></input>)} </div>
        <div>Статус: {!this.state.editMode?(<span className={s.span}>{this.props.aboutMe ? this.props.aboutMe : ' нет информации'}</span>):(<input value={this.props.aboutMe}></input>)}</div>

            <div className={s.editStat}>
                <button onClick={this.toggleEditMode}>{!this.state.editMode?'изменить':'сохранить'}</button>
            </div>
        </>
    }
}
export default ProfileStatus;