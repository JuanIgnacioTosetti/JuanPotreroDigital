function vistaNocturna() {
    document.body.style.backgroundColor = "black";
    document.getElementById("header").style.backgroundColor = "black";
    document.getElementById("header").style.color = "#90ffe9";
    document.getElementById("nav").style.backgroundColor = "black";
    document.getElementById("nav").style.color = "black";
    document.getElementById("text").style.color = "whitesmoke";
    
    document.getElementById("preparacion").style.color = "whitesmoke";
    document.getElementById("ingredientes").style.color = "whitesmoke";
    document.getElementById("footer").style.backgroundColor = "black";

    document.getElementById("imgs").style.backgroundColor ="#254242";
}

function restaurarEstilos() {
    
    document.body.style.backgroundColor = "#f6eddc";
    document.getElementById("header").style.backgroundColor = "#254242";
    document.getElementById("header").style.color = "#f6eddc";
    document.getElementById("nav").style.backgroundColor = "#254242";
    document.getElementById("nav").style.color = "#f6eddc";
    document.getElementById("text").style.color = "black";
    
    document.getElementById("preparacion").style.color = "black";
    document.getElementById("ingredientes").style.color = "black";
    document.getElementById("footer").style.backgroundColor = "#586875";

    document.getElementById("imgs").style.backgroundColor ="#e3e5d7";
}


function mostrarInfo(){
    alert('Juan Ignacio Tosetti, La plata, Buenos Aires, Argentina')
}