function validateForm() {
    event.preventDefault()

    var email = document.getElementById("email")
    var invalid = document.getElementById("invalid")
    var emailSpan = document.getElementById("email-span")
    var emailValue = email.value

    if (!email.validity.valid || email.value == "") {
        invalid.classList.toggle("hidden")
        email.classList.toggle("invalid-status")
        return false
    }
    else if (email.validity.valid) {

        document.getElementById("main-form").style.display = "none"
        document.getElementById("success-msg").classList.toggle("hidden")
        emailSpan.innerText = emailValue
        return true
    }
}

function dismissSuccessMSG() {
    document.getElementById("main-form").style.display = "flex"
    document.getElementById("success-msg").classList.toggle("hidden")
}