/*

*/
let couchTexture
let tableTexture;
let floorTexture;
let wallTexture;
let tvStandTexture;
let tvScreenImage;
let windowImage;
let shirtTexture;
let chairCushionTexture;

function preload() {
    couchTexture = loadImage('resource\\upholstryTexture.jpeg');
    tableTexture = loadImage('resource\\woodTexture.png');
    chairCushionTexture = loadImage('resource\\chairCushionTexture.jpeg');
    // tableImg = loadImage('woodTexture6.png');
    floorTexture = loadImage('resource\\floorTexture.jpeg');
    // wallImg = loadImage('wallColor.jpeg');
    // tvStandImg = loadImage('woodTexture9.jpeg');
    tvScreenImage = loadImage('resource\\tvScreenImage.jpeg');
    windowImage = loadImage('resource\\outside.jpeg');
    shirtTexture = loadImage('resource\\shirtTexture.jpeg');
}