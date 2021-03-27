
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

const editarCargo = async ()=> {
    if(txtNombrecargo.value.trim() === ""){
        Swal.fire({
            icon: "error",
            title: "Campos vacíos",
            text: "Debe ingresar un cargo",
            confirmButtonText: "Entendido"
        });
    } else {
        let cargoSeleccionado = await firebase.firestore().collection("cargo").doc(idFilaCargo);

        Swal.fire({
            icon: "success",
            title: "Cargo actualizado satisfactoriamente",
            text: "El cargo fue actualizado de manera satisfactoria",
            confirmButtonText: "Entendido"
        }).then((result)=>{
            if(result.isConfirmed){
                listarCargo();
                txtNombrecargo.value = "";
                btnCrearActualizarCargo.innerText = "Crear";
            }
        })

        cargoSeleccionado.update({
            nombre_cargo: txtNombrecargo.value.trim(),
        });
    }
}

const eliminarCargo = async ()=> {
    let cargoSeleccionado = await firebase.firestore().collection("cargo").doc(idFilaCargo);

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
            return cargoSeleccionado.update({
                estado_cargo: 0,
            })
        }
    })
}

btnCrearActualizarCargo.onclick = (e)=> {
    if(btnCrearActualizarCargo.innerText === "Crear"){
        crearCargo();
    } else if(btnCrearActualizarCargo.innerText === "Editar"){
        editarCargo();
    }
}

btnCancelarCargo.onclick = ()=> {
    idFilaCargo = "";
    txtNombrecargo.value = "";
    btnCrearActualizarCargo.innerText = "Crear";
}
