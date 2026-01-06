let students = [];

function addStudent() {
    const name = document.getElementById("name").value;
    const score = Number(document.getElementById("score").value);

    if (name === "" || isNaN(score)) {
        alert("Please enter valid student name and score.");
        return;
    }

    students.push({ name, score });

    document.getElementById("name").value = "";
    document.getElementById("score").value = "";
}

function generateReport() {
    if (students.length === 0) {
        alert("No student data available.");
        return;
    }

    let total = 0;
    let highest = students[0].score;
    let lowest = students[0].score;

    students.forEach(s => {
        total += s.score;
        if (s.score > highest) highest = s.score;
        if (s.score < lowest) lowest = s.score;
    });

    const average = (total / students.length).toFixed(2);

    let listHTML = "<ul>";
    students.forEach(s => {
        listHTML += `<li>${s.name} - ${s.score}</li>`;
    });
    listHTML += "</ul>";

    document.getElementById("output").classList.remove("hidden");
    document.getElementById("summary").innerText =
        `Average Score: ${average} | Highest: ${highest} | Lowest: ${lowest}`;

    document.getElementById("studentList").innerHTML = listHTML;
}
