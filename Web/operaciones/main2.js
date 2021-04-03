
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
        userName.innerText = "Portal de clientes";
        userName.setAttribute("href", "../acceso/");
        contenedorM2.removeChild(menu2);
    }
});

const asignarPerfil = async (user)=>{
    const query = await firebase.firestore().collection("usuario").get();

    query.docs.forEach((doc)=>{
        if(doc.data().id_usuario == user.uid){
            if(doc.data().tipo_usu == 1){
                // redirigir al portal del cliente
                console.log("ir al portal del cliente");
                // redirigir al portal del cliente
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
