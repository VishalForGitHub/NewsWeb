function checkValidate(email) {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the provided email against the regular expression
    return (emailRegex.test(email));
}

// Example usage:

function validateEmail(){

    const email =document.getElementById("member_email").value;
    if (checkValidate(email)) {
        window.open("page2.html",'_self');
    } else {
        alert('Email is not valid');
    }
    
}
