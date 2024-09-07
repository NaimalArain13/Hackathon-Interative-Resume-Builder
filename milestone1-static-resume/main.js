"use strict";
const toggleButtonSkills = document.getElementById("show-skills");
const skills = document.querySelector(".skills ul");
toggleButtonSkills === null || toggleButtonSkills === void 0 ? void 0 : toggleButtonSkills.addEventListener("click", () => {
    if ((skills === null || skills === void 0 ? void 0 : skills.style.display) === "none") {
        skills.style.display = "block";
        toggleButtonSkills.textContent = "Hide Skills";
    }
    else {
        skills.style.display = "none";
        toggleButtonSkills.textContent = "Show Skills";
    }
});
const toggleButtonCertificate = document.getElementById("show-certification");
const certificate = document.querySelector(".certification ul");
toggleButtonCertificate === null || toggleButtonCertificate === void 0 ? void 0 : toggleButtonCertificate.addEventListener("click", () => {
    if ((certificate === null || certificate === void 0 ? void 0 : certificate.style.display) === "none") {
        certificate.style.display = "block";
        toggleButtonCertificate.textContent = "Hide Certification";
    }
    else {
        certificate.style.display = "none";
        toggleButtonCertificate.textContent = "Show Certification";
    }
});
