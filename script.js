const studentIDElement = document.getElementById("inputID");
const fnameElement = document.getElementById("inputFirst");
const lnameElement = document.getElementById("inputLast");
const midInitialElement = document.getElementById("inputMI");
const birthDateElement = document.getElementById("inputBirth");
const genElement = document.getElementById("inputGender");
const addressElement = document.getElementById("inputAddress");
const contactNumElement = document.getElementById("inputContact");
const courseElement = document.getElementById("inputCourse");

const btnSubmitElement = document.getElementById("btnSubmit");
const labelNumElement = document.getElementById("outputNum");

btnSubmitElement.addEventListener("click", () => {
    let studentId = studentIDElement.value;

    let fullName = fnameElement.value + " " + midInitialElement.value + " " + lnameElement.value;

    let birthDate = new Date(birthDateElement.value);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    let gender = genElement.value;
    let address = addressElement.value;
    let contactNum = contactNumElement.value;
    let course = courseElement.value;

    labelNumElement.innerHTML = "Student ID: " + studentId + "<br>Student Name: " + fullName + "<br>Age: " + age + "<br>Gender: " + gender + "<br>Address: " + address + "<br>Contact Number: " + contactNum + "<br>Course: " + course;
})