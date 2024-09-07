//SKILL SECTION TOGGLE BUTTON

//get button element through id
const toggleButtonSkills= document.getElementById("show-skills")

//get the ul element from skills section
const skills = document.querySelector(".skills ul") as HTMLElement

//handling click event
toggleButtonSkills?.addEventListener("click" , ()=>{
    
    //check if the button is not displaying when clicked
    if(skills?.style.display === "none"){
        //toggle it to display the ul items
        skills.style.display = "block"
        //updates the button text from show button to hide button
        toggleButtonSkills.textContent = "Hide Skills"
    }else {
        
        //toggle it to hide the ul items
        skills!.style.display = "none"
        //updates the button text from hide skills to show skills
        toggleButtonSkills.textContent = "Show Skills"
    }
})


//CERTIFICATION SECTION TOGGLE BUTTON

//get the button through id
const toggleButtonCertificate= document.getElementById("show-certification")
//get the ul element from certification section
const certificate = document.querySelector(".certification ul") as HTMLElement

//handling click event
toggleButtonCertificate?.addEventListener("click" , ()=>{

    //check if the button is not displaying when clicked
    if(certificate?.style.display === "none"){
        //toggle it to display the ul items
        certificate.style.display = "block"
        //updates the button text from show certification to hide certification
        toggleButtonCertificate.textContent = "Hide Certification"
    }else {
        //toggle it to hide the ul items
        certificate!.style.display = "none"
        //updates the button text from hide certifications to show certifications
        toggleButtonCertificate.textContent = "Show Certification"
    }
})

