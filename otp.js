alert("YOUR OTP HAS BEEN SENT TO YOUR PHONE NUMBER . PLEASE CHECK YOUR PHONE FOR THE OTP.");
function validateOTP() {
    var otp = document.getElementById("otp").value;
    var errorMessage = document.getElementById("error-message");
    var successMessage = document.getElementById("success-message");

    
    if (otp === "123456") {
        errorMessage.style.display = "none";
        successMessage.style.display = "block";
        successMessage.innerHTML = "OTP verified successfully!";
    } else {
        successMessage.style.display = "none";
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Invalid OTP. Please try again.";
    }
}