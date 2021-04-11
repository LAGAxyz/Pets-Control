
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
        btnCancelar.click();
    } else {
        userPhoto.src = "../assets/img/icons/usuario-anonimo.png";
        userName.innerText = "Portal de clientes";
        userName.setAttribute("href", "../acceso/");
        contenedorM2.removeChild(menu2);
        contenedor.innerHTML = `
            <div class="alert alert-warning w-100 text-center" role="alert">
                <h3 class="alert-heading">USUARIO DESCONOCIDO</h3>
                <p class="mb-0">Respetamos la confidencialidad de datos de todos nuestros usuarios.</p>
                <p>Para ver y editar tus datos, debes <a href="../acceso/" class="alert-link">Iniciar Sesión</a> en nuestra plataforma.</p>
            </div>`
    }
});

const asignarPerfil = async (user)=>{
    const query = await firebase.firestore().collection("usuario").get();

    query.docs.forEach((doc)=>{
        if(doc.data().id_usuario == user.uid){
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

const frmEditarDatos = document.getElementById("frmEditarDatos");
const txtInputUsuarioDNI = document.getElementById("txtInputUsuarioDNI");
const txtInputUsuarioNombre = document.getElementById("txtInputUsuarioNombre");
const txtInputUsuarioApellido = document.getElementById("txtInputUsuarioApellido");
const cboSelectUsuarioGenero = document.getElementById("cboSelectUsuarioGenero");
const cboSelectUsuarioEstadoCivil = document.getElementById("cboSelectUsuarioEstadoCivil");
const txtInputUsuarioCorreo = document.getElementById("txtInputUsuarioCorreo");
const txtInputUsuarioDireccion = document.getElementById("txtInputUsuarioDireccion");
const txtInputUsuarioTelefono = document.getElementById("txtInputUsuarioTelefono");
const btnGuardar = document.getElementById("btnGuardar");
const btnCancelar = document.getElementById("btnCancelar");

let usuarioActualID = "";
let usuarioActual = "";

frmEditarDatos.onsubmit = (e)=> {
    e.preventDefault();
}

const deseleccionarComboGenero = (option)=> {
    for(let i=0; i<cboSelectUsuarioGenero.children.length; i++){
        cboSelectUsuarioGenero.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

const deseleccionarComboEstadoCivil = (option)=> {
    for(let i=0; i<cboSelectUsuarioEstadoCivil.children.length; i++){
        cboSelectUsuarioEstadoCivil.children[i].removeAttribute("selected");
    }
    document.getElementById(option).setAttribute("selected", "selected");
}

btnCancelar.onclick = async ()=> {
    const query = await firebase.firestore().collection('usuario').get();
    query.docs.forEach(doc=>{
        if(doc.data().estado == 1 && doc.data().id_usuario == usuarioActualID){
            usuarioActual = doc.id;
            doc.data().dni_usuario == "null" ? txtInputUsuarioDNI.value = "" : txtInputUsuarioDNI.value = doc.data().dni_usuario;
            doc.data().nombre_usu == "null" ? txtInputUsuarioNombre.value = "" : txtInputUsuarioNombre.value = doc.data().nombre_usu;
            doc.data().apellido_usu == "null" ? txtInputUsuarioApellido.value = "" : txtInputUsuarioApellido.value = doc.data().apellido_usu;
            doc.data().genero_usu == "null" ? deseleccionarComboGenero("sinGenero") : deseleccionarComboGenero(doc.data().genero_usu);
            doc.data().estado_civil_usu == "null" ? deseleccionarComboEstadoCivil("sinEstadoCivil") : deseleccionarComboEstadoCivil(doc.data().estado_civil_usu);
            doc.data().correo_usu == null ? txtInputUsuarioCorreo.value = "" : txtInputUsuarioCorreo.value = doc.data().correo_usu;
            doc.data().direccion_usu == "null" ? txtInputUsuarioDireccion.value = "" : txtInputUsuarioDireccion.value = doc.data().direccion_usu;
            doc.data().telefono_usu == "null" ? txtInputUsuarioTelefono.value = "" : txtInputUsuarioTelefono.value = doc.data().telefono_usu;
        }
    })
}

txtInputUsuarioDNI.onkeyup = ()=>{
    if(txtInputUsuarioDNI.value.trim().length == 8){
        fetch(`https://apiperu.dev/api/dni/${txtInputUsuarioDNI.value.trim()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 885d75c9ab6c537a20db76ed0e6daf0ba674ddd554972e2829fbdc46c4f83d96',
            },
        }).then(response=> response.json()).then(datos=>{
            txtInputUsuarioNombre.value = datos.data.nombres;
            txtInputUsuarioApellido.value = datos.data.apellido_paterno + " " + datos.data.apellido_materno;
        })
    }
    if(txtInputUsuarioDNI.value.trim().length > 8){
        txtInputUsuarioDNI.value = txtInputUsuarioDNI.value.trim().substr(0,8);
    }
}

btnGuardar.onclick = async ()=> {
    if(txtInputUsuarioDNI.value.trim() == "" || txtInputUsuarioDNI.value.trim().length != 8 ||
        txtInputUsuarioNombre.value.trim() == "" || txtInputUsuarioApellido.value.trim() == "" ||
        cboSelectUsuarioGenero.value == 0 || cboSelectUsuarioEstadoCivil.value == 0 ||
        txtInputUsuarioCorreo.value.trim() == "" || txtInputUsuarioDireccion.value.trim() == "" ||
        txtInputUsuarioTelefono.value.trim() == ""){
            Swal.fire({
                icon: "error",
                title: "Campos incompletos",
                text: "Debe completar todos los campos",
                confirmButtonText: "Entendido",
                allowOutsideClick: false,
            });
        } else {
            let usuarioAeditar = await firebase.firestore().collection("usuario").doc(usuarioActual);
            Swal.fire({
                icon: "success",
                title: "Registro actualizado satisfactoriamente",
                text: "Sus datos fueron actualizados de manera satisfactoria",
                confirmButtonText: "Entendido",
                allowOutsideClick: false,
            }).then((result)=>{
                if(result.isConfirmed){
                    btnCancelar.click();
                }
            })

            usuarioAeditar.update({
                dni_usuario: txtInputUsuarioDNI.value.trim(),
                nombre_usu: txtInputUsuarioNombre.value.trim(),
                apellido_usu: txtInputUsuarioApellido.value.trim(),
                genero_usu: cboSelectUsuarioGenero.value,
                estado_civil_usu: cboSelectUsuarioEstadoCivil.value,
                correo_usu: txtInputUsuarioCorreo.value.trim(),
                telefono_usu: txtInputUsuarioTelefono.value.trim(),
                direccion_usu: txtInputUsuarioDireccion.value.trim(),
            });
        }
}
