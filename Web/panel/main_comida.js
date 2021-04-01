
const formComidas = document.getElementById("formComidas");
const frmComida = document.getElementById("frmComida");
const txtNombreComida = document.getElementById("txtNombreComida");
// const imgComida = document.getElementById("imgComida");
const txtStockComida = document.getElementById("txtStockComida");
const cboMarcaComida = document.getElementById("cboMarcaComida");
const txtPrecioComida = document.getElementById("txtPrecioComida");
const txtDescuentoComida = document.getElementById("txtDescuentoComida");
const btnCrearActualizarComida = document.getElementById("btnCrearActualizarComida");
const btnCancelarComida = document.getElementById("btnCancelarComida");
const tableComidas = document.getElementById("tableComidas");
let tablaComida = $('#myTableComidas').DataTable();
let idFilaComida = "";

opcAlimentos.onclick = ()=> {
    ocultarContenido();
    formComidas.style.display = "block";
    tableComidas.style.display = "block";
    llenarComboMarca();
    listarComida();
    btnCancelarComida.click();
}

const llenarComboMarca = async ()=> {
    const query = await firebase.firestore().collection('marca').get();
    cboMarcaComida.innerHTML = `<option value="0" id="optCeroMarca">Seleccionar Marca</option>`;

    query.docs.forEach((doc)=>{
        if(doc.data().estado_marca === 1){
            let option = document.createElement("option");
            option.text = doc.data().nombre_marca;
            option.value = doc.id;
            option.id = doc.id;

            cboMarcaComida.appendChild(option);
        }
    })
}

const deseleccionarComboMarca = (option)=> {
    for(let i=0; i<cboMarcaComida.children.length; i++){
        cboMarcaComida.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

$('#myTableComidas tbody').on('click', 'tr', async function () {
    var data = tablaComida.row(this).data();

    const query = await firebase.firestore().collection('comida').get();
    query.docs.forEach((doc)=>{
        if(doc.data().descripcion_com === data[0]){
            idFilaComida = doc.id;
            txtNombreComida.value = data[0];
            txtStockComida.value = data[1];
            deseleccionarComboMarca(doc.data().marca);
            txtPrecioComida.value = data[3];
            txtDescuentoComida.value = data[4];
            return;
        }
    })

    btnCrearActualizarComida.innerText = "Editar";
})

$('#myTableComidas tbody').on('dblclick', 'tr', async function () {
    var data = tablaComida.row(this).data();

    const query = await firebase.firestore().collection('comida').get();
    query.docs.forEach((doc)=>{
        if(doc.data().descripcion_com === data[0]){
            idFilaComida = doc.id;
            eliminarComida();
            return;
        }
    })
})

const listarComida = async ()=> {
    const query = await firebase.firestore().collection('comida').get();
    tablaComida.clear().draw();
    query.docs.forEach(async(doc)=>{
        if(doc.data().estado_com === 1){
            const query = await firebase.firestore().collection('marca').get();
            query.docs.forEach((miMarca)=>{
                if(miMarca.id === doc.data().marca){
                    tablaComida.row.add([
                        doc.data().descripcion_com,
                        doc.data().stock_com,
                        miMarca.data().nombre_marca,
                        doc.data().precio_com,
                        doc.data().descuento_com,
                    ]).draw(true)
                }
            })
        }
    })
}

const crearComida = async ()=> {
    if(txtNombreComida.value.trim() === "" ||
        txtStockComida.value == "" || txtStockComida.value <= 0 ||
        cboMarcaComida.value == 0 ||
        txtPrecioComida.value == "" || txtPrecioComida.value <= 0 ||
        txtDescuentoComida.value == "" || txtDescuentoComida.value < 0){
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        });
    } else {
        const query = await firebase.firestore().collection("comida").get();
        let comidaEncontrada = false;
        let comidaDesactivada = false;
        let comidaAactivar = "";

        query.docs.forEach((doc)=>{
            if(doc.data().descripcion_com == txtNombreComida.value.trim() && doc.data().estado_com === 1){
                comidaEncontrada = true;
                Swal.fire({
                    icon: "error",
                    title: "Registro ya existente",
                    text: "El registro que trata de ingresar ya existe en la base de datos",
                    confirmButtonText: "Entendido",
                    allowOutsideClick: false,
                });
                return;
            } else if (doc.data().descripcion_com == txtNombreComida.value.trim() && doc.data().estado_com === 0){
                comidaDesactivada = true;
                comidaAactivar = doc.id;
            }
        });
    
        if(comidaEncontrada === false && comidaDesactivada === false){
            firebase.firestore().collection('comida').add({
                descripcion_com: txtNombreComida.value.trim(),
                stock_com: txtStockComida.value,
                precio_com: txtPrecioComida.value,
                descuento_com: txtDescuentoComida.value,
                marca: cboMarcaComida.value,
                estado_com: 1,
            })
            Swal.fire({
                icon: "success",
                title: "Registro creado satisfactoriamente",
                text: "El registro fue creado de manera satisfactoria",
                confirmButtonText: "Entendido",
                allowOutsideClick: false,
            }).then((result)=>{
                if(result.isConfirmed){
                    listarComida();
                    txtNombreComida.value = "";
                    txtStockComida.value = "";
                    txtPrecioComida.value = "";
                    txtDescuentoComida.value = "";
                    llenarComboMarca();
                }
            })
        } else if (comidaEncontrada === false && comidaDesactivada === true){
            let comidaSeleccionada = await firebase.firestore().collection("comida").doc(comidaAactivar);
            Swal.fire({
                icon: "success",
                title: "Registro creado satisfactoriamente",
                text: "El registro fue creado de manera satisfactoria",
                confirmButtonText: "Entendido",
                allowOutsideClick: false,
            }).then((result)=>{
                if(result.isConfirmed){
                    listarComida();
                    txtNombreComida.value = "";
                    txtStockComida.value = "";
                    txtPrecioComida.value = "";
                    txtDescuentoComida.value = "";
                    llenarComboMarca();
                }
            })
            comidaSeleccionada.update({
                estado_com: 1,
                stock_com: txtStockComida.value,
                marca: cboMarcaComida.value,
                precio_com: txtPrecioComida.value,
                descuento_com: txtDescuentoComida.value,
            });
        }
    }
}

