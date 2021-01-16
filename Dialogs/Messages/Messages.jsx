import React from "react";
import s from "./Messages.module.css";
import {addMessage_AC, messagetextChanging_AC} from '../../Redux/messageReducer';

const Messages = (props) =>{

    let newMessage = React.createRef();

    let OnMessageChange =()=>{
        let text = newMessage.current.value;
        let action = messagetextChanging_AC(text);
        props.dispatch(action);
    }
    let OnSendingMessage =()=>{
        let messageText = newMessage.current.value;
        let action = addMessage_AC(messageText);
        props.dispatch(action);
    }

    let messages = props.state.message.messageData.map( m => <div>{m.text}</div>);

    return(
        <div className={s.dialogs}>
            <div className={s.printingIcon}>печатает...</div>
            {messages} {/*тут все сообщения из messageData*/}
            <textarea ref={newMessage} onChange={OnMessageChange} value={props.state.message.currentMessageText}></textarea>
            <button onClick={OnSendingMessage}>send</button>
        </div>
    )
}
export default Messages;