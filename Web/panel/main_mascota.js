
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
    // listarMascota();
    iniciarCombosMascota();
    llenarComboEspecieMascota();
    llenarComboRazaMascota();
    // btnCancelarMascota.click();
}

lstPerros.onclick = ()=> {
    inicializarMascotas();
    opcMarcadaMascota = "lstPerros";
}

lstGatos.onclick = ()=> {
    inicializarMascotas();
    opcMarcadaMascota = "lstGatos";
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
}

const llenarComboRazaMascota = async ()=> {
    cboRazaMascota.innerHTML = `<option value="0" id="optCeroRazaMascota">Seleccionar Raza</option>`;
}

const iniciarCombosMascota = ()=> {
    cboGeneroMascota.innerHTML = `  <option value="0" id="sinGeneroMascota">Seleccionar Género</option>
									<option value="Macho" id="Macho">Macho</option>
									<option value="Hembra" id="Hembra">Hembra</option>`;
    
    cboCondicionMascota.innerHTML = `   <option value="0" id="sinCondicionMascota">Seleccionar Condición</option>
                                        <option value="conHogar">Con Hogar</option>
                                        <option value="enAdopcion">En Adopción</option>`;
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

const deseleccionarComboCondicionMascota= (option)=> {
    for(let i=0; i<cboCondicionMascota.children.length; i++){
        cboCondicionMascota.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

/*
$('#myTableUsuarios tbody').on('click', 'tr', async function () {
    var data = tablaUsuario.row(this).data();

    const query = await firebase.firestore().collection('usuario').get();
    query.docs.forEach((doc)=>{
        if(doc.data().dni_usuario === data[0] && doc.data().correo_usu === data[6]){
            idFilaUsuario = doc.id;
            doc.data().dni_usuario == "null" ? txtDniUsuario.value = "" : txtDniUsuario.value = data[0];
            doc.data().nombre_usu == "null" ? txtNombreUsuario.value = "" : txtNombreUsuario.value = data[1];
            doc.data().apellido_usu == "null" ? txtApellidoUsuario.value = "" : txtApellidoUsuario.value = data[2];
            doc.data().genero_usu == "null" ? deseleccionarComboGenero("sinGenero") : deseleccionarComboGenero(doc.data().genero_usu);
            doc.data().estado_civil_usu == "null" ? deseleccionarComboEstadoCivil("sinEstadoCivil") : deseleccionarComboEstadoCivil(doc.data().estado_civil_usu);
            doc.data().cargo == "1fpCiOen3xQSt6aRu2ee" ? deseleccionarComboCargo("optCeroCargo") : deseleccionarComboCargo(doc.data().cargo);
            doc.data().correo_usu == null ? txtCorreoUsuario.value = "" : txtCorreoUsuario.value = data[6];
            doc.data().telefono_usu == "null" ? txtTelefonoUsuario.value = "" : txtTelefonoUsuario.value = data[7];
            doc.data().direccion_usu == "null" ? txtDireccionUsuario.value = "" : txtDireccionUsuario.value = data[8];
            doc.data().tipo_usu == "null" ? deseleccionarComboTipo("sinTipoUsuario") : deseleccionarComboTipo(doc.data().tipo_usu);
            return;
        }
    })
});

$('#myTableUsuarios tbody').on('dblclick', 'tr', async function () {
    var data = tablaUsuario.row(this).data();

    const query = await firebase.firestore().collection('usuario').get();
    query.docs.forEach((doc)=>{
        if(doc.data().dni_usuario === data[0] && doc.data().correo_usu === data[6]){
            idFilaUsuario = doc.id;
            eliminarUsuario();
            return;
        }
    })
});

const listarUsuario = async ()=> {
    const query = await firebase.firestore().collection('usuario').get();
    tablaUsuario.clear().draw();

    if(opcMarcada === "lstClientes"){
        query.docs.forEach(async(doc)=>{
            if(doc.data().estado === 1 && doc.data().tipo_usu == 1){
                const query = await firebase.firestore().collection('cargo').get();
                query.docs.forEach((miCargo)=>{
                    if(miCargo.id === doc.data().cargo){
                        tablaUsuario.row.add([
                            doc.data().dni_usuario,
                            doc.data().nombre_usu,
                            doc.data().apellido_usu,
                            doc.data().genero_usu,
                            doc.data().estado_civil_usu,
                            miCargo.data().nombre_cargo,
                            doc.data().correo_usu,
                            doc.data().telefono_usu,
                            doc.data().direccion_usu,
                        ]).draw(true);
                    }
                })
            }
        })
    }

    if(opcMarcada === "lstTrabajadores"){
        query.docs.forEach(async(doc)=>{
            if(doc.data().estado === 1 && doc.data().tipo_usu == 2){
                const query = await firebase.firestore().collection('cargo').get();
                query.docs.forEach((miCargo)=>{
                    if(miCargo.id === doc.data().cargo){
                        tablaUsuario.row.add([
                            doc.data().dni_usuario,
                            doc.data().nombre_usu,
                            doc.data().apellido_usu,
                            doc.data().genero_usu,
                            doc.data().estado_civil_usu,
                            miCargo.data().nombre_cargo,
                            doc.data().correo_usu,
                            doc.data().telefono_usu,
                            doc.data().direccion_usu,
                        ]).draw(true);
                    }
                })
            }
        })
    }

    if(opcMarcada === "lstAdministradores"){
        query.docs.forEach(async(doc)=>{
            if(doc.data().estado === 1 && doc.data().tipo_usu == 3){
                const query = await firebase.firestore().collection('cargo').get();
                query.docs.forEach((miCargo)=>{
                    if(miCargo.id === doc.data().cargo){
                        tablaUsuario.row.add([
                            doc.data().dni_usuario,
                            doc.data().nombre_usu,
                            doc.data().apellido_usu,
                            doc.data().genero_usu,
                            doc.data().estado_civil_usu,
                            miCargo.data().nombre_cargo,
                            doc.data().correo_usu,
                            doc.data().telefono_usu,
                            doc.data().direccion_usu,
                        ]).draw(true);
                    }
                })
            }
        })
    }
}

const eliminarUsuario = async ()=> {
    let usuarioSeleccionado = await firebase.firestore().collection("usuario").doc(idFilaUsuario);

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
                    listarUsuario();
                    txtDniUsuario.value = "";
                    txtNombreUsuario.value = "";
                    txtApellidoUsuario.value = "";
                    txtCorreoUsuario.value = "";
                    txtTelefonoUsuario.value = "";
                    txtDireccionUsuario.value = "";
                    llenarComboCargo();
                    iniciarCombos();
                }
            })
            return usuarioSeleccionado.update({
                estado: 0,
            })
        }
    })
}

btnEditarUsuario.onclick = async ()=> {
    if(txtDniUsuario.value.trim() === "" || txtDniUsuario.value.trim().length != 8 ||
        txtNombreUsuario.value.trim() === "" || txtApellidoUsuario.value.trim() === "" ||
        cboGeneroUsuario.value == 0 || cboEstadoCivilUsuario.value == 0 || cboCargoUsuario.value == 0 ||
        txtCorreoUsuario.value.trim() === "" || txtTelefonoUsuario.value.trim() === "" ||
        txtDireccionUsuario.value.trim() === "" || cboTipoUsuario.value == 0){

        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        });
    } else {
        let usuarioSeleccionado = await firebase.firestore().collection("usuario").doc(idFilaUsuario);

        Swal.fire({
            icon: "success",
            title: "Registro actualizado satisfactoriamente",
            text: "El registro fue actualizado de manera satisfactoria",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        }).then((result)=>{
            if(result.isConfirmed){
                listarUsuario();
                txtDniUsuario.value = "";
                txtNombreUsuario.value = "";
                txtApellidoUsuario.value = "";
                txtCorreoUsuario.value = "";
                txtTelefonoUsuario.value = "";
                txtDireccionUsuario.value = "";
                llenarComboCargo();
                iniciarCombos();
            }
        })

        usuarioSeleccionado.update({
            dni_usuario: txtDniUsuario.value.trim(),
            nombre_usu: txtNombreUsuario.value.trim(),
            apellido_usu: txtApellidoUsuario.value.trim(),
            genero_usu: cboGeneroUsuario.value,
            estado_civil_usu: cboEstadoCivilUsuario.value,
            cargo: cboCargoUsuario.value,
            correo_usu: txtCorreoUsuario.value.trim(),
            telefono_usu: txtTelefonoUsuario.value.trim(),
            direccion_usu: txtDireccionUsuario.value.trim(),
            tipo_usu: cboTipoUsuario.value,
        });
    }
}

btnCancelarUsuario.onclick = ()=> {
    idFilaUsuario = "";
    txtDniUsuario.value = "";
    txtNombreUsuario.value = "";
    txtApellidoUsuario.value = "";
    txtCorreoUsuario.value = "";
    txtTelefonoUsuario.value = "";
    txtDireccionUsuario.value = "";
    llenarComboCargo();
    iniciarCombos();
}

frmUsuario.onsubmit = (e)=> {
    e.preventDefault();
}

txtDniUsuario.onkeyup = ()=>{
    if(txtDniUsuario.value.trim().length == 8){
        fetch(`https://apiperu.dev/api/dni/${txtDniUsuario.value.trim()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 885d75c9ab6c537a20db76ed0e6daf0ba674ddd554972e2829fbdc46c4f83d96',
            },
        }).then(response=> response.json()).then(datos=>{
            txtNombreUsuario.value = datos.data.nombres;
            txtApellidoUsuario.value = datos.data.apellido_paterno + " " + datos.data.apellido_materno;
        })
    }
    if(txtDniUsuario.value.trim().length > 8){
        txtDniUsuario.value = txtDniUsuario.value.trim().substr(0,8);
    }
}
*/
