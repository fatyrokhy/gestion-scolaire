document.addEventListener("DOMContentLoaded", async function() {
    retour();
    const coursProfesseur = [
    { classe: "L1 Informatique", date: "2024-02-10", heure: "08:00 - 10:00", etudiants: ["Ali", "Fatou", "Oumar"] },
    { classe: "L2 Génie Logiciel", date: "2024-02-12", heure: "10:30 - 12:30", etudiants: ["Moussa", "Awa", "Khadija"] },
    { classe: "L3 Data Science", date: "2024-02-15", heure: "14:00 - 16:00", etudiants: ["Demba", "Sophie", "Issa"] }
];

const tableBody = document.getElementById("coursProfTable");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const studentList = document.getElementById("studentList");

coursProfesseur.forEach((cours, index) => {
    const row = document.createElement("tr");
    row.classList.add("hover:bg-gray-100");

    row.innerHTML = `
        <td class="py-3 px-4">${cours.classe}</td>
        <td class="py-3 px-4">${cours.date}</td>
        <td class="py-3 px-4">${cours.heure}</td>
        <td class="py-3 px-4">
            <button onclick="showStudents(${index})" class="bg-blue-600 text-white px-3 py-1 rounded">Voir</button>
        </td>
    `;

    tableBody.appendChild(row);
});

function showStudents(index) {
    const cours = coursProfesseur[index];
    modalTitle.innerText = `Étudiants de ${cours.classe}`;
    studentList.innerHTML = "";

    cours.etudiants.forEach(etudiant => {
        const li = document.createElement("li");
        li.innerText = etudiant;
        studentList.appendChild(li);
    });

    modal.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
}
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
