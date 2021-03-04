const ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE_TEXT_CHANGING = 'MESSAGE-TEXT-CHANGING';

let initialState = {
    messageData: 
            [
                {id:1, text: "Hi"},
                {id:2, text: "How are you?"},
                {id:3, text: "Fiiinee"},
                {id:4, text: ")))"},
                {id:5, text: "Bye bye"},
            ],
    currentMessageText: "", 
}

const messageReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_MESSAGE: 
            return {
                ...state,
                messageData: [...state.messageData, {id:6, text: action.messageText}],
                currentMessageText: ''
            }
        case MESSAGE_TEXT_CHANGING: 
            return{
                ...state,
                currentMessageText: action.text
            }
            default: 
                return state;
            }
}

export const addMessage_AC = (messageText) =>{
    return {
        type: ADD_MESSAGE,
        messageText: messageText
    }
}
export const messagetextChanging_AC = (text) =>{
    return {
        type: MESSAGE_TEXT_CHANGING,
        text: text
    }
}

export default messageReducer;