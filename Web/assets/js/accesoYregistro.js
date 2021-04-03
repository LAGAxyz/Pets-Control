
const linkCrearIngresar = document.getElementById("linkCrearIngresar");
const btnIngresarCrear = document.getElementById("btnIngresarCrear");
const txtContrasenia = document.getElementById("txtContrasenia");
const linkContraO = document.getElementById("linkContraO");
const txtUsuario = document.getElementById("txtUsuario");
const msmError = document.getElementById("msmError");
const btnOjo = document.getElementById("btnOjo");
const btnGG = document.getElementById("btnGG");
const btnFB = document.getElementById("btnFB");

let validacion = false;
let ojo = false;

btnOjo.onclick = ()=> {
    if (ojo == false) {
        txtContrasenia.setAttribute("type", "text");
        btnOjo.classList.remove("fa-eye-slash");
        btnOjo.classList.add("fa-eye");
        ojo = true;
    } else {
        txtContrasenia.setAttribute("type", "password");
        btnOjo.classList.remove("fa-eye");
        btnOjo.classList.add("fa-eye-slash");
        ojo = false;
    }
};

linkCrearIngresar.onclick = ()=> {
    linkCrearIngresar.innerText === "Ingresar" ?
    location.href = "../acceso/" : location.href = "../registro/";
};

const mostrarErrorUsuario = ()=> {
    msmError.style.display = "block";
    txtUsuario.style.border = "1px solid #880000";
    txtUsuario.style.borderRadius = "10px";

    txtUsuario.animate([
        {transform: 'scaleX(1.1) scaleY(1.3)'},
        {transform: 'scale(1)'}
    ], 300);
};

const mostrarErrorContrasenia = ()=> {
    msmError.style.display = "block";
    txtContrasenia.style.border = "1px solid #880000";
    txtContrasenia.style.borderRadius = "10px";

    txtContrasenia.animate([
        {transform: 'scaleX(1.1) scaleY(1.3)'},
        {transform: 'scale(1)'}
    ], 300);
};

const ocultarErrores = ()=> {
    msmError.style.display = "none";
    txtUsuario.style.border = "none";
    txtContrasenia.style.border = "none";
};

txtUsuario.onclick = ()=> {
    txtUsuario.style.border = "1px solid #008800";
    txtUsuario.style.borderRadius = "10px";

    txtUsuario.animate([
        {transform: 'scaleX(1.1) scaleY(1.3)'},
        {transform: 'scale(1)'}
    ], 300);
};

txtContrasenia.onclick = ()=> {
    txtContrasenia.style.border = "1px solid #008800";
    txtContrasenia.style.borderRadius = "10px";

    txtContrasenia.animate([
        {transform: 'scaleX(1.1) scaleY(1.3)'},
        {transform: 'scale(1)'}
    ], 300);
};

txtUsuario.onblur = ()=> {txtUsuario.style.border = "none";};
txtContrasenia.onblur = ()=> {txtContrasenia.style.border = "none";};

const validarData = ()=>{
    if(txtUsuario.value.trim() === "" && txtContrasenia.value.trim() === ""){
        mostrarErrorUsuario();
        mostrarErrorContrasenia();
        msmError.innerText = "Debe completar todos los campos";
        validacion = false;
    } else if (txtUsuario.value.trim() === ""){
        mostrarErrorUsuario();
        msmError.innerText = "Debe completar el campo 'correo'";
        validacion = false;
    } else if (txtContrasenia.value.trim() === ""){
        mostrarErrorContrasenia();
        msmError.innerText = "Debe completar el campo 'contraseña'";
        validacion = false;
    } else {validacion = true;}
};

btnGG.onclick = async ()=>{
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);
    } catch (error) {console.log(error);}
};

btnFB.onclick = async ()=>{
    try {
        const provider = new firebase.auth.FacebookAuthProvider();
        await firebase.auth().signInWithPopup(provider);
    } catch (error) {console.log(error);}
};

