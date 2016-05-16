function checkForm(){
    var errors = '';

    //Reset all errors
    var elems = document.querySelectorAll(".error");
    [].forEach.call(elems, function(el) {
        el.classList.remove("error");
    });
    var minLength = 3;
    var maxLength = 5;

    //Validate names
    var names = document.querySelectorAll("#name, #firstname");
    for(var i=0; i<names.length; i++) {
        if(names[i].value == '') {
            errors = errors + 'Please fill out the field: ' + names[i].getAttribute('name') + '\n';
            names[i].classList.add('error');
        }
        if (names[i].value.length < minLength || names[i].value.length >maxLength){
            errors = errors + "Please make sure the input is between 3 - 5 characters long" + '\n';
            names[i].classList.add('error');
        }
    }

    //Validate sex
    var sex = document.querySelectorAll("#sex");
    if(sex[0].value != 'F' && sex[0].value != 'M') {
        errors = errors + 'Please fill out the field: ' + sex[0].getAttribute('name') + '\n';
        sex[0].classList.add('error');
    }

    //Validate pass
    var password =   document.getElementById("password");
    var passwordAgain =   document.getElementById("password_again");;

    if (password.value.length <6){
        errors = errors + "Please make sure the password is at least 6 characters long." + '\n';
        password.classList.add('error');
    }

    if (password.value != passwordAgain.value){
        errors = errors + "Please make sure the password are matching." + '\n';
        password.classList.add('error');
        passwordAgain.classList.add('error');
    }

    if(errors != ''){
        alert(errors);
        return false;
    }
}

function stringLength(inputtxt, minlength, maxlength)
{
    var field = inputtxt.value;
    var mnlen = minlength;
    var mxlen = maxlength;

    if(field.length<mnlen || field.length> mxlen)
    {
        alert("Please input the userid between " +mnlen+ " and " +mxlen+ " characters");
        return false;
    }
    else
    {
        alert('Your userid have accepted.');
        return true;
    }
}