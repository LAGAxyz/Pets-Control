
const contenedorIMG = document.getElementById("contenedorIMG");

const imagenAleatoria = ()=> {
    let image = Math.floor(Math.random() * (5 - 1)) + 1;
    
    let img = document.createElement("img");
    
    if (image == 1){img.src = "../assets/img/fondos/error-01.png";}    
    if (image == 2){img.src = "../assets/img/fondos/error-02.png";}    
    if (image == 3){img.src = "../assets/img/fondos/error-03.png";}    
    if (image == 4){img.src = "../assets/img/fondos/error-04.png";}

    img.alt = "Página no encontrada";

    contenedorIMG.appendChild(img);
}

imagenAleatoria();
