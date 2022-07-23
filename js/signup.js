function validation(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    var usercheck = /^[A-Za-z]{3,30}$/;
    var emailcheck = /^[A-Za-z_0.9.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;
    var passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])$/;
    var cpasswordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])$/;

    if (usercheck.test(username)){
      document.getElementById('errorname').innerHTML = " ";
    }
    else{
      document.getElementById('errorname').innerHTML = "**Invalid Name";
      return false;
    }
    if (emailcheck.test(email)){
      document.getElementById('erroremail').innerHTML = " ";
    }
    else{
      document.getElementById('emailemail').innerHTML = "**Invalid Email";
      return false;
    }
    if (numbercheck.test(number)){
      document.getElementById('errornumber').innerHTML = " ";
    }
    else{
      document.getElementById('errornumber').innerHTML = "**Invalid Number";
      return false;
    } 
    if(passwordcheck.test(password)){
        document.getElementById('errorpassword').innerHTML = " ";
    }
    else{
        document.getElementById('errorpassword').innerHTML = "**Invalid password";
        return false;
    }
    if(cpasswordcheck.test(password)){
        document.getElementById('errorcpassword').innerHTML = " ";
    }
    else{
        document.getElementById('errorcpassword').innerHTML = "**Invalid conformPassword";
        return false;
    }
   
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzZc0w-Dcj6yGwSK0powEFEZUTGWD0VohQJ8d27mKl3sjV1AJwBxgyiBTBNG7dSDdYX/exec'
            const form = document.forms['Submit_google sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })
            
            
          
           