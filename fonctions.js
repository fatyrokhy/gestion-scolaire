const form=document.querySelector("#form");
// pour connexion
form.addEventListener('submit',async (event)=>{

event.preventDefault();
let isValid=true;
const email=document.querySelector("#mail").value;
const pass=document.querySelector("#pass").value;

let erreurMail = document.querySelector("#error-mail")
erreurMail.textContent = "";
let erreurPass= document.querySelector("#error-pass")
erreurPass.textContent = "";
let erreurPassword=document.querySelector("#error-login");

if (!pass.trim()) {
    erreurPass.textContent = "Le mot de pass  est requis.";
     isValid = false;
 } else if (!/^\d+$/.test(pass)) {
    erreurPass.textContent = "Veuillez entrer un pass valide (chiffres uniquement).";
    isValid=false;
} else if (pass.length !=3) {
     erreurPass.textContent = "Le mot de pass doit contenir exactement 3 chiffres.";
     isValid = false;
 }
 const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (!email.trim()) {
                        erreurMail.textContent = "Email obligatoire*.";
                        isValid = false;
                    } else if (!emailRegex.test(email)) {
                        erreurMail.textContent = "Veuillez entrer une adresse email valide.";
                        isValid = false;
                }
if (!isValid) {
    return;
}

try {
    const response = await fetch("data.json");
    const data = await response.json();
    const users = data.user;
    const user = users.find(user => user.login === email && user.password === parseInt(pass));
    
    if (!user) {
        erreurPassword.textContent = "Email ou mot de passe incorrect.";
        // window.location.href = "connexion.html"; 
    }
    console.log(user);
    
    if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        switch (user.role) {
        case "admin":
            window.location.href = "listeclasse.html";
            break;
        case "etudiant":
            window.location.href = "mescours.html";
            break;
        case "proff":
            window.location.href = "coursproff.html";
            break;
        default:
            erreurPassword.textContent = "Rôle inconnu.";
    }
}

} catch (error) {
    console.error("Erreur lors du chargement des utilisateurs:", error);
    erreurPassword.textContent = "Erreur interne, veuillez réessayer plus tard.";
}
});

    // Pour se déconnecter
    const deconnect=document.querySelector("#logout");
    deconnect.addEventListener('click',()=>{
        // alert("deconnecte");
        localStorage.removeItem("user");
        window.location.href = "connexion.html"; 
    });



