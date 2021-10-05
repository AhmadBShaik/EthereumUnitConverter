let simpleBtn = document.getElementById("simple-btn")
let extendedBtn = document.getElementById("extended-btn")

simpleBtn.addEventListener('click',simpleBtnEvent)
extendedBtn.addEventListener('click',extendedBtnEvent)

function simpleBtnEvent(){
    simpleBtn.classList.remove("inactive-btn")
    simpleBtn.classList.add("active-btn")
    extendedBtn.classList.remove("active-btn")
    extendedBtn.classList.add("inactive-btn")

    let formWrapper = document.getElementsByClassName("form-wrapper")[0];
    let header = document.getElementsByClassName("header")[0];

    formWrapper.style.maxWidth = "780px";
    header.style.maxWidth = "780px"

    let simpleForm = document.getElementById("simple-form") 
    simpleForm.style.display = "block";

    let extendedForm = document.getElementById("extended-form") 
    extendedForm.style.display = "none";

    
    document.getElementById("wei-simple").addEventListener('change',fromSimpleWei);
    document.getElementById("wei-simple").addEventListener('keyup',fromSimpleWei);
    document.getElementById("gwei-simple").addEventListener('change',fromSimpleGwei);
    document.getElementById("gwei-simple").addEventListener('keyup',fromSimpleGwei); 
    document.getElementById("ether-simple").addEventListener('change',fromSimpleEther);
    document.getElementById("ether-simple").addEventListener('keyup',fromSimpleEther); 
}


function isZero(str){
    return str.split('').every(char => char === "0")
}



function multiplier(value,precision){
    
    value = value.toString()

    if (value.includes("e+")){
        return "max-limit"
    }

    if(value.includes(".")){
        let integerPart = value.split(".")[0]
        let decimalPart = value.split(".")[1]

        let zeros = ''
        for(let i=0;i<precision - decimalPart.length;i++){
            zeros+='0'
            // console.log(zeros)
        }
        // console.log(decimalPart+zeros)
        if(decimalPart.length>precision){
            decimalPart = decimalPart.slice(0,precision)
        }
        return integerPart+decimalPart+zeros
    
    }else{
        let res = ''
        for(let i=1;i<precision;i++){
            res+='0'
        }
        return value+res
    }
}


function divider(value,precision){
    if(value == 0){
        return ""
    }

    value = value.toString();
    
    if (value.includes("e+")){
        return "max-limit"
    }
    let pad = 0
    let integerPart = value;
    let decimalPart;
   
    if(value.includes(".")){
        
        pad = value.split(".")[1].length

        integerPart = value.split(".")[0]
        decimalPart = value.split(".")[1]
    }

    if(integerPart.length<=precision){
        return "0."+value.split(".").join("").padStart(precision+pad,"0")
    }else{
        if(value.includes(".")){

            let res = integerPart+decimalPart;
            return res.slice(0,integerPart.length-precision)+"."+res.slice(integerPart.length-precision,res.length)
        
        }else{
            return value.slice(0,value.length-precision)+"."+value.slice(value.length-precision,value.length)
        }
    }
}
        

function fromSimpleWei(){

    let wei = document.getElementById("wei-simple").value;
    wei = wei.replace(/^0+/,'')
    let ans = divider(wei,9)


    if(isZero(ans)){
        document.getElementById("gwei-simple").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("wei-simple").value = ""
    }else{
        document.getElementById("gwei-simple").value = ans
    }

    ans = divider(wei,18)
    if(isZero(ans)){
        document.getElementById("ether-simple").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("wei-simple").value = ""
    }else{
        document.getElementById("ether-simple").value = ans
    }
}


function fromSimpleGwei(){
    let gwei = document.getElementById("gwei-simple").value;
    gwei = gwei.replace(/^0+/,'')

    let ans = multiplier(gwei,9) 
    
    if(isZero(ans)){
       document.getElementById("wei-simple").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gwei-simple").value = ""
    }else{
        document.getElementById("wei-simple").value = ans
    }
    ans = divider(gwei,18)

    if(isZero(ans)){
        document.getElementById("ether-simple").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gwei-simple").value = ""
    }else{
        document.getElementById("ether-simple").value = ans
    }
    
}


function fromSimpleEther(){
    let ether = document.getElementById("ether-simple").value;
    ether = ether.replace(/^0+/,'')
    
    let ans = multiplier(ether,18)

    if(isZero(ans)){
        document.getElementById("wei-simple").value = ''
     }else if(ans==="max-limit"){
        document.getElementById("ether-simple").value="";
    }else{
        document.getElementById("wei-simple").value = ans
    }
    
    ans = multiplier(ether,9)

    if(isZero(ans)){
        document.getElementById("gwei-simple").value = ''
     }else if(ans==="max-limit"){
        document.getElementById("ether-simple").value="";
    }else{
        document.getElementById("gwei-simple").value = ans
    }
    
}

simpleBtnEvent()

function extendedBtnEvent(){
    extendedBtn.classList.remove("inactive-btn")
    extendedBtn.classList.add("active-btn")
    simpleBtn.classList.remove("active-btn")
    simpleBtn.classList.add("inactive-btn")

    let formWrapper = document.getElementsByClassName("form-wrapper")[0];
    let header = document.getElementsByClassName("header")[0];

    formWrapper.style.maxWidth = "1300px";
    header.style.maxWidth = "1300px"

    let simpleForm = document.getElementById("simple-form") 
    simpleForm.style.display = "none";

    let extendedForm = document.getElementById("extended-form") 
    extendedForm.style.display = "block";
   
}