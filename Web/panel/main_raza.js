
const formRazas = document.getElementById("formRazas");
const frmRaza = document.getElementById("frmRaza");
const txtNombreRaza = document.getElementById("txtNombreRaza");
const btnCrearActualizarRaza = document.getElementById("btnCrearActualizarRaza");
const btnCancelarRaza = document.getElementById("btnCancelarRaza");
const tableRazas = document.getElementById("tableRazas");
let tablaRaza = $('#myTableRazas').DataTable();
let idFilaRaza = "";
const cboEspecie = document.getElementById("cboEspecie");

opcRazas.onclick = ()=> {
    ocultarContenido();
    formRazas.style.display = "block";
    tableRazas.style.display = "block";
    listarRaza();
    llenarCombo();
}

const llenarCombo = async ()=> {
    const query = await firebase.firestore().collection('especie').get();
    cboEspecie.innerHTML = `<option value="0" id="cero">Seleccione</option>`;

    query.docs.forEach((doc)=>{
        if(doc.data().estado_especie === 1){
            let option = document.createElement("option");
            option.text = doc.data().nombre_especie;
            option.value = doc.id;
            option.id = doc.id;

            cboEspecie.appendChild(option);
        }
    })
}

const deseleccionarCBO = (option)=> {
    for(let i=0; i<cboEspecie.children.length; i++){
        cboEspecie.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

$('#myTableRazas tbody').on('click', 'tr', async function () {
    var data = tablaRaza.row(this).data();

    const query = await firebase.firestore().collection('raza').get();
    query.docs.forEach((doc)=>{
        if(doc.data().nombre_raza === data[0]){
            idFilaRaza = doc.id;
            txtNombreRaza.value = data[0];
            deseleccionarCBO(doc.data().especie);
            return;
        }
    })

    btnCrearActualizarRaza.innerText = "Editar";
});

$('#myTableRazas tbody').on('dblclick', 'tr', async function () {
    var data = tablaRaza.row(this).data();

    const query = await firebase.firestore().collection('raza').get();
    query.docs.forEach((doc)=>{
        if(doc.data().nombre_raza === data[0]){
            idFilaRaza = doc.id;
            eliminarRaza();
            return;
        }
    })
});

const listarRaza = async ()=> {
    const query = await firebase.firestore().collection('raza').get();
    tablaRaza.clear().draw();

    query.docs.forEach(async(doc)=>{
        if(doc.data().estado_raza === 1){
            const query = await firebase.firestore().collection('especie').get();

            query.docs.forEach((miEspecie)=>{
                if(miEspecie.id === doc.data().especie){
                    tablaRaza.row.add([
                        doc.data().nombre_raza,
                        miEspecie.data().nombre_especie,
                    ]).draw(true);
                }
            })
        }
    })
}

const crearRaza = async ()=> {
    if(txtNombreRaza.value.trim() === "" || cboEspecie.value === "0"){
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos",
            confirmButtonText: "Entendido"
        });
    } else {
        const query = await firebase.firestore().collection("raza").get();
        let razaEncontrada = false;

        query.docs.forEach((doc)=>{
            if(doc.data().nombre_raza == txtNombreRaza.value.trim()){
                razaEncontrada = true;
                Swal.fire({
                    icon: "error",
                    title: "Registro ya existente",
                    text: "El registro que trata de ingresar ya existe en la base de datos",
                    confirmButtonText: "Entendido"
                });
                return;
            }
        });
    
        if(razaEncontrada === false){
            firebase.firestore().collection('raza').add({
                nombre_raza: txtNombreRaza.value.trim(),
                especie: cboEspecie.value,
                estado_raza: 1,
            })
            Swal.fire({
                icon: "success",
                title: "Registro creado satisfactoriamente",
                text: "El registro fue creado de manera satisfactoria",
                confirmButtonText: "Entendido",
            }).then((result)=>{
                if(result.isConfirmed){
                    txtNombreRaza.value = "";
                    cboEspecie.value = "0";
                }
            })
            listarRaza();
        }
    }
}

const editarRaza = async ()=> {
    if(txtNombreRaza.value.trim() === "" || cboEspecie.value === "0"){
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos",
            confirmButtonText: "Entendido"
        });
    } else {
        let razaSeleccionada = await firebase.firestore().collection("raza").doc(idFilaRaza);

        Swal.fire({
            icon: "success",
            title: "Registro actualizado satisfactoriamente",
            text: "El registro fue actualizado de manera satisfactoria",
            confirmButtonText: "Entendido"
        }).then((result)=>{
            if(result.isConfirmed){
                listarRaza();
                llenarCombo();
                txtNombreRaza.value = "";
                btnCrearActualizarRaza.innerText = "Crear";
            }
        })

        razaSeleccionada.update({
            nombre_raza: txtNombreRaza.value.trim(),
            especie: cboEspecie.value,
        });
    }
}

const eliminarRaza = async ()=> {
    let razaSeleccionada = await firebase.firestore().collection("raza").doc(idFilaRaza);

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
                    listarRaza();
                    txtNombreRaza.value = "";
                    cboEspecie.value = 0;
                    btnCrearActualizarRaza.innerText = "Crear";
                }
            })
            return razaSeleccionada.update({
                estado_raza: 0,
            })
        }
    })
}

btnCrearActualizarRaza.onclick = ()=> {
    if(btnCrearActualizarRaza.innerText === "Crear"){
        crearRaza();
    } else if(btnCrearActualizarRaza.innerText === "Editar"){
        editarRaza();
    }
}

btnCancelarRaza.onclick = ()=> {
    idFilaRaza = "";
    txtNombreRaza.value = "";
    cboEspecie.value = 0;
    btnCrearActualizarRaza.innerText = "Crear";
}

frmRaza.onsubmit = (e)=> {
    e.preventDefault();
}
