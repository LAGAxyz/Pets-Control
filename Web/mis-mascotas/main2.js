
const userPhoto = document.getElementById("userPhoto");
const userName = document.getElementById("userName");

const linkPerfil = document.getElementById("linkPerfil");
const btnSalir = document.getElementById("btnSalir");

const contenedorM2 = document.getElementById("contenedorM2");
const menu2 = document.getElementById("menu2");

firebase.auth().onAuthStateChanged(user=>{
    if(user){
        user.photoURL ? userPhoto.src = user.photoURL : userPhoto.src = "../assets/img/icons/usuario-anonimo.png";
        user.email ? userName.innerText = user.email : userName.innerText = user.displayName;
        usuarioActualID = user.uid;
        userName.removeAttribute("href");
        asignarPerfil(user);
        mostrarData();
    } else {
        userPhoto.src = "../assets/img/icons/usuario-anonimo.png";
        userName.innerText = "Acceder";
        userName.setAttribute("href", "../acceso/");
        contenedorM2.removeChild(menu2);
        contenedorMisMascotas.innerHTML = `
            <div class="alert alert-warning w-100 text-center" role="alert">
                <h3 class="alert-heading">USUARIO DESCONOCIDO</h3>
                <p class="mb-0">Respetamos la confidencialidad de datos de todos nuestros usuarios.</p>
                <p>Para ver todas tus mascotas, debes <a href="../acceso/" class="alert-link">Iniciar Sesión</a> en nuestra plataforma.</p>
            </div>`
    }
});

const asignarPerfil = async (user)=>{
    const query = await firebase.firestore().collection("usuario").get();
    query.docs.forEach((doc)=>{
        if(doc.data().id_usuario == user.uid){
            usuarioActualDNI = doc.data().dni_usuario;
            if(doc.data().tipo_usu == 1){
                linkPerfil.parentElement.removeChild(linkPerfil);
            } else if(doc.data().tipo_usu == 2){
                linkPerfil.setAttribute("href", "../panel/");
            } else if(doc.data().tipo_usu == 3){
                linkPerfil.setAttribute("href", "../panel/");
            }
            return;
        }
    })
};

btnSalir.onclick = ()=>{
    firebase.auth().signOut();
    location.reload();
};

const contenedorMisMascotas = document.getElementById("contenedorMisMascotas");

let usuarioActualID = "";
let usuarioActualDNI = "";

const mostrarData = async ()=>{
    contenedorMisMascotas.innerHTML = `
        <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="m-2">
                <div class="card border-primary mb-3">
                    <div class="card-body">
                        <p class="card-text">Registra una nueva mascota para que puedas controlar sus datos y su control de vacunación.</p>
                        <a href="../registrar-mascota/" class="btn btn-outline-primary w-100" rel="nofollow" target="_self">Registar Mascota</a>
                    </div>
                </div>
                <div class="card border-success mt-3">
                    <div class="card-body text-success">
                        <p class="card-text">Puedes ser el dueño que una mascota necesita! busca y encuentra a tu mascota ideal.</p>
                        <a href="../adoptar-mascota/" class="btn btn-outline-success w-100" rel="nofollow" target="_self">Adoptar Mascota</a>
                    </div>
                </div>
            </div>
        </div>`;
    const query = await firebase.firestore().collection('mascota').get();

    query.docs.forEach(async(doc)=>{
        if(doc.data().estado_mas == 1 && doc.data().usuario == usuarioActualDNI){
            let col = document.createElement("div");
            let card = document.createElement("div");
            let img = document.createElement("img");
            let body = document.createElement("div");
            let titulo = document.createElement("h5");
            let hr = document.createElement("hr");
            let descripcion = document.createElement("p");
            let btnEditar = document.createElement("button");
            let btnEliminar = document.createElement("button");
            let btnVerVacunas = document.createElement("button");
        
            col.classList.add("col-lg-4", "col-md-4","col-sm-6");
            card.classList.add("card", "shadow", "text-center", "m-2");
            img.classList.add("card-img-top");
            body.classList.add("card-body");
            titulo.classList.add("card-title");
            descripcion.classList.add("card-text");
            btnEditar.classList.add("btn", "btn-outline-success", "col-5", "m-1");
            btnEliminar.classList.add("btn", "btn-outline-danger", "col-5", "m-1");
            btnVerVacunas.classList.add("btn", "btn-outline-info", "col-10", "m-1");

            if(doc.data().especie == "VO3zLzr8Mq5ZRoft61yj"){img.src = "../assets/img/dogs/dog.png";}
            if(doc.data().especie == "fisx4nGvOGfYVhTquyZE"){img.src = "../assets/img/cats/cat.png";}

            titulo.innerText = doc.data().nombre_mas;
            descripcion.innerText = doc.data().presentacion_mas;
            btnEditar.innerText = "Editar"
            btnEditar.type = "button"
            btnEditar.setAttribute("data-bs-toggle", "modal")
            btnEditar.setAttribute("data-bs-target", "#modalEliminar")
            btnEliminar.innerText = "Eliminar"
            btnVerVacunas.innerText = "Ver Vacunas"

            btnEditar.onclick = ()=>{editarMascota(doc);};
            btnEliminar.onclick = ()=>{eliminarMascota(doc.id);};
            btnVerVacunas.onclick = ()=>{verVacunasMascota(doc);};

            body.appendChild(titulo);
            body.appendChild(hr);
            body.appendChild(descripcion);
            body.appendChild(btnEditar);
            body.appendChild(btnEliminar);
            body.appendChild(btnVerVacunas);
        
            card.appendChild(img);
            card.appendChild(body);
        
            col.appendChild(card);
        
            contenedorMisMascotas.appendChild(col);
        }
    })
}

