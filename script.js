// The links are actually "https://tinyurl.com/nitkkrimg"+num
// currently max-num=5

// first setting the images
const images = ["https://tinyurl.com/nitkkrimg2", "https://tinyurl.com/nitkkrimg5", "https://tinyurl.com/nitkkrimg1", "https://tinyurl.com/nitkkrimg0", "https://tinyurl.com/nitkkrimg3"]
let curImg = 0;
for (i = 1; i <= 5; i++) {
    img = document.getElementById("img" + i);
    img.src = images[i - 1];
    // img.style.width = "100%";
    // img.style.height = "60vh";
}

// let img_sec = document.getElementsByClassName("image-section")[0];
// // slidingId = setInterval(slidePhotos, 2000);

// function slidePhotos() {
//     curImg++;
//     curImg %= images.length;
//     // console.log(images.length);
//     console.log(img_sec, curImg);
//     img_sec.style.left = "-" + (80 * curImg) + "vw";
//     // img_sec.style.left = "-160vw";
//     console.log(img_sec.style.left + "<");

// }

function changeFontSize(sign) {
    // font = "larger";
    if (sign == "+") document.querySelector("*").style.fontSize = "large";
    else if (sign == "-") document.querySelector("*").style.fontSize = "small";
    else document.querySelector("*").style.fontSize = "medium";
    // font = document.querySelector("*").style.fontSize;
    // console.log(font);

}