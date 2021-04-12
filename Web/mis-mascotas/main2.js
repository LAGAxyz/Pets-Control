
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
        userName.innerText = "Portal de clientes";
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
    contenedorMisMascotas.innerHTML = "";
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
            btnEliminar.innerText = "Eliminar"
            btnVerVacunas.innerText = "Ver Vacunas"

            btnEditar.onclick = ()=>{editarMascota();};
            btnEliminar.onclick = ()=>{eliminarMascota();};
            btnVerVacunas.onclick = ()=>{verVacunasMascota();};
        
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

const editarMascota = ()=> {
    console.log("funcionando editar");
}

const eliminarMascota = ()=> {
    console.log("funcionando eliminar");
}

const verVacunasMascota = ()=> {
    console.log("funcionando ver vacunas");
}
