function submitGrades() {
    const studentIds = document.querySelectorAll('.student-id');
    const studentNames = document.querySelectorAll('.student-name');
    const studentGrades = document.querySelectorAll('.student-grade');
    const grades = JSON.parse(localStorage.getItem('grades')) || [];

    studentIds.forEach((id, index) => {
        const grade = {
            studentId: id.value,
            name: studentNames[index].value,
            grade: studentGrades[index].value
        };
        grades.push(grade);
    });

    localStorage.setItem('grades', JSON.stringify(grades));
    alert('Grades submitted successfully!');
}
