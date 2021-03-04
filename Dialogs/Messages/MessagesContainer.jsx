import Messages from './Messages';
import {addMessage_AC, messagetextChanging_AC} from '../../Redux/messageReducer';
import {connect} from 'react-redux';


let mapStateToProps = (state) =>{
    return{ 
        messageData: state.messageReducer.messageData,
        currentMessageText: state.messageReducer.currentMessageText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{   
        SendingMess: (messageText)=>{
            let action = addMessage_AC(messageText);
            dispatch(action);
        },
        UpdateMessText: (text)=>{
            let action = messagetextChanging_AC(text);
            dispatch(action);
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;