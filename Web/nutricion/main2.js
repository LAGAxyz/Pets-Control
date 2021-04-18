
const userPhoto = document.getElementById("userPhoto");
const userName = document.getElementById("userName");

const linkPerfil = document.getElementById("linkPerfil");
const btnSalir = document.getElementById("btnSalir");

const contenedorM2 = document.getElementById("contenedorM2");
const menu2 = document.getElementById("menu2");

firebase.auth().onAuthStateChanged(user=>{
    if(user){
        user.photoURL ? userPhoto.src = user.photoURL : userPhoto.src = "../assets/img/icons/usuario-anonimo.png";
        user.email ? userName.innerText = user.email : userName.innerText = user.displayName;
        userName.removeAttribute("href");
        asignarPerfil(user);
    } else {
        userPhoto.src = "../assets/img/icons/usuario-anonimo.png";
        userName.innerText = "Acceder";
        userName.setAttribute("href", "../acceso/");
        contenedorM2.removeChild(menu2);
    }
});

const asignarPerfil = async (user)=>{
    const query = await firebase.firestore().collection("usuario").get();

    query.docs.forEach((doc)=>{
        if(doc.data().id_usuario == user.uid){
            if(doc.data().tipo_usu == 1){
                linkPerfil.parentElement.removeChild(linkPerfil);
            } else if(doc.data().tipo_usu == 2){
                linkPerfil.setAttribute("href", "../panel/");
            } else if(doc.data().tipo_usu == 3){
                linkPerfil.setAttribute("href", "../panel/");
            }
            return;
        }
    })
};

btnSalir.onclick = ()=>{
    firebase.auth().signOut();
    location.reload();
};

const btnVerPerros = document.getElementById("btnVerPerros");
const btnVerGatos = document.getElementById("btnVerGatos");

btnVerPerros.onclick = ()=> {
    btnVerPerros.classList.remove("btn-outline-success");
    btnVerPerros.classList.add("btn-success");
    btnVerGatos.classList.remove("btn-success");
    btnVerGatos.classList.add("btn-outline-success");

    let gatos = document.getElementsByClassName("gatoCard");
    let perros = document.getElementsByClassName("perroCard");

    for(let i=0; i<gatos.length; i++){
        gatos[i].style.display = "none";
    }

    for(let i=0; i<perros.length; i++){
        perros[i].style.display = "block";
    }
}

btnVerGatos.onclick = ()=> {
    btnVerGatos.classList.remove("btn-outline-success");
    btnVerGatos.classList.add("btn-success");
    btnVerPerros.classList.remove("btn-success");
    btnVerPerros.classList.add("btn-outline-success");

    let gatos = document.getElementsByClassName("gatoCard");
    let perros = document.getElementsByClassName("perroCard");

    for(let i=0; i<gatos.length; i++){
        gatos[i].style.display = "block";
    }

    for(let i=0; i<perros.length; i++){
        perros[i].style.display = "none";
    }
}
