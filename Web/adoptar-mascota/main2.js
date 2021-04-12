
const userPhoto = document.getElementById("userPhoto");
const userName = document.getElementById("userName");

const linkPerfil = document.getElementById("linkPerfil");
const btnSalir = document.getElementById("btnSalir");

const contenedorM2 = document.getElementById("contenedorM2");
const menu2 = document.getElementById("menu2");

const btnOpciones = document.getElementById("btnOpciones");

firebase.auth().onAuthStateChanged(user=>{
    if(user){
        user.photoURL ? userPhoto.src = user.photoURL : userPhoto.src = "../assets/img/icons/usuario-anonimo.png";
        user.email ? userName.innerText = user.email : userName.innerText = user.displayName;
        userName.removeAttribute("href");
        asignarPerfil(user);
        mostrarData();
    } else {
        userPhoto.src = "../assets/img/icons/usuario-anonimo.png";
        userName.innerText = "Portal de clientes";
        userName.setAttribute("href", "../acceso/");
        contenedorM2.removeChild(menu2);
        btnOpciones.parentElement.removeChild(btnOpciones);
        mascotasContenedor.innerHTML = `
            <div class="alert alert-warning w-100 text-center" role="alert">
                <h3 class="alert-heading">USUARIO DESCONOCIDO</h3>
                <p class="mb-0">Respetamos la confidencialidad de datos de todos nuestros usuarios.</p>
                <p>Para ver las mascotas en adopción, debe <a href="../acceso/" class="alert-link">Iniciar Sesión</a> en nuestra plataforma.</p>
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

const mascotasContenedor = document.getElementById("mascotasContenedor");
const btnVerPerros = document.getElementById("btnVerPerros");
const btnVerGatos = document.getElementById("btnVerGatos");

let bandera = "";

btnVerPerros.onclick = ()=> {
    btnVerPerros.classList.remove("btn-outline-success");
    btnVerPerros.classList.add("btn-success");
    btnVerGatos.classList.remove("btn-success");
    btnVerGatos.classList.add("btn-outline-success");

    bandera = "perro";
    mostrarData();
}

btnVerGatos.onclick = ()=> {
    btnVerGatos.classList.remove("btn-outline-success");
    btnVerGatos.classList.add("btn-success");
    btnVerPerros.classList.remove("btn-success");
    btnVerPerros.classList.add("btn-outline-success");

    bandera = "gato";
    mostrarData();
}

const mostrarData = async ()=>{
    mascotasContenedor.innerHTML = "";
    
    const query = await firebase.firestore().collection('mascota').get();
    const consultarUsuario = await firebase.firestore().collection('usuario').get();
    if(bandera=="perro"){
        query.docs.forEach(async(doc)=>{
            if(doc.data().estado_mas == 1 && doc.data().condicion == "En Adopción" &&
                doc.data().especie == "VO3zLzr8Mq5ZRoft61yj"){
                    let tel_usu = "";
                    consultarUsuario.docs.forEach(miConsultaUsuario=>{
                        if(miConsultaUsuario.data().dni_usuario == doc.data().usuario){
                            tel_usu = miConsultaUsuario.data().telefono_usu;
                        }
                    })
                    let col = document.createElement("div");
                    let card = document.createElement("div");
                    let img = document.createElement("img");
                    let body = document.createElement("div");
                    let titulo = document.createElement("h5");
                    let hr = document.createElement("hr");
                    let descripcion = document.createElement("p");
                    let vinculo = document.createElement("a");
                
                    col.classList.add("col-lg-4", "col-md-4","col-sm-6");
                    card.classList.add("card", "shadow", "text-center", "m-2");
                    img.classList.add("card-img-top");
                    body.classList.add("card-body");
                    titulo.classList.add("card-title");
                    descripcion.classList.add("card-text");
                    vinculo.classList.add("btn", "btn-outline-success");
                
                    img.src = "../assets/img/dogs/dog.png";
                    titulo.innerText = doc.data().nombre_mas;
                    descripcion.innerText = doc.data().presentacion_mas;
                    vinculo.innerText = "Contactar al dueño"
                    vinculo.href = `https://wa.me/51${tel_usu}`;
                    vinculo.rel = "nofollow";
                    vinculo.target = "_blank";
                
                    body.appendChild(titulo);
                    body.appendChild(hr);
                    body.appendChild(descripcion);
                    body.appendChild(vinculo);
                
                    card.appendChild(img);
                    card.appendChild(body);
                
                    col.appendChild(card);
                
                    mascotasContenedor.appendChild(col);
            }
        })
    } else if(bandera=="gato"){
        query.docs.forEach(async(doc)=>{
            if(doc.data().estado_mas == 1 && doc.data().condicion == "En Adopción" &&
                doc.data().especie == "fisx4nGvOGfYVhTquyZE"){
                    let tel_usu = "";
                    consultarUsuario.docs.forEach(miConsultaUsuario=>{
                        if(miConsultaUsuario.data().dni_usuario == doc.data().usuario){
                            tel_usu = miConsultaUsuario.data().telefono_usu;
                        }
                    })
                    let col = document.createElement("div");
                    let card = document.createElement("div");
                    let img = document.createElement("img");
                    let body = document.createElement("div");
                    let titulo = document.createElement("h5");
                    let hr = document.createElement("hr");
                    let descripcion = document.createElement("p");
                    let vinculo = document.createElement("a");
                
                    col.classList.add("col-lg-4", "col-md-4","col-sm-6");
                    card.classList.add("card", "shadow", "text-center", "m-2");
                    img.classList.add("card-img-top");
                    body.classList.add("card-body");
                    titulo.classList.add("card-title");
                    descripcion.classList.add("card-text");
                    vinculo.classList.add("btn", "btn-outline-success");
                
                    img.src = "../assets/img/cats/cat.png";
                    titulo.innerText = doc.data().nombre_mas;
                    descripcion.innerText = doc.data().presentacion_mas;
                    vinculo.innerText = "Contactar al dueño"
                    vinculo.href = `https://wa.me/51${tel_usu}`;
                    vinculo.rel = "nofollow";
                    vinculo.target = "_blank";
                
                    body.appendChild(titulo);
                    body.appendChild(hr);
                    body.appendChild(descripcion);
                    body.appendChild(vinculo);
                
                    card.appendChild(img);
                    card.appendChild(body);
                
                    col.appendChild(card);
                
                    mascotasContenedor.appendChild(col);
            }
        })
    } else {
        query.docs.forEach(async(doc)=>{
            if(doc.data().estado_mas == 1 && doc.data().condicion == "En Adopción"){
                    let tel_usu = "";
                    consultarUsuario.docs.forEach(miConsultaUsuario=>{
                        if(miConsultaUsuario.data().dni_usuario == doc.data().usuario){
                            tel_usu = miConsultaUsuario.data().telefono_usu;
                        }
                    })
                    let col = document.createElement("div");
                    let card = document.createElement("div");
                    let img = document.createElement("img");
                    let body = document.createElement("div");
                    let titulo = document.createElement("h5");
                    let hr = document.createElement("hr");
                    let descripcion = document.createElement("p");
                    let vinculo = document.createElement("a");
                
                    col.classList.add("col-lg-4", "col-md-4","col-sm-6");
                    card.classList.add("card", "shadow", "text-center", "m-2");
                    img.classList.add("card-img-top");
                    body.classList.add("card-body");
                    titulo.classList.add("card-title");
                    descripcion.classList.add("card-text");
                    vinculo.classList.add("btn", "btn-outline-success");
                
                    if(doc.data().especie == "fisx4nGvOGfYVhTquyZE"){
                        img.src = "../assets/img/cats/cat.png";
                    } else {
                        img.src = "../assets/img/dogs/dog.png";
                    }
                    titulo.innerText = doc.data().nombre_mas;
                    descripcion.innerText = doc.data().presentacion_mas;
                    vinculo.innerText = "Contactar al dueño"
                    vinculo.href = `https://wa.me/51${tel_usu}`;
                    vinculo.rel = "nofollow";
                    vinculo.target = "_blank";
                
                    body.appendChild(titulo);
                    body.appendChild(hr);
                    body.appendChild(descripcion);
                    body.appendChild(vinculo);
                
                    card.appendChild(img);
                    card.appendChild(body);
                
                    col.appendChild(card);
                
                    mascotasContenedor.appendChild(col);
            }
        })
    }
}
