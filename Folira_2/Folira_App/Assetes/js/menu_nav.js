// Seleccionar elementos
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");
var nameUser = document.getElementById("name_move");
var Foto_move = document.getElementById("Foto_move");
var nav_moved = document.getElementById("nav_moved");
var item_var = document.getElementById("item-nav");
var main = document.getElementById("main_move");

// Función para abrir y cerrar el menú
function open_close_menu() {
  body.classList.toggle("body_move");
  side_menu.classList.toggle("menu__side_move");
  nameUser.classList.toggle("name_move_trasparent");
  Foto_move.classList.toggle("foto_move");
  nav_moved.classList.toggle("nav_move");
  item_var.classList.toggle("center-item-move");
}

// Agregar evento de click al botón "Abrir/Cerrar menú"
btn_open.addEventListener("click", open_close_menu);

// Ocultar menú al recargar la página si el ancho de la pantalla es menor a 760px
if (window.innerWidth < 760) {
  body.classList.add("body_move");
  side_menu.classList.add("menu__side_move");
  FotoUser.classList.add("foto");
  nav_moved.classList.add("nav-move");
  nameUser.classList.add("name_move");
  
}

// Hacer que el menú sea responsivo
window.addEventListener("resize", function() {
  const isLargeScreen = window.innerWidth > 760;

  if (isLargeScreen) {
    body.classList.remove("body_move");
    side_menu.classList.remove("menu__side_move");
    nav_moved.classList.remove("nav-move");
    FotoUser.classList.remove("foto");
    nameUser.classList.remove("name");
    FotoUser.classList.add("foto_move");
    
  } else {
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
    nav_moved.classList.add("nav_move");
    nameUser.classList.add("name_move_trasparent");
    
  }
});