const MAX_WIDTH = window.screen.availWidth;
const MAX_HEIGHT = window.screen.availHeight;

const cloud = document.querySelector(".cloud")

const cloudMaxScale = 70;
let cloudScaleSpeed = 1;
let cloudScale = 50;

let cloudXSpeed = 0.5;
let cloudX = 0;

const cloud2 = document.querySelector(".cloud2")

const cloud2MaxScale = 70;
let cloud2ScaleSpeed = 1;
let cloud2Scale = 50;

let cloud2XSpeed = 0.5;
let cloud2X = 0;

function animate() {
    cloudScale = cloudScale + cloudScaleSpeed/5;
    cloudX = cloudX + cloudXSpeed;

    cloud2Scale = cloud2Scale + cloud2ScaleSpeed/5;
    cloud2X = cloud2X + cloud2XSpeed;

    if (cloudScale > cloudMaxScale || cloudScale < 50) {
        cloudScaleSpeed *= -1;
    }

    if (cloudX > MAX_WIDTH + cloud.offsetWidth || cloud2X < 0) {
        cloudXSpeed *= +1;
    }

    if (cloud2Scale > cloud2MaxScale || cloud2Scale < 50) {
        cloud2ScaleSpeed *= -1;
    }

    if (cloud2X > MAX_WIDTH + cloud2.offsetWidth || cloud2X < 0) {
        cloud2XSpeed *= -1;
    }

    cloud.style.left = cloudX + 'px';
    cloud.style.scale = cloudScale + '%';
    cloud2.style.left = cloud2X + 'px';
    cloud2.style.scale = cloud2Scale + '%';
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
