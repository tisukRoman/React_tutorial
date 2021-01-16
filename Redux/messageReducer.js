const ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE_TEXT_CHANGING = 'MESSAGE-TEXT-CHANGING';

const messageReducer = (state, action) =>{
    switch(action.type){
        case ADD_MESSAGE:  {/*type, messageText*/}
            let newMessage = {id:6, text: action.messageText};
            state.messageData.push(newMessage);
            state.currentMessageText = '';
            return state;
        case MESSAGE_TEXT_CHANGING:  {/*type, text*/}
            state.currentMessageText = action.text;
            return state;
        default: 
            return state;
    }
}

export const addMessage_AC = (messageText) =>{
    return {
        type: ADD_MESSAGE,
        messageText: messageText
    }
};
export const messagetextChanging_AC = (text) =>{
    return {
        type: MESSAGE_TEXT_CHANGING,
        text: text
    }
};

export default messageReducer;