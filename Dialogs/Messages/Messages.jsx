import React from "react";
import s from "./Messages.module.css";

const Messages = (props) =>{

    let newMessage = React.createRef();

    let OnMessageChange =()=>{
        let text = newMessage.current.value;
        props.UpdateMessText(text);
    }
    let OnSendingMessage =()=>{
        let messageText = newMessage.current.value;
        props.SendingMess(messageText);
    }

    let messages = props.messageData.map( m => <div>{m.text}</div>);

    return(
        <div className={s.dialogs}>
            <div className={s.printingIcon}>печатает...</div>
            {messages} {/*тут все сообщения из messageData*/}
            <textarea ref={newMessage} onChange={OnMessageChange} value={props.currentMessageText}></textarea>
            <button onClick={OnSendingMessage}>send</button>
        </div>
    )
}
export default Messages;