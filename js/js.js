function checkForm(){
    var errors = '';

    //Reset all errors
    //var elems = document.querySelectorAll(".error");
    var elems = $(".error");
    //[].forEach.call(elems, function(el) {
    //    el.classList.remove("error");
    //});
    elems.each(function(index, value){
        $(value).removeClass("error");
     });

    var minLength = 3;
    var maxLength = 5;

    //Validate names
    //var names = document.querySelectorAll("#name, #firstname");
    var names = $("#name, #firstname");
    var currentName = null;
    for(var i=0; i<names.length; i++) {

        currentName = $(names[i]);
        if (currentName.val() == '')    {

            errors = errors + 'Please fill out the field: ' + currentName.attr("name") + '\n';
            currentName.addClass("error");
        }
        if (currentName.val().length < minLength || currentName.val().length >maxLength){
            errors = errors + "Please make sure the input is between 3 - 5 characters long" + '\n';
            currentName.addClass("error");
        }
    }

    //Validate sex
    var sex = $("#sex");
    if(sex.val() != 'F' && sex.val() != 'M') {
        errors = errors + 'Please fill out the field: ' + sex.attr("name") + '\n';
        sex.addClass("error");
    }

    //Validate pass
    var password =   $("#password");
    var passwordAgain =   $("#password_again");

    if (password.val().length <6){
        errors = errors + "Please make sure the password is at least 6 characters long." + '\n';
        password.addClass("error");
    }

    if (password.val() != passwordAgain.val()){
        errors = errors + "Please make sure the password are matching." + '\n';
        password.addClass("error");
        passwordAgain.addClass("error");
    }

    if(errors != ''){
        alert(errors);
        return false;
    }
}
