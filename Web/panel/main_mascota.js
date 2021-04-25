
const formMascotas = document.getElementById("formMascotas");
const frmMascota = document.getElementById("frmMascota");

const txtNombreMascota = document.getElementById("txtNombreMascota");
const txtPesoMascota = document.getElementById("txtPesoMascota");
const txtTallaMascota = document.getElementById("txtTallaMascota");
const txtPresentacionMascota = document.getElementById("txtPresentacionMascota");
const cboGeneroMascota = document.getElementById("cboGeneroMascota");
const cboEspecieMascota = document.getElementById("cboEspecieMascota");
const cboRazaMascota = document.getElementById("cboRazaMascota");
const txtNombreUsuarioMascota = document.getElementById("txtNombreUsuarioMascota");
const txtDniUsuarioMascota = document.getElementById("txtDniUsuarioMascota");
const cboCondicionMascota = document.getElementById("cboCondicionMascota");

const btnCrearActualizarMascota = document.getElementById("btnCrearActualizarMascota");
const btnCancelarMascota = document.getElementById("btnCancelarMascota");

const tableMascotas = document.getElementById("tableMascotas");
let tablaMascota = $('#myTableMascotas').DataTable();

let idFilaMascota = "";
let opcMarcadaMascota = "";

const inicializarMascotas = ()=> {
    ocultarContenido();
    formMascotas.style.display = "block";
    tableMascotas.style.display = "block";
    listarMascota();
    iniciarCombosMascota();
    llenarComboEspecieMascota();
    llenarComboRazaMascota();
    btnCancelarMascota.click();
}

lstPerros.onclick = ()=> {
    inicializarMascotas();
    opcMarcadaMascota = "lstPerros";
    txtTitulo.innerText = "Perros";
}

lstGatos.onclick = ()=> {
    inicializarMascotas();
    opcMarcadaMascota = "lstGatos";
    txtTitulo.innerText = "Gatos";
}

const llenarComboEspecieMascota = async ()=> {
    const query = await firebase.firestore().collection('especie').get();
    cboEspecieMascota.innerHTML = `<option value="0" id="optCeroEspecieMascota">Seleccionar Especie</option>`;

    query.docs.forEach((doc)=>{
        if(doc.data().estado_especie == 1){
            let option = document.createElement("option");
                option.text = doc.data().nombre_especie;
                option.value = doc.id;
                option.id = doc.id;
            cboEspecieMascota.appendChild(option);
        }
    })

    cboRazaMascota.setAttribute("disabled", true);
    cboRazaMascota.setAttribute("readonly", true);
}

cboEspecieMascota.onchange = async ()=>{
    const query = await firebase.firestore().collection('raza').get();
    cboRazaMascota.innerHTML = `<option value="0" id="optCeroRazaMascota">Seleccionar Raza</option>`;

    query.docs.forEach((doc)=>{
        if(cboEspecieMascota.value == doc.data().especie && doc.data().estado_raza == 1){
            let option = document.createElement("option");
                option.text = doc.data().nombre_raza;
                option.value = doc.id;
                option.id = doc.id;
            cboRazaMascota.appendChild(option);
        }
    })

    cboRazaMascota.removeAttribute("disabled");
    cboRazaMascota.removeAttribute("readonly");
}

const llenarComboRazaMascota = async ()=> {
    const query = await firebase.firestore().collection('raza').get();
    cboRazaMascota.innerHTML = `<option value="0" id="optCeroRazaMascota">Seleccionar Raza</option>`;

    query.docs.forEach((doc)=>{
        if(doc.data().estado_raza == 1){
            let option = document.createElement("option");
                option.text = doc.data().nombre_raza;
                option.value = doc.id;
                option.id = doc.id;
            cboRazaMascota.appendChild(option);
        }
    })
}

const iniciarCombosMascota = ()=> {
    cboGeneroMascota.innerHTML = `  <option value="0" id="sinGeneroMascota">Seleccionar Género</option>
									<option value="Macho" id="Macho">Macho</option>
									<option value="Hembra" id="Hembra">Hembra</option>`;
    
    cboCondicionMascota.innerHTML = `   <option value="0" id="sinCondicionMascota">Seleccionar Condición</option>
                                        <option value="Con Hogar" id="conHogar">Con Hogar</option>
                                        <option value="En Adopción" id="enAdopcion">En Adopción</option>`;
}

