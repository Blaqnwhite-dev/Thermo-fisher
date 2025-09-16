const accord = document.getElementsByClassName('footer__h5');
const hide = document.getElementById("hide-menu");
const signIn = document.getElementById("signin");
const selector = document.getElementById("selector");


var hamburger = document.getElementById("hamburger");
function showMenu(){
    hamburger.style.left = "0";
    
}
function hidemenu(){
    hamburger.style.left = "-350px";

}


// SIGNIN 
function signin(){
    signIn.classList.toggle("change");
    // signIn.style.display = "none";
}


// SEARCH 
function showsearch(){
    selector.style.display = "block";
    
}
function hidesearch(){
    selector.style.display = "none";

}


//  FOOTER LIST 

        for (let i = 0; i < accord.length; i++) {
            accord[i].addEventListener("click", () => {
                const content = document.getElementsByClassName('footer__ul');
                content[i].classList.toggle("footer__ul-show")
                const label = document.getElementsByClassName('footer__h5');
                label[i].classList.toggle("footer__h5-hide")
            })
        }