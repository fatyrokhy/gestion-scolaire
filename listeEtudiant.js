document.addEventListener("DOMContentLoaded", async function() {
    retour()
    const etudiant = await fetch("data.json");
    const data = await etudiant.json();

    function afficherEtudiants() {
        const tableEtudiant = document.getElementById("tableEtudiant");
    data.etudiant.forEach(etudiant => {
        const classe = data.classe.find(c => c.id === etudiant.classe_id)?.classe || "Inconnu";
        const row = `<tr class='border border-gray-300'>
            <td class='py-3 px-4'>${etudiant.nom}</td>
            <td class='py-3 px-4'>${etudiant.prenom}</td>
            <td class='py-3 px-4'>${etudiant.age}</td>
            <td class='py-3 px-4'>${classe}</td>
            <td class='py-3 px-4'>${etudiant.telephone}</td>
            <td class='py-3 px-4'>
            <button onclick="supprimer45(${etudiant.id})" class=" text-blue-400 text-lg"><i class="ri-edit-box-line"></i></button>
            <button onclick="supprimer(this)" id="sup" class=" text-red-400 text-lg"><i class="ri-delete-bin-6-line"></i> </button>
            </td>
        </tr>`;
        tableEtudiant.innerHTML += row;
    });
    } 

        window.supprimer = function(button) {
        button.closest("tr").remove(); 
        };

    afficherEtudiants();
    
});

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
 }
