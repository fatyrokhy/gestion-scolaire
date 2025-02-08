document.addEventListener("DOMContentLoaded", async function() {
    retour()
    const etudiant = await fetch("data.json");
    const data = await etudiant.json();

    function afficherClass() {
        const tableClass = document.getElementById("tableClass");
    data.classe.forEach(classe => {
        // const classe = data.classe.find(c => c.id === etudiant.classe_id)?.classe || "Inconnu";
        const row = `<tr class='border border-gray-300'>
            <td class='py-3 px-4'>${classe.classe}</td>
            <td class='py-3 px-4'>${classe.filiere}</td>
            <td class='py-3 px-4'>${classe.niveau}</td>
            <td class='py-3 px-4'>
            <button onclick="supprimer45(${classe.id})" class=" text-blue-400 text-lg"><i class="ri-edit-box-line"></i></button>
            <button onclick="supprimer(this)" id="sup" class=" text-red-400 text-lg"><i class="ri-delete-bin-6-line"></i> </button>
            </td>
        </tr>`;
        tableClass.innerHTML += row;
    });
    } 

        window.supprimer = function(button) {
        button.closest("tr").remove(); 
        };

        afficherClass();
    });  
    const popup=document.getElementById('popup');
     const sort=document.getElementById("popupForm");
popup.addEventListener('click',()=>{
    sort.classList.remove("hidden");
});  

//     function popup() {
// }

// 

 // Pour se déconnecter
 const deconnect=document.querySelector("#logout");
 deconnect.addEventListener('click',()=>{
     localStorage.removeItem("user");
     window.location.href = "connexion.html"; 
 });

 function retour() {
    const user=JSON.parse(localStorage.getItem('user')) ;
    if (!user) {
        window.location.href='connexion.html';
    }
 };
 const closePopup=document.getElementById('closePopup');
closePopup.addEventListener('click',()=>{
       sort.classList.add("hidden");    
});
