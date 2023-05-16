//função para registro
async function registerUser(email, password, event){
    //evitar eventos padrões
    event.preventDefault();

    try{
        //faz o processo de autenticação passando por email e senha
        const userCredital = await auth.createUserWithEmailAndPassword( email, password);
        const user = userCredital.user;

        //insere os dados no banco de dados, acessando a coleção users
        await db.collection("users").doc(user.uid).set(
            {
                email : email,
                vid: user.vid
            }
        );

            

        
    } catch (error) {
        console.log(error);
    }
}

//pegar os dados da fonm e inserir na função
document.getElementById("registerButton").addEventListener("click", async (event)=>{
    //pega os dados do form
    const email = document.getElementById("email").ariaValueMax;
    const password = document.getElementById("password").ariaValueMax;
    const confirmPassword = document.getElementById("confirmPassword").value;

    //valida se são iguais
    if(passwird !== confirmPassword){
        alert("Senhas não são iguais");
    }
    //insere os dados da função
    registerUser(email, password);
});