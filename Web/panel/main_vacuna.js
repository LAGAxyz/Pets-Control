
const formVacunas = document.getElementById("formVacunas");
const frmVacuna = document.getElementById("frmVacuna");
const txtNombreVacuna = document.getElementById("txtNombreVacuna");
const txtDuracionVacuna = document.getElementById("txtDuracionVacuna");
const txtDescripcionVacuna = document.getElementById("txtDescripcionVacuna");
const btnCrearActualizarVacuna = document.getElementById("btnCrearActualizarVacuna");
const btnCancelarVacuna = document.getElementById("btnCancelarVacuna");
const tableVacunas = document.getElementById("tableVacunas");
let tablaVacuna = $('#myTableVacunas').DataTable();
let idFilaVacuna = "";

opcVacunas.onclick = ()=> {
    ocultarContenido();
    formVacunas.style.display = "block";
    tableVacunas.style.display = "block";
    listarVacuna();
    btnCancelarVacuna.click();
    txtTitulo.innerText = "Vacunas";
}

$('#myTableVacunas tbody').on('click', 'tr', async function () {
    var data = tablaVacuna.row(this).data();
    txtNombreVacuna.value = data[0];
    txtDuracionVacuna.value = data[1];
    txtDescripcionVacuna.value = data[2];
    btnCrearActualizarVacuna.innerText = "Editar";

    const query = await firebase.firestore().collection('vacuna').get();
    query.docs.forEach((doc)=>{
        if(doc.data().nombre_vacuna == data[0]){
            idFilaVacuna = doc.id;
            return;
        }
    })
});

$('#myTableVacunas tbody').on('dblclick', 'tr', async function () {
    var data = tablaVacuna.row(this).data();

    const query = await firebase.firestore().collection('vacuna').get();
    query.docs.forEach((doc)=>{
        if(doc.data().nombre_vacuna == data[0]){
            idFilaVacuna = doc.id;
            eliminarVacuna();
            return;
        }
    })
});

const listarVacuna = async ()=> {
    const query = await firebase.firestore().collection('vacuna').get();
    tablaVacuna.clear().draw();
    query.docs.forEach((doc)=>{
        if(doc.data().estado_vacuna == 1){
            tablaVacuna.row.add([
                doc.data().nombre_vacuna,
                doc.data().duracion_vacuna,
                doc.data().descripcion_vacuna,
            ]).draw(true);
        }
    })
}

const crearVacuna = async ()=> {
    if(txtNombreVacuna.value.trim() == "" || txtDuracionVacuna.value <= 0 ||
        txtDescripcionVacuna.value.trim() == ""){
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        });
    } else {
        const query = await firebase.firestore().collection("vacuna").get();
        let vacunaEncontrada = false;
        let vacunaDesactivada = false;
        let vacunaAactivar = "";

        query.docs.forEach((doc)=>{
            if(doc.data().nombre_vacuna == txtNombreVacuna.value.trim() && doc.data().estado_vacuna == 1){
                vacunaEncontrada = true;
                Swal.fire({
                    icon: "error",
                    title: "Registro ya existente",
                    text: "El registro que trata de ingresar ya existe en la base de datos",
                    confirmButtonText: "Entendido",
                    allowOutsideClick: false,
                });
                return;
            } else if (doc.data().nombre_vacuna == txtNombreVacuna.value.trim() && doc.data().estado_vacuna == 0){
                vacunaDesactivada = true;
                vacunaAactivar = doc.id;
            }
        });
    
        if(vacunaEncontrada == false && vacunaDesactivada == false){
            firebase.firestore().collection('vacuna').add({
                nombre_vacuna: txtNombreVacuna.value.trim(),
                duracion_vacuna: txtDuracionVacuna.value,
                descripcion_vacuna: txtDescripcionVacuna.value.trim(),
                estado_vacuna: 1,
            })
            Swal.fire({
                icon: "success",
                title: "Registro creado satisfactoriamente",
                text: "El registro fue creado de manera satisfactoria",
                confirmButtonText: "Entendido",
                allowOutsideClick: false,
            }).then((result)=>{
                if(result.isConfirmed){
                    listarVacuna();
                    txtNombreVacuna.value = "";
                    txtDuracionVacuna.value = "";
                    txtDescripcionVacuna.value = "";
                }
            })
        } else if (vacunaEncontrada == false && vacunaDesactivada == true){
            let vacunaSeleccionada = await firebase.firestore().collection("vacuna").doc(vacunaAactivar);
            Swal.fire({
                icon: "success",
                title: "Registro creado satisfactoriamente",
                text: "El registro fue creado de manera satisfactoria",
                confirmButtonText: "Entendido",
                allowOutsideClick: false,
            }).then((result)=>{
                if(result.isConfirmed){
                    listarVacuna();
                    txtNombreVacuna.value = "";
                    txtDuracionVacuna.value = "";
                    txtDescripcionVacuna.value = "";
                }
            })
            vacunaSeleccionada.update({
                estado_vacuna: 1,
                duracion_vacuna: +txtDuracionVacuna.value,
                descripcion_vacuna: txtDescripcionVacuna.value.trim(),
            });
        }
    }
}

const editarVacuna = async ()=> {
    if(txtNombreVacuna.value.trim() == "" || txtDuracionVacuna.value <= 0 ||
        txtDescripcionVacuna.value.trim() == ""){
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        });
    } else {
        let vacunaSeleccionada = await firebase.firestore().collection("vacuna").doc(idFilaVacuna);

        Swal.fire({
            icon: "success",
            title: "Registro actualizado satisfactoriamente",
            text: "El registro fue actualizado de manera satisfactoria",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        }).then((result)=>{
            if(result.isConfirmed){
                listarVacuna();
                txtNombreVacuna.value = "";
                txtDuracionVacuna.value = "";
                txtDescripcionVacuna.value = "";
                btnCrearActualizarVacuna.innerText = "Crear";
            }
        })

        vacunaSeleccionada.update({
            nombre_vacuna: txtNombreVacuna.value.trim(),
            duracion_vacuna: +txtDuracionVacuna.value,
            descripcion_vacuna: txtDescripcionVacuna.value.trim(),
        });
    }
}

const eliminarVacuna = async ()=> {
    let vacunaSeleccionada = await firebase.firestore().collection("vacuna").doc(idFilaVacuna);

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
                    listarVacuna();
                    txtNombreVacuna.value = "";
                    txtDuracionVacuna.value = "";
                    txtDescripcionVacuna.value = "";
                    btnCrearActualizarVacuna.innerText = "Crear";
                }
            })
            return vacunaSeleccionada.update({
                estado_vacuna: 0,
            })
        }
    })
}

btnCrearActualizarVacuna.onclick = ()=> {
    if(btnCrearActualizarVacuna.innerText === "Crear"){
        crearVacuna();
    } else if(btnCrearActualizarVacuna.innerText === "Editar"){
        editarVacuna();
    }
}

btnCancelarVacuna.onclick = ()=> {
    idFilaVacuna = "";
    txtNombreVacuna.value = "";
    txtDuracionVacuna.value = "";
    txtDescripcionVacuna.value = "";
    btnCrearActualizarVacuna.innerText = "Crear";
}

frmVacuna.onsubmit = (e)=> {
    e.preventDefault();
}
