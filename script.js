let totalPoints = 0;
let totalCredits = 0;

document.getElementById("addBtn").addEventListener("click", function () {
    let course = document.getElementById("course").value;
    let credits = parseFloat(document.getElementById("credits").value);
    let grade = parseFloat(document.getElementById("grade").value);

    if (!course || isNaN(credits) || isNaN(grade)) {
        alert("Please fill all fields correctly");
        return;
    }

    totalPoints += grade * credits;
    totalCredits += credits;

    let gpa = totalPoints / totalCredits;

    document.getElementById("gpa").innerText = gpa.toFixed(2);

    let li = document.createElement("li");
    li.innerText = `${course} - ${credits} hrs - Grade: ${grade}`;
    document.getElementById("courseList").appendChild(li);

    document.getElementById("course").value = "";
    document.getElementById("credits").value = "";
    document.getElementById("grade").value = "";
});

document.getElementById("addClassBtn").addEventListener("click", function () {

    let day = document.getElementById("day").value;
    let subject = document.getElementById("subject").value;
    let time = document.getElementById("time").value;

    if (!day || !subject || !time) {
        alert("Please fill all timetable fields");
        return;
    }

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${day}</td>
        <td>${subject}</td>
        <td>${time}</td>
    `;

    document.getElementById("timetableBody").appendChild(row);

    document.getElementById("day").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("time").value = "";
});