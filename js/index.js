"use strict";
const documentReady = () => {
  const memes = [
    {
      nombre: "Neta me lo juras?",
      imagen: "https://i.ytimg.com/vi/PmiERz5tqEU/maxresdefault.jpg",
      enlace:
        "https://c.tenor.com/werGAdQw-8sAAAAd/neta-me-lo-juras-nodding.gif",
    },
    {
      nombre: "No lo sé rick, parece falso",
      imagen: "https://i.postimg.cc/qqcN5sz4/No-lo-se-Rick.jpg",
    },
    {
      nombre: "¿Me estás retando?",
      imagen:
        "https://i.postimg.cc/yNSYGmbt/3497e5b81c50a22de4d840cfb151dfb5.jpg",
    },
    {
      nombre: "Esos bastardos me mintieron",
      imagen:
        "http://static.pulzo.com/images/20190312060204/d1cp1tixqaa3jf4-900x485.jpg",
    },
    {
      nombre: "Joder, ¡Eso si es de gangsters!",
      imagen: "https://i.postimg.cc/mkPd3rDY/joder-eso-si-es-de-gangster1.jpg",
    },
    {
      nombre: "Nada puede malir sal",
      imagen: "https://pbs.twimg.com/media/DnUZ8IkX4AIsH-6.jpg",
    },
    {
      nombre: "Talvez no funcioná en burros",
      imagen:
        "https://64.media.tumblr.com/d23ef540da987a6e96a9006678542a46/tumblr_pkm53zhRDb1wv3ksm_1280.png",
    },
    {
      nombre: "Vaya, eso explica muchas cosas",
      imagen: "https://i.ytimg.com/vi/8MpwNkyDQ8c/maxresdefault.jpg",
    },
    {
      nombre: "Doy clases los jueves, no cobro mucho",
      imagen:
        "https://static.wikia.nocookie.net/a3165201-a4cc-4ec7-86ae-b31777ac47a9",
    },
    {
      nombre: "Toma todo mi dinero",
      imagen: "https://media.makeameme.org/created/toma-todo-mi-9bfd2b3bd9.jpg",
    },
    {
      nombre: "Khe veo, un rival xd",
      imagen: "https://i.ytimg.com/vi/Kxa05P5WPDI/maxresdefault.jpg",
    },
    {
      nombre: "Podria ser el fin del Hombre Araña",
      imagen:
        "https://i.postimg.cc/Y0tFkDch/podria-ser-el-fin-del-hombre-arana01576794029.jpg",
    },
    {
      nombre: "Solo; solin, solito",
      imagen:
        "https://i.pinimg.com/564x/eb/87/e4/eb87e4ef27ca3209f7681bd253b3c5aa.jpg",
    },
    {
      nombre: "Pero que ven mis oidos mano",
      imagen: "https://pbs.twimg.com/media/EXKgHVPXQAAr_fx.jpg",
    },
    {
      nombre: "desde aquel dia, algo cambio dentro de lotso",
      imagen:
        "https://i.pinimg.com/564x/06/91/0a/06910a63312b0fa039540dbc6df8a4f5.jpg",
    },
    {
      nombre: "ya nos exhibiste",
      imagen: "https://i.ytimg.com/vi/Ni4A-6hF4wA/maxresdefault.jpg",
    },
  ];

  const buscador = document.getElementById("buscador");
  const resultado = document.getElementById("resultado");

  buscador.addEventListener("keyup", (e) => {
    resultado.innerHTML = "";
    const nuevoArray = memes.filter((element) => {
      return element.nombre
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    nuevoArray.map((element) => {
      resultado.innerHTML += `
      <div class="meme-container">
        <figure class="meme-img-container">
        <img src="${element.imagen}" class="meme-img" alt="${element.nombre}">
        </figure>
        <div class="meme-info-container">
          <h5 class="meme-title">${element.nombre}</h5>
            <a href="" class="meme-boton">Ver meme</a>
        </div>
      </div>
      `;
    });
  });
};

document.addEventListener("DOMContentLoaded", documentReady);
