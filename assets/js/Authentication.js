

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC6XVUJnTKA6BLKPP5H08iuzbAQeRMBYTo",
    authDomain: "ecommerce-authentication-3133f.firebaseapp.com",
    projectId: "ecommerce-authentication-3133f",
    storageBucket: "ecommerce-authentication-3133f.appspot.com",
    messagingSenderId: "5096133323",
    appId: "1:5096133323:web:c44f1d06485ccf10f0014e"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const Firstname = document.getElementById("Firstname").value;
    const Lastname = document.getElementById("Lastname").value;
    console.log(email, password, Firstname, Lastname)
    firebase.auth().createUserWithEmailAndPassword(email, password, Firstname, Lastname)
        .then((result) => {
            console.log(result)
            // Signed in 
            if (result != null) {
                window.location = 'login.html'; //After successful login, user will be redirected to home.html
            }

            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

const singnIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result);
            localStorage.setItem("UserName", email);
            // Signed in
            if (result != null) {
                window.location = 'index.html'; //After successful login, user will be redirected to home.html
            }

            // ...
        })
        .catch((error) => {
            alert("Email Address or Password is invalid");
            console.log(error.code);
            console.log(error.message)
        });


}
