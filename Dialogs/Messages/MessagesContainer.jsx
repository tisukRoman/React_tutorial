import React from "react";
import Messages from './Messages';
import {addMessage_AC, messagetextChanging_AC} from '../../Redux/messageReducer';

const MessagesContainer = (props) =>{

    let messageData = props.state.messageReducer.messageData;
    let currentMessageText = props.state.messageReducer.currentMessageText;

    let OnMessageChange =(text)=>{
        let action = messagetextChanging_AC(text);
        props.dispatch(action);
    }
    let OnSendingMessage =(messageText)=>{
        let action = addMessage_AC(messageText);
        props.dispatch(action);
    }

    return <Messages messageData={messageData} currentMessageText={currentMessageText} UpdateMessText={OnMessageChange} SendingMess={OnSendingMessage}/>
}
export default MessagesContainer;