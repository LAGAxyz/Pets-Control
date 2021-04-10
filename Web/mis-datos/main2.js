
const userPhoto = document.getElementById("userPhoto");
const userName = document.getElementById("userName");

const linkPerfil = document.getElementById("linkPerfil");
const btnSalir = document.getElementById("btnSalir");

const contenedorM2 = document.getElementById("contenedorM2");
const menu2 = document.getElementById("menu2");

const contenedor = document.getElementById("contenedor");

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
        contenedor.innerHTML = `
            <div class="alert alert-warning w-100 text-center" role="alert">
                <h3 class="alert-heading">USUARIO DESCONOCIDO</h3>
                <p class="mb-0">Respetamos la confidencialidad de datos de todos nuestros usuarios.</p>
                <p>Para ver y editar tus datos, debes <a href="../acceso/" class="alert-link">Iniciar Sesión</a> en nuestra plataforma.</p>
            </div>`
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
