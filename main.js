console.log("Sanity");

//1. get the ref to the elements!
// form element 
const form = document.getElementById("FORM");
// first name element 
const first = document.getElementById("FNAME");

// last name element 
const last = document.getElementById("LNAME");
// email element 
const email = document.getElementById("EMAIL");
// password element 
const password = document.getElementById("PASSWORD");
// confirm password element 
const confirmPass = document.getElementById("CONFIRM");
// checkbox element 
let checkbox = document.getElementById("CHECKBOX");

let submit = document.getElementById('SUBMIT');


let output = document.getElementById("OUTPUT");


//2. attach an event listener to the form 

form.addEventListener("submit", (event) =>{


    event.preventDefault();
    let entry = document.createElement('li');
    entry.append(first.value);
    output.appendChild(entry);

    let entry2 = document.createElement('li');
    entry2.append(last.value);
    output.appendChild(entry2);
    
    let entry3 = document.createElement('li');
    entry3.append(email.value);
    output.appendChild(entry3);
    
    let entry4 = document.createElement('li');
    entry4.append(password.value);
    output.appendChild(entry4);

    let entry5 = document.createElement('li');
    entry5.append(confirmPass.value);
    output.appendChild(entry5);
    
    
    

});

submit.value = "Create Account";
