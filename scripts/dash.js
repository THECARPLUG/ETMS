document.addEventListener('DOMContentLoaded', ()=>{

    const buttons = document.querySelectorAll('button.center')

    const togglesSlide = document.getElementById("togglesSlide")[0]

    function redirectTo(url) {
        window.location.href = url;
    }

    function slideTo(tab){
        togglesSlide.style.transform = `translateY(${tab}00%)`
    }

    for(var i = 0; i < buttons.length ; i++){
        buttons[i].addEventListener('onclick', ()=>{
                slideTo(i)
        })
    }



})