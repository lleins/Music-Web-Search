
function randomNumber(min, max) { 
    let numb = Math.random() * (max - min) + min;
    return parseInt(numb);
} 

function RandomBackground(){
    const image = [];
    image[0] = "";
    image[1] = "url('BackMain1.jpg')"
    image[2] = "url('BackMain2.jpg')"
    image[3] = "url('BackMain3.jpg')"
    image[4] = "url('BackMain4.jpg')"
    image[5] = "url('BackMain5.jpg')"
    image[6] = "url('BackMain6.jpg')"
    image[9] = "url('BackMain7.jpg')"
    image[8] = "url('BackMain8.jpg')"
    let numb = randomNumber(1, 9);
    return image[numb];
}

document.body.style.backgroundImage = RandomBackground();


