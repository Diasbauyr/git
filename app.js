const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
uField = form.querySelector(".username")
uInput = uField.querySelector("input");
nField = form.querySelector(".number")
nInput = nField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); 
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
  (uInput.value == "") ? uField.classList.add("shake", "error") : checkUsername();
  (nInput.value == "") ? nField.classList.add("shake", "error") : checkNumber();


  setTimeout(()=>{ 
    eField.classList.remove("shake");
    pField.classList.remove("shake");
    uField.classList.remove("shake");
    nField.classList.remove("shake");
  }, 500);
  eInput.onkeyup = ()=>{checkEmail();}
  pInput.onkeyup = ()=>{checkPass();} 
  uInput.onkeyup = ()=>{checkUsername();} 
  nInput.onkeyup = ()=>{checkNumber();} 
  function checkEmail(){ 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(!eInput.value.match(pattern)){ 
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }
  function checkUsername(){ 
    let pattern = /^[^ ]+\.[a-z]{2,3}$/; 
    if(!uInput.value == ""){ 
      uField.classList.add("error");
      uField.classList.remove("valid");
    }else{
      uField.classList.remove("error");
      uField.classList.add("valid");
    }
  }

  function checkNumber(){
    let pattern = /^[^ ]+\.[1-9]{5}$/;
    if(!nInput.value == ""){ 
      nField.classList.add("error");
      nField.classList.remove("valid");
      
    }else{ 
      nField.classList.remove("error");
      nField.classList.add("valid");
    }
  }

  function checkPass(){ 
    if(pInput.value == ""){ 
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ 
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }
  if(!eField.classList.contains("error") && !pField.classList.contains("error") && !uField.classList.contains("error") && !nField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); 
  }
}