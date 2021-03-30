
const formUsuarios = document.getElementById("formUsuarios");
const frmUsuario = document.getElementById("frmUsuario");

const txtDniUsuario = document.getElementById("txtDniUsuario");
const txtNombreUsuario = document.getElementById("txtNombreUsuario");
const txtApellidoUsuario = document.getElementById("txtApellidoUsuario");
const cboGeneroUsuario = document.getElementById("cboGeneroUsuario");
const cboEstadoCivilUsuario = document.getElementById("cboEstadoCivilUsuario");
const cboCargoUsuario = document.getElementById("cboCargoUsuario");
const txtTelefonoUsuario = document.getElementById("txtTelefonoUsuario");
const cboTipoUsuario = document.getElementById("cboTipoUsuario");
const txtDireccionUsuario = document.getElementById("txtDireccionUsuario");
const txtCorreoUsuario = document.getElementById("txtCorreoUsuario");

const btnCrearActualizarUsuario = document.getElementById("btnCrearActualizarUsuario");
const btnCancelarUsuario = document.getElementById("btnCancelarUsuario");

const tableUsuarios = document.getElementById("tableUsuarios");
let tablaUsuario = $('#myTableUsuarios').DataTable();

let idFilaUsuario = "";
let opcMarcada = "";

const inicializar = ()=> {
    ocultarContenido();
    formUsuarios.style.display = "block";
    tableUsuarios.style.display = "block";
    listarUsuario();
    llenarComboCargo();
    iniciarCombos();
    btnCancelarUsuario.click();
}

lstClientes.onclick = ()=> {
    inicializar();
    opcMarcada = "lstClientes";
}

lstTrabajadores.onclick = ()=> {
    inicializar();
    opcMarcada = "lstTrabajadores";
}

lstAdministradores.onclick = ()=> {
    inicializar();
    opcMarcada = "lstAdministradores";
}

const llenarComboCargo = async ()=> {
    const query = await firebase.firestore().collection('cargo').get();
    cboCargoUsuario.innerHTML = `<option value="0" id="optCeroCargo">Seleccionar Cargo</option>`;

    query.docs.forEach((doc)=>{
        if(doc.data().estado_cargo === 1){
            let option = document.createElement("option");
            option.text = doc.data().nombre_cargo;
            option.value = doc.id;
            option.id = doc.id;

            cboCargoUsuario.appendChild(option);
        }
    })
}

const iniciarCombos = async ()=> {
    cboGeneroUsuario.innerHTML = `  <option value="0" id="sinGenero">Seleccionar Género</option>
									<option value="Masculino" id="Masculino">Masculino</option>
									<option value="Femenino" id="Femenino">Femenino</option>`;
    
    cboEstadoCivilUsuario.innerHTML = ` <option value="0" id="sinEstadoCivil">Seleccionar Estado Civil</option>
                                        <option value="Viudo" id="Viudo">Viudo</option>
                                        <option value="Soltero" id="Soltero">Soltero</option>
                                        <option value="Casado" id="Casado">Casado</option>
                                        <option value="Divorciado" id="Divorciado">Divorciado</option>`;
    
    cboTipoUsuario.innerHTML = `    <option value="0">Seleccionar Tipo</option>
                                    <option value="1" id="1">Cliente</option>
                                    <option value="2" id="2">Trabajador</option>
                                    <option value="3" id="3">Administrador</option>`;
}

