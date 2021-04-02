
const formCargos = document.getElementById("formCargos");
const frmCargo = document.getElementById("frmCargo");
const txtNombreCargo = document.getElementById("txtNombreCargo");
const btnCrearActualizarCargo = document.getElementById("btnCrearActualizarCargo");
const btnCancelarCargo = document.getElementById("btnCancelarCargo");
const tableCargos = document.getElementById("tableCargos");
let tablaCargo = $('#myTableCargos').DataTable();
let idFilaCargo = "";

opcCargos.onclick = ()=> {
    ocultarContenido();
    formCargos.style.display = "block";
    tableCargos.style.display = "block";
    listarCargo();
    btnCancelarCargo.click();
}

$('#myTableCargos tbody').on('click', 'tr', async function () {
    var data = tablaCargo.row(this).data();
    txtNombreCargo.value = data[0];
    btnCrearActualizarCargo.innerText = "Editar";

    const query = await firebase.firestore().collection('cargo').get();
    query.docs.forEach((doc)=>{
        if(doc.data().nombre_cargo == data[0]){
            idFilaCargo = doc.id;
            return;
        }
    })
});

$('#myTableCargos tbody').on('dblclick', 'tr', async function () {
    var data = tablaCargo.row(this).data();

    const query = await firebase.firestore().collection('cargo').get();
    query.docs.forEach((doc)=>{
        if(doc.data().nombre_cargo == data[0]){
            idFilaCargo = doc.id;
            eliminarCargo();
            return;
        }
    })
});

const listarCargo = async ()=> {
    const query = await firebase.firestore().collection('cargo').get();
    tablaCargo.clear().draw();
    query.docs.forEach((doc)=>{
        if(doc.data().estado_cargo == 1 && doc.data().nombre_cargo != "Ninguno"){
            tablaCargo.row.add([
                doc.data().nombre_cargo,
            ]).draw(true);
        }
    })
}

const crearCargo = async ()=> {
    if(txtNombreCargo.value.trim() == ""){
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        });
    } else {
        const query = await firebase.firestore().collection("cargo").get();
        let cargoEncontrado = false;
        let cargoDesactivado = false;
        let cargoAactivar = "";

        query.docs.forEach((doc)=>{
            if(doc.data().nombre_cargo == txtNombreCargo.value.trim() && doc.data().estado_cargo == 1){
                cargoEncontrado = true;
                Swal.fire({
                    icon: "error",
                    title: "Registro ya existente",
                    text: "El registro que trata de ingresar ya existe en la base de datos",
                    confirmButtonText: "Entendido",
                    allowOutsideClick: false,
                });
                return;
            } else if (doc.data().nombre_cargo == txtNombreCargo.value.trim() && doc.data().estado_cargo == 0){
                cargoDesactivado = true;
                cargoAactivar = doc.id;
            }
        });
    
        if(cargoEncontrado == false && cargoDesactivado == false){
            firebase.firestore().collection('cargo').add({
                nombre_cargo: txtNombreCargo.value.trim(),
                estado_cargo: 1,
            })
            Swal.fire({
                icon: "success",
                title: "Registro creado satisfactoriamente",
                text: "El registro fue creado de manera satisfactoria",
                confirmButtonText: "Entendido",
                allowOutsideClick: false,
            }).then((result)=>{
                if(result.isConfirmed){
                    listarCargo();
                    txtNombreCargo.value = "";
                }
            })
        } else if (cargoEncontrado == false && cargoDesactivado == true){
            let cargoSeleccionado = await firebase.firestore().collection("cargo").doc(cargoAactivar);
            Swal.fire({
                icon: "success",
                title: "Registro creado satisfactoriamente",
                text: "El registro fue creado de manera satisfactoria",
                confirmButtonText: "Entendido",
                allowOutsideClick: false,
            }).then((result)=>{
                if(result.isConfirmed){
                    txtNombreCargo.value = "";
                    listarCargo();
                }
            })
            cargoSeleccionado.update({
                estado_cargo: 1,
            });
        }
    }
}

const editarCargo = async ()=> {
    if(txtNombreCargo.value.trim() == ""){
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        });
    } else {
        let cargoSeleccionado = await firebase.firestore().collection("cargo").doc(idFilaCargo);

        Swal.fire({
            icon: "success",
            title: "Registro actualizado satisfactoriamente",
            text: "El registro fue actualizado de manera satisfactoria",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        }).then((result)=>{
            if(result.isConfirmed){
                listarCargo();
                txtNombreCargo.value = "";
                btnCrearActualizarCargo.innerText = "Crear";
            }
        })

        cargoSeleccionado.update({
            nombre_cargo: txtNombreCargo.value.trim(),
        });
    }
}

const eliminarCargo = async ()=> {
    let cargoSeleccionado = await firebase.firestore().collection("cargo").doc(idFilaCargo);

    Swal.fire({
        title: '¿Desea eliminar el registro?',
        showDenyButton: true,
        confirmButtonText: 'Volver',
        denyButtonText: 'Eliminar',
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isDenied) {
            Swal.fire({
                icon: "success",
                title: "Registro eliminado satisfactoriamente",
                text: "El registro fue eliminado de manera satisfactoria",
                confirmButtonText: "Entendido",
                allowOutsideClick: false,
            }).then((result)=>{
                if(result.isConfirmed){
                    listarCargo();
                    txtNombreCargo.value = "";
                    btnCrearActualizarCargo.innerText = "Crear";
                }
            })
            return cargoSeleccionado.update({
                estado_cargo: 0,
            })
        }
    })
}

btnCrearActualizarCargo.onclick = ()=> {
    if(btnCrearActualizarCargo.innerText == "Crear"){
        crearCargo();
    } else if(btnCrearActualizarCargo.innerText == "Editar"){
        editarCargo();
    }
}

btnCancelarCargo.onclick = ()=> {
    idFilaCargo = "";
    txtNombreCargo.value = "";
    btnCrearActualizarCargo.innerText = "Crear";
}

frmCargo.onsubmit = (e)=> {
    e.preventDefault();
}
