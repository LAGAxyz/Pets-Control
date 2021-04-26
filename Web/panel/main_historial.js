
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
        cboMascotaHistorialVacuna.removeAttribute("disabled");
        cboVacunaHistorialVacuna.removeAttribute("disabled");
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
    mostrarFechas();
    txtTitulo.innerText = "Historial de vacunas"
}

const traerMascotasUsuario = async ()=> {
    const query = await firebase.firestore().collection('mascota').get();
    cboMascotaHistorialVacuna.innerHTML = `<option value="0">Seleccionar mascota</option>`;
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
}

const mostrarFechas = ()=> {
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
    mostrarFechas();
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

    let itemMascota = "";
    let itemEspecie = "";
    let itemRaza = "";
    let itemUsuario = "";
    let itemVacuna = "";

    tablaHistorialVacuna.clear().draw();

    consultarHistorial.docs.forEach(async(doc)=>{
        if(doc.data().estado_hv == 1){
            const consultarMascotas = await firebase.firestore().collection('mascota').get();
            const consultarRazas = await firebase.firestore().collection('raza').get();
            const consultarVacunas = await firebase.firestore().collection('vacuna').get();

            consultarMascotas.docs.forEach((miMascota)=>{
                if(miMascota.id == doc.data().mascota){
                    itemMascota = miMascota.data().nombre_mas;
                    if(miMascota.data().especie == "VO3zLzr8Mq5ZRoft61yj"){itemEspecie = "Canino";}
                    if(miMascota.data().especie == "fisx4nGvOGfYVhTquyZE"){itemEspecie = "Felino";}
                    consultarRazas.docs.forEach((miRaza)=>{
                        if(miRaza.id == miMascota.data().raza){
                            itemRaza = miRaza.data().nombre_raza;
                            return;
                        }
                    })
                    itemUsuario = miMascota.data().usuario;
                    return;
                }
            })

            consultarVacunas.docs.forEach((miVacuna)=>{
                if(miVacuna.id == doc.data().vacuna){
                    itemVacuna = miVacuna.data().nombre_vacuna;
                    return;
                }
            })

            tablaHistorialVacuna.row.add([
                itemMascota,
                itemEspecie,
                itemRaza,
                itemUsuario,
                itemVacuna,
                moment(doc.data().fecha_vacuna).format("DD/MM/YYYY"),
                moment(doc.data().fecha_caducidad).format("DD/MM/YYYY"),
            ]).draw(true);
        }
    })
}

cboVacunaHistorialVacuna.onfocus = ()=> {
    listarVacunas();
}

$('#myTableHistorialVacunas tbody').on('click', 'tr', async function () {
    var data = tablaHistorialVacuna.row(this).data();
    let condicionMascota = false;

    txtDniHistorialVacuna.value = data[3];
        const query = await firebase.firestore().collection('usuario').get();
        query.docs.forEach((doc)=>{
            if(doc.data().dni_usuario == txtDniHistorialVacuna.value.trim()){
                txtUsuarioHistorialVacuna.value = doc.data().nombre_usu + " " + doc.data().apellido_usu;
                return;
            }
        })
    cboMascotaHistorialVacuna.innerHTML = `<option value="${data[0]}">${data[0]}</option>`;
    cboEspecieHistorialVacuna.innerHTML = `<option value="${data[1]}">${data[1]}</option>`;
    cboRazaHistorialVacuna.innerHTML = `<option value="noValue">${data[2]}</option>`;
    cboVacunaHistorialVacuna.innerHTML = `<option value="noValue">${data[4]}</option>`;
    txtFechaHistorialVacuna.value = moment(data[5], "DD-MM-YYYY").format("YYYY-MM-DD");
    txtCaducidadHistorialVacuna.value = moment(data[6], "DD-MM-YYYY").format("YYYY-MM-DD");

    const consultaHistorial = await firebase.firestore().collection('historial').get();
    consultaHistorial.docs.forEach(async(doc)=>{
        const consultaMascota = await firebase.firestore().collection('mascota').get();
        consultaMascota.docs.forEach(async(miMascota)=>{
            let especieM = data[1] == "Canino" ? "VO3zLzr8Mq5ZRoft61yj" : "fisx4nGvOGfYVhTquyZE";
            if(data[0] == miMascota.data().nombre_mas && especieM == miMascota.data().especie){
                const consultaRaza = await firebase.firestore().collection('raza').get();
                consultaRaza.docs.forEach(async(miRaza)=>{
                    if(data[2] == miRaza.data().nombre_raza && miRaza.id == miMascota.data().raza){
                        const consultaUsuario = await firebase.firestore().collection('usuario').get();
                        consultaUsuario.docs.forEach((miUsuario)=>{
                            if(data[3] == miUsuario.data().dni_usuario && miUsuario.data().dni_usuario == miMascota.data().usuario){
                                condicionMascota = true;
                                idFilaHistorialVacuna = doc.id;
                                return;
                            }
                            return;
                        })
                        return;
                    }
                    return;
                })
                return;
                } else {condicionMascota = false}
        })
    })

    cboMascotaHistorialVacuna.setAttribute("disabled", "true");
    cboVacunaHistorialVacuna.setAttribute("disabled", "true");
    btnCrearActualizarHistorialVacuna.innerText = "Editar";
})

