
const formHistorialVacunas = document.getElementById("formHistorialVacunas");
const frmHistorialVacuna = document.getElementById("frmHistorialVacuna");
const txtDniHistorialVacuna = document.getElementById("txtDniHistorialVacuna");
const txtUsuarioHistorialVacuna = document.getElementById("txtUsuarioHistorialVacuna");
const cboMascotaHistorialVacuna = document.getElementById("cboMascotaHistorialVacuna");
const cboEspecieHistorialVacuna = document.getElementById("cboEspecieHistorialVacuna");
const cboRazaHistorialVacuna = document.getElementById("cboRazaHistorialVacuna");
const cboVacunaHistorialVacuna = document.getElementById("cboVacunaHistorialVacuna");
const txtFechaHistorialVacuna = document.getElementById("txtFechaHistorialVacuna");
const txtCaducidadHistorialVacuna = document.getElementById("txtCaducidadHistorialVacuna");
const btnCrearActualizarHistorialVacuna = document.getElementById("btnCrearActualizarHistorialVacuna");
const btnCancelarHistorialVacuna = document.getElementById("btnCancelarHistorialVacuna");
const tableHistorialVacunas = document.getElementById("tableHistorialVacunas");

let tablaHistorialVacuna = $('#myTableHistorialVacunas').DataTable();
let idFilaHistorialVacuna = "";
let usuarioActual = "";
let mascotaActual = "";

frmHistorialVacuna.onsubmit = (e)=> {
    e.preventDefault();
}

txtDniHistorialVacuna.onkeyup = async ()=>{
    if(txtDniHistorialVacuna.value.trim().length == 8){
        const query = await firebase.firestore().collection('usuario').get();
        query.docs.forEach((doc)=>{
            if(doc.data().dni_usuario == txtDniHistorialVacuna.value.trim()){
                txtUsuarioHistorialVacuna.value = doc.data().nombre_usu + " " + doc.data().apellido_usu;
                usuarioActual = doc;
                traerMascotasUsuario();
                return;
            }
        })
    }
    if(txtDniHistorialVacuna.value.trim().length > 8){
        txtDniHistorialVacuna.value = txtDniHistorialVacuna.value.trim().substr(0,8);
    }
}

opcHistorialVacunas.onclick = ()=> {
    ocultarContenido();
    formHistorialVacunas.style.display = "block";
    tableHistorialVacunas.style.display = "block";
    listarHistorialVacuna();
    btnCancelarHistorialVacuna.click();
    listarVacunas();
}

const traerMascotasUsuario = async ()=> {
    const query = await firebase.firestore().collection('mascota').get();
    cboMascotaHistorialVacuna.innerHTML = "";
    query.docs.forEach((doc)=>{
        if(doc.data().usuario == usuarioActual.data().dni_usuario){
            let option = document.createElement("option");
                option.text = doc.data().nombre_mas;
                option.value = doc.id;
                option.id = doc.id;
            cboMascotaHistorialVacuna.appendChild(option);
        }
    })
}

cboMascotaHistorialVacuna.onchange = async ()=> {
    let mascotaSeleccionada = await firebase.firestore().collection("mascota").doc(cboMascotaHistorialVacuna.value);
    let consultaRaza = await firebase.firestore().collection("raza").get();

    cboEspecieHistorialVacuna.innerHTML = "";
    cboRazaHistorialVacuna.innerHTML = "";

    mascotaSeleccionada.get().then((doc)=>{
        let optionEspecie = document.createElement("option");
        if(doc.data().especie == "VO3zLzr8Mq5ZRoft61yj"){optionEspecie.text = "Canino";}
        if(doc.data().especie == "fisx4nGvOGfYVhTquyZE"){optionEspecie.text = "Felino";}
        optionEspecie.value = doc.id;
        optionEspecie.id = doc.id;
        cboEspecieHistorialVacuna.appendChild(optionEspecie);

        consultaRaza.docs.forEach((miRaza)=>{
            if(miRaza.id == doc.data().raza){
                let optionRaza = document.createElement("option");
                    optionRaza.text = miRaza.data().nombre_raza;
                    optionRaza.value = doc.id;
                    optionRaza.id = doc.id;
                cboRazaHistorialVacuna.appendChild(optionRaza);
                return;
            }
        })
    })
}

const listarVacunas = async ()=> {
    const query = await firebase.firestore().collection('vacuna').get();
    cboVacunaHistorialVacuna.innerHTML = `<option value="0" id="sinVacuna">Seleccionar Vacuna</option>`;
    query.docs.forEach((doc)=>{
        if(doc.data().estado_vacuna == 1){
            let option = document.createElement("option");
                option.text = doc.data().nombre_vacuna;
                option.value = doc.id;
                option.id = doc.id;
            cboVacunaHistorialVacuna.appendChild(option);
        }
    })
    const hoy = moment().format("YYYY-MM-DD");
    txtFechaHistorialVacuna.value = hoy;
}

btnCrearActualizarHistorialVacuna.onclick = ()=> {
    if(btnCrearActualizarHistorialVacuna.innerText === "Crear"){
        crearHistorialVacuna();
    } else if(btnCrearActualizarHistorialVacuna.innerText === "Editar"){
        editarHistorialVacuna();
    }
}

btnCancelarHistorialVacuna.onclick = ()=> {
    idFilaHistorialVacuna = "";
    txtDniHistorialVacuna.value = "";
    txtUsuarioHistorialVacuna.value = "";
    cboMascotaHistorialVacuna.innerHTML = "";
    cboEspecieHistorialVacuna.innerHTML = "";
    cboRazaHistorialVacuna.innerHTML = "";
    listarVacunas();
    txtCaducidadHistorialVacuna.value = "";
    btnCrearActualizarHistorialVacuna.innerText = "Crear";
}

cboVacunaHistorialVacuna.onchange = async ()=> {
    let vacunaSeleccionada = await firebase.firestore().collection("vacuna").doc(cboVacunaHistorialVacuna.value);
    vacunaSeleccionada.get().then((doc)=>{
        txtCaducidadHistorialVacuna.value = moment(txtFechaHistorialVacuna.value).add(doc.data().duracion_vacuna, "months").format("YYYY-MM-DD");
    })
}

const listarHistorialVacuna = async ()=> {
    const consultarHistorial = await firebase.firestore().collection('historial').get();
    const consultarMascotas = await firebase.firestore().collection('mascota').get();
    const consultarUsuarios = await firebase.firestore().collection('usuario').get();
    const consultarVacunas = await firebase.firestore().collection('vacuna').get();

    tablaHistorialVacuna.clear().draw();

    consultarHistorial.docs.forEach((doc)=>{
        if(doc.data().estado_hv == 1){
            // logica para tarer al dueño y la mascota
            tablaHistorialVacuna.row.add([
                "nada",
                "nada",
                "nada",
                "nada",
                "nada",
                moment(doc.data().fecha_vacuna.toDate()).format("DD/MM/YYYY"),
                moment(doc.data().fecha_caducidad.toDate()).format("DD/MM/YYYY"),
            ]).draw(true);
        }
    })
}






/*
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
*/
