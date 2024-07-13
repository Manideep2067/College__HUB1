// script.js

document.addEventListener("DOMContentLoaded", () => {
    const students = [
        { id: 1, name: "Student1" },
        { id: 2, name: "Student2" },
        { id: 3, name: "Student3" },
        { id: 4, name: "Student4" },
        { id: 5, name: "Student5" },
        { id: 6, name: "Student6" },
        { id: 7, name: "Student7" },
        { id: 8, name: "Student8" },
        // Add more students as needed
    ];

    const tbody = document.getElementById("attendance-tbody");

    students.forEach(student => {
        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.textContent = student.id;
        tr.appendChild(tdId);

        const tdName = document.createElement("td");
        tdName.textContent = student.name;
        tr.appendChild(tdName);

        const tdPresent = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = `attendance_${student.id}`;
        checkbox.value = "present";
        tdPresent.appendChild(checkbox);
        tr.appendChild(tdPresent);

        tbody.appendChild(tr);
    });

    document.getElementById("attendance-form").addEventListener("submit", event => {
        event.preventDefault();
        const attendanceData = students.map(student => {
            const checkbox = document.querySelector(`input[name=attendance_${student.id}]`);
            return {
                id: student.id,
                name: student.name,
                present: checkbox.checked
            };
        });

        console.log("Attendance Data:", attendanceData);
        alert("Attendance submitted successfully!");
    });
});
