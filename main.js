
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

PrevBtn2='firstDate';
function ChangeResBtn(btnId){
    document.getElementById(PrevBtn2).style.backgroundColor="#FCF6F6";
    document.getElementById(PrevBtn2).style.color="#1F1E20";

    document.getElementById(btnId).style.backgroundColor="#1F1E20";
    document.getElementById(btnId).style.color="#FCF6F6";

    PrevBtn2=btnId;


}


PrevBtn3='firstHour';
function ChangeHourBtn(btnId){
    document.getElementById(PrevBtn3).style.backgroundColor="#FCF6F6";
    document.getElementById(PrevBtn3).style.color="#1F1E20";

    document.getElementById(btnId).style.backgroundColor="#1F1E20";
    document.getElementById(btnId).style.color="#FCF6F6";

    PrevBtn3=btnId;


    document.getElementById('time').style.innerHTML='04 - 07 PM';

}




Adults=1;
function addOneAdult(){
    if(Adults<30)
        Adults++;
    document.getElementById('adultCounter').innerText=Adults;
}

function removeOneAdult(){
    if(Adults>1)
        Adults--;
    document.getElementById('adultCounter').innerText=Adults;
}



kids=1;
function addOneKid(){
    if(kids<30)
        kids++;
    document.getElementById('kidsCounter').innerText=kids;
}

function removeOneKid(){
    if(kids>1)
        kids--;
    document.getElementById('kidsCounter').innerText=kids;
}