const frmEditarMascota = document.getElementById("frmEditarMascota");
const txtInputMascotaNombre = document.getElementById("txtInputMascotaNombre");
const txtInputMascotaPeso = document.getElementById("txtInputMascotaPeso");
const txtInputMascotaTalla = document.getElementById("txtInputMascotaTalla");
const txtInputMascotaPresentacion = document.getElementById("txtInputMascotaPresentacion");
const cboSelectMascotaEspecie = document.getElementById("cboSelectMascotaEspecie");
const cboSelectMascotaRaza = document.getElementById("cboSelectMascotaRaza");
const cboSelectMascotaGenero = document.getElementById("cboSelectMascotaGenero");
const cboSelectMascotaCondicion = document.getElementById("cboSelectMascotaCondicion");
const btnEditarMascota = document.getElementById("btnEditarMascota");

let mascotaAeditar = "";

btnEditarMascota.onclick = async ()=>{
    if(txtInputMascotaNombre.value.trim() == "" ||
        txtInputMascotaPeso.value <= 0 || txtInputMascotaTalla.value <= 0 ||
        txtInputMascotaPresentacion.value.trim() == "" ||
        cboSelectMascotaEspecie.value == 0 || cboSelectMascotaRaza.value == 0 ||
        cboSelectMascotaGenero.value == 0 || cboSelectMascotaCondicion.value == 0){
            Swal.fire({
                icon: "error",
                title: "Campos incompletos",
                text: "Debe completar los campos",
                confirmButtonText: "Entendido",
                allowOutsideClick: false,
            });
    } else {
        let mascotaSeleccionada = await firebase.firestore().collection("mascota").doc(mascotaAeditar);
        Swal.fire({
            icon: "success",
            title: "Registro actualizado satisfactoriamente",
            text: "El registro fue actualizado de manera satisfactoria",
            confirmButtonText: "Entendido",
            allowOutsideClick: false,
        }).then((result)=>{
            if(result.isConfirmed){
                mostrarData();
                document.getElementById("btnCancelarCambios").click();
            }
        })
        mascotaSeleccionada.update({
            nombre_mas: txtInputMascotaNombre.value.trim(),
            peso_mas: txtInputMascotaPeso.value,
            talla_mas: txtInputMascotaTalla.value,
            presentacion_mas: txtInputMascotaPresentacion.value.trim(),
            especie: cboSelectMascotaEspecie.value,
            raza: cboSelectMascotaRaza.value,
            genero_mas: cboSelectMascotaGenero.value,
            condicion: cboSelectMascotaCondicion.value,
        });
    }
}

