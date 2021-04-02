
const formMarcas = document.getElementById("formMarcas");
const frmMarca = document.getElementById("frmMarca");
const txtNombreMarca = document.getElementById("txtNombreMarca");
const btnCrearActualizarMarca = document.getElementById("btnCrearActualizarMarca");
const btnCancelarMarca = document.getElementById("btnCancelarMarca");
const tableMarcas = document.getElementById("tableMarcas");
let tablaMarca = $('#myTableMarcas').DataTable();
let idFilaMarca = "";

opcMarcas.onclick = ()=> {
    ocultarContenido();
    formMarcas.style.display = "block";
    tableMarcas.style.display = "block";
    listarMarca();
    btnCancelarMarca.click();
}

$('#myTableMarcas tbody').on('click', 'tr', async function () {
    var data = tablaMarca.row(this).data();
    txtNombreMarca.value = data[0];
    btnCrearActualizarMarca.innerText = "Editar";

    const query = await firebase.firestore().collection('marca').get();
    query.docs.forEach((doc)=>{
        if(doc.data().nombre_marca === data[0]){
            idFilaMarca = doc.id;
            return;
        }
    })
})

$('#myTableMarcas tbody').on('dblclick', 'tr', async function () {
    var data = tablaMarca.row(this).data();

    const query = await firebase.firestore().collection('marca').get();
    query.docs.forEach((doc)=>{
        if(doc.data().nombre_marca === data[0]){
            idFilaMarca = doc.id;
            eliminarMarca();
            return;
        }
    })
})

const listarMarca = async ()=> {
    const query = await firebase.firestore().collection('marca').get();
    tablaMarca.clear().draw();
    query.docs.forEach((doc)=>{
        if(doc.data().estado_marca == 1){
            tablaMarca.row.add([
                doc.data().nombre_marca,
            ]).draw(true);
        }
    })
}

const crearMarca = async ()=> {
    if(txtNombreMarca.value.trim() == ""){
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        });
    } else {
        const query = await firebase.firestore().collection("marca").get();
        let marcaEncontrada = false;
        let marcaDesactivada = false;
        let marcaAactivar = "";

        query.docs.forEach((doc)=>{
            if(doc.data().nombre_marca == txtNombreMarca.value.trim() && doc.data().estado_marca == 1){
                marcaEncontrada = true;
                Swal.fire({
                    icon: "error",
                    title: "Registro ya existente",
                    text: "El registro que trata de ingresar ya existe en la base de datos",
                    confirmButtonText: "Entendido",
                    allowOutsideClick: false,
                });
                return;
            } else if (doc.data().nombre_marca == txtNombreMarca.value.trim() && doc.data().estado_marca == 0){
                marcaDesactivada = true;
                marcaAactivar = doc.id;
            }
        });
    
        if(marcaEncontrada == false && marcaDesactivada == false){
            firebase.firestore().collection('marca').add({
                nombre_marca: txtNombreMarca.value.trim(),
                estado_marca: 1,
            })
            Swal.fire({
                icon: "success",
                title: "Registro creado satisfactoriamente",
                text: "El registro fue creado de manera satisfactoria",
                confirmButtonText: "Entendido",
                allowOutsideClick: false,
            }).then((result)=>{
                if(result.isConfirmed){
                    listarMarca();
                    txtNombreMarca.value = "";
                }
            })
        } else if (marcaEncontrada == false && marcaDesactivada == true){
            let marcaSeleccionada = await firebase.firestore().collection("marca").doc(marcaAactivar);
            Swal.fire({
                icon: "success",
                title: "Registro creado satisfactoriamente",
                text: "El registro fue creado de manera satisfactoria",
                confirmButtonText: "Entendido",
                allowOutsideClick: false,
            }).then((result)=>{
                if(result.isConfirmed){
                    txtNombreMarca.value = "";
                    listarMarca();
                }
            })
            marcaSeleccionada.update({
                estado_marca: 1,
            });
        }
    }
}

const editarMarca = async ()=> {
    if(txtNombreMarca.value.trim() == ""){
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        });
    } else {
        let marcaSeleccionada = await firebase.firestore().collection("marca").doc(idFilaMarca);

        Swal.fire({
            icon: "success",
            title: "Registro actualizado satisfactoriamente",
            text: "El registro fue actualizado de manera satisfactoria",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        }).then((result)=>{
            if(result.isConfirmed){
                listarMarca();
                txtNombreMarca.value = "";
                btnCrearActualizarMarca.innerText = "Crear";
            }
        })

        marcaSeleccionada.update({
            nombre_marca: txtNombreMarca.value.trim(),
        });
    }
}

const eliminarMarca = async ()=> {
    let marcaSeleccionada = await firebase.firestore().collection("marca").doc(idFilaMarca);

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
                    listarMarca();
                    txtNombreMarca.value = "";
                    btnCrearActualizarMarca.innerText = "Crear";
                }
            })
            return marcaSeleccionada.update({
                estado_marca: 0,
            })
        }
    })
}

btnCrearActualizarMarca.onclick = ()=> {
    if(btnCrearActualizarMarca.innerText == "Crear"){
        crearMarca();
    } else if(btnCrearActualizarMarca.innerText == "Editar"){
        editarMarca();
    }
}

btnCancelarMarca.onclick = ()=> {
    idFilaMarca = "";
    txtNombreMarca.value = "";
    btnCrearActualizarMarca.innerText = "Crear";
}

frmMarca.onsubmit = (e)=> {
    e.preventDefault();
}
