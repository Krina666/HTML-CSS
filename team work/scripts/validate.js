function validateProfile(v){
    v.preventDefault();
    var valid = true;

    if(profile.firstName.value === ""){
        document.querySelector('#fnameWarning').innerHTML = "Please enter your first name";
        valid = false;
    }

    if(profile.lastName.value == ""){
        document.querySelector('#lnameWarning').innerHTML = "Please enter your last name";
        valid = false;
    }

    if(profile.address1.value == ""){
        document.querySelector('#emailWarning').innerHTML = "Please enter your email address";
        valid = false;
    }

    if(profile.address1.value == ""){
        document.querySelector('#passwordWarning').innerHTML = "Please enter your password";
        valid = false;
    }

    if(profile.address1.value == ""){
        document.querySelector('#address1Warning').innerHTML = "Please enter your address";
        valid = false;
    }

    if(profile.city.value == ""){
        document.querySelector('#postalcodeWarning').innerHTML = "Please enter your postal code";
        valid = false;
    }


    if(valid){
        alert("Thank you for signing up to Fresh Plus+ membership!");
    }

    return valid;
};