const editarMascota = async (mascota)=> {
    const query = await firebase.firestore().collection("mascota").doc(mascota.id);
    const consultarRaza = await firebase.firestore().collection("raza").get();
    let nombreRaza = "";
    consultarRaza.docs.forEach((doc)=>{
        if(doc.id == mascota.data().raza){
            nombreRaza = doc.data().nombre_raza;
            return;
        }
    })
    iniciarCombosMascota();
    txtInputMascotaNombre.value = mascota.data().nombre_mas;
    txtInputMascotaPeso.value = mascota.data().peso_mas;
    txtInputMascotaTalla.value = mascota.data().talla_mas;
    txtInputMascotaPresentacion.value = mascota.data().presentacion_mas;
    deseleccionarComboEspecie(mascota.data().especie);
    let option = document.createElement("option");
        option.value = mascota.data().raza;
        option.id = mascota.data().raza;
        option.innerText = nombreRaza;
        cboSelectMascotaRaza.appendChild(option);
    deseleccionarComboRaza(mascota.data().raza);
    deseleccionarComboGenero(mascota.data().genero_mas);
    if(mascota.data().condicion == "Con Hogar"){
        deseleccionarComboCondicion("conHogar");
    } else if (mascota.data().condicion == "En Adopción") {
        deseleccionarComboCondicion("enAdopcion");
    }
    mascotaAeditar = mascota.id;
}

const eliminarMascota = async (mascota)=> {
    let mascotaSeleccionada = await firebase.firestore().collection("mascota").doc(mascota);
    Swal.fire({
        title: '¿Desea eliminar el registro?',
        showDenyButton: true,
        confirmButtonText: 'Volver',
        denyButtonText: 'Eliminar',
        allowOutsideClick: false,
    }).then((result)=>{
        if(result.isDenied){
            Swal.fire({
                icon: "success",
                title: "Registro eliminado satisfactoriamente",
                text: "El registro fue eliminado de manera satisfactoria",
                confirmButtonText: "Entendido",
            }).then((result)=>{
                if(result.isConfirmed){
                    mostrarData();
                }
            })
            return mascotaSeleccionada.update({
                estado_mas: 0,
            })
        }
    })
}

const verVacunasMascota = (mascota)=> {
    console.log("funcionando ver vacunas");
}

cboSelectMascotaEspecie.onchange = async ()=>{
    cboSelectMascotaRaza.innerHTML = `<option value="0" id="sinRaza">Raza</option>`;
    const query = await firebase.firestore().collection('raza').get();
    query.docs.forEach((doc)=>{
        if(cboSelectMascotaEspecie.value == doc.data().especie && doc.data().estado_raza == 1){
            let option = document.createElement("option");
                option.text = doc.data().nombre_raza;
                option.value = doc.id;
                option.id = doc.id;
            cboSelectMascotaRaza.appendChild(option);
        }
    })
}

const deseleccionarComboEspecie = (option)=> {
    for(let i=0; i<cboSelectMascotaEspecie.children.length; i++){
        cboSelectMascotaEspecie.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

const deseleccionarComboRaza = (option)=> {
    for(let i=0; i<cboSelectMascotaRaza.children.length; i++){
        cboSelectMascotaRaza.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

const deseleccionarComboGenero = (option)=> {
    for(let i=0; i<cboSelectMascotaGenero.children.length; i++){
        cboSelectMascotaGenero.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

const deseleccionarComboCondicion = (option)=> {
    for(let i=0; i<cboSelectMascotaCondicion.children.length; i++){
        cboSelectMascotaCondicion.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

const iniciarCombosMascota = ()=> {
    cboSelectMascotaEspecie.innerHTML = `
                    <option value="0" id="sinEspecie">Especie</option>
					<option value="VO3zLzr8Mq5ZRoft61yj" id="VO3zLzr8Mq5ZRoft61yj">Canino</option>
					<option value="fisx4nGvOGfYVhTquyZE" id="fisx4nGvOGfYVhTquyZE">Felino</option>`;
    
    cboSelectMascotaRaza.innerHTML = `<option value="0" id="sinRaza">Raza</option>`;
    
    cboSelectMascotaGenero.innerHTML = `
                    <option value="0" id="sinGenero">Género</option>
					<option value="Macho" id="Macho">Macho</option>
					<option value="Hembra" id="Hembra">Hembra</option>`;
    
    cboSelectMascotaCondicion.innerHTML = `
                    <option value="0" id="sinCondicion">Condición</option>
                    <option value="Con Hogar" id="conHogar">Con Hogar</option>
                    <option value="En Adopción" id="enAdopcion">En Adopción</option>`;
}