const editarComida = async ()=> {
    if(txtNombreComida.value.trim() === "" ||
        txtStockComida.value == "" || txtStockComida.value <= 0 ||
        cboMarcaComida.value == 0 ||
        txtPrecioComida.value == "" || txtPrecioComida.value <= 0 ||
        txtDescuentoComida.value == "" || txtDescuentoComida.value < 0){
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Debe completar los campos",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        });
    } else {
        let comidaSeleccionada = await firebase.firestore().collection("comida").doc(idFilaComida);

        Swal.fire({
            icon: "success",
            title: "Registro actualizado satisfactoriamente",
            text: "El registro fue actualizado de manera satisfactoria",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        }).then((result)=>{
            if(result.isConfirmed){
                listarComida();
                txtNombreComida.value = "";
                txtStockComida.value = "";
                txtPrecioComida.value = "";
                txtDescuentoComida.value = "";
                llenarComboMarca();
                btnCrearActualizarComida.innerText = "Crear";
            }
        })

        comidaSeleccionada.update({
            descripcion_com: txtNombreComida.value.trim(),
            stock_com: txtStockComida.value,
            marca: cboMarcaComida.value,
            precio_com: txtPrecioComida.value,
            descuento_com: txtDescuentoComida.value,
        });
    }
}

const eliminarComida = async ()=> {
    let comidaSeleccionada = await firebase.firestore().collection("comida").doc(idFilaComida);

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
                    listarComida();
                    txtNombreComida.value = "";
                    txtStockComida.value = "";
                    txtPrecioComida.value = "";
                    txtDescuentoComida.value = "";
                    llenarComboMarca();
                    btnCrearActualizarComida.innerText = "Crear";
                }
            })
            return comidaSeleccionada.update({
                estado_com: 0,
            })
        }
    })
}

btnCrearActualizarComida.onclick = ()=> {
    if(btnCrearActualizarComida.innerText === "Crear"){
        crearComida();
    } else if(btnCrearActualizarComida.innerText === "Editar"){
        editarComida();
    }
}

btnCancelarComida.onclick = ()=> {
    idFilaComida = "";
    txtNombreComida.value = "";
    txtStockComida.value = "";
    cboMarcaComida.value = 0;
    txtPrecioComida.value = "";
    txtDescuentoComida.value = "";
    btnCrearActualizarComida.innerText = "Crear";
}

frmComida.onsubmit = (e)=> {
    e.preventDefault();
}
