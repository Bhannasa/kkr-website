// The links are actually "https://tinyurl.com/nitkkrimg"+num
// currently max-num=5

// first setting the images
const images = ["https://tinyurl.com/nitkkrimg2", "https://tinyurl.com/nitkkrimg5", "https://tinyurl.com/nitkkrimg1", "https://tinyurl.com/nitkkrimg0", "https://tinyurl.com/nitkkrimg3"]
let curImg = 0;
for (i = 1; i <= 5; i++) {
    img = document.getElementById("img" + i);
    img.src = images[i - 1];
}

function changeFontSize(sign) {
    if (sign == "+"){
        document.querySelector("*").style.fontSize = "large";
        document.querySelector(".college-name").style.fontSize="120px";
        document.querySelector(".navbar").style.fontSize="46px";
        document.querySelector(".heading").style.fontSize="55px";
        document.querySelector(".placements-and-nirf").style.fontSize="48px";
        document.getElementsByClassName("some-lines-part")[0].style.fontSize="40px";
        document.getElementsByClassName("some-lines-heading")[0].style.fontSize="50px";
        document.getElementsByClassName("some-lines-part")[1].style.fontSize="40px";
        document.getElementsByClassName("some-lines-heading")[1].style.fontSize="50px";
    } 
    else if (sign == "-"){
        document.querySelector("*").style.fontSize = "small";
        document.querySelector(".college-name").style.fontSize="80px";
        document.querySelector(".navbar").style.fontSize="26px";
        document.querySelector(".heading").style.fontSize="35px";
        document.querySelector(".placements-and-nirf").style.fontSize="36px";
        document.getElementsByClassName("some-lines-part")[0].style.fontSize="20px";
        document.getElementsByClassName("some-lines-heading")[0].style.fontSize="30px";
        document.getElementsByClassName("some-lines-part")[1].style.fontSize="20px";
        document.getElementsByClassName("some-lines-heading")[1].style.fontSize="30px";
    } 
    else{
        document.querySelector("*").style.fontSize = "medium";
        document.querySelector(".college-name").style.fontSize="100px";
        document.querySelector(".navbar").style.fontSize="36px";
        document.querySelector(".heading").style.fontSize="45px";
        document.querySelector(".placements-and-nirf").style.fontSize="46px";
        document.getElementsByClassName("some-lines-part")[0].style.fontSize="30px";
        document.getElementsByClassName("some-lines-heading")[0].style.fontSize="40px";
        document.getElementsByClassName("some-lines-part")[1].style.fontSize="30px";
        document.getElementsByClassName("some-lines-heading")[1].style.fontSize="40px";
    } 
}
var loggedin=false;
function loggedIn(){
    if(loggedin)    return;
    window.open("logIn.html");
    document.getElementById("login").innerHTML="Logged In";
    document.getElementById("login")["href='#"];
    loggedin=true;
    window.close();
}