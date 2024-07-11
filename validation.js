function handleSubmit(event) {
    event.preventDefault();
    
    // Fetching form values
    let fullName = document.getElementById('FullName').value;
    let email = document.getElementById('Email').value;
    let phone = document.getElementById('Phone').value;
    let birthdate = document.getElementById('Birthdate').value;
    let address = document.getElementById('Address').value;

    // Validation
    if (!validateFullName(fullName)) {
        alert('Please enter a valid full name (only alphabets and spaces).');
        return;
    }
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number (10 digits).');
        return;
    }
    if (!validateBirthdate(birthdate)) {
        alert('You must be at least 18 years old.');
        return;
    }

    // You can perform additional processing here
    
    // Displaying form values
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Date of Birth:", birthdate);
    console.log("Address:", address);

    // For this example, let's just alert a success message
    alert('Form submitted successfully!');
}

function validateFullName(name) {
    const namePattern = /^[A-Za-z\s]+$/;
    return namePattern.test(name);
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}

function validateBirthdate(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age >= 18;
}


 //for contact email using emailjs code
function Sendmail(){
     let templateparams = {
         fullname: document.getElementById("FullName").value,
         email:  document.getElementById("Email").value,  
         phone:   document.getElementById("Phone").value,
         birthdate:   document.getElementById("Birthdate").value, 
         address:  document.getElementById("Address").value, 

    };

     emailjs.send( "service_iawm3zw" ,"template_p93sy79" , templateparams)
     .then((response) =>{
        console.log('success!',response.status,response.text);
         alert('email send successfully!');
     
     }, (error)=>{
         console.log('failed...')
         alert('failed to send email..');
     });
    }