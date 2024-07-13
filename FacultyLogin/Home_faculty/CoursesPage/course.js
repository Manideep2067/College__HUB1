// courses.js

document.addEventListener("DOMContentLoaded", () => {
    const departments = {
        "Computer Science Engineering": [
            "Introduction to Programming",
            "Data Structures",
            "Algorithms",
            "Operating Systems",
            "Database Management Systems",
            "Computer Networks",
            "Software Engineering",
            "Artificial Intelligence",
            "Machine Learning",
            "Web Technologies"
        ],
        "Mechanical Engineering": [
            "Engineering Mechanics",
            "Thermodynamics",
            "Fluid Mechanics",
            "Manufacturing Processes",
            "Machine Design",
            "Heat Transfer",
            "Dynamics of Machinery",
            "Automobile Engineering",
            "Robotics",
            "CAD/CAM"
        ],
        "Electrical Engineering": [
            "Circuit Theory",
            "Electromagnetic Fields",
            "Electrical Machines",
            "Power Systems",
            "Control Systems",
            "Power Electronics",
            "Digital Signal Processing",
            "Microprocessors",
            "High Voltage Engineering",
            "Renewable Energy Systems"
        ],
        "Civil Engineering": [
            "Engineering Surveying",
            "Structural Analysis",
            "Concrete Technology",
            "Geotechnical Engineering",
            "Hydraulics",
            "Transportation Engineering",
            "Environmental Engineering",
            "Construction Management",
            "Steel Structures",
            "Water Resources Engineering"
        ],
        "Electronics and Communication Engineering": [
            "Analog Electronics",
            "Digital Electronics",
            "Communication Systems",
            "Signal Processing",
            "VLSI Design",
            "Embedded Systems",
            "Microcontrollers",
            "Wireless Communication",
            "Antenna and Wave Propagation",
            "Optical Communication"
        ]
    };

    const departmentsDiv = document.getElementById("departments");

    Object.keys(departments).forEach((department, index) => {
        const departmentDiv = document.createElement("div");
        departmentDiv.className = "department";

        const departmentHeader = document.createElement("h3");
        departmentHeader.textContent = department;
        departmentDiv.appendChild(departmentHeader);

        const courseList = document.createElement("ul");
        courseList.className = "course-list";

        departments[department].forEach(course => {
            const courseItem = document.createElement("li");
            courseItem.textContent = course;
            courseList.appendChild(courseItem);
        });

        departmentDiv.appendChild(courseList);
        departmentsDiv.appendChild(departmentDiv);
    });
});
