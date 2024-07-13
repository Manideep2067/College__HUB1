function getGrades() {
    const studentId = document.getElementById('student-id').value;
    const grades = JSON.parse(localStorage.getItem('grades')) || [];

    const studentGrades = grades.filter(grade => grade.studentId === studentId);
    const gradesTbody = document.getElementById('grades-tbody');
    
    gradesTbody.innerHTML = ''; // Clear previous results

    if (studentGrades.length > 0) {
        studentGrades.forEach(grade => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${grade.studentId}</td>
                <td>${grade.name}</td>
                <td>${grade.grade}</td>
            `;
            gradesTbody.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="3">No grades found for Student ID: ${studentId}</td>`;
        gradesTbody.appendChild(row);
    }
}
