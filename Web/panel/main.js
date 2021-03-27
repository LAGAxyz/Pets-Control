
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
const opcEspecies = document.getElementById("opcEspecies");
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
            if(doc.data().tipo_usu === 1){
                document.body.style.display = "none";
                location.href = "../.";
            } else if(doc.data().tipo_usu === 2){
                lstAdministradores.parentElement.removeChild(lstAdministradores);
                lstTrabajadores.parentElement.removeChild(lstTrabajadores);
                opcEspecies.parentElement.removeChild(opcEspecies);
                opcCargos.parentElement.removeChild(opcCargos);
            } else if(doc.data().tipo_usu === 3){}
            return;
        }
    })
};

const ocultarContenido = ()=> {
    formCargos.style.display = "none";
    tableCargos.style.display = "none";
}

const formCargos = document.getElementById("formCargos");
const txtNombrecargo = document.getElementById("txtNombreCargo");
const btnCrearActualizarCargo = document.getElementById("btnCrearActualizarCargo");
const btnCancelarCargo = document.getElementById("btnCancelarCargo");
const tableCargos = document.getElementById("tableCargos");
const tblCargo = document.getElementById("tblCargo");
let tablaCargo = $('#myTableCargos').DataTable();
let idFilaCargo = "";

opcCargos.onclick = ()=> {
    ocultarContenido();
    formCargos.style.display = "block";
    tableCargos.style.display = "block";
    listarCargo();
}

const listarCargo = async ()=> {
    const query = await firebase.firestore().collection('cargo').get();
    tablaCargo.clear().draw();

    query.docs.forEach((doc)=>{
        if(doc.data().estado_cargo === 1){
            tablaCargo.row.add([
                doc.data().nombre_cargo,
            ]).draw(true);
        }
    })

    $('#myTableCargos tbody').on('click', 'tr', async function () {
        var data = tablaCargo.row(this).data();
        txtNombrecargo.value = data[0];
        btnCrearActualizarCargo.innerText = "Editar";

        const query = await firebase.firestore().collection('cargo').get();
        query.docs.forEach((doc)=>{
            if(doc.data().nombre_cargo === data[0]){
                idFilaCargo = doc.id;
                return;
            }
        })
    });

    $('#myTableCargos tbody').on('dblclick', 'tr', async function () {
        var data = tablaCargo.row(this).data();

        const query = await firebase.firestore().collection('cargo').get();
        query.docs.forEach((doc)=>{
            if(doc.data().nombre_cargo === data[0]){
                idFilaCargo = doc.id;
                eliminarCargo();
                return;
            }
        })
    });
}

const crearCargo = async ()=> {
    if(txtNombrecargo.value.trim() === ""){
        Swal.fire({
            icon: "error",
            title: "Campos vacíos",
            text: "Debe ingresar un cargo",
            confirmButtonText: "Entendido"
        });
    } else {
        const query = await firebase.firestore().collection("cargo").get();
        let cargoEncontrado = false;
    
        query.docs.forEach((doc)=>{
            if(doc.data().nombre_cargo == txtNombrecargo.value.trim()){
                cargoEncontrado = true;
                Swal.fire({
                    icon: "error",
                    title: "Cargo ya existente",
                    text: "El cargo ingresado ya existe en la base de datos",
                    confirmButtonText: "Entendido"
                });
                return;
            }
        });
    
        if(cargoEncontrado === false){
            firebase.firestore().collection('cargo').add({
                nombre_cargo: txtNombrecargo.value.trim(),
                estado_cargo: 1,
            })
            Swal.fire({
                icon: "success",
                title: "Cargo creado satisfactoriamente",
                text: "El cargo fue creado de manera satisfactoria",
                confirmButtonText: "Entendido",
            }).then((result)=>{
                if(result.isConfirmed){
                    txtNombrecargo.value = "";
                }
            })
            listarCargo();
        }
    }
}

const editarCargo = ()=> {
    let cargoSeleccionado = firebase.firestore().collection("cargo").doc(idFilaCargo);
    if(txtNombrecargo.value.trim() != ""){
        return cargoSeleccionado.update({
            nombre_cargo: txtNombrecargo.value.trim(),
        })
    }
}

const eliminarCargo = ()=> {
    let cargoSeleccionado = firebase.firestore().collection("cargo").doc(idFilaCargo);

    Swal.fire({
        title: '¿Deseas eliminar el registro?',
        showDenyButton: true,
        confirmButtonText: 'Volver',
        denyButtonText: 'Eliminar',
    }).then((result) => {
        if (result.isDenied) {
            Swal.fire({
                icon: "success",
                title: "Cargo eliminado satisfactoriamente",
                text: "El cargo fue eliminado de manera satisfactoria",
                confirmButtonText: "Entendido",
            }).then((result)=>{
                if(result.isConfirmed){
                    listarCargo();
                }
            })
        }
        return cargoSeleccionado.update({
            estado_cargo: 0,
        })
    })
}

btnCrearActualizarCargo.onclick = (e)=> {
    if(btnCrearActualizarCargo.innerText === "Crear"){
        crearCargo();
    } else if(btnCrearActualizarCargo.innerText === "Editar"){
        editarCargo();
        listarCargo();
        limpiarCargo();
    }
}

const limpiarCargo = ()=> {
    idFilaCargo = "";
    txtNombrecargo.value = "";
    btnCrearActualizarCargo.innerText = "Crear";
}

btnCancelarCargo.onclick = ()=> {
    limpiarCargo();
}
