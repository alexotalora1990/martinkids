


function pesoCol(amount) {
  return amount.toLocaleString("es-ES", { style: "currency", currency: "COP" });
}

document.addEventListener("DOMContentLoaded", () => {
    const navMenu = document.querySelector(".navMenu");
  const carrito = document.querySelector(".carrito");
  const carritoMenu = document.querySelector(".carritoMenu");
  
  carrito.addEventListener("click", () => {
    carritoMenu.classList.toggle("active");
    if (carritoMenu.classList.contains("active")) {
        carrito.setAttribute("aria-label", "Cerrar Carrito");
    } else {
        carrito.setAttribute("aria-label", "Abrir Carrito");
    }

});



  pintar();
});

let articulos = [
  {
    id: 1,
    img: "./png/coche.png",
    nombre: "Coche-1 ",
    vendedor: "Brayan",
    precio: 300000,
    promo: 240000,
  },
  {
    id: 2,
    img: "./png/cocheGris.png",
    nombre: "Coche-2 ",
    vendedor: "Diana",
    precio: 700000,
    promo: 600000,
  },
  {
    id: 3,
    img: "./png/cocherojo.png",
    nombre: "Coche Moises",
    vendedor: "Brayan",
    precio: 650000,
    promo: 500000,
  },
  {
    id: 4,
    img: "./png/cocheRosa.png",
    nombre: "Coche Moises",
    vendedor: "Brayan",
    precio: 650000,
    promo: 500000,
  },
  {
    id: 5,
    img: "./png/comedor2en1.png",
    nombre: "Comedor 2 en 1",
    vendedor: "Brayan",
    precio: 650000,
    promo: 500000,
  },
  {
    id: 6,
    img: "./png/comedorcompacto.png",
    nombre: "Comedor Comp",
    vendedor: "Brayan",
    precio: 650000,
    promo: 500000,
  },
  {
    id: 7,
    img: "./png/comedorRosa.png",
    nombre: "Comedor Rosa",
    vendedor: "Brayan",
    precio: 650000,
    promo: 500000,
  },
  {
    id: 8,
    img: "./png/comedorVerde.png",
    nombre: "Comedor Verde",
    vendedor: "Brayan",
    precio: 650000,
    promo: 500000,
  },
  {
    id: 9,
    img: "./png/cunaBlanca.png",
    nombre: "Cuna Blanca",
    vendedor: "Brayan",
    precio: 650000,
    promo: 500000,
  },
  {
    id: 10,
    img: "./png/cunaGris.png",
    nombre: "Cuna Gris",
    vendedor: "Brayan",
    precio: 650000,
    promo: 500000,
  },
  {
    id: 11,
    img: "./png/cunaRosa.png",
    nombre: "Cuna Rosa",
    vendedor: "Brayan",
    precio: 650000,
    promo: 500000,
  },

  {
    id: 12,
    img: "./png/cunaVerde.png",
    nombre: "Cuna Verde",
    vendedor: "Brayan",
    precio: 650000,
    promo: 500000,
  },


];
let carrito = [];


function pintar() {
  let fragment = document.createDocumentFragment();
  articulos.forEach((item, index) => {
    let div = document.createElement("div");
    div.classList.add("contenedor");
    let div2 = document.createElement("div");
    div2.classList.add("texto");
    let img = document.createElement("img");
    img.src = item.img;
    img.classList.add("imagen");
    let vendedor = document.createElement("p")
    vendedor.textContent = item.vendedor
    let h2 = document.createElement("h2");
    h2.textContent = item.nombre;
    h2.classList.add("h2");
    let precio = document.createElement("p");
    precio.textContent = pesoCol(item.precio);
    precio.classList.add("precio");
    let promo = document.createElement("p");
    promo.textContent = pesoCol(item.promo);
    promo.classList.add("promo");
    let estrellas = document.createElement("div");
    estrellas.classList.add("estrellas");
    let estrella1 = document.createElement("i")
    estrella1.classList.add("fas", "fa-star")
    let estrella2 = document.createElement("i");
    estrella2.classList.add("fas", "fa-star")
    let estrella3 = document.createElement("i");
    estrella3.classList.add("fas", "fa-star")
    let estrella4 = document.createElement("i");
    estrella4.classList.add("fas", "fa-star-half-alt")
    let estrella5 = document.createElement("i");
    estrella5.classList.add("far", "fa-star")

    let button = document.createElement("button");
    button.textContent = "agregar al carrito";
    button.classList.add("boton");
    button.addEventListener("click", () => {
      agregarTabla(item);

    });

    div.appendChild(img);
    div.appendChild(div2);
    div2.appendChild(h2);
    div2.appendChild(vendedor);
    div2.appendChild(estrellas)
    estrellas.appendChild(estrella1)
    estrellas.appendChild(estrella2)
    estrellas.appendChild(estrella3)
    estrellas.appendChild(estrella4)
    estrellas.appendChild(estrella5)
    div2.appendChild(precio);
    div2.appendChild(promo);
    div2.appendChild(button);
    fragment.appendChild(div);
  });
  document.getElementById("container").appendChild(fragment);

}
function calcularTotalCarrito(){
let total= carrito.reduce((suma, item)=>suma + item.precioTotal, 0);
return total;
}

function agregarTabla(item) {
  const objeto = carrito.find((articulo) => articulo.id === item.id)
  if (objeto) {
      objeto.cantidad += 1
      objeto.precioTotal = objeto.precioTotal * objeto.cantidad; 
  } else {
      let objetos = {
          id: item.id,
          img: item.img,
          nombre: item.nombre,
          promo: item.promo,
          cantidad: 1,
          precioTotal: item.promo
      }
      carrito.push(objetos)
  }
  document.getElementById("carritoTabla").innerHTML = "";
  pintarCarrito()
}
function pintarCarrito() {
  let frag = document.createDocumentFragment();

  carrito.forEach((item, index) => {
      let tr = document.createElement("tr")
      let timagen = document.createElement("td");
      let imagen = document.createElement("img");
      imagen.src = item.img;
      timagen.appendChild(imagen);
      imagen.classList.add("prev");
      let tnombre = document.createElement("td");
      tnombre.textContent = item.nombre;
      let tprecio = document.createElement("td");
      tprecio.textContent = pesoCol(item.precioTotal);
      let tcantidad = document.createElement("td");
      tcantidad.textContent = item.cantidad;
      let tvaciar = document.createElement("td");
      let boton = document.createElement("button");
      boton.textContent = "Eliminar";
      boton.classList.add("botonele");
      boton.addEventListener("click", () => {
          borrar(index);
      })
      tr.appendChild(timagen);
      tr.appendChild(tnombre);
      tr.appendChild(tprecio);
      tr.appendChild(tcantidad);
      tr.appendChild(tvaciar);
      tvaciar.appendChild(boton);
      frag.appendChild(tr);

  })

  document.getElementById("carritoTabla").appendChild(frag);
  const totalElement = document.getElementById("ptotal");
  totalElement.textContent = pesoCol(calcularTotalCarrito());
  
}

function borrar(i) {
  let index = i;
  carrito.splice(index, 1);
  document.getElementById("carritoTabla").innerHTML = "";
  pintarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  document.getElementById("carritoTabla").innerHTML = "";
  pintarCarrito();
}
