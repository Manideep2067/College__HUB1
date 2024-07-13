// script.js
document.addEventListener('DOMContentLoaded', function() {
    const studentRecordsBody = document.getElementById('student-records-body');
    
    // Sample student records data (to be replaced with real data fetched from backend)
    const studentRecords = [
        { id: 1, name: 'John Doe', course: 'Computer Science', attendance: '90%', grades: 'A' },
        { id: 2, name: 'Jane Smith', course: 'Mathematics', attendance: '85%', grades: 'B+' },
        // Add more student records here
    ];

    // Populate student records table
    studentRecords.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.attendance}</td>
            <td>${student.grades}</td>
        `;
        studentRecordsBody.appendChild(row);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/api/students')
        .then(response => response.json())
        .then(data => {
            const featuresSection = document.getElementById('features-section');
            const studentList = document.createElement('ul');
            data.forEach(student => {
                const listItem = document.createElement('li');
                listItem.textContent = `${student.name} - ${student.course}`;
                studentList.appendChild(listItem);
            });
            featuresSection.appendChild(studentList);
        })
        .catch(error => console.error('Error fetching students:', error));
});
