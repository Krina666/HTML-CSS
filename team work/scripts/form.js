document.querySelector('#firstName').addEventListener("blur",function(){
    if(this.value !== ""){
      fnameWarning.innerHTML = "";
    }
  });


document.querySelector('#lastName').addEventListener("blur",function(){
    if(this.value !== ""){
      lnameWarning.innerHTML = "";
    }
  });


document.querySelector('#email').addEventListener("blur",function(){
    if(this.value !== ""){
      emailWarning.innerHTML = "";
    }
  });


document.querySelector('#password').addEventListener("blur",function(){
    if(this.value !== ""){
      passwordWarning.innerHTML = "";
    }
  });


document.querySelector('#address1').addEventListener("blur",function(){
    if(this.value !== ""){
      address1Warning.innerHTML = "";
    }
  });


document.querySelector('#postalcode').addEventListener("blur",function(){
    if(this.value !== ""){
      postalcodeWarning.innerHTML = "";
    }
  });

    if(v){
      alert("Thank you!");
    }


document.profile.addEventListener("submit", validateProfile(v));
