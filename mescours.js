const cours = [
    { nom: "Programmation Web", prof: "M. Diallo", date: "2024-02-10", heure: "08:00 - 10:00" },
    { nom: "Math", prof: "Mme Ndiaye", date: "2024-02-11", heure: "10:30 - 12:30" },
    { nom: "Algorithme", prof: "M. Faye", date: "2024-02-12", heure: "14:00 - 16:00" }
];

const tableBody = document.getElementById("coursTable");

cours.forEach(c => {
    const row = document.createElement("tr");
    row.classList.add("hover:bg-gray-100");

    row.innerHTML = `
        <td class="py-3 px-4">${c.nom}</td>
        <td class="py-3 px-4">${c.prof}</td>
        <td class="py-3 px-4">${c.date}</td>
        <td class="py-3 px-4">${c.heure}</td>
    `;

    tableBody.appendChild(row);
});
 function retour() {
    const user=JSON.parse(localStorage.getItem('user')) ;
    if (!user) {
        window.location.href='connexion.html';
    }
 }

const deconnect=document.querySelector("#logout");
 deconnect.addEventListener('click',()=>{
     localStorage.removeItem("user");
     window.location.href = "connexion.html"; 
 });
