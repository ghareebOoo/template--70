$(".fa-bars").on("click", function() {
    $(this).toggleClass("fa-xmark");
    $(".sidebar").toggleClass("move");
});



let Myname = document.querySelector(".input-name");
let email = document.querySelector(".input-email");
let phone = document.querySelector(".input-phone");
let age = document.querySelector(".input-age");
let pass = document.querySelector(".input-pass");
let repass = document.querySelector(".input-repass");
let submit = document.querySelector(".contact button");


let nameRegex = /^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}/;
let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
let phoneRegex = /\d+/;
let ageRegex = /\d+/;
let passwordRegex = /^[A-Z][a-z]{3,}\d+/;
let RepasswordRegex = /^[A-Z][a-z]{3,}\d+/;

function validate(ele ,regex){
    if(regex.test(ele.value)){
        return true;
    }
}
Myname.oninput = function(){
   if( validate(Myname , nameRegex)){
    Myname.nextElementSibling.style.display = "none";
   }else{
    Myname.nextElementSibling.style.display = "block";
   }
}
email.oninput = function(){
    if( validate(email , emailRegex)){
     email.nextElementSibling.style.display = "none";
    }else{
     email.nextElementSibling.style.display = "block";
    }
}
phone.oninput = function(){
    if( validate(phone , phoneRegex)){
     phone.nextElementSibling.style.display = "none";
    }else{
     phone.nextElementSibling.style.display = "block";
    }
}
age.oninput = function(){
    if( validate(age , ageRegex)){
     age.nextElementSibling.style.display = "none";
    }else{
     age.nextElementSibling.style.display = "block";
    }
}
pass.oninput = function(){
    if( validate(pass , passwordRegex)){
     pass.nextElementSibling.style.display = "none";
    }else{
     pass.nextElementSibling.style.display = "block";
    }
}
repass.oninput = function(){
    if( validate(repass , RepasswordRegex)){
     repass.nextElementSibling.style.display = "none";
    }else{
     repass.nextElementSibling.style.display = "block";
    }
}

submit.onclick = function() {
    if (
        validate(Myname, nameRegex) &&
        validate(email, emailRegex) &&
        validate(phone, phoneRegex) &&
        validate(age, ageRegex) &&
        validate(pass, passwordRegex) &&
        validate(repass, RepasswordRegex) &&
        pass.value === repass.value 
    ){
        submit.style.color = "white";
        submit.style.cursor = "pointer";
        submit.style.backgroundColor = "red";
        submit.style.borderColor = "red";
        submit.style.outline = "4px solid #ff000059";
    }
}


// let iconBar = document.querySelector(".fa-bars");
// let sidebar = document.querySelector(".sidebar");
// iconBar.addEventListener("click" , function(){
//     iconBar.classList.toggle("fa-xmark");
//     sidebar.classList.toggle("move");
// })




async function searchByName(meal) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    let Data = await response.json()
}
