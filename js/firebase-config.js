const firebaseConfig = {
    apiKey: "AIzaSyAwsV-DSqjPfZYG1UFutDY9cR-XoJAeS88",
    authDomain: "dent-lab-ads-664f0.firebaseapp.com",
    projectId: "dent-lab-ads-664f0",
    storageBucket: "dent-lab-ads-664f0.appspot.com",
    messagingSenderId: "211016071752",
    appId: "1:211016071752:web:4f48884edbbe39bd0ef67d",
    measurementId: "G-RGZPVLRE0P"
};
//inicializa meu site com o firebase
firebase.initializeApp(firebaseConfig);


// cria o objeto da autenticação para que eu possa usar seua metodos
const auth = firebase.auth();
//cria o objeto do BD Firestore para que eu possa usar seus métodos
const db = firebase.firestore();