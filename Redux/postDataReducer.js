
let initialState = {
    postData: [
        {userName:"Ulius Ceaser", comment:"Nice work!", imgURL:"https://upload.wikimedia.org/wikipedia/ru/6/64/ModernWarfare2_comics.jpg"},
        {userName:"Mark Zukerberg", comment:"Awesome) Go on", imgURL:"https://i.io.ua/img_su/large/0012/61/00126106_n1.jpg"},
        {userName:"Pavel Durov", comment:"Oh my...", imgURL:"https://pbs.twimg.com/profile_images/1977937719/getImage.jpeg"},
        {userName:"Stas Fesyn", comment:"make a parcer fo me", imgURL: "https://vignette.wikia.nocookie.net/spiderman/images/3/3a/Spider-Man_Shattered_Dimensions.jpg/revision/latest/top-crop/width/360/height/450?cb=20170625212806&path-prefix=ru"},
    ]
};

const postDataReducer = (state = initialState, action) =>{
    return state;
}
export default postDataReducer;
