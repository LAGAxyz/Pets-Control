
const userPhoto = document.getElementById("userPhoto");
const userName = document.getElementById("userName");

const linkPerfil = document.getElementById("linkPerfil");
const btnSalir = document.getElementById("btnSalir");

const contenedorM2 = document.getElementById("contenedorM2");
const menu2 = document.getElementById("menu2");

const contenedor = document.getElementById("contenedor");

firebase.auth().onAuthStateChanged(user=>{
    if(user){
        user.photoURL ? userPhoto.src = user.photoURL : userPhoto.src = "../assets/img/icons/usuario-anonimo.png";
        user.email ? userName.innerText = user.email : userName.innerText = user.displayName;
        usuarioActualID = user.uid;
        userName.removeAttribute("href");
        asignarPerfil(user);
    } else {
        userPhoto.src = "../assets/img/icons/usuario-anonimo.png";
        userName.innerText = "Portal de clientes";
        userName.setAttribute("href", "../acceso/");
        contenedorM2.removeChild(menu2);
        contenedor.innerHTML = `
            <div class="alert alert-warning w-100 text-center" role="alert">
                <h3 class="alert-heading">USUARIO DESCONOCIDO</h3>
                <p class="mb-0">Respetamos la confidencialidad de datos de todos nuestros usuarios.</p>
                <p>Para poder registrar a tu mascota, debes <a href="../acceso/" class="alert-link">Iniciar Sesión</a> en nuestra plataforma.</p>
            </div>`
    }
});

const asignarPerfil = async (user)=>{
    const query = await firebase.firestore().collection("usuario").get();

    query.docs.forEach((doc)=>{
        if(doc.data().id_usuario == user.uid){
            usuarioActual = doc.data().dni_usuario;
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

const frmAgregarMascota = document.getElementById("frmAgregarMascota");
const txtInputMascotaNombre = document.getElementById("txtInputMascotaNombre");
const txtInputMascotaPeso = document.getElementById("txtInputMascotaPeso");
const txtInputMascotaTalla = document.getElementById("txtInputMascotaTalla");
const txtInputMascotaPresentacion = document.getElementById("txtInputMascotaPresentacion");
const cboSelectMascotaEspecie = document.getElementById("cboSelectMascotaEspecie");
const cboSelectMascotaRaza = document.getElementById("cboSelectMascotaRaza");
const cboSelectMascotaGenero = document.getElementById("cboSelectMascotaGenero");
const cboSelectMascotaCondicion = document.getElementById("cboSelectMascotaCondicion");
const btnGuardar = document.getElementById("btnGuardar");
const btnCancelar = document.getElementById("btnCancelar");
const imgEspecie = document.getElementById("imgEspecie");

let usuarioActualID = "";
let usuarioActual = "";

frmAgregarMascota.onsubmit = (e)=> {
    e.preventDefault();
}

cboSelectMascotaEspecie.onchange = async ()=>{
    const query = await firebase.firestore().collection('raza').get();
    cboSelectMascotaRaza.innerHTML = `<option value="0" id="sinRaza">Raza</option>`;

    query.docs.forEach((doc)=>{
        if(cboSelectMascotaEspecie.value == doc.data().especie && doc.data().estado_raza == 1){
            let option = document.createElement("option");
                option.text = doc.data().nombre_raza;
                option.value = doc.id;
                option.id = doc.id;
            cboSelectMascotaRaza.appendChild(option);
        }
        
        if(cboSelectMascotaEspecie.value == "VO3zLzr8Mq5ZRoft61yj"){
            imgEspecie.src = "../assets/img/dogs/dog.png"
        } else if (cboSelectMascotaEspecie.value == "fisx4nGvOGfYVhTquyZE"){
            imgEspecie.src = "../assets/img/cats/cat.png"
        } else {
            imgEspecie.src = "https://via.placeholder.com/128x128";
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

btnCancelar.onclick = ()=> {
    txtInputMascotaNombre.value = "";
    txtInputMascotaPeso.value = "";
    txtInputMascotaTalla.value = "";
    txtInputMascotaPresentacion.value = "";
    deseleccionarComboEspecie("sinEspecie");
    deseleccionarComboRaza("sinRaza");
    deseleccionarComboGenero("sinGenero");
    deseleccionarComboCondicion("sinCondicion");
}

btnGuardar.onclick = async ()=> {
    if(txtInputMascotaNombre.value.trim() == "" ||
        txtInputMascotaPeso.value.trim() == "" || txtInputMascotaTalla.value.trim() == "" ||
        txtInputMascotaPresentacion.value.trim() == "" ||
        cboSelectMascotaEspecie.value == 0 || cboSelectMascotaRaza.value == 0 ||
        cboSelectMascotaGenero.value == 0 || cboSelectMascotaCondicion.value == 0){
            Swal.fire({
                icon: "error",
                title: "Campos incompletos",
                text: "Debe completar todos los campos",
                confirmButtonText: "Entendido",
                allowOutsideClick: false,
            });
        } else {
            const query = await firebase.firestore().collection("mascota").get();
            let mascotaEncontrada = false;
            let mascotaDesactivada = false;
            let mascotaAactivar = "";

            query.docs.forEach(async(doc)=>{
                if(doc.data().nombre_mas == txtInputMascotaNombre.value.trim() && doc.data().estado_mas == 1 &&
                    doc.data().usuario == usuarioActual){
                    mascotaEncontrada = true;
                    Swal.fire({
                        icon: "error",
                        title: "Registro ya existente",
                        text: "El registro que trata de ingresar ya existe en la base de datos",
                        confirmButtonText: "Entendido",
                        allowOutsideClick: false,
                    });
                    return;
                } else if (doc.data().nombre_mas == txtInputMascotaNombre.value.trim() && doc.data().estado_mas == 0 &&
                    doc.data().usuario == usuarioActual){
                    mascotaDesactivada = true;
                    mascotaAactivar = doc.id;
                }
            });

            if(mascotaEncontrada == false && mascotaDesactivada == false){
                firebase.firestore().collection('mascota').add({
                    nombre_mas: txtInputMascotaNombre.value.trim(),
                    peso_mas: txtInputMascotaPeso.value,
                    talla_mas: txtInputMascotaTalla.value,
                    presentacion_mas: txtInputMascotaPresentacion.value.trim(),
                    especie: cboSelectMascotaEspecie.value,
                    raza: cboSelectMascotaRaza.value,
                    genero_mas: cboSelectMascotaGenero.value,
                    condicion: cboSelectMascotaCondicion.value,
                    usuario: usuarioActual,
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
                        btnCancelar.click();
                        location.href = "../mis-mascotas/";
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
                        btnCancelar.click();
                        location.href = "../mis-mascotas/";
                    }
                })
                mascotaSeleccionada.update({
                    estado_mas: 1,
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
}
