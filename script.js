var firebaseConfig = {
    apiKey: "AIzaSyBo1dS0qCUkVuySNc96oMmMgyDUw_JnRV8",
    authDomain: "contact-form-9a47d.firebaseapp.com",
    databaseURL: "https://contact-form-9a47d.firebaseio.com",
    projectId: "contact-form-9a47d",
    storageBucket: "contact-form-9a47d.appspot.com",
    messagingSenderId: "1026879941103",
    appId: "1:1026879941103:web:aa8a168946934f481d6e1a"
  };

  firebase.initializeApp(firebaseConfig);
  let firestore = firebase.firestore();

  const btn = document.querySelector('.btn')
  const firstNames = document.querySelector('#firstName')
  const lastNames = document.querySelector('#lastName')
  const emails = document.querySelector('#email')
  const countrys = document.querySelector('#country')

  const db = firestore.collection('contact-data')

  btn.addEventListener('click', function(event){
      event.preventDefault()
      const firstName = firstNames.value 
      const  lastName = lastNames.value 
      const email = emails.value 
      const country = countrys.value
      
    db.doc().set({
        first_name: firstName,
        last_name: lastName,
        email:email,
        country:country
    }).then(function(){
       console.log('Data Saved')
    }).catch(function(error){
        console.log(error)
    })
  })














