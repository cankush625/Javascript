/*Objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, respectively, in the context of an object.*/

let youtubeVideo = {
    title : 'Tornado Kick Tutorial',
    length : 10,
    creater : 'Micheal White',
    description : 'This is the video tutorial which teaches tornado kick in taekwondo'
};

console.log(youtubeVideo);

console.log(`Hey the new video ${youtubeVideo.title} by ${youtubeVideo.creater}`);