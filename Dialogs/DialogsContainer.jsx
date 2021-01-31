import React from 'react';
import Dialogs from './Dialogs';

const DialogsContainer = (props) =>{

    let contactData = props.state.contactDataReducer.contactData;

    return(
        <Dialogs contactData={contactData} dispatch={props.dispatch} state={props.state}/>
    )
}
export default DialogsContainer;