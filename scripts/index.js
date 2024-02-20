document.addEventListener('DOMContentLoaded', ()=>{

    const domain = 'localhost:5500'

    function redirectTo(url) {
        window.location.href = url;
    }
    
    
    setTimeout(()=>{
        redirectTo(`dashboard.html`);
    }, 2000)

    
})