
document.getElementById("form1").addEventListener("submit", function(e) {

    e.preventDefault();

    let valid = true;

    document.querySelectorAll("#form1 .error").forEach(function(err) {
        err.innerText = "";
    });


    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let address = document.getElementById("address").value.trim();

    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    }

    if (phone.length != 10) {
        document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number";
        valid = false;
    }

    if (dob === "") {
        document.getElementById("dobError").innerText = "Select your Date of Birth";
        valid = false;
    }

    if (gender === "") {
        document.getElementById("genderError").innerText = "Select your Gender";
        valid = false;
    }

    if (address === "") {
        document.getElementById("addressError").innerText = "Address is required";
        valid = false;
    }

    if (valid) {
        document.getElementById("sec1").classList.add("hidden");
        document.getElementById("sec2").classList.remove("hidden");
    }

});


document.getElementById("form2").addEventListener("submit", function(e) {

    e.preventDefault();

    let valid = true;

    document.querySelectorAll("#form2 .error").forEach(function(err) {
        err.innerText = "";
    });

    let college = document.getElementById("college").value.trim();
    let course = document.getElementById("course").value.trim();
    let year = document.getElementById("year").value.trim();

    if (college === "") {
        document.getElementById("collegeError").innerText = "College Name is required";
        valid = false;
    }

    if (course === "") {
        document.getElementById("courseError").innerText = "Course is required";
        valid = false;
    }

    if (year === "") {
        document.getElementById("yearError").innerText = "Passing Year is required";
        valid = false;
    }

    if (valid) {
        document.getElementById("sec2").classList.add("hidden");
        document.getElementById("sec3").classList.remove("hidden");
    }

});

document.getElementById("form3").addEventListener("submit", function(e) {

    e.preventDefault();

    let valid = true;

    document.querySelectorAll("#form3 .error").forEach(function(err) {
        err.innerText = "";
    });

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "") {
        document.getElementById("usernameError").innerText = "Username is required";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        valid = false;
    }

    if (valid) {
        alert("All Forms Submitted Successfully!");
    }

});