var temperatureCondition = null;
var userData = {}
auth.onAuthStateChanged(user=> {
    console.log(user,'userrr')
    if(user) {
        firestore.collection('user').doc(user.uid).get().then(
            (doc)=>{
                console.log(doc.data(),'user data')
                userData = doc.data()
                temperatureCondition = userData.temperatureCondition
                console.log(temperatureCondition,' temp condtion 1')
                setupUI(user)
            }
        )
    } else {
        setupUI(user)
    }
});

let loginBtn = document.getElementById('login-btn')
if(loginBtn){
    loginBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log(email, password)
        auth.signInWithEmailAndPassword(email, password).then((cred)=> {
            console.log(cred)
            // signInForm.reset();
            // window.location.href = "/home.html"
        });
    });
}

let logoutBtn = document.getElementById('logout-btn')
if(logoutBtn){
    console.log(logoutBtn)
    logoutBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        auth.signOut()
        console.log(auth.currentUser, window.location.href)
        window.location.href = "https://dep-partners.web.app"
    });

}

const setupUI = (user)=>{
    if(user){
        document.getElementById('login-container').style.display = 'none'
        document.getElementById('home-container').style.display = 'block'
    }else{
        document.getElementById('login-container').style.display = 'block'
        document.getElementById('home-container').style.display = 'none'
    }
}
