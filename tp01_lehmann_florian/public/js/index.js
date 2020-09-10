function validation(event){
    let passValue = $("#pass").val()
    let confirmationValue = $("#passConfirm").val()

    if(passValue !== confirmationValue){
        alert("Les deux mots de passes ne correspondent pas.")
        return false;
    }

    return true;

}

