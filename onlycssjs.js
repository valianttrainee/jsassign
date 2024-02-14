const navbarToggle=document.querySelector(".navbar ul");
const toggleButton=document.querySelector('.navbar-toggle');
toggleButton.addEventListener('click',()=>{
    const visibility=navbarToggle.getAttribute('data-visible');
    if(visibility==="false"){
        navbarToggle.setAttribute("data-visible",true);
        toggleButton.setAttribute("aria-expanded",true);
    }else if(visibility==="true"){
        navbarToggle.setAttribute("data-visible",false);
        toggleButton.setAttribute("aria-expanded",false);
    }
});