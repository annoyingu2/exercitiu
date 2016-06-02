function checkForm(){
    var formHasErrors = false;

    //Reset all errors
    var elems = $(".error");
    elems.removeClass('error');
    elems.parent().find(".errorMessage").html("");

    var minLength = 3;
    var maxLength = 5;

    //Validate names
    var names = $("#name, #firstname");
    var currentName = null;
    for(var i=0; i<names.length; i++) {

        currentName = $(names[i]);
        if (currentName.val() == '')    {
            formHasErrors = true;
            currentName.addClass("error");
            currentName.parent().find(".errorMessage").html("Please fill out the field");
        } else if (currentName.val().length < minLength || currentName.val().length >maxLength){
            formHasErrors = true;
            currentName.addClass("error");
            currentName.parent().find(".errorMessage").html("Please make sure the input is between 3 - 5 characters long");
        }

    }

    //Validate sex
    var sex = $("#sex");
    if(sex.val() != 'F' && sex.val() != 'M') {
        formHasErrors = true;
        sex.addClass("error");
        sex.parent().find(".errorMessage").html("Please select a gender.");
    }

    //Validate E-mail


    //Validate pass
    var password =   $("#password");
    var passwordAgain =   $("#password_again");

    if (password.val() == '') {
        formHasErrors = true;
        password.parent().find(".errorMessage").html("Please make sure the password is not empty.");
        password.addClass("error");
    } else if (password.val().length <6){
        formHasErrors = true;
        password.addClass("error");
        password.parent().find(".errorMessage").html("Please make sure the password is at least 6 characters long.");
    }

    if (password.val() != passwordAgain.val()){
        formHasErrors = true;
        password.addClass("error");
        passwordAgain.addClass("error");
        passwordAgain.parent().find(".errorMessage").html("Please make sure the password are matching.");
    }

    if(formHasErrors == true){
        return false;
    }
}

