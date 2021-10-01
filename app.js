let simpleBtn = document.getElementById("simple-btn")
let extendedBtn = document.getElementById("extended-btn")

simpleBtn.addEventListener('click',simpleBtnEvent)
extendedBtn.addEventListener('click',extendedBtnEvent)

function simpleBtnEvent(){
    simpleBtn.classList.remove("inactive-btn")
    simpleBtn.classList.add("active-btn")
    extendedBtn.classList.remove("active-btn")
    extendedBtn.classList.add("inactive-btn")

    let simpleForm = document.getElementById("simple-form") 
    simpleForm.style.display = "block";

    let extendedForm = document.getElementById("extended-form") 
    extendedForm.style.display = "none";
}


simpleBtnEvent()


function extendedBtnEvent(){
    extendedBtn.classList.remove("inactive-btn")
    extendedBtn.classList.add("active-btn")
    simpleBtn.classList.remove("active-btn")
    simpleBtn.classList.add("inactive-btn")

    let simpleForm = document.getElementById("simple-form") 
    simpleForm.style.display = "none";

    let extendedForm = document.getElementById("extended-form") 
    extendedForm.style.display = "block";
   
}