btnIngresarCrear.onclick = async ()=>{
    validarData();
    if(btnIngresarCrear.innerText === "Acceder"){
        if(validacion===true){
            const email = txtUsuario.value.trim();
            const password = txtContrasenia.value.trim();
            try {
                firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
                    Swal.fire({
                        timer: 1000,
                        timerProgressBar: true,
                        allowOutsideClick: false,
                        title: 'Iniciando Sesión',
                        didOpen: () => {Swal.showLoading()}
                    })
                }).catch((error)=>{
                    if(error.code === 'auth/invalid-email'){
                        mostrarErrorUsuario();
                        msmError.innerText = "El correo ingresado no es válido";
                    }
                    else if(error.code === 'auth/user-not-found'){
                        mostrarErrorUsuario();
                        msmError.innerText = "El correo ingresado no pertenece a ninguna cuenta";
                    }
                    else if(error.code === 'auth/wrong-password'){
                        mostrarErrorContrasenia();
                        msmError.innerText = "La contraseña ingresada no es correcta";
                    }
                    else{
                        mostrarErrorUsuario();
                        mostrarErrorContrasenia();
                        msmError.innerText = "Error desconocido, comuníquese con un administrador para solucionar este problema"
                    }
                });
            } catch (error) {console.log(error);}
        }
    } else {
        if(validacion===true){
            const email = txtUsuario.value.trim();
            const password = txtContrasenia.value.trim();
            try {
                firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
                    Swal.fire({
                        timer: 1000,
                        icon: 'success',
                        allowOutsideClick: false,
                        showConfirmButton: false,
                        title: 'Registrado correctamente',
                    })
                }).catch((error)=>{
                    if(error.code === 'auth/invalid-email'){
                        mostrarErrorUsuario();
                        msmError.innerText = "El correo ingresado no es válido";
                    }
                    else if(error.code === 'auth/email-already-in-use'){
                        mostrarErrorUsuario();
                        msmError.innerText = "El correo ingresado ya está en uso";
                    }
                    else if(error.code === 'auth/weak-password'){
                        mostrarErrorContrasenia();
                        msmError.innerText = "La contraseña ingresada no cumple con los parámetros de seguridad";
                    }
                    else{
                        mostrarErrorUsuario();
                        mostrarErrorContrasenia();
                        msmError.innerText = "Error desconocido, comuníquese con un administrador para solucionar este problema"
                    }
                })
            } catch (error) {console.log(error);}
        }
    }
};

linkContraO.onclick = ()=> {
    if(txtUsuario.value.trim() === ""){
        mostrarErrorUsuario();
        msmError.innerText = "Debe ingresar un correo válido para recuperar su contraseña";
    } else {
        const emailAddress = txtUsuario.value.trim();
        firebase.auth().sendPasswordResetEmail(emailAddress).then(()=>{
            Swal.fire({
                icon: "success",
                title: "¡Listo!",
                text: "Hemos enviado un correo con los pasos para la recuperación de su contraseña",
                confirmButtonText: "Entendido"
            });
        }).catch((error)=>{
            if(error.code==='auth/invalid-email'){
                mostrarErrorUsuario();
                msmError.innerText = "El correo ingresado no es válido";
            }
            else if (error.code==='auth/user-not-found'){
                mostrarErrorUsuario();
                msmError.innerText = "El correo ingresado no existe en nuestra base de datos";
            }
            else {
                mostrarErrorUsuario();
                msmError.innerText = "Lo sentimos, ocurrió un error inesperado";
            }
        })
    }
};

const registrarUsuarioDB = async (user)=>{
    const query = await firebase.firestore().collection("usuario").get();
    let usuarioEncontrado = false;

    query.docs.forEach((doc)=>{
        if(doc.data().correo_usu === user.email){
            usuarioEncontrado = true;
            return;
        }
    });

    if(usuarioEncontrado === false){
        firebase.firestore().collection('usuario').add({
            id_usuario: user.uid,
            dni_usuario: 'null',
            nombre_usu: 'null',
            apellido_usu: 'null',
            genero_usu: 'null',
            direccion_usu: 'null',
            estado_civil_usu: 'null',
            telefono_usu: 'null',
            cargo: "1fpCiOen3xQSt6aRu2ee",
            correo_usu: user.email,
            tipo_usu: 1,
            estado: 1
        })
    }
};

const redirigir = ()=>{
    location.href = "../.";
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        registrarUsuarioDB(user);
        setTimeout("redirigir()", 3000);
    }
});
