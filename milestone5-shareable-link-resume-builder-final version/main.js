"use strict";
// Milestone part 3
var _a, _b, _c;
//Add milestone 5 functionality
// Function to generate a unique identifier
function generateUniqueId() {
    return 'resume-' + new Date().getTime(); // Unique based on timestamp
}
// Function to save resume data to local storage
function saveResumeData(uniqueId, resumeData) {
    localStorage.setItem(uniqueId, JSON.stringify(resumeData));
}
// Function to generate a shareable URL
function generateShareableURL(uniqueId) {
    const baseUrl = window.location.origin; // Base URL of the site
    return `${baseUrl}/resume.html?resumeId=${uniqueId}`; // Example URL: username.vercel.app/resume.html?resumeId=resume-123456789
}
function createResume() {
    const uniqueId = generateUniqueId();
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const degreeElement = document.getElementById('degree');
    const institutionElement = document.getElementById('institution');
    const graduationDateElement = document.getElementById('graduation-date');
    const jobTitleElement = document.getElementById('job-title');
    const companyElement = document.getElementById('company');
    const startDateElement = document.getElementById('start-date');
    const endDateElement = document.getElementById('end-date');
    if (!nameElement || !emailElement || !phoneElement || !degreeElement || !institutionElement ||
        !graduationDateElement || !jobTitleElement || !companyElement || !startDateElement || !endDateElement) {
        alert("Please make sure all form fields are filled out correctly.");
        return;
    }
    const resumeData = {
        name: nameElement.value,
        email: emailElement.value,
        phone: phoneElement.value,
        degree: degreeElement.value,
        institution: institutionElement.value,
        graduationYear: graduationDateElement.value,
        jobTitle: jobTitleElement.value,
        company: companyElement.value,
        startDate: startDateElement.value,
        endDate: endDateElement.value,
        skills: Array.from(document.querySelectorAll('#skills-container input')).map(input => input.value),
    };
    saveResumeData(uniqueId, resumeData);
    const shareableUrl = generateShareableURL(uniqueId);
    alert(`Your resume URL: ${shareableUrl}`);
}
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    const urlParams = new URLSearchParams(window.location.search);
    const uniqueId = urlParams.get('resumeId');
    if (uniqueId && uniqueId.startsWith('resume-')) {
        const resumeData = JSON.parse(localStorage.getItem(uniqueId) || '{}');
        if (resumeData) {
            const displayName = document.getElementById('display-name');
            const displayEmail = document.getElementById('display-email');
            const displayPhone = document.getElementById('display-phone');
            const displayDegree = document.getElementById('display-degree');
            const displayInstitution = document.getElementById('display-institution');
            const displayGraduationDate = document.getElementById('display-graduation-date');
            const displayJobTitle = document.getElementById('display-job-title');
            const displayCompany = document.getElementById('display-company');
            const displayStartDate = document.getElementById('display-start-date');
            const displayEndDate = document.getElementById('display-end-date');
            const displaySkills = document.getElementById('display-skill-list');
            if (displayName)
                displayName.innerText = resumeData.name || '';
            if (displayEmail)
                displayEmail.innerText = resumeData.email || '';
            if (displayPhone)
                displayPhone.innerText = resumeData.phone || '';
            if (displayDegree)
                displayDegree.innerText = resumeData.degree || '';
            if (displayInstitution)
                displayInstitution.innerText = resumeData.institution || '';
            if (displayGraduationDate)
                displayGraduationDate.innerText = resumeData.graduationYear || '';
            if (displayJobTitle)
                displayJobTitle.innerText = resumeData.jobTitle || '';
            if (displayCompany)
                displayCompany.innerText = resumeData.company || '';
            if (displayStartDate)
                displayStartDate.innerText = resumeData.startDate || '';
            if (displayEndDate)
                displayEndDate.innerText = resumeData.endDate || '';
            if (displaySkills) {
                displaySkills.innerHTML = '';
                (_a = resumeData.skills) === null || _a === void 0 ? void 0 : _a.forEach((skill) => {
                    const skillItem = document.createElement('li');
                    skillItem.textContent = skill;
                    displaySkills.appendChild(skillItem);
                });
            }
        }
        else {
            console.error('Resume data not found.');
        }
    }
});
// Add More Skills Logic
(_a = document.getElementById("add-skill")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    var _a;
    const firstSkillInput = document.querySelector("#skills-container input");
    if (!firstSkillInput || !firstSkillInput.value.trim()) {
        alert("Please fill in the first skill before adding more.");
        return;
    }
    const skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.placeholder = "Skill";
    skillInput.required = true;
    (_a = document.getElementById("skills-container")) === null || _a === void 0 ? void 0 : _a.appendChild(skillInput);
});
// Event Listener for "Generate Resume" button
(_b = document.getElementById("resume-form")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", (e) => {
    var _a;
    e.preventDefault();
    if (!validateFormFields()) {
        return;
    }
    // Capture form data
    const userName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const degree = document.getElementById("degree").value;
    const institution = document.getElementById("institution").value;
    const graduationDate = document.getElementById("graduation-date").value;
    const jobTitle = document.getElementById("job-title").value;
    const company = document.getElementById("company").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    // Display other dynamic content
    document.getElementById("display-name").textContent = userName;
    document.getElementById("display-email").textContent = email;
    document.getElementById("display-phone").textContent = phone;
    document.getElementById("display-degree").textContent = degree;
    document.getElementById("display-institution").textContent = institution;
    document.getElementById("display-graduation-date").textContent = graduationDate;
    document.getElementById("display-job-title").textContent = jobTitle;
    document.getElementById("display-company").textContent = company;
    document.getElementById("display-start-date").textContent = startDate;
    document.getElementById("display-end-date").textContent = endDate;
    // Handle Profile Picture
    const profilePic = (_a = document.getElementById("profile-pic").files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePic) {
        const reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            document.getElementById("display-profile-pic").src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(profilePic);
    }
    // Collect and display skills
    const skillInputs = document.querySelectorAll("#skills-container input");
    const skills = [];
    skillInputs.forEach(input => {
        if (input.value.trim()) {
            skills.push(input.value);
        }
    });
    const displaySkills = document.getElementById("display-skill-list");
    if (displaySkills) {
        displaySkills.innerHTML = "";
        skills.forEach(skill => {
            const skillItem = document.createElement("li");
            skillItem.textContent = skill;
            displaySkills.appendChild(skillItem);
        });
    }
});
// Form Validation
function validateFormFields() {
    let isValid = true;
    let errorMessage = "";
    //capture Input Fields
    const userName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const degree = document.getElementById("degree").value;
    const institution = document.getElementById("institution").value;
    const graduationDate = document.getElementById("graduation-date").value;
    const jobTitle = document.getElementById("job-title").value;
    const company = document.getElementById("company").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    //validate user
    if (!userName) {
        isValid = false;
        errorMessage += "Name is required.\n";
    }
    //validate user email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        errorMessage += "Valid email is required.\n";
    }
    //validate user phone number
    const phonePattern = /^\d{10,15}$/;
    if (!phonePattern.test(phone)) {
        isValid = false;
        errorMessage += "Valid phone number is required.\n";
    }
    //validate user degree
    if (!degree) {
        isValid = false;
        errorMessage += "Degree is required.\n";
    }
    //validate institution
    if (!institution) {
        isValid = false;
        errorMessage += "Institution is required.\n";
    }
    //validate date
    if (!graduationDate) {
        isValid = false;
        errorMessage += "Graduation year is required.\n";
    }
    //validate job title
    if (!jobTitle) {
        isValid = false;
        errorMessage += "Job Title is required.\n";
    }
    //validate company
    if (!company) {
        isValid = false;
        errorMessage += "Company is required.\n";
    }
    //validate start date
    if (!startDate) {
        isValid = false;
        errorMessage += "Start date is required.\n";
    }
    //validate end date
    if (!endDate) {
        isValid = false;
        errorMessage += "End date is required.\n";
    }
    //validate skills 
    const skillInputs = document.querySelectorAll("#skills-container input");
    if (skillInputs.length === 0 || !skillInputs[0].value.trim()) {
        isValid = false;
        errorMessage += "At least one skill is required.\n";
    }
    //check if there is error show alert
    if (errorMessage) {
        alert(errorMessage);
    }
    //otherwise return ture and generate form
    return isValid;
}
;
// Initialize resumeData with default values
let resumeData = {
    name: "",
    email: "",
    phone: "",
    degree: "",
    institution: "",
    graduationYear: "",
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    skills: [],
};
// Function to save changes made to resume data
function saveChanges(fieldId, value) {
    console.log(`Field edited: ${fieldId}, New Value: ${value}`);
    // Check if the field is an array (skills in this case)
    if (Array.isArray(resumeData[fieldId])) {
        resumeData[fieldId].push(value); // Add new skill to the array
    }
    else {
        resumeData[fieldId] = value; // Update other fields with the new value
    }
    console.log("Updated resume data:", resumeData);
}
// Add an event listener for DOMContentLoaded to ensure elements are available
document.addEventListener("DOMContentLoaded", () => {
    // Capture all elements with contenteditable attribute set to true
    document.querySelectorAll("[contenteditable=true]").forEach((element) => {
        // Add an input event listener to each of these elements
        element.addEventListener("input", (event) => {
            const target = event.target;
            // Call saveChanges with the id of the element and its new innerText
            saveChanges(target.id, target.innerText);
        });
    });
});
function printResume() {
    window.print();
}
// Add event listener for "Download Resume" button
(_c = document.querySelector(".download-btn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    printResume();
});
