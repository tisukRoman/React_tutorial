import messageReducer from './messageReducer';

let store = {
    _state: {
        postData: [
            {userName:"Ulius Ceaser", comment:"Nice work!", imgURL:"https://upload.wikimedia.org/wikipedia/ru/6/64/ModernWarfare2_comics.jpg"},
            {userName:"Mark Zukerberg", comment:"Awesome) Go on", imgURL:"https://i.io.ua/img_su/large/0012/61/00126106_n1.jpg"},
            {userName:"Pavel Durov", comment:"Oh my...", imgURL:"https://pbs.twimg.com/profile_images/1977937719/getImage.jpeg"},
            {userName:"Stas Fesyn", comment:"make a parcer fo me", imgURL: "https://vignette.wikia.nocookie.net/spiderman/images/3/3a/Spider-Man_Shattered_Dimensions.jpg/revision/latest/top-crop/width/360/height/450?cb=20170625212806&path-prefix=ru"},
        ],
        message: {
            messageData: 
            [
                {id:1, text: "Hi"},
                {id:2, text: "How are you?"},
                {id:3, text: "Fiiinee"},
                {id:4, text: ")))"},
                {id:5, text: "Bye bye"},
            ],
            currentMessageText: "", 
        },
        contactData: [
            {name:"Marina", id:"1"},
            {name:"Karina", id:"2"},
            {name:"Polina", id:"3"},
            {name:"Roman", id:"4"},
            {name:"Jack", id:"5"},
            {name:"Markov", id:"6"},
            {name:"Dude", id:"7"},
        ],
    },
    dispatch(action){  //Главный метод
        this._state.message = messageReducer(this._state.message, action);
        this._callSubscriber(this._state);
    },
    _callSubscriber(){
        console.log('has changed');
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    }
};

export default store;
window.store = store;