const deseleccionarComboGenero = (option)=> {
    for(let i=0; i<cboGeneroUsuario.children.length; i++){
        cboGeneroUsuario.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

const deseleccionarComboEstadoCivil = (option)=> {
    for(let i=0; i<cboEstadoCivilUsuario.children.length; i++){
        cboEstadoCivilUsuario.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

const deseleccionarComboCargo= (option)=> {
    for(let i=0; i<cboCargoUsuario.children.length; i++){
        cboCargoUsuario.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

const deseleccionarComboTipo= (option)=> {
    for(let i=0; i<cboTipoUsuario.children.length; i++){
        cboTipoUsuario.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

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

    btnCrearActualizarUsuario.innerText = "Editar";
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

const crearUsuario = async ()=> {
    if(txtDniUsuario.value.trim() === "" ||
        txtNombreUsuario.value.trim() === "" || txtApellidoUsuario.value.trim() === "" ||
        cboGeneroUsuario.value == 0 || cboEstadoCivilUsuario.value == 0 || cboCargoUsuario.value == 0 ||
        txtCorreoUsuario.value.trim() === "" || txtTelefonoUsuario.value.trim() === "" ||
        txtDireccionUsuario.value.trim() === "" || cboTipoUsuario.value == 0){

        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos",
            confirmButtonText: "Entendido"
        });
    } else {
        const query = await firebase.firestore().collection("usuario").get();
        let usuarioEncontrado = false;

        query.docs.forEach((doc)=>{
            if(doc.data().correo_usu == txtCorreoUsuario.value.trim() ||
                doc.data().dni_usuario == txtDniUsuario.value.trim()){
                usuarioEncontrado = true;
                Swal.fire({
                    icon: "error",
                    title: "Registro ya existente",
                    text: "El registro que trata de ingresar ya existe en la base de datos",
                    confirmButtonText: "Entendido"
                });
                return;
            }
        });
    
        if(usuarioEncontrado === false){
            firebase.firestore().collection('usuario').add({
                // id_usuario: user.uid,
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
                estado: 1,
            })
            Swal.fire({
                icon: "success",
                title: "Registro creado satisfactoriamente",
                text: "El registro fue creado de manera satisfactoria",
                confirmButtonText: "Entendido",
            }).then((result)=>{
                if(result.isConfirmed){
                    listarUsuario();
                    llenarComboCargo();
                    txtDniUsuario.value = "";
                    txtNombreUsuario.value = "";
                    txtApellidoUsuario.value = "";
                    // cboGeneroUsuario.value = 0;
                    // cboEstadoCivilUsuario.value = 0;
                    // cboCargoUsuario.value = 0;
                    txtCorreoUsuario.value = "";
                    txtTelefonoUsuario.value = "";
                    txtDireccionUsuario.value = "";
                    // cboTipoUsuario.value = 0;
                    iniciarCombos();
                    // txtNombreRaza.value = "";
                }
            })
        }
    }
}

const editarUsuario = async ()=> {
    if(txtDniUsuario.value.trim() === "" ||
        txtNombreUsuario.value.trim() === "" || txtApellidoUsuario.value.trim() === "" ||
        cboGeneroUsuario.value == 0 || cboEstadoCivilUsuario.value == 0 || cboCargoUsuario.value == 0 ||
        txtCorreoUsuario.value.trim() === "" || txtTelefonoUsuario.value.trim() === "" ||
        txtDireccionUsuario.value.trim() === "" || cboTipoUsuario.value == 0){

        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos",
            confirmButtonText: "Entendido"
        });
    } else {
        let usuarioSeleccionado = await firebase.firestore().collection("usuario").doc(idFilaUsuario);

        Swal.fire({
            icon: "success",
            title: "Registro actualizado satisfactoriamente",
            text: "El registro fue actualizado de manera satisfactoria",
            confirmButtonText: "Entendido"
        }).then((result)=>{
            if(result.isConfirmed){
                listarUsuario();
                llenarComboCargo();
                txtDniUsuario.value = "";
                txtNombreUsuario.value = "";
                txtApellidoUsuario.value = "";
                // cboGeneroUsuario.value = 0;
                // cboEstadoCivilUsuario.value = 0;
                // cboCargoUsuario.value = 0;
                txtCorreoUsuario.value = "";
                txtTelefonoUsuario.value = "";
                txtDireccionUsuario.value = "";
                // cboTipoUsuario.value = 0;
                iniciarCombos();
                btnCrearActualizarRaza.innerText = "Crear";
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

const eliminarUsuario = async ()=> {
    let usuarioSeleccionado = await firebase.firestore().collection("usuario").doc(idFilaUsuario);

    Swal.fire({
        title: '¿Desea eliminar el registro?',
        showDenyButton: true,
        confirmButtonText: 'Volver',
        denyButtonText: 'Eliminar',
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
                    cboGeneroUsuario.value = 0;
                    cboEstadoCivilUsuario.value = 0;
                    cboCargoUsuario.value = 0;
                    txtCorreoUsuario.value = "";
                    txtTelefonoUsuario.value = "";
                    txtDireccionUsuario.value = "";
                    cboTipoUsuario.value = 0;
                    btnCrearActualizarRaza.innerText = "Crear";
                }
            })
            return usuarioSeleccionado.update({
                estado: 0,
            })
        }
    })
}

btnCrearActualizarUsuario.onclick = ()=> {
    if(btnCrearActualizarUsuario.innerText === "Crear"){
        crearUsuario();
    } else if(btnCrearActualizarUsuario.innerText === "Editar"){
        editarUsuario();
    }
}

btnCancelarUsuario.onclick = ()=> {
    idFilaUsuario = "";
    txtDniUsuario.value = "";
    txtNombreUsuario.value = "";
    txtApellidoUsuario.value = "";
    // cboGeneroUsuario.value = 0;
    // cboEstadoCivilUsuario.value = 0;
    // cboCargoUsuario.value = 0;
    txtCorreoUsuario.value = "";
    txtTelefonoUsuario.value = "";
    txtDireccionUsuario.value = "";
    // cboTipoUsuario.value = 0;
    llenarComboCargo();
    iniciarCombos();
}

frmRaza.onsubmit = (e)=> {
    e.preventDefault();
}