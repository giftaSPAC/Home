// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyCGUOoLxbLvFZRp5HYqCcoKas_rOBNYAxw",
    authDomain: "contactform-a212b.firebaseapp.com",
    projectId: "contactform-a212b",
    storageBucket: "contactform-a212b.appspot.com",
    databaseURL: "https://contactform-a212b-default-rtdb.firebaseio.com/",
    messagingSenderId: "935217885941",
    appId: "1:935217885941:web:39f6f45fe1825c61954bbc"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  document.querySelector('.close-alert').addEventListener('click', function () {
    document.querySelector('.alert').style.display = 'none';
});

  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }