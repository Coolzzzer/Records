const display = document.querySelector("#display");
const authorization = document.createElement("div");
const registration = document.createElement("div");
const fieldLogin = document.createElement("input");
const fieldPassword = document.createElement("input");
const authorizationShow = document.createElement("button");
const authorizationHide = document.createElement("button");

const registrationShow = document.createElement("button");
const registrationHide = document.createElement("button");
let width = window.innerWidth;
let height = window.innerHeight;
display.style.width = width + "px";
display.style.height = height + "px";

function buldBanner(banner,id,btnHide,btnShow){
    display.appendChild(banner);
    
    banner.innerHTML = id;
    banner.appendChild(btnHide);
    banner.setAttribute("id", id);
    banner.style.position = "absolute";
    banner.style.backgroundColor = "red";
    banner.style.width = width/2 + "px";
    banner.style.height = height/2 + "px";
    banner.style.left = width/4 + "px";
    banner.style.top = height/4 + "px";
    banner.appendChild(fieldLogin);
    banner.appendChild(fieldPassword);
    banner.style.display = "none";   

    function showBanner(){
        banner.style.display = "block";
    }
    function hideBanner(){
        banner.style.display = "none"; 
    }
    
    display.appendChild(btnShow);   
    btnShow.addEventListener("click",showBanner);
    btnHide.addEventListener("click",hideBanner);

    console.log(banner)
}
buldBanner(authorization,"authorization",authorizationHide,authorizationShow)
buldBanner(registration,"registration",registrationHide,registrationShow)

