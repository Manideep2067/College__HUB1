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
