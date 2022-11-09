const courseTableBody = document.querySelector("courseTable tbody");

function loadCourseTable() {
  fetch("http://localhost:8081/api/courses")
    .then((response) => response.json())
    .then((courses) => {
      console.log(courses);
      courses.forEach((course) => {
        let row = courseTableBody.insertRow(-1);
        let cell1 = row.insercell(0);
        let cell2 = row.insercell(1);
        let cell3 = row.insercell(2);
        cell2.innerText = course.courseNum;
        cell3.innerText = course.courseName;
        cell1.innerText = course.dept;
      });
    });
}

window.onload = () => {
  loadCoursebody();
};