$('#myTableHistorialVacunas tbody').on('dblclick', 'tr', async function () {
    var data = tablaHistorialVacuna.row(this).data();
    let condicionMascota = false;

    const consultaHistorial = await firebase.firestore().collection('historial').get();
    consultaHistorial.docs.forEach(async(doc)=>{
        const consultaMascota = await firebase.firestore().collection('mascota').get();
        consultaMascota.docs.forEach(async(miMascota)=>{
            let especieM = data[1] == "Canino" ? "VO3zLzr8Mq5ZRoft61yj" : "fisx4nGvOGfYVhTquyZE";
            if(data[0] == miMascota.data().nombre_mas && especieM == miMascota.data().especie){
                const consultaRaza = await firebase.firestore().collection('raza').get();
                consultaRaza.docs.forEach(async(miRaza)=>{
                    if(data[2] == miRaza.data().nombre_raza && miRaza.id == miMascota.data().raza){
                        const consultaUsuario = await firebase.firestore().collection('usuario').get();
                        consultaUsuario.docs.forEach((miUsuario)=>{
                            if(data[3] == miUsuario.data().dni_usuario && miUsuario.data().dni_usuario == miMascota.data().usuario){
                                condicionMascota = true;
                                idFilaHistorialVacuna = doc.id;
                                eliminarHistorialVacuna();
                                return;
                            }
                            return;
                        })
                        return;
                    }
                    return;
                })
                return;
                } else {condicionMascota = false}
        })
    })
})

const crearHistorialVacuna = async ()=> {
    if(txtDniHistorialVacuna.value.trim() == "" || txtUsuarioHistorialVacuna.value.trim() == "" ||
        cboMascotaHistorialVacuna.value == 0 || cboVacunaHistorialVacuna.value == 0){
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos correctamente",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        });
    } else {
        firebase.firestore().collection('historial').add({
            estado_hv: 1,
            mascota: cboMascotaHistorialVacuna.value,
            vacuna: cboVacunaHistorialVacuna.value,
            fecha_vacuna: txtFechaHistorialVacuna.value,
            fecha_caducidad: txtCaducidadHistorialVacuna.value,
        })
        Swal.fire({
            icon: "success",
            title: "Registro creado satisfactoriamente",
            text: "El registro fue creado de manera satisfactoria",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        }).then((result)=>{
            if(result.isConfirmed){
                btnCancelarHistorialVacuna.click();
                mostrarFechas();
                listarHistorialVacuna();
            }
        })
    }
}

const eliminarHistorialVacuna = async ()=> {
    let historialVacunaSeleccionada = await firebase.firestore().collection("historial").doc(idFilaHistorialVacuna);

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
                    btnCancelarHistorialVacuna.click();
                    mostrarFechas();
                    listarHistorialVacuna();
                }
            })
            return historialVacunaSeleccionada.update({
                estado_hv: 0,
            })
        }
    })
}

const editarHistorialVacuna = async ()=> {
    if(txtDniHistorialVacuna.value.trim() == "" || txtUsuarioHistorialVacuna.value.trim() == "" ||
        cboMascotaHistorialVacuna.value == 0 || cboVacunaHistorialVacuna.value == 0){
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos correctamente",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        });
    } else {
        let historialVacunaSeleccionada = await firebase.firestore().collection("historial").doc(idFilaHistorialVacuna);

        Swal.fire({
            icon: "success",
            title: "Registro actualizado satisfactoriamente",
            text: "El registro fue actualizado de manera satisfactoria",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        }).then((result)=>{
            if(result.isConfirmed){
                btnCancelarHistorialVacuna.click();
                mostrarFechas();
                listarHistorialVacuna();
            }
        })

        if(cboMascotaHistorialVacuna.value == "noValue" && cboVacunaHistorialVacuna.value == "noValue"){
            historialVacunaSeleccionada.update({
                // mascota: cboMascotaHistorialVacuna.value,
                // vacuna: cboVacunaHistorialVacuna.value,
                fecha_vacuna: txtFechaHistorialVacuna.value,
                fecha_caducidad: txtCaducidadHistorialVacuna.value,
            });
        } else if(cboMascotaHistorialVacuna.value == "noValue"){
            historialVacunaSeleccionada.update({
                // mascota: cboMascotaHistorialVacuna.value,
                vacuna: cboVacunaHistorialVacuna.value,
                fecha_vacuna: txtFechaHistorialVacuna.value,
                fecha_caducidad: txtCaducidadHistorialVacuna.value,
            });
        } else if(cboVacunaHistorialVacuna.value == "noValue") {
            historialVacunaSeleccionada.update({
                mascota: cboMascotaHistorialVacuna.value,
                // vacuna: cboVacunaHistorialVacuna.value,
                fecha_vacuna: txtFechaHistorialVacuna.value,
                fecha_caducidad: txtCaducidadHistorialVacuna.value,
            });
        } else {
            historialVacunaSeleccionada.update({
                mascota: cboMascotaHistorialVacuna.value,
                vacuna: cboVacunaHistorialVacuna.value,
                fecha_vacuna: txtFechaHistorialVacuna.value,
                fecha_caducidad: txtCaducidadHistorialVacuna.value,
            });
        }
    }
}
