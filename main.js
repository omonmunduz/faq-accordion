const title = document.getElementsByClassName("faq-title");
const desc = document.getElementsByClassName("faq-desc");
const arrow = document.getElementsByClassName("arrow");


for(let i=0; i < arrow.length; i++){
    arrow[i].addEventListener('click', (e)=>{displayDescription(e)})
};

function displayDescription(event){
    const index = + event.target.name;
    const selectedArrow = event.target;
    const selectedTitle = title[index];
    const selectedDesc = desc[index];
    
    if(selectedDesc.style.display === "block"){
        selectedDesc.style.display= "none";
        selectedTitle.style.fontWeight = "400";
        selectedArrow.style.transform = "rotate(360deg)"
    }else{
        selectedDesc.style.display = "block";
        selectedTitle.style.fontWeight = "700";
        selectedArrow.style.transform ="rotate(180deg)";
    }
  
};