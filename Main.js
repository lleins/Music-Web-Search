
function randomNumber(min, max) { 
    let numb = Math.random() * (max - min) + min;
    return parseInt(numb);
} 

function RandomBackground(){
    const image = [];
    image[0] = "";
    image[1] = "url('Images/BackMain1.jpg')"
    image[2] = "url('Images/BackMain2.jpg')"
    image[3] = "url('Images/BackMain3.jpg')"
    image[4] = "url('Images/BackMain4.jpg')"
    image[5] = "url('Images/BackMain5.jpg')"
    image[6] = "url('Images/BackMain6.jpg')"
    image[9] = "url('Images/BackMain7.jpg')"
    image[8] = "url('Images/BackMain8.jpg')"
    let numb = randomNumber(1, 9);
    return image[numb];
}

document.body.style.backgroundImage = RandomBackground();


