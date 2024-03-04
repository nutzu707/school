
function scrollToThis(sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        console.error("Target element not found.");
    }
}

let PrevBtn = 'about';
function ChangeBtnColor(btnId){
    document.getElementById(PrevBtn).style.backgroundColor="#FCF6F6";
    document.getElementById(PrevBtn).style.color="#1F1E20";
    document.getElementById(PrevBtn).style.textShadow="0px 0px";

    document.getElementById(btnId).style.backgroundColor="#1F1E20";
    document.getElementById(btnId).style.color="#FCF6F6";
    document.getElementById(btnId).style.textShadow="2px 2px rgba(0,0,0,100%)";

    PrevBtn=btnId;
}

