"use strict";
// Milestone part 3
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
// Function to generate a unique identifier
// // Function to save content to localStorage
// function saveContent() {
//   const editableElements = document.querySelectorAll('[contenteditable="true"]');
//   editableElements.forEach(el => {
//       localStorage.setItem(el.id, el.innerHTML);
//   });
// }
// // Restore content from localStorage
// function restoreContent() {
//   const editableElements = document.querySelectorAll('[contenteditable="true"]');
//   editableElements.forEach(el => {
//       const savedContent = localStorage.getItem(el.id);
//       if (savedContent) {
//           el.innerHTML = savedContent;
//       }
//   });
// }
// // Event listener for the Save button
// document.getElementById('saveBtn')?.addEventListener('click', saveContent);
// // Call restoreContent on page load to initialize content
// document.addEventListener('DOMContentLoaded', restoreContent);
// document.addEventListener('DOMContentLoaded', () => {
//   // Select the theme switcher button
//   const themeSwitcher = document.getElementById('themeSwitcher') as HTMLButtonElement;
//   // Check if the button exists
//   if (themeSwitcher) {
//       // Add an event listener to toggle the theme
//       themeSwitcher.addEventListener('click', () => {
//           // Toggle the 'theme-dark' class on the body
//           document.body.classList.toggle('theme-dark');
//       });
//   }
// });
// document.addEventListener('DOMContentLoaded', () => {
//   const editableElements = document.querySelectorAll('[contenteditable="true"]');
//   editableElements.forEach(element => {
//       element.addEventListener('focusout', () => {
//           const links = element.querySelectorAll('a');
//           links.forEach(link => {
//               // Ensure the href attribute is updated with the new value after editing
//               link.setAttribute('href', link.textContent?.trim() || '');
//           });
//       });
//       element.addEventListener('click', (event) => {
//           const target = event.target as HTMLElement;
//           if (target.tagName === 'A') {
//               event.preventDefault();
//               // Get the href attribute and navigate to that URL
//               const url = target.getAttribute('href');
//               if (url) {
//                   window.open(url, '_blank');
//               }
//           }
//       });
//   });
//   // Event listener for the Download Resume button
//   document.getElementById('downloadResume')?.addEventListener('click', () => {
//       window.print(); // Open the print dialog
//   });
// });
// // main.ts
// document.addEventListener('DOMContentLoaded', () => {
//   const editableElements = document.querySelectorAll('[contenteditable="true"]');
//   // Ensuring the href of the links in the editable elements is updated
//   editableElements.forEach(element => {
//       element.addEventListener('focusout', () => {
//           const links = element.querySelectorAll('a');
//           links.forEach(link => {
//               link.setAttribute('href', link.textContent?.trim() || '');
//           });
//       });
//       element.addEventListener('click', (event) => {
//           const target = event.target as HTMLElement;
//           if (target.tagName === 'A') {
//               event.preventDefault();
//               const url = target.getAttribute('href');
//               if (url) {
//                   window.open(url, '_blank');
//               }
//           }
//       });
//   });
//   // Event listener for the Download Resume button
//   document.getElementById('downloadResume')?.addEventListener('click', () => {
//       window.print(); // Open the print dialog
//   });
//   document.addEventListener('DOMContentLoaded', () => {
//     // Generate unique URL based on the name in the editable H1
//     document.getElementById('generateLink')?.addEventListener('click', () => {
//         let userName = (document.getElementById('userName') as HTMLElement).textContent?.trim();
//         if (userName) {
//             // Create a unique URL based on the user’s name
//             const resumeUrl = `${window.location.origin}/resume/${encodeURIComponent(userName)}`;
//             (document.getElementById('resumeLink') as HTMLInputElement).value = resumeUrl;
//         } else {
//             alert('Please enter your name');
//        }
//     });
// });
// // Share Resume button to copy the unique link
// document.getElementById('shareResume')?.addEventListener('click', () => {
//     const resumeLink = (document.getElementById('resumeLink') as HTMLInputElement).value;
//     if (resumeLink) {
//         navigator.clipboard.writeText(resumeLink).then(() => {
//             alert('Resume link copied to clipboard');
//         }, () => {
//             alert('Failed to copy the link');
//         });
//     } else {
//         alert('Generate the link first');
//     }
// });
// });
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
//Add milestone 5 functionality
// Retrieve the form values
const userName = (_c = document.getElementById("name")) === null || _c === void 0 ? void 0 : _c.value;
const email = (_d = document.getElementById("email")) === null || _d === void 0 ? void 0 : _d.value;
const phone = (_e = document.getElementById("phone")) === null || _e === void 0 ? void 0 : _e.value;
const profilePic = (_f = document.getElementById("profile-pic")) === null || _f === void 0 ? void 0 : _f.value; // Usually this is a file path
const degree = (_g = document.getElementById("degree")) === null || _g === void 0 ? void 0 : _g.value;
const institution = (_h = document.getElementById("institution")) === null || _h === void 0 ? void 0 : _h.value;
const graduationDate = (_j = document.getElementById("graduation-date")) === null || _j === void 0 ? void 0 : _j.value;
const jobTitle = (_k = document.getElementById("job-title")) === null || _k === void 0 ? void 0 : _k.value;
const company = (_l = document.getElementById("company")) === null || _l === void 0 ? void 0 : _l.value;
const startDate = (_m = document.getElementById("start-date")) === null || _m === void 0 ? void 0 : _m.value;
const endDate = (_o = document.getElementById("end-date")) === null || _o === void 0 ? void 0 : _o.value;
// Handling skills - concatenate all skills in a comma-separated format
const skillsElements = document.querySelectorAll("#skills-container input[type='text']");
const skills = Array.from(skillsElements).map(skill => skill.value).join(',');
// Construct the URLSearchParams object
const queryParams = new URLSearchParams({
    name: userName,
    email: email,
    phone: phone,
    profilePic: profilePic, // Typically, file paths are not sent as query params, so handle this accordingly.
    degree: degree,
    institution: institution,
    graduationDate: graduationDate,
    jobTitle: jobTitle,
    company: company,
    startDate: startDate,
    endDate: endDate,
    skills: skills,
});
// Generate the unique URL
const uniqueUrl = `${window.location.origin}?${queryParams.toString()}`;
// Set up the click event listener for the share button
const shareLinkButton = document.getElementById("share-btn");
if (shareLinkButton) {
    shareLinkButton.addEventListener("click", () => {
        window.open(uniqueUrl, "_blank");
    });
    // Update the browser history to include the query parameters in the current URL
    window.history.replaceState(null, '', `?${queryParams.toString()}`);
}
//download pdf functionality
function printResume() {
    window.print();
}
// Add event listener for "Download Resume" button
(_p = document.querySelector(".download-btn")) === null || _p === void 0 ? void 0 : _p.addEventListener("click", () => {
    printResume();
});