const deseleccionarComboGeneroMascota = (option)=> {
    for(let i=0; i<cboGeneroMascota.children.length; i++){
        cboGeneroMascota.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

const deseleccionarComboEspecieMascota = (option)=> {
    for(let i=0; i<cboEspecieMascota.children.length; i++){
        cboEspecieMascota.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

const deseleccionarComboRazaMascota = (option)=> {
    for(let i=0; i<cboRazaMascota.children.length; i++){
        cboRazaMascota.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

const deseleccionarComboCondicionMascota = (option)=> {
    for(let i=0; i<cboCondicionMascota.children.length; i++){
        cboCondicionMascota.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

$('#myTableMascotas tbody').on('click', 'tr', async function () {
    var data = tablaMascota.row(this).data();
    llenarComboEspecieMascota();
    llenarComboRazaMascota();
    const query = await firebase.firestore().collection('mascota').get();
    query.docs.forEach(async(doc)=>{
        if(doc.data().nombre_mas == data[0] && doc.data().usuario == data[6]){
            idFilaMascota = doc.id;
            txtNombreMascota.value = data[0];
            deseleccionarComboGeneroMascota(data[1]);
            txtPesoMascota.value = data[2];
            txtTallaMascota.value = data[3];
            deseleccionarComboEspecieMascota(doc.data().especie);
            deseleccionarComboRazaMascota(doc.data().raza);
            txtDniUsuarioMascota.value = data[6];
            data[7] == "Con Hogar" ? deseleccionarComboCondicionMascota("conHogar") : deseleccionarComboCondicionMascota("enAdopcion");
            txtPresentacionMascota.value = data[8];

            const consultarUsu = await firebase.firestore().collection('usuario').get();
            consultarUsu.docs.forEach((miUsu)=>{
                if(miUsu.data().dni_usuario == doc.data().usuario){
                    txtNombreUsuarioMascota.value = miUsu.data().nombre_usu + " " + miUsu.data().apellido_usu;
                }
            })
            return;
        }
    })
    btnCrearActualizarMascota.innerText = "Editar";
})

const listarMascota = async ()=> {
    const query = await firebase.firestore().collection('mascota').get();
    tablaMascota.clear().draw();
    let razaMascota = "";
    let usuarioMascota = "";

    if(opcMarcadaMascota == "lstPerros"){
        query.docs.forEach(async(doc)=>{
            if(doc.data().estado_mas == 1 && doc.data().especie == "VO3zLzr8Mq5ZRoft61yj"){
                const consultarRaza = await firebase.firestore().collection('raza').get();
                const consultarUsuario = await firebase.firestore().collection('usuario').get();

                consultarRaza.docs.forEach(miConsultaRaza=>{
                    if(miConsultaRaza.id == doc.data().raza){
                        razaMascota = miConsultaRaza.data().nombre_raza;
                        return;
                    }
                })
                
                consultarUsuario.docs.forEach(miConsultaUsuario=>{
                    if(miConsultaUsuario.data().dni_usuario == doc.data().usuario){
                        usuarioMascota = miConsultaUsuario.data().dni_usuario;
                        return;
                    }
                })

                tablaMascota.row.add([
                    doc.data().nombre_mas,
                    doc.data().genero_mas,
                    doc.data().peso_mas,
                    doc.data().talla_mas,
                    "Canino",
                    razaMascota,
                    usuarioMascota,
                    doc.data().condicion,
                    doc.data().presentacion_mas,
                ]).draw(true);
            }
        })
    }

    if(opcMarcadaMascota == "lstGatos"){
        query.docs.forEach(async(doc)=>{
            if(doc.data().estado_mas == 1 && doc.data().especie == "fisx4nGvOGfYVhTquyZE"){
                const consultarRaza = await firebase.firestore().collection('raza').get();
                const consultarUsuario = await firebase.firestore().collection('usuario').get();
                
                consultarRaza.docs.forEach(miConsultaRaza=>{
                    if(miConsultaRaza.id == doc.data().raza){
                        razaMascota = miConsultaRaza.data().nombre_raza;
                        return;
                    }
                })

                consultarUsuario.docs.forEach(miConsultaUsuario=>{
                    if(miConsultaUsuario.data().dni_usuario == doc.data().usuario){
                        usuarioMascota = miConsultaUsuario.data().dni_usuario;
                        return;
                    }
                })

                tablaMascota.row.add([
                    doc.data().nombre_mas,
                    doc.data().genero_mas,
                    doc.data().peso_mas,
                    doc.data().talla_mas,
                    "Felino",
                    razaMascota,
                    usuarioMascota,
                    doc.data().condicion,
                    doc.data().presentacion_mas,
                ]).draw(true);
            }
        })
    }
}

$('#myTableMascotas tbody').on('dblclick', 'tr', async function () {
    var data = tablaMascota.row(this).data();

    const query = await firebase.firestore().collection('mascota').get();
    query.docs.forEach((doc)=>{
        if(doc.data().nombre_mas == data[0] && doc.data().usuario == data[6]){
            idFilaMascota = doc.id;
            eliminarMascota();
            return;
        }
    })
})

const eliminarMascota = async ()=> {
    let mascotaSeleccionada = await firebase.firestore().collection("mascota").doc(idFilaMascota);

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
            }).then((result)=>{
                if(result.isConfirmed){
                    listarMascota();
                    txtNombreMascota.value = "";
                    txtPesoMascota.value = "";
                    txtTallaMascota.value = "";
                    txtPresentacionMascota.value = "";
                    txtNombreUsuarioMascota.value = "";
                    txtDniUsuarioMascota.value = "";
                    llenarComboEspecieMascota();
                    llenarComboRazaMascota();
                    iniciarCombosMascota();
                }
            })
            return mascotaSeleccionada.update({
                estado_mas: 0,
            })
        }
    })
}

btnCancelarMascota.onclick = ()=> {
    txtNombreMascota.value = "";
    txtPesoMascota.value = "";
    txtTallaMascota.value = "";
    txtPresentacionMascota.value = "";
    txtNombreUsuarioMascota.value = "";
    txtDniUsuarioMascota.value = "";
    llenarComboEspecieMascota();
    llenarComboRazaMascota();
    iniciarCombosMascota();
    btnCrearActualizarMascota.innerText = "Crear";
}

frmMascota.onsubmit = (e)=> {
    e.preventDefault();
}

txtDniUsuarioMascota.onkeyup = async ()=>{
    if(txtDniUsuarioMascota.value.trim().length == 8){
        const consultarUsu = await firebase.firestore().collection('usuario').get();
        consultarUsu.docs.forEach((miUsu)=>{
            if(miUsu.data().dni_usuario == txtDniUsuarioMascota.value.trim()){
                txtNombreUsuarioMascota.value = miUsu.data().nombre_usu + " " + miUsu.data().apellido_usu;
            }
        })
    }

    if(txtDniUsuario.value.trim().length > 8){
        txtDniUsuario.value = txtDniUsuario.value.trim().substr(0,8);
    }
}

btnCrearActualizarMascota.onclick = ()=> {
    if(btnCrearActualizarMascota.innerText == "Crear"){
        crearMascota();
    } else if(btnCrearActualizarMascota.innerText == "Editar"){
        editarMascota();
    }
}

const crearMascota = async ()=> {
    if(txtNombreMascota.value.trim() == "" || txtPesoMascota.value <= 0 || txtTallaMascota.value <= 0 ||
        txtPresentacionMascota.value.trim() == "" || cboGeneroMascota.value == 0 || cboEspecieMascota.value == 0 ||
        cboRazaMascota.value == 0 || txtDniUsuarioMascota.value.trim() == "" || cboCondicionMascota.value == 0){

        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        });
    } else {
        const query = await firebase.firestore().collection("mascota").get();
        let mascotaEncontrada = false;
        let mascotaDesactivada = false;
        let mascotaAactivar = "";

        query.docs.forEach((doc)=>{
            if(doc.data().nombre_mas == txtNombreMascota.value.trim() && doc.data().estado_mas == 1 &&
                doc.data().usuario == txtDniUsuarioMascota.value.trim()){
                mascotaEncontrada = true;
                Swal.fire({
                    icon: "error",
                    title: "Registro ya existente",
                    text: "El registro que trata de ingresar ya existe en la base de datos",
                    confirmButtonText: "Entendido",
                    allowOutsideClick: false,
                });
                return;
            } else if (doc.data().nombre_mas == txtNombreMascota.value.trim() && doc.data().estado_mas == 0 &&
                doc.data().usuario == txtDniUsuarioMascota.value.trim()){
                mascotaDesactivada = true;
                mascotaAactivar = doc.id;
            }
        });
    
        if(mascotaEncontrada == false && mascotaDesactivada == false){
            firebase.firestore().collection('mascota').add({
                nombre_mas: txtNombreMascota.value.trim(),
                peso_mas: txtPesoMascota.value,
                talla_mas: txtTallaMascota.value,
                presentacion_mas: txtPresentacionMascota.value.trim(),
                genero_mas: cboGeneroMascota.value,
                especie: cboEspecieMascota.value,
                raza: cboRazaMascota.value,
                usuario: txtDniUsuarioMascota.value,
                condicion: cboCondicionMascota.value,
                estado_mas: 1,
            })
            Swal.fire({
                icon: "success",
                title: "Registro creado satisfactoriamente",
                text: "El registro fue creado de manera satisfactoria",
                confirmButtonText: "Entendido",
                allowOutsideClick: false,
            }).then((result)=>{
                if(result.isConfirmed){
                    listarMascota();
                    txtNombreMascota.value = "";
                    txtPesoMascota.value = "";
                    txtTallaMascota.value = "";
                    txtPresentacionMascota.value = "";
                    txtNombreUsuarioMascota.value = "";
                    txtDniUsuarioMascota.value = "";
                    llenarComboEspecieMascota();
                    llenarComboRazaMascota();
                    iniciarCombosMascota();
                }
            })
        } else if (mascotaEncontrada == false && mascotaDesactivada == true){
            let mascotaSeleccionada = await firebase.firestore().collection("mascota").doc(mascotaAactivar);
            Swal.fire({
                icon: "success",
                title: "Registro creado satisfactoriamente",
                text: "El registro fue creado de manera satisfactoria",
                confirmButtonText: "Entendido",
                allowOutsideClick: false,
            }).then((result)=>{
                if(result.isConfirmed){
                    listarMascota();
                    txtNombreMascota.value = "";
                    txtPesoMascota.value = "";
                    txtTallaMascota.value = "";
                    txtPresentacionMascota.value = "";
                    txtNombreUsuarioMascota.value = "";
                    txtDniUsuarioMascota.value = "";
                    llenarComboEspecieMascota();
                    llenarComboRazaMascota();
                    iniciarCombosMascota();
                }
            })
            mascotaSeleccionada.update({
                estado_mas: 1,
                peso_mas: txtPesoMascota.value,
                talla_mas: txtTallaMascota.value,
                presentacion_mas: txtPresentacionMascota.value.trim(),
                genero_mas: cboGeneroMascota.value,
                especie: cboEspecieMascota.value,
                raza: cboRazaMascota.value,
                condicion: cboCondicionMascota.value,
            });
        }
    }
}

const editarMascota = async ()=> {
    if(txtNombreMascota.value.trim() == "" || txtPesoMascota.value <= 0 || txtTallaMascota.value <= 0 ||
        txtPresentacionMascota.value.trim() == "" || cboGeneroMascota.value == 0 || cboEspecieMascota.value == 0 ||
        cboRazaMascota.value == 0 || txtDniUsuarioMascota.value.trim() == "" || cboCondicionMascota.value == 0){

        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        });
    } else {
        let mascotaSeleccionada = await firebase.firestore().collection("mascota").doc(idFilaMascota);

        Swal.fire({
            icon: "success",
            title: "Registro actualizado satisfactoriamente",
            text: "El registro fue actualizado de manera satisfactoria",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        }).then((result)=>{
            if(result.isConfirmed){
                listarMascota();
                txtNombreMascota.value = "";
                txtPesoMascota.value = "";
                txtTallaMascota.value = "";
                txtPresentacionMascota.value = "";
                txtNombreUsuarioMascota.value = "";
                txtDniUsuarioMascota.value = "";
                llenarComboEspecieMascota();
                llenarComboRazaMascota();
                iniciarCombosMascota();
            }
        })

        mascotaSeleccionada.update({
            nombre_mas: txtNombreMascota.value.trim(),
            peso_mas: txtPesoMascota.value,
            talla_mas: txtTallaMascota.value,
            presentacion_mas: txtPresentacionMascota.value.trim(),
            genero_mas: cboGeneroMascota.value,
            especie: cboEspecieMascota.value,
            raza: cboRazaMascota.value,
            usuario: txtDniUsuarioMascota.value,
            condicion: cboCondicionMascota.value,
            estado_mas: 1,
        });
    }
}
