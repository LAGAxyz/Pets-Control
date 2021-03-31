
const userPhoto = document.getElementById("userPhoto");
const userName = document.getElementById("userName");

const opcPerfil1 = document.getElementById("opcPerfil1");
const opcPerfil2 = document.getElementById("opcPerfil2");

const opcConfiguracion1 = document.getElementById("opcConfiguracion1");
const opcConfiguracion2 = document.getElementById("opcConfiguracion2");

const btnSalir = document.getElementById("btnSalir");

const lstClientes = document.getElementById("lstClientes");
const lstTrabajadores = document.getElementById("lstTrabajadores");
const lstAdministradores = document.getElementById("lstAdministradores");

const lstGatos = document.getElementById("lstGatos");
const lstPerros = document.getElementById("lstPerros");

const opcCargos = document.getElementById("opcCargos");
const opcVacunas = document.getElementById("opcVacunas");
const opcRazas = document.getElementById("opcRazas");
const opcAlimentos = document.getElementById("opcAlimentos");
const opcHistoriasClinicas = document.getElementById("opcHistoriasClinicas");
const opcHistorialVacunas = document.getElementById("opcHistorialVacunas");
const opcMascotasAdopcion = document.getElementById("opcMascotasAdopcion");

const contenido = document.getElementById("contenido");

firebase.auth().onAuthStateChanged(user=>{
    if(user){
        user.photoURL ? userPhoto.src = user.photoURL : userPhoto.src = "../assets/img/icons/usuario-anonimo.png";
        user.email ? userName.innerText = user.email : userName.innerText = user.displayName;
        asignarPerfil(user);
        ocultarContenido();
    } else {
        document.body.style.display = "none";
        location.href = "../.";
    }
});

const mostrarPerfil = ()=> {
    // Código para mostrar las opciones del perfil - sus datos y la edición de estos
};

opcPerfil1.onclick = ()=> {mostrarPerfil();};
opcPerfil2.onclick = ()=> {mostrarPerfil();};

const mostrarConfiguracion = ()=> {
    // Código para mostrar las opciones de configuración del usuario activo
};

opcConfiguracion1.onclick = ()=> {mostrarConfiguracion();};
opcConfiguracion2.onclick = ()=> {mostrarConfiguracion();};

btnSalir.onclick = ()=> {firebase.auth().signOut();};

const asignarPerfil = async (user)=> {
    const query = await firebase.firestore().collection("usuario").get();

    query.docs.forEach((doc)=>{
        if(doc.data().id_usuario === user.uid){
            if(doc.data().tipo_usu == 1){
                document.body.style.display = "none";
                location.href = "../.";
            } else if(doc.data().tipo_usu == 2){
                lstAdministradores.parentElement.removeChild(lstAdministradores);
                lstTrabajadores.parentElement.removeChild(lstTrabajadores);
                opcCargos.parentElement.removeChild(opcCargos);
                // cboTipoUsuario.parentElement.removeChild(cboTipoUsuario);
                cboTipoUsuario.style.display = "none";
            } else if(doc.data().tipo_usu === 3){}
            return;
        }
    })
};

const ocultarContenido = ()=> {
    formCargos.style.display = "none";
    tableCargos.style.display = "none";

    formRazas.style.display = "none";
    tableRazas.style.display = "none";

    formUsuarios.style.display = "none";
    tableUsuarios.style.display = "none";

    contenido.style.display = "block";
}
